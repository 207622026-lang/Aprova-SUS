// Componente de Modal Acessível Reutilizável
window.AppModal = {
  show: function(title, contentHtml, actionsHtml = "") {
    let modalEl = document.getElementById("app-modal-root");
    if (!modalEl) {
      modalEl = document.createElement("div");
      modalEl.id = "app-modal-root";
      document.body.appendChild(modalEl);
    }

    const icons = window.AppIcons;

    modalEl.innerHTML = `
      <div class="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity" onclick="window.AppModal.close()"></div>
        <div class="flex min-h-full items-center justify-center p-4">
          <div class="card relative w-full max-w-lg p-6 shadow-2xl border border-slate-200 dark:border-slate-700 animate-fade-in space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <h3 class="text-base font-bold text-slate-900 dark:text-white">${title}</h3>
              <button onclick="window.AppModal.close()" class="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                ${icons.render('x', 'w-5 h-5')}
              </button>
            </div>
            <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              ${contentHtml}
            </div>
            ${actionsHtml ? `
              <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-2">
                ${actionsHtml}
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    `;

    document.body.style.overflow = "hidden";
  },

  close: function() {
    const modalEl = document.getElementById("app-modal-root");
    if (modalEl) {
      modalEl.innerHTML = "";
    }
    document.body.style.overflow = "";
  }
};
