// Visualização do Banco de Questões Interativo (Questions View)
// Suporta Modo Aprendizagem (feedback instantâneo) e Modo Treino (resultado ao final), filtros e favoritos.

window.AppQuestions = {
  mode: "learn", // 'learn' ou 'training'
  filterDiscipline: "all",
  filterStatus: "all", // 'all', 'unanswered', 'wrong', 'correct', 'favorite'
  searchQuery: "",
  trainingAnswers: {}, // questionId: selectedLetter (usado no modo treino)
  trainingSubmitted: false,

  render: function(container) {
    const store = window.AppStore;
    const icons = window.AppIcons;
    const allQuestions = window.QUESTIONS_DATA || [];

    // Aplicação dos filtros
    const filteredQuestions = allQuestions.filter(q => {
      // Filtro disciplina
      if (this.filterDiscipline !== "all" && q.disciplineId !== this.filterDiscipline) {
        return false;
      }

      // Filtro status
      const ans = store.getAnswer(q.id);
      const isFav = store.isFavoriteQuestion(q.id);

      if (this.filterStatus === "unanswered" && ans) return false;
      if (this.filterStatus === "wrong" && (!ans || ans.isCorrect)) return false;
      if (this.filterStatus === "correct" && (!ans || !ans.isCorrect)) return false;
      if (this.filterStatus === "favorite" && !isFav) return false;

      // Filtro busca por texto
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        const inStatement = q.statement.toLowerCase().includes(query);
        const inOptions = q.options.some(o => o.text.toLowerCase().includes(query));
        if (!inStatement && !inOptions) return false;
      }

      return true;
    });

    const html = `
      <div class="space-y-6 animate-fade-in">
        <!-- Barra de Configurações, Modos e Filtros -->
        <div class="card p-5 space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h2 class="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                ${icons.render('check-circle', 'w-6 h-6 text-teal-600')}
                Banco de Questões de Treino IBAM
              </h2>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
                65 questões originais comentadas alternativa por alternativa, alinhadas rigorosamente ao edital.
              </p>
            </div>

            <!-- Seletor de Modo: Aprendizagem vs Treino -->
            <div class="bg-slate-100 dark:bg-slate-800 p-1 rounded-xl flex items-center gap-1 self-start sm:self-auto border border-slate-200 dark:border-slate-700">
              <button onclick="window.AppQuestions.setMode('learn')" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${this.mode === 'learn' ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'}">
                Modo Aprendizagem (Gabarito Imediato)
              </button>
              <button onclick="window.AppQuestions.setMode('training')" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${this.mode === 'training' ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'}">
                Modo Treino (Gabarito ao Final)
              </button>
            </div>
          </div>

          <!-- Filtros: Disciplina, Status e Busca -->
          <div class="grid grid-cols-1 sm:grid-cols-12 gap-3">
            <!-- Disciplina -->
            <div class="sm:col-span-4">
              <label class="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">Disciplina</label>
              <select onchange="window.AppQuestions.handleDisciplineFilter(this.value)" class="input w-full text-xs py-2">
                <option value="all" ${this.filterDiscipline === 'all' ? 'selected' : ''}>Todas as Disciplinas (${allQuestions.length})</option>
                ${window.EXAM_INFO.disciplines.map(d => {
                  const count = allQuestions.filter(q => q.disciplineId === d.id).length;
                  return `<option value="${d.id}" ${this.filterDiscipline === d.id ? 'selected' : ''}>${d.name} (${count})</option>`;
                }).join('')}
              </select>
            </div>

            <!-- Status da Questão -->
            <div class="sm:col-span-4">
              <label class="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">Status de Resolução</label>
              <select onchange="window.AppQuestions.handleStatusFilter(this.value)" class="input w-full text-xs py-2">
                <option value="all" ${this.filterStatus === 'all' ? 'selected' : ''}>Todas as Questões</option>
                <option value="unanswered" ${this.filterStatus === 'unanswered' ? 'selected' : ''}>Não Respondidas</option>
                <option value="wrong" ${this.filterStatus === 'wrong' ? 'selected' : ''}>Questões Erradas</option>
                <option value="correct" ${this.filterStatus === 'correct' ? 'selected' : ''}>Questões Acertadas</option>
                <option value="favorite" ${this.filterStatus === 'favorite' ? 'selected' : ''}>Marcadas como Favoritas</option>
              </select>
            </div>

            <!-- Busca por Palavra-Chave -->
            <div class="sm:col-span-4">
              <label class="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">Busca por Palavra</label>
              <div class="relative">
                <input type="text" value="${this.searchQuery}" oninput="window.AppQuestions.handleSearch(this.value)" placeholder="Digite termos ou leis..." class="input w-full text-xs py-2 pr-8">
                <div class="absolute right-2.5 top-2.5 text-slate-400 pointer-events-none">
                  ${icons.render('search', 'w-4 h-4')}
                </div>
              </div>
            </div>
          </div>

          <!-- Totalizador -->
          <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-1">
            <span>Exibindo <strong>${filteredQuestions.length}</strong> questões de acordo com os filtros selecionados.</span>
            ${this.mode === 'training' && !this.trainingSubmitted ? `
              <button onclick="window.AppQuestions.submitTraining()" class="btn-primary text-xs py-1.5 px-4 font-bold shadow-sm">
                Finalizar Treino e Ver Resultado (${Object.keys(this.trainingAnswers).length}/${filteredQuestions.length} marcadas)
              </button>
            ` : ''}
          </div>
        </div>

        <!-- Lista de Questões -->
        ${filteredQuestions.length === 0 ? `
          <div class="card p-12 text-center space-y-3">
            <div class="p-3 bg-slate-100 dark:bg-slate-800 text-slate-400 w-12 h-12 rounded-full mx-auto flex items-center justify-center">
              ${icons.render('filter', 'w-6 h-6')}
            </div>
            <h3 class="text-base font-bold text-slate-800 dark:text-slate-200">Nenhuma questão encontrada</h3>
            <p class="text-xs text-slate-500 max-w-sm mx-auto">
              Tente alterar os filtros de matéria, status de resposta ou remover os termos da busca.
            </p>
            <button onclick="window.AppQuestions.resetFilters()" class="btn-secondary text-xs py-2 px-4 mt-2">
              Limpar Todos os Filtros
            </button>
          </div>
        ` : `
          <div class="space-y-6">
            ${filteredQuestions.map((q, idx) => {
              const disc = window.EXAM_INFO.disciplines.find(d => d.id === q.disciplineId);
              const savedAns = store.getAnswer(q.id);
              const isFav = store.isFavoriteQuestion(q.id);
              const isAnswered = Boolean(savedAns);

              // No modo treino, verifica resposta em rascunho
              const trainingAns = this.trainingAnswers[q.id];
              const showResult = this.mode === 'learn' ? isAnswered : this.trainingSubmitted;

              return `
                <div class="card p-6 space-y-4 border ${showResult && (savedAns?.isCorrect || trainingAns === q.correctLetter) ? 'border-emerald-200 dark:border-emerald-900/50' : (showResult ? 'border-rose-200 dark:border-rose-900/50' : '')}" id="q-card-${q.id}">
                  <!-- Cabeçalho da Questão -->
                  <div class="flex items-center justify-between gap-3 text-xs">
                    <div class="flex items-center gap-2 flex-wrap">
                      <span class="font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                        Questão #${idx + 1}
                      </span>
                      <span class="px-2.5 py-1 rounded-md font-bold ${disc ? disc.badgeColor : 'bg-slate-100 text-slate-700'}">
                        ${disc ? disc.name : q.disciplineId}
                      </span>
                      <span class="text-[11px] text-slate-500 dark:text-slate-400">
                        Dificuldade: ${q.difficulty}
                      </span>
                    </div>

                    <!-- Botão Favoritar -->
                    <button onclick="window.AppQuestions.toggleFavorite('${q.id}')" title="${isFav ? 'Remover dos favoritos' : 'Salvar questão favorita'}" class="p-1.5 rounded-lg border ${isFav ? 'bg-amber-50 border-amber-300 text-amber-500 dark:bg-amber-950/40 dark:border-amber-700' : 'border-slate-200 dark:border-slate-700 text-slate-400 hover:text-amber-500'} transition-all">
                      ${icons.render('star', 'w-4 h-4')}
                    </button>
                  </div>

                  <!-- Enunciado -->
                  <p class="text-sm font-semibold text-slate-900 dark:text-white leading-relaxed">
                    ${q.statement}
                  </p>

                  <!-- Alternativas A, B, C, D -->
                  <div class="space-y-2.5">
                    ${q.options.map(opt => {
                      let btnStyle = "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 hover:border-teal-500 text-slate-800 dark:text-slate-200";
                      let letterStyle = "border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300";

                      if (this.mode === 'learn') {
                        if (savedAns) {
                          if (opt.letter === q.correctLetter) {
                            btnStyle = "bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 dark:border-emerald-600 text-emerald-950 dark:text-emerald-100 font-bold";
                            letterStyle = "bg-emerald-600 text-white border-emerald-600";
                          } else if (opt.letter === savedAns.selectedLetter && !savedAns.isCorrect) {
                            btnStyle = "bg-rose-50 dark:bg-rose-950/50 border-rose-500 dark:border-rose-600 text-rose-950 dark:text-rose-100 font-bold";
                            letterStyle = "bg-rose-600 text-white border-rose-600";
                          } else {
                            btnStyle = "opacity-60 border-slate-200 dark:border-slate-800 text-slate-500";
                          }
                        }
                      } else {
                        // Modo Treino
                        if (trainingAns === opt.letter) {
                          if (!this.trainingSubmitted) {
                            btnStyle = "bg-teal-50 dark:bg-teal-950/50 border-teal-500 text-teal-900 dark:text-teal-200 font-bold ring-1 ring-teal-500";
                            letterStyle = "bg-teal-600 text-white border-teal-600";
                          } else {
                            // Submetido
                            if (opt.letter === q.correctLetter) {
                              btnStyle = "bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-950 dark:text-emerald-100 font-bold";
                              letterStyle = "bg-emerald-600 text-white border-emerald-600";
                            } else {
                              btnStyle = "bg-rose-50 dark:bg-rose-950/50 border-rose-500 text-rose-950 dark:text-rose-100 font-bold";
                              letterStyle = "bg-rose-600 text-white border-rose-600";
                            }
                          }
                        } else if (this.trainingSubmitted && opt.letter === q.correctLetter) {
                          btnStyle = "bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-950 dark:text-emerald-100 font-bold";
                          letterStyle = "bg-emerald-600 text-white border-emerald-600";
                        }
                      }

                      return `
                        <button onclick="window.AppQuestions.handleSelectOption('${q.id}', '${opt.letter}')" class="w-full text-left p-3.5 rounded-xl border ${btnStyle} transition-all flex items-start gap-3 cursor-pointer">
                          <span class="w-6 h-6 rounded-lg border ${letterStyle} flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                            ${opt.letter}
                          </span>
                          <span class="text-xs sm:text-sm leading-relaxed flex-1">${opt.text}</span>
                        </button>
                      `;
                    }).join('')}
                  </div>

                  <!-- Justificativa e Explicação Detalhada de Cada Alternativa -->
                  ${showResult ? `
                    <div class="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2 text-xs leading-relaxed animate-fade-in">
                      <div class="flex items-center gap-2 font-bold ${savedAns?.isCorrect || trainingAns === q.correctLetter ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}">
                        ${savedAns?.isCorrect || trainingAns === q.correctLetter ? icons.render('check-circle', 'w-4 h-4') : icons.render('x', 'w-4 h-4')}
                        Gabarito Oficial: Letra ${q.correctLetter}
                      </div>
                      <div class="text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
${q.explanation}
                      </div>
                    </div>
                  ` : ''}
                </div>
              `;
            }).join('')}
          </div>
        `}
      </div>
    `;

    container.innerHTML = html;
  },

  setMode: function(newMode) {
    this.mode = newMode;
    this.trainingSubmitted = false;
    this.trainingAnswers = {};
    const container = document.getElementById("main-content");
    if (container) this.render(container);
  },

  handleDisciplineFilter: function(val) {
    this.filterDiscipline = val;
    const container = document.getElementById("main-content");
    if (container) this.render(container);
  },

  handleStatusFilter: function(val) {
    this.filterStatus = val;
    const container = document.getElementById("main-content");
    if (container) this.render(container);
  },

  handleSearch: function(val) {
    this.searchQuery = val;
    const container = document.getElementById("main-content");
    if (container) this.render(container);
  },

  resetFilters: function() {
    this.filterDiscipline = "all";
    this.filterStatus = "all";
    this.searchQuery = "";
    const container = document.getElementById("main-content");
    if (container) this.render(container);
  },

  toggleFavorite: function(questionId) {
    window.AppStore.toggleFavoriteQuestion(questionId);
    const container = document.getElementById("main-content");
    if (container) this.render(container);
  },

  handleSelectOption: function(questionId, letter) {
    const questions = window.QUESTIONS_DATA || [];
    const q = questions.find(item => item.id === questionId);
    if (!q) return;

    if (this.mode === 'learn') {
      const isCorrect = (letter === q.correctLetter);
      window.AppStore.recordAnswer(questionId, letter, isCorrect, q.disciplineId, q.topicId);
    } else {
      // Modo treino
      if (this.trainingSubmitted) return; // Já finalizou
      this.trainingAnswers[questionId] = letter;
    }

    const container = document.getElementById("main-content");
    if (container) this.render(container);
  },

  submitTraining: function() {
    const questions = window.QUESTIONS_DATA || [];
    const answeredCount = Object.keys(this.trainingAnswers).length;
    if (answeredCount === 0) {
      alert("Por favor, responda a pelo menos uma questão antes de finalizar o treino.");
      return;
    }

    // Grava as respostas no store
    Object.entries(this.trainingAnswers).forEach(([qId, letter]) => {
      const q = questions.find(item => item.id === qId);
      if (q) {
        const isCorrect = (letter === q.correctLetter);
        window.AppStore.recordAnswer(qId, letter, isCorrect, q.disciplineId, q.topicId);
      }
    });

    this.trainingSubmitted = true;
    const container = document.getElementById("main-content");
    if (container) this.render(container);
  }
};
