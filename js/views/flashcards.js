// Visualização de Flashcards com Repetição Espaçada (Flashcards View)
// Efeito 3D flip card, classificação (Fácil / Médio / Difícil), filtros e favoritos.

window.AppFlashcards = {
  currentDeck: [],
  currentIndex: 0,
  isFlipped: false,
  filterDiscipline: "all",
  onlyFavorites: false,

  render: function(container) {
    const store = window.AppStore;
    const icons = window.AppIcons;
    const allCards = window.FLASHCARDS_DATA || [];

    // Filtra deck
    this.currentDeck = allCards.filter(c => {
      if (this.filterDiscipline !== "all" && c.disciplineId !== this.filterDiscipline) {
        return false;
      }
      if (this.onlyFavorites && !store.isFavoriteCard(c.id)) {
        return false;
      }
      return true;
    });

    if (this.currentIndex >= this.currentDeck.length) {
      this.currentIndex = 0;
    }

    const currentCard = this.currentDeck[this.currentIndex];
    const isFav = currentCard ? store.isFavoriteCard(currentCard.id) : false;
    const disc = currentCard ? window.EXAM_INFO.disciplines.find(d => d.id === currentCard.disciplineId) : null;
    const reviewInfo = currentCard ? store.getFlashcardReview(currentCard.id) : null;

    const html = `
      <div class="space-y-6 animate-fade-in max-w-4xl mx-auto">
        <!-- Topo e Filtros do Deck -->
        <div class="card p-5 space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 flex items-center gap-1.5">
                ${icons.render('layers', 'w-4 h-4')}
                Revisão Ativa e Repetição Espaçada
              </span>
              <h2 class="text-2xl font-black text-slate-900 dark:text-white mt-1">
                Flashcards Estratégicos
              </h2>
            </div>

            <!-- Botão Apenas Favoritos -->
            <button onclick="window.AppFlashcards.toggleOnlyFavorites()" class="btn text-xs py-2 px-3 border ${this.onlyFavorites ? 'bg-amber-50 border-amber-300 text-amber-700 dark:bg-amber-950/40 dark:border-amber-800' : 'btn-secondary'} flex items-center gap-1.5 font-bold self-start sm:self-auto">
              ${icons.render('star', 'w-4 h-4 text-amber-500')}
              <span>Apenas Favoritos</span>
            </button>
          </div>

          <!-- Filtro por Matéria -->
          <div class="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button onclick="window.AppFlashcards.setFilterDiscipline('all')" class="px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${this.filterDiscipline === 'all' ? 'bg-teal-600 text-white border-teal-600 shadow-sm' : 'btn-secondary'}">
              Todos (${allCards.length})
            </button>
            ${window.EXAM_INFO.disciplines.map(d => {
              const count = allCards.filter(c => c.disciplineId === d.id).length;
              const isActive = this.filterDiscipline === d.id;
              return `
                <button onclick="window.AppFlashcards.setFilterDiscipline('${d.id}')" class="px-3 py-1.5 rounded-lg text-xs font-bold border whitespace-nowrap transition-all ${isActive ? 'bg-teal-600 text-white border-teal-600 shadow-sm' : 'btn-secondary'}">
                  ${d.shortName} (${count})
                </button>
              `;
            }).join('')}
          </div>
        </div>

        ${!currentCard ? `
          <div class="card p-12 text-center space-y-3">
            <div class="p-3 bg-slate-100 dark:bg-slate-800 text-slate-400 w-12 h-12 rounded-full mx-auto flex items-center justify-center">
              ${icons.render('layers', 'w-6 h-6')}
            </div>
            <h3 class="text-base font-bold text-slate-800 dark:text-slate-200">Nenhum flashcard disponível</h3>
            <p class="text-xs text-slate-500 max-w-sm mx-auto">
              Não há cartões que correspondam aos filtros ativos ou marcados como favoritos.
            </p>
            <button onclick="window.AppFlashcards.resetFilters()" class="btn-secondary text-xs py-2 px-4 mt-2">
              Ver Todos os Flashcards
            </button>
          </div>
        ` : `
          <!-- Área do Cartão Interativo com Flip 3D -->
          <div class="space-y-4">
            <!-- Barra de Progresso do Deck -->
            <div class="flex items-center justify-between text-xs text-slate-500">
              <span class="font-bold">Cartão ${this.currentIndex + 1} de ${this.currentDeck.length}</span>
              <div class="flex items-center gap-2">
                ${reviewInfo ? `<span class="text-[11px] text-teal-600 dark:text-teal-400 font-semibold">Revisado ${reviewInfo.reps}x (${reviewInfo.difficulty})</span>` : '<span class="text-[11px] text-slate-400">Novo cartão</span>'}
                <button onclick="window.AppFlashcards.toggleFavoriteCurrent()" class="p-1.5 rounded-lg border ${isFav ? 'bg-amber-50 text-amber-500 border-amber-300 dark:bg-amber-950/40' : 'border-slate-200 dark:border-slate-700 text-slate-400 hover:text-amber-500'}">
                  ${icons.render('star', 'w-4 h-4')}
                </button>
              </div>
            </div>

            <!-- Card Flip Container -->
            <div onclick="window.AppFlashcards.flipCard()" class="cursor-pointer min-h-[320px] sm:min-h-[360px] p-6 sm:p-10 rounded-2xl border-2 transition-all shadow-lg flex flex-col justify-between ${this.isFlipped ? 'bg-gradient-to-br from-teal-900 via-slate-900 to-slate-950 text-white border-teal-500 shadow-teal-900/20' : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-slate-200 dark:border-slate-700 hover:border-teal-400'}">
              <!-- Topo do Cartão -->
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold px-2.5 py-1 rounded-md ${this.isFlipped ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30' : (disc ? disc.badgeColor : 'bg-slate-100 text-slate-700')}">
                  ${disc ? disc.name : 'Geral'} • ${currentCard.topic}
                </span>

                <span class="text-[11px] font-bold uppercase tracking-wider ${this.isFlipped ? 'text-teal-400' : 'text-slate-400'} flex items-center gap-1">
                  ${icons.render('rotate-ccw', 'w-3.5 h-3.5')}
                  ${this.isFlipped ? 'Verso (Resposta)' : 'Frente (Pergunta) • Clique para virar'}
                </span>
              </div>

              <!-- Conteúdo Central -->
              <div class="my-auto py-6 text-center space-y-4">
                <div class="text-base sm:text-xl font-bold leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
                  ${this.isFlipped ? currentCard.back : currentCard.front}
                </div>
              </div>

              <!-- Rodapé do Cartão com Tags -->
              <div class="flex items-center justify-between text-xs pt-4 border-t ${this.isFlipped ? 'border-teal-800/40' : 'border-slate-100 dark:border-slate-700/60'}">
                <div class="flex items-center gap-1.5 flex-wrap">
                  ${(currentCard.tags || []).map(t => `
                    <span class="text-[10px] px-2 py-0.5 rounded ${this.isFlipped ? 'bg-slate-800 text-teal-300' : 'bg-slate-100 dark:bg-slate-700 text-slate-500'} font-semibold">
                      #${t}
                    </span>
                  `).join('')}
                </div>
                <span class="text-[11px] ${this.isFlipped ? 'text-teal-300' : 'text-slate-400'}">
                  ${this.isFlipped ? 'Classifique seu domínio abaixo' : 'Toque no cartão para revelar a resposta'}
                </span>
              </div>
            </div>

            <!-- Botões de Classificação de Repetição Espaçada (Exibidos após virar) -->
            ${this.isFlipped ? `
              <div class="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 animate-fade-in">
                <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Como foi lembrar desta resposta?</span>
                <div class="flex items-center gap-2 w-full sm:w-auto">
                  <button onclick="window.AppFlashcards.rateAndNext('hard')" class="flex-1 sm:flex-none btn text-xs py-2 px-4 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-lg shadow-sm">
                    Difícil / Errei (Rever amanhã)
                  </button>
                  <button onclick="window.AppFlashcards.rateAndNext('medium')" class="flex-1 sm:flex-none btn text-xs py-2 px-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg shadow-sm">
                    Médio (Em 3 dias)
                  </button>
                  <button onclick="window.AppFlashcards.rateAndNext('easy')" class="flex-1 sm:flex-none btn text-xs py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg shadow-sm">
                    Fácil / Dominei (Em 6 dias)
                  </button>
                </div>
              </div>
            ` : ''}

            <!-- Navegação Anterior / Próximo -->
            <div class="flex items-center justify-between pt-2">
              <button onclick="window.AppFlashcards.prevCard()" ${this.currentIndex === 0 ? 'disabled' : ''} class="btn-secondary text-xs py-2 px-4 flex items-center gap-2 ${this.currentIndex === 0 ? 'opacity-40 cursor-not-allowed' : ''}">
                ${icons.render('chevron-left', 'w-4 h-4')}
                Anterior
              </button>

              <button onclick="window.AppFlashcards.flipCard()" class="btn-secondary text-xs py-2 px-5 font-bold flex items-center gap-1.5">
                ${icons.render('rotate-ccw', 'w-4 h-4')}
                ${this.isFlipped ? 'Voltar para a Pergunta' : 'Virar Cartão (Ver Resposta)'}
              </button>

              <button onclick="window.AppFlashcards.nextCard()" ${this.currentIndex === this.currentDeck.length - 1 ? 'disabled' : ''} class="btn-secondary text-xs py-2 px-4 flex items-center gap-2 ${this.currentIndex === this.currentDeck.length - 1 ? 'opacity-40 cursor-not-allowed' : ''}">
                Próximo
                ${icons.render('chevron-right', 'w-4 h-4')}
              </button>
            </div>
          </div>
        `}
      </div>
    `;

    container.innerHTML = html;
  },

  flipCard: function() {
    this.isFlipped = !this.isFlipped;
    const container = document.getElementById("main-content");
    if (container) this.render(container);
  },

  prevCard: function() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.isFlipped = false;
      const container = document.getElementById("main-content");
      if (container) this.render(container);
    }
  },

  nextCard: function() {
    if (this.currentIndex < this.currentDeck.length - 1) {
      this.currentIndex++;
      this.isFlipped = false;
      const container = document.getElementById("main-content");
      if (container) this.render(container);
    }
  },

  rateAndNext: function(difficulty) {
    const currentCard = this.currentDeck[this.currentIndex];
    if (currentCard) {
      window.AppStore.recordFlashcardReview(currentCard.id, difficulty);
    }
    this.nextCard();
  },

  toggleFavoriteCurrent: function() {
    const currentCard = this.currentDeck[this.currentIndex];
    if (currentCard) {
      window.AppStore.toggleFavoriteCard(currentCard.id);
      const container = document.getElementById("main-content");
      if (container) this.render(container);
    }
  },

  setFilterDiscipline: function(discId) {
    this.filterDiscipline = discId;
    this.currentIndex = 0;
    this.isFlipped = false;
    const container = document.getElementById("main-content");
    if (container) this.render(container);
  },

  toggleOnlyFavorites: function() {
    this.onlyFavorites = !this.onlyFavorites;
    this.currentIndex = 0;
    this.isFlipped = false;
    const container = document.getElementById("main-content");
    if (container) this.render(container);
  },

  resetFilters: function() {
    this.filterDiscipline = "all";
    this.onlyFavorites = false;
    this.currentIndex = 0;
    this.isFlipped = false;
    const container = document.getElementById("main-content");
    if (container) this.render(container);
  }
};
