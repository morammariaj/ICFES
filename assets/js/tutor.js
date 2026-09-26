/**
 * TUTOR.JS - MASTERCLASSES & GRAPH INTERPRETATION TUTOR
 */

const TutorModule = {
  currentCategory: 'all',
  searchQuery: '',

  init() {
    this.renderGuides();
    this.setupListeners();
  },

  setupListeners() {
    // Search input
    const searchInput = document.getElementById('tutorSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderGuides();
      });
    }

    // Category pills
    document.querySelectorAll('[data-tutor-category]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-tutor-category]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentCategory = btn.getAttribute('data-tutor-category');
        this.renderGuides();
      });
    });
  },

  renderGuides() {
    const container = document.getElementById('tutorGuidesContainer');
    if (!container) return;
    container.innerHTML = '';

    let list = STUDY_GUIDES_DATA || [];

    if (this.currentCategory !== 'all') {
      list = list.filter(g => g.category.toLowerCase().trim().includes(this.currentCategory.toLowerCase().trim()));
    }

    if (this.searchQuery) {
      list = list.filter(g => 
        g.title.toLowerCase().includes(this.searchQuery) ||
        g.subtitle.toLowerCase().includes(this.searchQuery) ||
        g.summary.toLowerCase().includes(this.searchQuery)
      );
    }

    if (list.length === 0) {
      container.innerHTML = '<div class="col-12 text-center text-muted py-5">No se encontraron temas con esos criterios de búsqueda.</div>';
      return;
    }

    list.forEach(guide => {
      const col = document.createElement('div');
      col.className = 'col-md-6 col-lg-4';
      col.innerHTML = `
        <div class="card h-100 m3-card m3-card-elevated m3-card-interactive p-4 d-flex flex-column justify-content-between" onclick="TutorModule.openGuide('${guide.id}')">
          <div>
            <div class="d-flex align-items-center justify-content-between mb-3">
              <span class="badge bg-${guide.badgeColor || 'primary'} rounded-pill">${guide.badge || guide.category}</span>
              <i class="bi ${guide.icon || 'bi-book'} text-primary fs-4"></i>
            </div>
            <h5 class="fw-bold mb-2">${guide.title}</h5>
            <p class="text-secondary small mb-3">${guide.subtitle}</p>
            <p class="text-muted small">${guide.summary}</p>
          </div>
          <div class="pt-3 border-top d-flex align-items-center justify-content-between">
            <span class="text-primary fw-semibold small">Explorar lección completa</span>
            <i class="bi bi-arrow-right text-primary"></i>
          </div>
        </div>
      `;
      container.appendChild(col);
    });
  },

  openGuide(guideId) {
    const guide = STUDY_GUIDES_DATA.find(g => g.id === guideId);
    if (!guide) return;

    const modalTitle = document.getElementById('guideModalTitle');
    const modalCategory = document.getElementById('guideModalCategory');
    const modalBody = document.getElementById('guideModalBody');
    const practiceBtn = document.getElementById('guideModalPracticeBtn');
    const guideModalEl = document.getElementById('guideModal');

    if (modalTitle) modalTitle.textContent = guide.title;
    if (modalCategory) modalCategory.textContent = guide.category;

    if (modalBody) {
      let html = `
        <div class="mb-4">
          <p class="lead fs-6 text-secondary mb-3">${guide.subtitle}</p>
          <div class="alert alert-secondary border-0 rounded-4 small p-3">${guide.summary}</div>
        </div>
        <div class="guide-content">
      `;

      guide.sections.forEach(sec => {
        html += `
          <div class="mb-4">
            <h5 class="fw-bold text-dark border-bottom pb-2 mb-3">${sec.heading}</h5>
            <div>${sec.content}</div>
          </div>
        `;
      });

      html += `</div>`;
      modalBody.innerHTML = html;
    }

    if (practiceBtn) {
      practiceBtn.onclick = () => {
        const modal = bootstrap.Modal.getOrCreateInstance(guideModalEl);
        modal.hide();
        // Map guide to exam subject
        let sub = 'matematicas';
        if (guide.id.includes('graficos')) sub = 'graficos';
        else if (guide.id.includes('lectura')) sub = 'lectura';
        else if (guide.id.includes('ciencias')) sub = 'naturales';
        else if (guide.id.includes('sociales')) sub = 'sociales';
        else if (guide.id.includes('ingles')) sub = 'ingles';

        ExamEngine.start(sub === 'graficos' ? 'graficos' : 'subject', sub);
      };
    }

    const modal = bootstrap.Modal.getOrCreateInstance(guideModalEl);
    modal.show();
  }
};
