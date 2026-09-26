/**
 * APP.JS - CORE STATE, ROUTING & PWA MANAGER
 */

const AppState = {
  user: {
    name: 'Estudiante Saber 11',
    targetScore: 400,
    career: 'Pregrado Universitario'
  },
  currentView: 'home',
  examHistory: [],
  deferredPrompt: null,
  theme: 'light',
  stats: {
    simulationsCompleted: 0,
    highestScore: 0,
    totalAnswered: 0,
    accuracyRate: 0
  }
};

document.addEventListener('DOMContentLoaded', () => {
  loadStoredData();
  setupEventListeners();
  checkPwaInstallability();
  initTheme();
  renderHomeStats();
  ExamEngine.init();
  TutorModule.init();
  AnalyticsModule.init();
});

function loadStoredData() {
  const savedUser = localStorage.getItem('saber11_user');
  if (savedUser) {
    try {
      const parsed = JSON.parse(savedUser);
      AppState.user = {
        name: parsed.name || 'Estudiante Saber 11',
        targetScore: parseInt(parsed.targetScore) || 400,
        career: parsed.career || 'Pregrado Universitario'
      };
    } catch(e) {}
  }
  const savedHistory = localStorage.getItem('saber11_history');
  if (savedHistory) {
    try {
      AppState.examHistory = JSON.parse(savedHistory);
      recalculateStats();
    } catch(e) {}
  }
  const savedTheme = localStorage.getItem('saber11_theme');
  if (savedTheme) {
    AppState.theme = savedTheme;
  }
}

function saveUserData() {
  localStorage.setItem('saber11_user', JSON.stringify(AppState.user));
}

function saveHistoryData() {
  localStorage.setItem('saber11_history', JSON.stringify(AppState.examHistory));
  recalculateStats();
}

function recalculateStats() {
  if (!AppState.examHistory || AppState.examHistory.length === 0) return;
  AppState.stats.simulationsCompleted = AppState.examHistory.length;
  let maxScore = 0;
  let totalQ = 0;
  let totalCorrect = 0;
  AppState.examHistory.forEach(h => {
    if (h.globalScore > maxScore) maxScore = h.globalScore;
    totalQ += h.totalQuestions || 0;
    totalCorrect += h.correctCount || 0;
  });
  AppState.stats.highestScore = maxScore;
  AppState.stats.totalAnswered = totalQ;
  AppState.stats.accuracyRate = totalQ > 0 ? Math.round((totalCorrect / totalQ) * 100) : 0;
}

function initTheme() {
  document.documentElement.setAttribute('data-bs-theme', AppState.theme);
  const themeBtnIcon = document.getElementById('themeToggleIcon');
  if (themeBtnIcon) {
    themeBtnIcon.className = AppState.theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';
  }
}

function toggleTheme() {
  AppState.theme = AppState.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('saber11_theme', AppState.theme);
  initTheme();
  AnalyticsModule.refreshChartsTheme();
}

function switchView(viewName) {
  // If leaving active exam, auto-pause
  if (AppState.currentView === 'exam' && viewName !== 'exam' && ExamEngine.isActive && !ExamEngine.isPaused) {
    ExamEngine.togglePause();
    showToast('Simulacro pausado automáticamente.', 'info');
  }

  // If navigating to exam without an active test, start full exam
  if (viewName === 'exam' && !ExamEngine.isActive) {
    ExamEngine.start('full');
    return;
  }

  AppState.currentView = viewName;
  document.querySelectorAll('.app-view').forEach(view => {
    view.classList.add('d-none');
    view.classList.remove('animate-fade-in');
  });

  const activeView = document.getElementById(`view-${viewName}`);
  if (activeView) {
    activeView.classList.remove('d-none');
    activeView.classList.add('animate-fade-in');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update navigation items
  document.querySelectorAll('.bottom-nav-item, .sidebar-nav-item').forEach(item => {
    if (item.getAttribute('data-view') === viewName) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  if (viewName === 'home') {
    renderHomeStats();
  } else if (viewName === 'analytics') {
    AnalyticsModule.renderDashboard();
  }
}

function setupEventListeners() {
  // Navigation clicks
  document.querySelectorAll('[data-view-target]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const target = el.getAttribute('data-view-target');
      switchView(target);
    });
  });

  // Modal open: always sync current AppState into inputs
  const profileModalEl = document.getElementById('profileModal');
  if (profileModalEl) {
    profileModalEl.addEventListener('show.bs.modal', () => {
      const nameInput = document.getElementById('userNameInput');
      if (nameInput) nameInput.value = AppState.user.name;
      const targetScoreInput = document.getElementById('targetScoreInput');
      if (targetScoreInput) targetScoreInput.value = AppState.user.targetScore;
      const careerInput = document.getElementById('careerInput');
      if (careerInput) careerInput.value = AppState.user.career;
    });
  }

  // Profile save
  const profileForm = document.getElementById('profileForm');
  if (profileForm) {
    profileForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('userNameInput').value.trim();
      let targetScore = parseInt(document.getElementById('targetScoreInput').value);
      if (isNaN(targetScore) || targetScore < 100) targetScore = 100;
      if (targetScore > 500) targetScore = 500;
      const careerInput = document.getElementById('careerInput').value.trim();

      if (nameInput) AppState.user.name = nameInput;
      AppState.user.targetScore = targetScore;
      AppState.user.career = careerInput || 'Pregrado Universitario';

      saveUserData();
      renderHomeStats();
      if (AppState.currentView === 'analytics') {
        AnalyticsModule.renderDashboard();
      }

      showToast(`¡Meta de ${AppState.user.targetScore} pts guardada con éxito!`, 'success');
      const modalInstance = bootstrap.Modal.getOrCreateInstance(profileModalEl);
      modalInstance.hide();
    });
  }

  // Dark mode button
  const themeToggle = document.getElementById('themeToggleBtn');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
}

