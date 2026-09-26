/**
 * ANALYTICS.JS - PERFORMANCE DASHBOARD & CHART.JS INTEGRATION
 */

const AnalyticsModule = {
  radarChartInstance: null,
  barChartInstance: null,
  currentResult: null,

  init() {
    this.setupReviewFilters();
  },

  showResults(examResult) {
    this.currentResult = examResult;
    this.renderDashboard();
  },

  renderDashboard() {
    const result = this.currentResult || (AppState.examHistory.length > 0 ? AppState.examHistory[0] : null);
    const noResultsEl = document.getElementById('analyticsNoData');
    const contentEl = document.getElementById('analyticsContent');

    if (!result) {
      if (noResultsEl) noResultsEl.classList.remove('d-none');
      if (contentEl) contentEl.classList.add('d-none');
      return;
    }

    if (noResultsEl) noResultsEl.classList.add('d-none');
    if (contentEl) contentEl.classList.remove('d-none');

    // Global Score Counter & Gauge
    const globalScoreEl = document.getElementById('analyticsGlobalScore');
    if (globalScoreEl) globalScoreEl.textContent = result.globalScore;

    const targetDiffEl = document.getElementById('analyticsTargetDiff');
    if (targetDiffEl) {
      const diff = result.globalScore - AppState.user.targetScore;
      targetDiffEl.innerHTML = diff >= 0
        ? `<span class="badge bg-success-subtle text-success border border-success"><i class="bi bi-arrow-up-circle-fill me-1"></i>+${diff} sobre tu meta (${AppState.user.targetScore})</span>`
        : `<span class="badge bg-warning-subtle text-warning-emphasis border border-warning"><i class="bi bi-arrow-down-circle-fill me-1"></i>${diff} para alcanzar tu meta (${AppState.user.targetScore})</span>`;
    }

    // Component score bars
    this.renderComponentScores(result.componentScores, result.performanceLevels);

    // Render Charts
    this.renderRadarChart(result.componentScores);
    this.renderBarChart(result.componentScores);

    // Diagnostics: Strengths & Weaknesses
    this.renderDiagnostics(result.componentScores);

    // Admission & Scholarships chances
    this.renderAdmissionEstimates(result.globalScore);

    // Question review list
    this.renderQuestionReview(result.questionReview);
  },

  renderComponentScores(scores, levels) {
    const container = document.getElementById('analyticsComponentCards');
    if (!container) return;

    const subjectMeta = {
      matematicas: { name: 'Matemáticas', icon: 'bi-calculator', color: 'primary' },
      lectura: { name: 'Lectura Crítica', icon: 'bi-book-half', color: 'success' },
      naturales: { name: 'Ciencias Naturales', icon: 'bi-radioactive', color: 'warning' },
      sociales: { name: 'Sociales y Ciudadanas', icon: 'bi-people-fill', color: 'info' },
      ingles: { name: 'Inglés', icon: 'bi-translate', color: 'secondary' }
    };

    container.innerHTML = '';
    Object.keys(scores).forEach(sub => {
      const meta = subjectMeta[sub];
      if (!meta) return;
      const score = scores[sub];
      const level = levels ? levels[sub] : 2;

      const card = document.createElement('div');
      card.className = 'col-sm-6 col-lg-4';
      card.innerHTML = `
        <div class="card h-100 border-0 shadow-sm rounded-4 p-3 bg-light">
          <div class="d-flex align-items-center justify-content-between mb-2">
            <span class="fw-bold text-${meta.color}"><i class="bi ${meta.icon} me-2"></i>${meta.name}</span>
            <span class="badge bg-${meta.color} rounded-pill">Nivel ${level}</span>
          </div>
          <div class="d-flex align-items-baseline gap-2 mb-2">
            <h3 class="fw-bold mb-0">${score}</h3>
            <span class="text-muted small">/ 100 pts</span>
          </div>
          <div class="progress rounded-pill" style="height: 8px;">
            <div class="progress-bar bg-${meta.color}" style="width: ${score}%;"></div>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  },

  renderRadarChart(scores) {
    const ctx = document.getElementById('analyticsRadarChart');
    if (!ctx) return;

    if (this.radarChartInstance) {
      this.radarChartInstance.destroy();
    }

    const isDark = AppState.theme === 'dark';
    const textColor = isDark ? '#cbd5e1' : '#475569';
    const gridColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)';

    this.radarChartInstance = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Matemáticas', 'Lectura Crítica', 'Ciencias Naturales', 'Sociales', 'Inglés'],
        datasets: [
          {
            label: 'Tu Puntaje',
            data: [
              scores.matematicas || 0,
              scores.lectura || 0,
              scores.naturales || 0,
              scores.sociales || 0,
              scores.ingles || 0
            ],
            backgroundColor: 'rgba(79, 70, 229, 0.25)',
            borderColor: '#4f46e5',
            pointBackgroundColor: '#4f46e5',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#4f46e5',
            borderWidth: 2
          },
          {
            label: 'Promedio Nacional (Referencia)',
            data: [50, 52, 49, 48, 50],
            backgroundColor: 'rgba(148, 163, 184, 0.15)',
            borderColor: '#94a3b8',
            borderDash: [4, 4],
            pointBackgroundColor: '#94a3b8',
            borderWidth: 1.5
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: { color: gridColor },
            grid: { color: gridColor },
            pointLabels: {
              color: textColor,
              font: { family: 'Plus Jakarta Sans', weight: '600', size: 11 }
            },
            ticks: {
              backdropColor: 'transparent',
              color: textColor,
              stepSize: 20
            },
            min: 0,
            max: 100
          }
        },
        plugins: {
          legend: {
            position: 'bottom',
            labels: { color: textColor, font: { family: 'Plus Jakarta Sans', weight: '600' } }
          }
        }
      }
    });
  },

  renderBarChart(scores) {
    const ctx = document.getElementById('analyticsBarChart');
    if (!ctx) return;

    if (this.barChartInstance) {
      this.barChartInstance.destroy();
    }

    const isDark = AppState.theme === 'dark';
    const textColor = isDark ? '#cbd5e1' : '#475569';
    const gridColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';

    this.barChartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Matemáticas', 'Lectura', 'Naturales', 'Sociales', 'Inglés'],
        datasets: [{
          label: 'Puntaje por Componente (0-100)',
          data: [
            scores.matematicas || 0,
            scores.lectura || 0,
            scores.naturales || 0,
            scores.sociales || 0,
            scores.ingles || 0
          ],
          backgroundColor: [
            '#4f46e5',
            '#10b981',
            '#f59e0b',
            '#0284c7',
            '#64748b'
          ],
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: textColor, font: { family: 'Plus Jakarta Sans', weight: '600' } }
          },
          y: {
            grid: { color: gridColor },
            ticks: { color: textColor },
            min: 0,
            max: 100
          }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  },

  refreshChartsTheme() {
    if (this.currentResult) {
      this.renderRadarChart(this.currentResult.componentScores);
      this.renderBarChart(this.currentResult.componentScores);
    }
  },

  renderDiagnostics(scores) {
    const strengthsEl = document.getElementById('analyticsStrengthsList');
    const weaknessesEl = document.getElementById('analyticsWeaknessesList');
    if (!strengthsEl || !weaknessesEl) return;

    strengthsEl.innerHTML = '';
    weaknessesEl.innerHTML = '';

    const subjectLabels = {
      matematicas: 'Matemáticas y Razonamiento Cuantitativo',
      lectura: 'Lectura Crítica y Análisis Filosófico',
      naturales: 'Ciencias Naturales (Física, Química, Biología)',
      sociales: 'Sociales, Historia y Constitución Política',
      ingles: 'Comprensión y Gramática en Inglés'
    };

    const studyGuideLinks = {
      matematicas: 'guia-matematicas',
      lectura: 'guia-lectura',
      naturales: 'guia-ciencias',
      sociales: 'guia-sociales',
      ingles: 'guia-ingles'
    };

    let hasStrength = false;
    let hasWeakness = false;

    Object.keys(scores).forEach(sub => {
      const score = scores[sub];
      const label = subjectLabels[sub] || sub;

      if (score >= 65) {
        hasStrength = true;
        const li = document.createElement('li');
        li.className = 'mb-2 text-success-emphasis';
        li.innerHTML = `<b>${label}:</b> Puntaje destacado (${score} pts). Mantén tu ritmo de práctica con simulacros contrarreloj.`;
        strengthsEl.appendChild(li);
      } else {
        hasWeakness = true;
        const li = document.createElement('li');
        li.className = 'mb-2 text-danger-emphasis';
        li.innerHTML = `
          <b>${label}:</b> Necesitas reforzar (${score} pts). 
          <a href="#" class="text-primary fw-semibold" onclick="TutorModule.openGuide('${studyGuideLinks[sub]}'); return false;">
            Ver Clase de Tutor <i class="bi bi-arrow-right-short"></i>
          </a>
        `;
        weaknessesEl.appendChild(li);
      }
    });

    if (!hasStrength) {
      strengthsEl.innerHTML = '<li class="text-muted">Continúa realizando simulacros para identificar tus áreas de mayor dominio.</li>';
    }
    if (!hasWeakness) {
      weaknessesEl.innerHTML = '<li class="text-success fw-bold">¡Extraordinario! No presentas debilidades críticas en ningún componente evaluado.</li>';
    }
  },

  renderAdmissionEstimates(globalScore) {
    const badgeEl = document.getElementById('analyticsAdmissionBadge');
    const descEl = document.getElementById('analyticsAdmissionDesc');
    if (!badgeEl || !descEl) return;

    if (globalScore >= 380) {
      badgeEl.className = 'badge bg-success rounded-pill px-3 py-2';
      badgeEl.textContent = 'Rango Sobresaliente (Top 1% Nacional)';
      descEl.innerHTML = 'Con este puntaje tienes altísima probabilidad de admisión directa a carreras de altísima demanda (Medicina, Derecho, Ingenierías de alta exigencia) en la <b>Universidad Nacional (UNAL)</b>, <b>Universidad de Antioquia</b>, <b>UIS</b>, y aspirar a <b>Distinción Andrés Bello</b> y becas completas.';
    } else if (globalScore >= 320) {
      badgeEl.className = 'badge bg-primary rounded-pill px-3 py-2';
      badgeEl.textContent = 'Rango Muy Competitivo (Top 10%)';
      descEl.innerHTML = 'Perfil competitivo para la gran mayoría de carreras universitarias en Colombia y convocatorias de becas y subsidios de matrícula cero / Generación E.';
    } else if (globalScore >= 260) {
      badgeEl.className = 'badge bg-warning text-dark rounded-pill px-3 py-2';
      badgeEl.textContent = 'Rango Promedio Superior';
      descEl.innerHTML = 'Estás por encima del promedio nacional (250 pts). Enfócate en las 2 materias que tienes por debajo de 60 para subir tu puntaje global a más de 340.';
    } else {
      badgeEl.className = 'badge bg-secondary rounded-pill px-3 py-2';
      badgeEl.textContent = 'Rango en Desarrollo';
      descEl.innerHTML = 'Puntaje en etapa inicial. Te recomendamos estudiar los módulos del Tutor Virtual de la app comenzando por el <b>Taller de Gráficos ICFES</b> y hacer prácticas rápidas de 10 preguntas a diario.';
    }
  },

  setupReviewFilters() {
    document.querySelectorAll('[data-review-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-review-filter]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-review-filter');
        this.filterReviewQuestions(filter);
      });
    });
  },

  filterReviewQuestions(filter) {
    if (!this.currentResult) return;
    let list = this.currentResult.questionReview || [];

    if (filter === 'correct') {
      list = list.filter(item => item.isCorrect);
    } else if (filter === 'incorrect') {
      list = list.filter(item => !item.isCorrect);
    }

    this.renderQuestionReview(list);
  },

  renderQuestionReview(reviewList) {
    const container = document.getElementById('analyticsReviewList');
    if (!container) return;
    container.innerHTML = '';

    if (!reviewList || reviewList.length === 0) {
      container.innerHTML = '<div class="text-center text-muted py-4">No hay preguntas que coincidan con este filtro.</div>';
      return;
    }

    reviewList.forEach(item => {
      const q = item.question;
      const card = document.createElement('div');
      card.className = `card border-0 shadow-sm rounded-4 p-3 mb-3 ${item.isCorrect ? 'bg-light' : 'bg-light border border-danger border-start border-4'}`;
      
      card.innerHTML = `
        <div class="d-flex align-items-center justify-content-between mb-2">
          <span class="badge ${item.isCorrect ? 'bg-success' : 'bg-danger'} rounded-pill">
            <i class="bi ${item.isCorrect ? 'bi-check-lg' : 'bi-x-lg'} me-1"></i>Pregunta ${item.index}
          </span>
          <span class="badge bg-secondary-subtle text-secondary">${q.subtopic || q.subject}</span>
        </div>
        <p class="fw-semibold mb-2">${q.question.replace(/\n/g, '<br>')}</p>
        ${q.diagram ? `<div class="my-2">${q.diagram}</div>` : ''}
        <div class="row g-2 mb-2 small">
          <div class="col-6">
            <div class="p-2 rounded ${item.isCorrect ? 'bg-success-subtle text-success-emphasis' : 'bg-danger-subtle text-danger-emphasis'}">
              <b>Tu respuesta:</b> (${item.userAnswer})
            </div>
          </div>
          <div class="col-6">
            <div class="p-2 rounded bg-success-subtle text-success-emphasis">
              <b>Clave correcta:</b> (${q.correct})
            </div>
          </div>
        </div>
        <div class="p-3 bg-white rounded-3 border small text-secondary">
          <div class="fw-bold text-dark mb-1"><i class="bi bi-info-circle-fill text-primary me-1"></i>Explicación Oficial:</div>
          ${q.explanation}
          ${q.tip ? `<div class="mt-2 pt-2 border-top small text-primary fw-semibold"><i class="bi bi-lightbulb-fill text-warning me-1"></i>${q.tip}</div>` : ''}
        </div>
      `;
      container.appendChild(card);
    });
  }
};
