/**
 * AUTH.JS - TEMPORARY CLIENT-SIDE ACCESS GATE
 *
 * TEMPORAL:
 * - The current credential is intentionally kept in the frontend because this
 *   project is static/GitHub Pages.
 * - The password is stored as a SHA-256 hash rather than plain text.
 * - This is NOT real security: anyone with repository/browser access can inspect
 *   the application. For the future, replace this module with a server/Auth
 *   provider using email + password without changing the login UI contract.
 */

const AuthService = (() => {
  const CONFIG = Object.freeze({
    username: 'mjmm',
    passwordSha256: '93548182b28f57dc085e62728fa21720a02b229d6c77aff9b4f010c0903710f3',
    sessionKey: 'icfes_auth_session_v1'
  });

  let initialized = false;

  async function sha256(value) {
    const data = new TextEncoder().encode(value);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash))
      .map(byte => byte.toString(16).padStart(2, '0'))
      .join('');
  }

  function isAuthenticated() {
    return sessionStorage.getItem(CONFIG.sessionKey) === 'authenticated';
  }

  function setAuthenticated(value) {
    if (value) {
      sessionStorage.setItem(CONFIG.sessionKey, 'authenticated');
    } else {
      sessionStorage.removeItem(CONFIG.sessionKey);
    }
  }

  function setBusy(busy) {
    const button = document.getElementById('loginSubmitBtn');
    if (!button) return;
    button.disabled = busy;
    button.innerHTML = busy
      ? '<span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>Verificando...'
      : '<i class="bi bi-box-arrow-in-right me-2"></i>Entrar';
  }

  function showLogin() {
    const gate = document.getElementById('loginGate');
    const appShell = document.getElementById('appShell');
    if (gate) gate.classList.remove('d-none');
    if (appShell) appShell.classList.add('app-auth-hidden');
    document.body.classList.add('auth-locked');

    const input = document.getElementById('loginUsername');
    if (input) setTimeout(() => input.focus(), 50);
  }

  function hideLogin() {
    const gate = document.getElementById('loginGate');
    const appShell = document.getElementById('appShell');
    if (gate) gate.classList.add('d-none');
    if (appShell) appShell.classList.remove('app-auth-hidden');
    document.body.classList.remove('auth-locked');
  }

  function showError(message) {
    const error = document.getElementById('loginError');
    if (!error) return;
    error.textContent = message;
    error.classList.remove('d-none');
  }

  function clearError() {
    const error = document.getElementById('loginError');
    if (error) {
      error.textContent = '';
      error.classList.add('d-none');
    }
  }

  async function login(username, password) {
    clearError();
    setBusy(true);

    try {
      const passwordHash = await sha256(password);
      const valid = username.trim() === CONFIG.username && passwordHash === CONFIG.passwordSha256;

      if (!valid) {
        showError('Usuario o contraseña incorrectos.');
        return false;
      }

      setAuthenticated(true);
      hideLogin();

      if (typeof window.initializeICFESApp === 'function') {
        window.initializeICFESApp();
      }

      return true;
    } catch (error) {
      console.error('Error de autenticación:', error);
      showError('No se pudo validar el acceso. Intenta nuevamente.');
      return false;
    } finally {
      setBusy(false);
    }
  }

  function logout() {
    setAuthenticated(false);

    // Stop an active exam before locking the application again.
    if (window.ExamEngine && ExamEngine.isActive) {
      try {
        if (ExamEngine.timerInterval) clearInterval(ExamEngine.timerInterval);
        ExamEngine.isActive = false;
      } catch (e) {}
    }

    showLogin();
    clearError();

    const form = document.getElementById('loginForm');
    if (form) form.reset();
  }

  function init() {
    if (initialized) return;
    initialized = true;

    const form = document.getElementById('loginForm');
    if (form) {
      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const username = document.getElementById('loginUsername')?.value || '';
        const password = document.getElementById('loginPassword')?.value || '';
        await login(username, password);
      });
    }

    document.querySelectorAll('[data-auth-logout]').forEach(button => {
      button.addEventListener('click', logout);
    });

    if (isAuthenticated()) {
      hideLogin();
      if (typeof window.initializeICFESApp === 'function') {
        window.initializeICFESApp();
      }
    } else {
      showLogin();
    }
  }

  return {
    init,
    login,
    logout,
    isAuthenticated
  };
})();

document.addEventListener('DOMContentLoaded', () => AuthService.init());