function renderHomeStats() {
  // 1. Sidebar profile
  const userSidebarName = document.getElementById('userSidebarName');
  if (userSidebarName) userSidebarName.textContent = AppState.user.name;

  const userSidebarGoal = document.getElementById('userSidebarGoal');
  if (userSidebarGoal) userSidebarGoal.textContent = `Meta: ${AppState.user.targetScore} pts`;

  // 2. Mobile top header badge
  const homeTargetScoreBadge = document.getElementById('homeTargetScoreBadge');
  if (homeTargetScoreBadge) homeTargetScoreBadge.textContent = AppState.user.targetScore;

  // 3. Home hero text
  const userNameDisplay = document.getElementById('userGreetingName');
  if (userNameDisplay) userNameDisplay.textContent = AppState.user.name;

  const userCareerBadge = document.getElementById('userCareerBadge');
  if (userCareerBadge) userCareerBadge.textContent = AppState.user.career;

  const targetScoreDisplay = document.getElementById('homeTargetScore');
  if (targetScoreDisplay) targetScoreDisplay.textContent = AppState.user.targetScore;

  // 4. Metrics
  const highestScoreDisplay = document.getElementById('homeHighestScore');
  if (highestScoreDisplay) highestScoreDisplay.textContent = AppState.stats.highestScore || '---';

  const completedCount = document.getElementById('homeCompletedCount');
  if (completedCount) completedCount.textContent = AppState.stats.simulationsCompleted;

  const accuracyDisplay = document.getElementById('homeAccuracyRate');
  if (accuracyDisplay) accuracyDisplay.textContent = `${AppState.stats.accuracyRate}%`;

  // 5. Pre-fill modal fields
  const nameInput = document.getElementById('userNameInput');
  if (nameInput) nameInput.value = AppState.user.name;
  const targetScoreInput = document.getElementById('targetScoreInput');
  if (targetScoreInput) targetScoreInput.value = AppState.user.targetScore;
  const careerInput = document.getElementById('careerInput');
  if (careerInput) careerInput.value = AppState.user.career;
}

function checkPwaInstallability() {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    AppState.deferredPrompt = e;
    const banner = document.getElementById('pwaInstallBanner');
    if (banner) banner.classList.remove('d-none');
  });

  const installBtn = document.getElementById('installPwaBtn');
  if (installBtn) {
    installBtn.addEventListener('click', async () => {
      if (AppState.deferredPrompt) {
        AppState.deferredPrompt.prompt();
        const { outcome } = await AppState.deferredPrompt.userChoice;
        if (outcome === 'accepted') {
          showToast('¡Gracias por instalar la app Saber 11!', 'success');
        }
        AppState.deferredPrompt = null;
        const banner = document.getElementById('pwaInstallBanner');
        if (banner) banner.classList.add('d-none');
      } else {
        const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('installHelpModal'));
        modal.show();
      }
    });
  }
}

function showToast(message, type = 'info') {
  const toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) return;

  const toastEl = document.createElement('div');
  toastEl.className = `toast align-items-center text-white bg-${type === 'success' ? 'success' : type === 'danger' ? 'danger' : type === 'warning' ? 'warning' : 'primary'} border-0 shadow-lg`;
  toastEl.setAttribute('role', 'alert');
  toastEl.setAttribute('aria-live', 'assertive');
  toastEl.setAttribute('aria-atomic', 'true');
  toastEl.innerHTML = `
    <div class="d-flex">
      <div class="toast-body fw-semibold py-3 px-3">
        <i class="bi ${type === 'success' ? 'bi-check-circle-fill' : 'bi-info-circle-fill'} me-2"></i>${message}
      </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
    </div>
  `;
  toastContainer.appendChild(toastEl);
  const bsToast = new bootstrap.Toast(toastEl, { delay: 3500 });
  bsToast.show();
  toastEl.addEventListener('hidden.bs.toast', () => toastEl.remove());
}
