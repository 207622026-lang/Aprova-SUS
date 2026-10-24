// Orquestrador Principal e Roteador da Aplicação Aprova SUS
// Gerencia a navegação entre abas, renderização responsiva, menu mobile e alternância de temas.

(function() {
  window.AppRouter = {
    currentRoute: "dashboard",
    routeParams: {},

    routes: {
      dashboard: window.AppDashboard,
      courses: window.AppCourses,
      questions: window.AppQuestions,
      exam: window.AppExam,
      planner: window.AppPlanner,
      performance: window.AppPerformance,
      flashcards: window.AppFlashcards,
      official: window.AppOfficial
    },

    navigate: function(route, params = {}) {
      if (!this.routes[route]) {
        route = "dashboard";
      }

      this.currentRoute = route;
      this.routeParams = params;

      // Atualiza URL hash para permitir voltar/avançar no navegador
      window.location.hash = route;

      // Atualiza menu lateral e barra mobile
      this.updateNavigationUI();

      // Renderiza view no container principal
      const container = document.getElementById("main-content");
      if (container) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        this.routes[route].render(container, params);
      }

      // Fecha menu mobile caso esteja aberto
      this.closeMobileDrawer();
    },

    updateNavigationUI: function() {
      const links = document.querySelectorAll("[data-nav-route]");
      links.forEach(el => {
        const targetRoute = el.getAttribute("data-nav-route");
        const isActive = targetRoute === this.currentRoute;

        if (el.classList.contains("nav-item-desktop")) {
          if (isActive) {
            el.className = "nav-item-desktop flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-xs bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800 shadow-sm";
          } else {
            el.className = "nav-item-desktop flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-xs text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all";
          }
        } else if (el.classList.contains("nav-item-mobile-bottom")) {
          if (isActive) {
            el.className = "nav-item-mobile-bottom flex flex-col items-center gap-1 text-[10px] font-bold text-teal-600 dark:text-teal-400";
          } else {
            el.className = "nav-item-mobile-bottom flex flex-col items-center gap-1 text-[10px] font-medium text-slate-500 dark:text-slate-400";
          }
        }
      });
    },

    toggleMobileDrawer: function() {
      const drawer = document.getElementById("mobile-drawer");
      if (drawer) {
        drawer.classList.toggle("hidden");
      }
    },

    closeMobileDrawer: function() {
      const drawer = document.getElementById("mobile-drawer");
      if (drawer && !drawer.classList.contains("hidden")) {
        drawer.classList.add("hidden");
      }
    }
  };

  // Inicialização no carregamento da página
  document.addEventListener("DOMContentLoaded", function() {
    // 1. Aplica tema inicial
    window.AppStore.applyTheme();

    // 2. Renderiza ícones estáticos no layout (Sidebar e Header)
    const iconContainers = document.querySelectorAll("[data-icon]");
    iconContainers.forEach(el => {
      const iconName = el.getAttribute("data-icon");
      const iconClass = el.getAttribute("data-icon-class") || "w-5 h-5";
      el.innerHTML = window.AppIcons.render(iconName, iconClass);
    });

    // 3. Lê rota do Hash da URL (ou inicia no dashboard)
    const hashRoute = window.location.hash.replace("#", "");
    window.AppRouter.navigate(hashRoute || "dashboard");

    // 4. Observa mudanças no hash do navegador (botão voltar)
    window.addEventListener("hashchange", function() {
      const currentHash = window.location.hash.replace("#", "");
      if (currentHash && currentHash !== window.AppRouter.currentRoute) {
        window.AppRouter.navigate(currentHash);
      }
    });

    // 5. Configura botão de alternar tema claro / escuro
    const themeBtn = document.getElementById("theme-toggle-btn");
    if (themeBtn) {
      themeBtn.addEventListener("click", function() {
        const newTheme = window.AppStore.toggleTheme();
        const iconContainer = document.getElementById("theme-icon-container");
        if (iconContainer) {
          iconContainer.innerHTML = window.AppIcons.render(newTheme === 'dark' ? 'sun' : 'moon', 'w-4 h-4');
        }
      });

      // Atualiza ícone inicial do tema
      const iconContainer = document.getElementById("theme-icon-container");
      if (iconContainer) {
        const currentTheme = window.AppStore.getTheme();
        iconContainer.innerHTML = window.AppIcons.render(currentTheme === 'dark' ? 'sun' : 'moon', 'w-4 h-4');
      }
    }
  });
})();
