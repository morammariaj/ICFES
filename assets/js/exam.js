/**
 * EXAM.JS - SABER 11 SIMULATION & PRACTICE ENGINE
 */

const ExamEngine = {
  mode: 'full', // 'full' | 'quick' | 'subject' | 'graficos'
  subject: null,
  questions: [],
  currentIndex: 0,
  userAnswers: {},
  flagged: new Set(),
  timerSeconds: 0,
  timerInterval: null,
  isPaused: false,
  instantFeedback: false,
  isActive: false,
  sessionNumber: 1,
  sessionBreakIndex: 120,

  init() {
    this.setupListeners();
  },

  setupListeners() {
    // Mode cards click from Home
    document.querySelectorAll('[data-start-exam]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const mode = el.getAttribute('data-start-exam');
        const subject = el.getAttribute('data-subject');
        this.start(mode, subject);
      });
    });

    // Navigation buttons
    const prevBtn = document.getElementById('examPrevBtn');
    if (prevBtn) prevBtn.addEventListener('click', () => this.prevQuestion());

    const nextBtn = document.getElementById('examNextBtn');
    if (nextBtn) nextBtn.addEventListener('click', () => this.nextQuestion());

    const flagBtn = document.getElementById('examFlagBtn');
    if (flagBtn) flagBtn.addEventListener('click', () => this.toggleFlag());

    const finishBtn = document.getElementById('examFinishBtn');
    if (finishBtn) finishBtn.addEventListener('click', () => this.confirmFinish());

    // Timer controls
    const pauseBtn = document.getElementById('examPauseBtn');
    if (pauseBtn) pauseBtn.addEventListener('click', () => this.togglePause());
  },

  start(mode = 'full', subject = null) {
    this.mode = mode;
    this.subject = subject;
    this.currentIndex = 0;
    this.userAnswers = {};
    this.flagged.clear();
    this.isPaused = false;
    this.isActive = true;
    this.sessionNumber = 1;
    this.sessionBreakIndex = 120;
    this.timedOut = false;

    // Filter questions
    let pool = [...QUESTIONS_DATA];
    if (mode === 'aux-socio' || mode === 'aux-clima') {
      const key = mode === 'aux-socio' ? 'socioeconomico' : 'clima';
      pool = (typeof AUXILIARY_QUESTIONS !== 'undefined' ? [...AUXILIARY_QUESTIONS[key]] : []);
      this.instantFeedback = false;
      this.timerSeconds = 30 * 60;
    } else if (mode === 'subject' && subject) {
      pool = pool.filter(q => q.subject === subject);
      this.instantFeedback = true;
      this.timerSeconds = pool.length * 120; // 2 min per question
    } else if (mode === 'graficos') {
      pool = pool.filter(q => q.subject === 'graficos' || (q.diagram && q.diagram.length > 0));
      this.instantFeedback = true;
      this.timerSeconds = pool.length * 120;
    } else if (mode === 'quick') {
      pool = this.shuffleArray(pool).slice(0, 10);
      this.instantFeedback = true;
      this.timerSeconds = 15 * 60; // 15 mins
    } else {
      // Simulacro completo: estructura estándar 2026 del ICFES.
      // Sesión 1: 25 Matemáticas + 41 Lectura + 25 Sociales + 29 Naturales = 120.
      // Sesión 2: 25 Matemáticas + 25 Sociales + 29 Naturales + 55 Inglés = 134.
      pool = this.buildCurrentFullPool();
      this.instantFeedback = false;
      this.timerSeconds = 4.5 * 3600;
    }

    if (pool.length === 0) {
      showToast('No hay preguntas disponibles para esta categoría aún.', 'warning');
      this.isActive = false;
      return;
    }

    // Cada intento recibe un orden nuevo de preguntas y de opciones.\n    this.questions = pool.map(q => this.randomizeQuestion(q));
    this.startTimer();
    switchView('exam');
    this.renderQuestion();
    this.renderBubbleSheet();
  },

  buildCurrentFullPool() {
    const blueprint = {
      matematicas: 50,
      lectura: 41,
      sociales: 50,
      naturales: 58,
      ingles: 55
    };
    const bySubject = {};
    Object.keys(blueprint).forEach(subject => {
      const available = QUESTIONS_DATA.filter(q => q.subject === subject);
      if (available.length < blueprint[subject]) {
        throw new Error('Banco insuficiente para ' + subject + ': ' + available.length + '/' + blueprint[subject]);
      }
      bySubject[subject] = this.shuffleArray(available).slice(0, blueprint[subject]);
    });

    const s1 = [
      ...this.shuffleArray(bySubject.matematicas.slice(0,25)),
      ...this.shuffleArray(bySubject.lectura),
      ...this.shuffleArray(bySubject.sociales.slice(0,25)),
      ...this.shuffleArray(bySubject.naturales.slice(0,29))
    ];
    const s2 = [
      ...this.shuffleArray(bySubject.matematicas.slice(25,50)),
      ...this.shuffleArray(bySubject.sociales.slice(25,50)),
      ...this.shuffleArray(bySubject.naturales.slice(29,58)),
      ...this.shuffleArray(bySubject.ingles)
    ];
    return [...s1, ...s2];
  },

  randomizeQuestion(question) {
    const copy = {
      ...question,
      options: Array.isArray(question.options) ? question.options.map(opt => ({ ...opt })) : []
    };
    if (copy.options.length > 1) {
      const correctText = copy.options.find(opt => opt.key === copy.correct)?.text;
      copy.options = this.shuffleArray(copy.options);
      copy.options.forEach((opt, index) => {
        opt.key = String.fromCharCode(65 + index);
      });
      copy.correct = copy.options.find(opt => opt.text === correctText)?.key || copy.correct;
    }
    return copy;
  },

  shuffleArray(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  },

  startTimer() {
    clearInterval(this.timerInterval);
    this.updateTimerDisplay();
    this.timerInterval = setInterval(() => {
      if (!this.isPaused) {
        if (this.timerSeconds > 0) {
          this.timerSeconds--;
          this.updateTimerDisplay();
        } else {
          clearInterval(this.timerInterval);
          this.timedOut = true;
          this.finish();
          showToast('¡Tiempo concluido! El intento se ha cerrado y las preguntas sin responder quedaron registradas.', 'warning');
        }
      }
    }, 1000);
  },

  updateTimerDisplay() {
    const timerEl = document.getElementById('examTimerDisplay');
    if (!timerEl) return;
    const hours = Math.floor(this.timerSeconds / 3600);
    const minutes = Math.floor((this.timerSeconds % 3600) / 60);
    const seconds = this.timerSeconds % 60;
    const pad = (n) => n.toString().padStart(2, '0');
    timerEl.textContent = `${hours > 0 ? pad(hours) + ':' : ''}${pad(minutes)}:${pad(seconds)}`;

    const timerBadge = document.getElementById('examTimerBadge');
    if (timerBadge) {
      if (this.timerSeconds <= 300) {
        timerBadge.className = 'timer-badge danger';
      } else if (this.timerSeconds <= 900) {
        timerBadge.className = 'timer-badge warning';
      } else {
        timerBadge.className = 'timer-badge';
      }
    }
  },

  togglePause() {
    this.isPaused = !this.isPaused;
    const pauseIcon = document.getElementById('examPauseIcon');
    if (pauseIcon) {
      pauseIcon.className = this.isPaused ? 'bi bi-play-fill' : 'bi bi-pause-fill';
    }
    const overlay = document.getElementById('examPauseOverlay');
    if (overlay) {
      if (this.isPaused) {
        overlay.classList.remove('d-none');
      } else {
        overlay.classList.add('d-none');
      }
    }
  },

  renderQuestion() {
    const q = this.questions[this.currentIndex];
    if (!q) return;

    // Badges
    const subjectBadge = document.getElementById('examSubjectBadge');
    if (subjectBadge) {
      const subjectNames = {
        matematicas: 'Matemáticas',
        lectura: 'Lectura Crítica',
        naturales: 'Ciencias Naturales',
        sociales: 'Sociales y Ciudadanas',
        ingles: 'Inglés',
        graficos: 'Taller de Gráficos',
        socioeconomico: 'Cuestionario socioeconómico',
        clima: 'Clima escolar'
      };
      subjectBadge.textContent = subjectNames[q.subject] || q.subject;
    }

    const sessionBadge = document.getElementById('examSessionBadge');
    if (sessionBadge) {
      if (this.mode === 'full') {
        sessionBadge.classList.remove('d-none');
        sessionBadge.textContent = `Sesión ${this.currentIndex < this.sessionBreakIndex ? 1 : 2}`;
      } else {
        sessionBadge.classList.add('d-none');
      }
    }

    const subtopicBadge = document.getElementById('examSubtopicBadge');
    if (subtopicBadge) subtopicBadge.textContent = q.subtopic || 'General';

    const competencyBadge = document.getElementById('examCompetencyBadge');
    if (competencyBadge) competencyBadge.textContent = q.competency || '';

    // Counter & progress bar
    const counter = document.getElementById('examQuestionCounter');
    if (counter) counter.textContent = `Pregunta ${this.currentIndex + 1} de ${this.questions.length}`;

    const progressBar = document.getElementById('examProgressBar');
    if (progressBar) {
      const pct = Math.round(((this.currentIndex + 1) / this.questions.length) * 100);
      progressBar.style.width = `${pct}%`;
    }

    // Context / Reading text
    const contextContainer = document.getElementById('examContextContainer');
    if (contextContainer) {
      if (q.context) {
        contextContainer.innerHTML = `<div class="p-3 bg-light rounded-4 border mb-3 text-secondary small">${q.context}</div>`;
        contextContainer.classList.remove('d-none');
      } else {
        contextContainer.innerHTML = '';
        contextContainer.classList.add('d-none');
      }
    }

    // Diagram / visual SVG
    const diagramContainer = document.getElementById('examDiagramContainer');
    if (diagramContainer) {
      if (q.diagram) {
        diagramContainer.innerHTML = q.diagram;
        diagramContainer.classList.remove('d-none');
      } else {
        diagramContainer.innerHTML = '';
        diagramContainer.classList.add('d-none');
      }
    }

    // Question statement
    const statementEl = document.getElementById('examQuestionStatement');
    if (statementEl) statementEl.innerHTML = q.question.replace(/\n/g, '<br>');

    // Options list
    const optionsContainer = document.getElementById('examOptionsContainer');
    if (optionsContainer) {
      optionsContainer.innerHTML = '';
      const selected = this.userAnswers[q.id];

      q.options.forEach(opt => {
        const optCard = document.createElement('div');
        optCard.className = `option-card ${selected === opt.key ? 'selected' : ''}`;
        
        // If instant feedback is active and user answered
        if (this.instantFeedback && selected) {
          if (opt.key === q.correct) {
            optCard.classList.add('correct');
          } else if (selected === opt.key && selected !== q.correct) {
            optCard.classList.add('incorrect');
          }
        }

        optCard.innerHTML = `
          <div class="option-letter">${opt.key}</div>
          <div class="option-text flex-grow-1 pt-1">${opt.text}</div>
        `;
        optCard.addEventListener('click', () => this.selectOption(opt.key));
        optionsContainer.appendChild(optCard);
      });
    }

    // Explanation container (for practice / instant mode)
    const explanationContainer = document.getElementById('examExplanationContainer');
    if (explanationContainer) {
      if (this.instantFeedback && this.userAnswers[q.id]) {
        explanationContainer.classList.remove('d-none');
        explanationContainer.innerHTML = `
          <div class="card border-0 shadow-sm rounded-4 p-3 ${this.userAnswers[q.id] === q.correct ? 'bg-success-subtle text-success-emphasis' : 'bg-danger-subtle text-danger-emphasis'} mb-3">
            <h6 class="fw-bold mb-2">
              <i class="bi ${this.userAnswers[q.id] === q.correct ? 'bi-check-circle-fill text-success' : 'bi-x-circle-fill text-danger'} me-2"></i>
              ${this.userAnswers[q.id] === q.correct ? '¡Correcto!' : `Incorrecto. La clave es la opción ${q.correct}`}
            </h6>
            <div class="small">${q.explanation}</div>
            ${q.tip ? `<div class="mt-2 pt-2 border-top border-secondary-subtle small fw-semibold"><i class="bi bi-lightbulb-fill text-warning me-1"></i>${q.tip}</div>` : ''}
          </div>
        `;
      } else {
        explanationContainer.classList.add('d-none');
        explanationContainer.innerHTML = '';
      }
    }

    // Flag button state
    const flagBtn = document.getElementById('examFlagBtn');
    if (flagBtn) {
      const isFlagged = this.flagged.has(q.id);
      flagBtn.innerHTML = `<i class="bi ${isFlagged ? 'bi-bookmark-star-fill text-warning' : 'bi-bookmark-star'} me-1"></i> ${isFlagged ? 'Marcada' : 'Marcar'}`;
    }

    // Prev / Next button state
    const prevBtn = document.getElementById('examPrevBtn');
    if (prevBtn) prevBtn.disabled = this.currentIndex === 0;

    const nextBtn = document.getElementById('examNextBtn');
    if (nextBtn) {
      nextBtn.innerHTML = this.currentIndex === this.questions.length - 1
        ? '<i class="bi bi-grid-3x3-gap-fill me-1"></i>Revisar Hoja'
        : 'Siguiente <i class="bi bi-arrow-right ms-1"></i>';
    }

    this.renderBubbleSheet();
  },

  selectOption(key) {
    const q = this.questions[this.currentIndex];
    if (!q) return;
    this.userAnswers[q.id] = key;
    this.renderQuestion();
  },

  toggleFlag() {
    const q = this.questions[this.currentIndex];
    if (!q) return;
    if (this.flagged.has(q.id)) {
      this.flagged.delete(q.id);
    } else {
      this.flagged.add(q.id);
    }
    this.renderQuestion();
  },

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      if (this.mode === 'full' && this.currentIndex === this.sessionBreakIndex && this.sessionNumber === 1) {
        this.sessionNumber = 2;
        this.timerSeconds = 4.5 * 3600;
        this.isPaused = true;
        const overlay = document.getElementById('examPauseOverlay');
        if (overlay) {
          overlay.innerHTML = '<i class="bi bi-cup-hot-fill text-warning display-3 mb-3"></i><h3 class="fw-bold mb-2">Fin de la sesión 1</h3><p class="text-muted mb-4">Has completado las 120 preguntas de la primera sesión. Tómate el descanso correspondiente y luego continúa con la sesión 2. El nuevo temporizador es de 4 h 30 min.</p><div><button class="btn btn-m3-primary" onclick="ExamEngine.togglePause()"><i class="bi bi-play-fill fs-5"></i> Iniciar sesión 2</button></div>';
          overlay.classList.remove('d-none');
        }
      }
      this.renderQuestion();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('bubbleSheetModal'));
      modal.show();
    }
  },

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.renderQuestion();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },

  jumpTo(index) {
    if (index >= 0 && index < this.questions.length) {
      this.currentIndex = index;
      this.renderQuestion();
      const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('bubbleSheetModal'));
      modal.hide();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },

  renderBubbleSheet() {
    const container = document.getElementById('bubbleSheetGrid');
    if (!container) return;
    container.innerHTML = '';

    this.questions.forEach((q, idx) => {
      const bubble = document.createElement('div');
      const isAnswered = !!this.userAnswers[q.id];
      const isFlagged = this.flagged.has(q.id);
      const isCurrent = idx === this.currentIndex;

      bubble.className = `q-bubble ${isAnswered ? 'answered' : ''} ${isFlagged ? 'flagged' : ''} ${isCurrent ? 'current' : ''}`;
      bubble.textContent = idx + 1;
      bubble.title = `Pregunta ${idx + 1}: ${isAnswered ? `Marcó (${this.userAnswers[q.id]})` : 'Sin responder'}`;
      bubble.addEventListener('click', () => this.jumpTo(idx));
      container.appendChild(bubble);
    });

    // Update counts
    const answeredCount = Object.keys(this.userAnswers).length;
    const totalCount = this.questions.length;
    const answeredEl = document.getElementById('bubbleSheetAnsweredCount');
    if (answeredEl) answeredEl.textContent = `${answeredCount} / ${totalCount} respondidas`;
  },

  confirmFinish() {
    const unanswered = this.questions.length - Object.keys(this.userAnswers).length;
    if (unanswered > 0) {
      if (confirm(`Aún tienes ${unanswered} preguntas sin responder. ¿Seguro que deseas finalizar y calificar ahora?`)) {
        this.finish();
      }
    } else {
      this.finish();
    }
  },

  finish() {
    this.isActive = false;
    clearInterval(this.timerInterval);

    if (this.mode === 'aux-socio' || this.mode === 'aux-clima') {
      const key = this.mode === 'aux-socio' ? 'socioeconomico' : 'clima';
      const historyKey = 'icfes_auxiliary_history_v1';
      const history = JSON.parse(localStorage.getItem(historyKey) || '[]');
      history.unshift({
        id: 'aux-' + Date.now(),
        date: new Date().toISOString(),
        type: key,
        totalQuestions: this.questions.length,
        answeredCount: Object.keys(this.userAnswers).length,
        answers: { ...this.userAnswers }
      });
      localStorage.setItem(historyKey, JSON.stringify(history.slice(0,20)));
      switchView('home');
      showToast('Cuestionario guardado. Sus respuestas no se califican ni afectan el puntaje.', 'info');
      return;
    }

    // Close any open modal
    const bubbleModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('bubbleSheetModal'));
    bubbleModal.hide();

    // Grade and calculate scores
    const results = this.grade();

    // Práctica Express: conserva las 10 preguntas y usa un resultado independiente
    // para no confundir el drill con un puntaje de simulacro completo.
    if (this.mode === 'quick') {
      const historyKey = 'icfes_quick_history_v1';
      const history = JSON.parse(localStorage.getItem(historyKey) || '[]');
      history.unshift(results);
      localStorage.setItem(historyKey, JSON.stringify(history.slice(0, 30)));
      AnalyticsModule.showResults(results);
      switchView('analytics');
      return;
    }

    AppState.examHistory.unshift(results);
    saveHistoryData();

    // Confetti celebration if high score
    if (results.globalScore >= 350 && typeof confetti === 'function') {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }

    AnalyticsModule.showResults(results);
    switchView('analytics');
  },

  grade() {
    const subjectStats = {
      matematicas: { correct: 0, total: 0 },
      lectura: { correct: 0, total: 0 },
      naturales: { correct: 0, total: 0 },
      sociales: { correct: 0, total: 0 },
      ingles: { correct: 0, total: 0 },
      graficos: { correct: 0, total: 0 }
    };

    let totalCorrect = 0;
    let answeredCount = 0;
    let unansweredCount = 0;
    const questionReview = [];

    this.questions.forEach((q, idx) => {
      const userKey = this.userAnswers[q.id];
      const answered = !!userKey;
      const isCorrect = answered && userKey === q.correct;
      if (answered) answeredCount++;
      else unansweredCount++;
      if (isCorrect) totalCorrect++;

      if (subjectStats[q.subject]) {
        subjectStats[q.subject].total++;
        if (isCorrect) subjectStats[q.subject].correct++;
      }

      questionReview.push({
        index: idx + 1,
        question: q,
        userAnswer: userKey || 'Sin responder',
        isCorrect: isCorrect,
        answered: answered,
        unansweredByTime: !answered && this.timedOut
      });
    });

    // Diagnóstico interno de entrenamiento. No reproduce la fórmula oficial del ICFES.
    const componentScores = {};
    const performanceLevels = {};
    ['matematicas', 'lectura', 'naturales', 'sociales', 'ingles'].forEach(sub => {
      const st = subjectStats[sub];
      const scaled = st.total > 0 ? Math.round((st.correct / st.total) * 100) : 0;
      componentScores[sub] = scaled;
      if (scaled < 40) performanceLevels[sub] = 1;
      else if (scaled < 60) performanceLevels[sub] = 2;
      else if (scaled < 80) performanceLevels[sub] = 3;
      else performanceLevels[sub] = 4;
    });

    const diagnostic = {};
    this.questions.forEach(q => {
      const userKey = this.userAnswers[q.id];
      const isCorrect = userKey === q.correct;
      const keys = [
        ['subtopic', q.subtopic || 'General'],
        ['competency', q.competency || 'General']
      ];
      keys.forEach(([kind, value]) => {
        const id = kind + ':' + value;
        if (!diagnostic[id]) diagnostic[id] = { kind, label: value, correct: 0, total: 0 };
        diagnostic[id].total++;
        if (userKey) diagnostic[id].answered++;
        else diagnostic[id].unanswered++;
        if (isCorrect) diagnostic[id].correct++;
      });
    });
    Object.values(diagnostic).forEach(item => {
      item.accuracyPct = item.answered > 0 ? Math.round((item.correct / item.answered) * 100) : 0;
      item.coveragePct = item.total > 0 ? Math.round((item.answered / item.total) * 100) : 0;
    });

    const accuracyPct = Math.round((totalCorrect / this.questions.length) * 100);
    const globalScore = this.mode === 'quick'
      ? accuracyPct
      : Math.round((totalCorrect / this.questions.length) * 500);

    return {
      id: (this.mode === 'quick' ? 'quick-' : 'sim-') + Date.now(),
      date: new Date().toISOString(),
      mode: this.mode,
      subject: this.subject,
      totalQuestions: this.questions.length,
      answeredCount,
      unansweredCount,
      incorrectCount: answeredCount - totalCorrect,
      timedOut: !!this.timedOut,
      correctCount: totalCorrect,
      accuracyPct,
      globalScore: globalScore,
      componentScores: componentScores,
      performanceLevels: performanceLevels,
      diagnostic: diagnostic,
      questionReview: questionReview
    };
  }
};
