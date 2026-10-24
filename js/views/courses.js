// Visualização de Aulas e Materiais de Estudo (Courses View)
// Apresenta módulos, tópicos didáticos, resumos, pegadinhas, anotações e questões de fixação.

window.AppCourses = {
  activeDisciplineId: "especificos",
  activeTopicId: null,

  render: function(container, params = {}) {
    if (params.disciplineId) {
      this.activeDisciplineId = params.disciplineId;
    }

    const store = window.AppStore;
    const icons = window.AppIcons;
    const courses = window.COURSES_DATA || [];
    const activeCourse = courses.find(c => c.disciplineId === this.activeDisciplineId) || courses[0];

    // Se não houver tópico ativo definido ou pertencer a outra matéria, pega o primeiro da disciplina atual
    if (!this.activeTopicId || !this.findTopic(activeCourse, this.activeTopicId)) {
      if (params.topicId && this.findTopic(activeCourse, params.topicId)) {
        this.activeTopicId = params.topicId;
      } else {
        const firstTopic = activeCourse.modules[0]?.topics[0];
        this.activeTopicId = firstTopic ? firstTopic.id : null;
      }
    }

    const activeTopic = this.findTopic(activeCourse, this.activeTopicId);
    if (activeTopic) {
      store.setLastVisited(this.activeDisciplineId, activeTopic.id);
    }

    const isCompleted = activeTopic ? store.isTopicCompleted(activeTopic.id) : false;
    const topicNote = activeTopic ? store.getTopicNote(activeTopic.id) : "";

    const html = `
      <div class="space-y-6 animate-fade-in">
        <!-- Barra de Seleção das 5 Disciplinas Oficiais -->
        <div class="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          ${window.EXAM_INFO.disciplines.map(d => {
            const isActive = d.id === this.activeDisciplineId;
            const courseData = courses.find(c => c.disciplineId === d.id);
            let totalT = 0, compT = 0;
            if (courseData) {
              courseData.modules.forEach(m => m.topics.forEach(t => {
                totalT++;
                if (store.isTopicCompleted(t.id)) compT++;
              }));
            }
            const pct = totalT > 0 ? Math.round((compT / totalT) * 100) : 0;

            return `
              <button onclick="window.AppCourses.selectDiscipline('${d.id}')" class="flex-shrink-0 px-4 py-3 rounded-xl border text-left transition-all ${isActive ? 'bg-teal-600 text-white border-teal-600 shadow-md ring-2 ring-teal-500/30' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-teal-400'}">
                <div class="flex items-center justify-between gap-3">
                  <div class="text-xs font-bold">${d.shortName}</div>
                  <span class="text-[10px] px-1.5 py-0.5 rounded font-semibold ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500'}">
                    P.${d.weight}
                  </span>
                </div>
                <div class="text-[11px] mt-1 opacity-80">${compT}/${totalT} aulas (${pct}%)</div>
              </button>
            `;
          }).join('')}
        </div>

        <!-- Grade de Conteúdo: Navegação Lateral de Módulos + Painel da Aula -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <!-- Coluna 1: Lista de Módulos e Tópicos (4 Colunas) -->
          <div class="lg:col-span-4 space-y-4">
            <div class="card p-4">
              <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <h3 class="text-sm font-extrabold text-slate-900 dark:text-white">${activeCourse.title}</h3>
                  <span class="text-xs text-teal-600 dark:text-teal-400 font-semibold">${activeCourse.weightNotice}</span>
                </div>
              </div>

              <!-- Lista de Tópicos por Módulo -->
              <div class="space-y-4 mt-4">
                ${activeCourse.modules.map(mod => `
                  <div>
                    <h4 class="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                      ${mod.title}
                    </h4>
                    <div class="space-y-1.5">
                      ${mod.topics.map(top => {
                        const isCurrent = top.id === this.activeTopicId;
                        const isDone = store.isTopicCompleted(top.id);
                        return `
                          <button onclick="window.AppCourses.selectTopic('${top.id}')" class="w-full text-left p-2.5 rounded-lg text-xs font-medium transition-all flex items-start gap-2.5 ${isCurrent ? 'bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-200 border border-teal-300 dark:border-teal-700 font-bold' : 'hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'}">
                            <span class="mt-0.5 shrink-0 ${isDone ? 'text-teal-600 dark:text-teal-400' : 'text-slate-300 dark:text-slate-600'}">
                              ${isDone ? icons.render('check-circle', 'w-4 h-4') : icons.render('book', 'w-4 h-4')}
                            </span>
                            <span class="flex-1 leading-snug">${top.title}</span>
                          </button>
                        `;
                      }).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Coluna 2: Conteúdo Didático da Aula Selecionada (8 Colunas) -->
          <div class="lg:col-span-8">
            ${activeTopic ? `
              <div class="card p-6 sm:p-8 space-y-6">
                <!-- Cabeçalho do Tópico -->
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <div class="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 dark:text-teal-400 mb-1">
                      ${icons.render('clock', 'w-3.5 h-3.5')}
                      Tempo estimado: ${activeTopic.estimatedMinutes} minutos
                    </div>
                    <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
                      ${activeTopic.title}
                    </h2>
                  </div>

                  <!-- Botão Marcar como Estudado -->
                  <button onclick="window.AppCourses.handleToggleCompleted('${activeTopic.id}')" class="btn ${isCompleted ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm' : 'btn-secondary'} shrink-0 text-xs py-2.5 px-4 flex items-center justify-center gap-2">
                    ${isCompleted ? icons.render('check', 'w-4 h-4') : icons.render('check-circle', 'w-4 h-4')}
                    <span>${isCompleted ? 'Concluído • Clique para desmarcar' : 'Marcar como Estudado'}</span>
                  </button>
                </div>

                <!-- 1. Explicação Didática Passo a Passo -->
                <div class="space-y-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  <h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    ${icons.render('book-open', 'w-5 h-5 text-teal-600')}
                    Teoria e Fundamentos Didáticos
                  </h3>
                  <div class="bg-slate-50 dark:bg-slate-900/40 p-4 sm:p-5 rounded-xl border border-slate-200/80 dark:border-slate-800 space-y-3 whitespace-pre-line leading-relaxed font-normal">
${activeTopic.explanation}
                  </div>
                </div>

                <!-- 2. Resumo dos Conceitos Principais -->
                <div class="space-y-3">
                  <h3 class="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    ${icons.render('target', 'w-4 h-4 text-blue-600')}
                    Resumo dos Conceitos-Chave
                  </h3>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    ${activeTopic.summary.map(item => `
                      <div class="p-3 rounded-lg bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/40 text-xs text-blue-900 dark:text-blue-200 flex items-start gap-2">
                        <span class="text-blue-600 mt-0.5">•</span>
                        <span>${item}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>

                <!-- 3. Exemplo Prático na Saúde Pública / Guarulhos -->
                <div class="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 rounded-xl p-4 sm:p-5 space-y-2">
                  <div class="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
                    ${icons.render('shield-check', 'w-4 h-4 text-emerald-600')}
                    Exemplo Prático na Rotina do SUS
                  </div>
                  <p class="text-xs sm:text-sm text-emerald-950 dark:text-emerald-100 leading-relaxed">
                    ${activeTopic.practicalExamples}
                  </p>
                </div>

                <!-- 4. Como o IBAM cobra em Concurso -->
                <div class="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/60 rounded-xl p-4 sm:p-5 space-y-2">
                  <div class="flex items-center gap-2 text-xs font-bold text-indigo-800 dark:text-indigo-300 uppercase tracking-wider">
                    ${icons.render('award', 'w-4 h-4 text-indigo-600')}
                    Raio-X: Como a Banca IBAM Cobra em Prova
                  </div>
                  <p class="text-xs sm:text-sm text-indigo-950 dark:text-indigo-100 leading-relaxed">
                    ${activeTopic.examTips}
                  </p>
                </div>

                <!-- 5. Quadro de Atenção / Pegadinhas da Banca -->
                <div class="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-l-amber-500 border border-amber-200 dark:border-amber-800/60 rounded-r-xl p-4 sm:p-5 space-y-2">
                  <div class="flex items-center gap-2 text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider">
                    ${icons.render('alert-triangle', 'w-4 h-4 text-amber-600')}
                    Atenção • Pegadinha Clássica de Prova
                  </div>
                  <p class="text-xs sm:text-sm text-amber-950 dark:text-amber-100 leading-relaxed font-medium">
                    ${activeTopic.traps}
                  </p>
                </div>

                <!-- 6. Questão de Fixação Imediata -->
                ${activeTopic.fixationQuestions && activeTopic.fixationQuestions.length > 0 ? `
                  <div class="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <h3 class="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      ${icons.render('check-circle', 'w-4 h-4 text-teal-600')}
                      Exercício de Fixação Imediata
                    </h3>

                    ${activeTopic.fixationQuestions.map((fq, idx) => `
                      <div class="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-5 space-y-3" id="fixation-box-${idx}">
                        <p class="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white leading-relaxed">
                          ${fq.statement}
                        </p>

                        <div class="space-y-2 mt-3">
                          ${fq.options.map((opt, optIdx) => `
                            <button onclick="window.AppCourses.handleAnswerFixation(${idx}, ${optIdx}, ${fq.correctIndex})" id="fix-btn-${idx}-${optIdx}" class="w-full text-left p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-teal-500 text-xs text-slate-800 dark:text-slate-200 transition-all flex items-start gap-2.5">
                              <span class="w-5 h-5 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                                ${String.fromCharCode(65 + optIdx)}
                              </span>
                              <span class="flex-1">${opt}</span>
                            </button>
                          `).join('')}
                        </div>

                        <!-- Feedback Justificado -->
                        <div id="fixation-feedback-${idx}" class="hidden p-3 rounded-lg text-xs leading-relaxed mt-3"></div>
                      </div>
                    `).join('')}
                  </div>
                ` : ''}

                <!-- 7. Campo de Anotações Pessoais com Autosave -->
                <div class="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div class="flex items-center justify-between">
                    <label for="topic-notes" class="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      ${icons.render('edit', 'w-4 h-4 text-teal-600')}
                      Suas Anotações Pessoais para Este Assunto
                    </label>
                    <span id="notes-status" class="text-[11px] text-slate-400">Salvo automaticamente</span>
                  </div>
                  <textarea id="topic-notes" rows="4" oninput="window.AppCourses.handleSaveNotes('${activeTopic.id}')" placeholder="Escreva aqui seus resumos, fórmulas, dicas e observações pessoais..." class="input w-full text-xs sm:text-sm leading-relaxed">${topicNote}</textarea>
                </div>
              </div>
            ` : `
              <div class="card p-12 text-center text-slate-500">
                Selecione um tópico para visualizar o material didático.
              </div>
            `}
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;
  },

  findTopic: function(course, topicId) {
    if (!course || !course.modules) return null;
    for (const mod of course.modules) {
      const t = mod.topics.find(top => top.id === topicId);
      if (t) return t;
    }
    return null;
  },

  selectDiscipline: function(disciplineId) {
    this.activeDisciplineId = disciplineId;
    this.activeTopicId = null;
    const container = document.getElementById("main-content");
    if (container) this.render(container);
  },

  selectTopic: function(topicId) {
    this.activeTopicId = topicId;
    const container = document.getElementById("main-content");
    if (container) this.render(container);
  },

  handleToggleCompleted: function(topicId) {
    window.AppStore.toggleTopicCompleted(topicId);
    const container = document.getElementById("main-content");
    if (container) this.render(container);
  },

  handleSaveNotes: function(topicId) {
    const el = document.getElementById("topic-notes");
    if (el) {
      window.AppStore.saveTopicNote(topicId, el.value);
      const statusEl = document.getElementById("notes-status");
      if (statusEl) {
        statusEl.innerText = "Salvando...";
        clearTimeout(this._saveTimeout);
        this._saveTimeout = setTimeout(() => {
          statusEl.innerText = "Salvo automaticamente";
        }, 600);
      }
    }
  },

  handleAnswerFixation: function(qIdx, selectedIdx, correctIdx) {
    const feedbackEl = document.getElementById(`fixation-feedback-${qIdx}`);
    const courses = window.COURSES_DATA || [];
    const activeCourse = courses.find(c => c.disciplineId === this.activeDisciplineId);
    const activeTopic = this.findTopic(activeCourse, this.activeTopicId);
    const question = activeTopic.fixationQuestions[qIdx];

    // Desativa botões
    for (let i = 0; i < 4; i++) {
      const btn = document.getElementById(`fix-btn-${qIdx}-${i}`);
      if (btn) {
        btn.disabled = true;
        if (i === correctIdx) {
          btn.classList.add("bg-emerald-50", "border-emerald-500", "dark:bg-emerald-950/40", "dark:border-emerald-600");
        } else if (i === selectedIdx && selectedIdx !== correctIdx) {
          btn.classList.add("bg-rose-50", "border-rose-500", "dark:bg-rose-950/40", "dark:border-rose-600");
        }
      }
    }

    if (feedbackEl) {
      feedbackEl.classList.remove("hidden");
      if (selectedIdx === correctIdx) {
        feedbackEl.className = "p-3 rounded-lg text-xs leading-relaxed mt-3 bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-800";
        feedbackEl.innerHTML = `<strong>Correto!</strong> ${question.justification}`;
      } else {
        feedbackEl.className = "p-3 rounded-lg text-xs leading-relaxed mt-3 bg-rose-100 text-rose-900 dark:bg-rose-950 dark:text-rose-200 border border-rose-300 dark:border-rose-800";
        feedbackEl.innerHTML = `<strong>Incorreto.</strong> A alternativa correta é a letra ${String.fromCharCode(65 + correctIdx)}. <br>${question.justification}`;
      }
    }
  }
};
