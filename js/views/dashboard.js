// Visualização do Painel Principal (Dashboard)
// Exibe contagem regressiva, métricas reais, tarefas do dia e atalhos rápidos.

window.AppDashboard = {
  render: function(container) {
    const store = window.AppStore;
    const stats = store.getStats();
    const countdown = store.getExamCountdown();
    const lastVisited = store.getLastVisited();
    const icons = window.AppIcons;

    // Localiza título do último tópico visitado se existir
    let lastVisitedTitle = "Introdução aos Estudos";
    let lastVisitedDisc = "especificos";
    if (lastVisited && window.COURSES_DATA) {
      window.COURSES_DATA.forEach(c => {
        if (c.disciplineId === lastVisited.disciplineId) {
          lastVisitedDisc = c.disciplineId;
          c.modules.forEach(m => {
            m.topics.forEach(t => {
              if (t.id === lastVisited.topicId) {
                lastVisitedTitle = t.title;
              }
            });
          });
        }
      });
    }

    const html = `
      <div class="space-y-6 animate-fade-in">
        <!-- Banner de Boas-Vindas e Contagem Regressiva Oficial -->
        <div class="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-teal-800/40">
          <div class="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            ${icons.render('shield-check', 'w-64 h-64 text-teal-400')}
          </div>
          
          <div class="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30 mb-3">
                ${icons.render('calendar', 'w-3.5 h-3.5')}
                IBAM • Edital nº 06/2026-SGE01 • Atendente SUS Guarulhos
              </div>
              <h1 class="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Aprova SUS <span class="text-teal-400 font-medium">— Atendente SUS 2026</span>
              </h1>
              <p class="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
                Sua plataforma pessoal e completa de preparação direcionada para a prova de novembro de 2026. Estudo estruturado, simulados com pesos oficiais e repetição espaçada.
              </p>
            </div>

            <!-- Caixa de Contagem Regressiva -->
            <div class="bg-slate-950/70 backdrop-blur-md rounded-xl p-4 sm:p-5 border border-teal-500/30 flex flex-col items-center min-w-[280px]">
              <span class="text-xs uppercase tracking-wider text-teal-300 font-semibold mb-2 flex items-center gap-1.5">
                ${icons.render('clock', 'w-4 h-4 text-teal-400')}
                Tempo até a Prova Prevista (29/11/2026)
              </span>
              <div class="grid grid-cols-4 gap-2 text-center w-full">
                <div class="bg-slate-900/80 rounded-lg p-2 border border-slate-800">
                  <div class="text-2xl sm:text-3xl font-black text-teal-400" id="countdown-days">${countdown.days}</div>
                  <div class="text-[10px] uppercase font-bold text-slate-400">Dias</div>
                </div>
                <div class="bg-slate-900/80 rounded-lg p-2 border border-slate-800">
                  <div class="text-2xl sm:text-3xl font-black text-white" id="countdown-hours">${countdown.hours}</div>
                  <div class="text-[10px] uppercase font-bold text-slate-400">Horas</div>
                </div>
                <div class="bg-slate-900/80 rounded-lg p-2 border border-slate-800">
                  <div class="text-2xl sm:text-3xl font-black text-white" id="countdown-mins">${countdown.minutes}</div>
                  <div class="text-[10px] uppercase font-bold text-slate-400">Min</div>
                </div>
                <div class="bg-slate-900/80 rounded-lg p-2 border border-slate-800">
                  <div class="text-2xl sm:text-3xl font-black text-teal-300" id="countdown-secs">${countdown.seconds}</div>
                  <div class="text-[10px] uppercase font-bold text-slate-400">Seg</div>
                </div>
              </div>
              <span class="text-[11px] text-slate-400 mt-2.5 text-center">Data prevista até publicação do edital de convocação.</span>
            </div>
          </div>
        </div>

        ${stats.totalAnswered === 0 && stats.completedTopicsCount === 0 ? `
          <!-- Mensagem acolhedora de Primeiro Uso (Sem estatísticas falsas) -->
          <div class="bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div class="p-3 bg-teal-600 text-white rounded-xl shadow-md shrink-0">
              ${icons.render('graduation-cap', 'w-8 h-8')}
            </div>
            <div class="flex-1">
              <h3 class="text-base font-bold text-slate-900 dark:text-white">Bem-vindo ao seu plano de aprovação!</h3>
              <p class="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Todas as métricas abaixo refletem fielmente o seu progresso real. Comece estudando o primeiro tópico de <strong>Conhecimentos Específicos</strong> (que representa 50% dos pontos da sua prova) ou responda questões de treino para calibrar seu diagnóstico.
              </p>
            </div>
            <button onclick="window.AppRouter.navigate('courses', { disciplineId: 'especificos', topicId: 'esp_top1' })" class="btn-primary shrink-0 text-sm py-2.5 px-4 font-semibold">
              Começar Primeira Aula
            </button>
          </div>
        ` : ''}

        <!-- Grade de Métricas Principais -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <!-- Card 1: Progresso no Edital -->
          <div class="card p-4 sm:p-5 flex flex-col justify-between">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Progresso no Edital</span>
              <div class="p-2 bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-lg">
                ${icons.render('book-open', 'w-5 h-5')}
              </div>
            </div>
            <div class="mt-4">
              <div class="flex items-baseline gap-2">
                <span class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">${stats.progressPercent}%</span>
                <span class="text-xs text-slate-500 dark:text-slate-400">concluído</span>
              </div>
              <div class="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full mt-2.5 overflow-hidden">
                <div class="bg-blue-600 h-full rounded-full transition-all duration-500" style="width: ${stats.progressPercent}%"></div>
              </div>
              <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
                ${stats.completedTopicsCount} de ${stats.totalTopicsCount} tópicos dominados
              </div>
            </div>
          </div>

          <!-- Card 2: Questões e Assertividade Geral -->
          <div class="card p-4 sm:p-5 flex flex-col justify-between">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Questões Resolvidas</span>
              <div class="p-2 bg-teal-50 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 rounded-lg">
                ${icons.render('check-circle', 'w-5 h-5')}
              </div>
            </div>
            <div class="mt-4">
              <div class="flex items-baseline gap-2">
                <span class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">${stats.totalAnswered}</span>
                <span class="text-xs font-semibold ${stats.overallAccuracy >= 70 ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}">
                  ${stats.totalAnswered > 0 ? `${stats.overallAccuracy}% acertos` : 'Sem respostas'}
                </span>
              </div>
              <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-3 flex items-center justify-between">
                <span>Acertos: <strong class="text-emerald-600 dark:text-emerald-400">${stats.totalCorrect}</strong></span>
                <span>Erros: <strong class="text-rose-600 dark:text-rose-400">${stats.totalWrong}</strong></span>
              </div>
            </div>
          </div>

          <!-- Card 3: Último Simulado Oficial -->
          <div class="card p-4 sm:p-5 flex flex-col justify-between">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Último Simulado</span>
              <div class="p-2 bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded-lg">
                ${icons.render('award', 'w-5 h-5')}
              </div>
            </div>
            <div class="mt-4">
              ${stats.lastMock ? `
                <div class="flex items-baseline gap-2">
                  <span class="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">${stats.lastMock.score}</span>
                  <span class="text-xs font-semibold text-slate-500">/ 100 pts</span>
                </div>
                <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
                  ${stats.lastMock.correctCount}/40 questões (${stats.lastMock.score >= 50 ? '<span class="text-emerald-600 font-semibold">Aprovado</span>' : '<span class="text-rose-500 font-semibold">Abaixo do corte</span>'})
                </div>
              ` : `
                <div class="text-lg font-bold text-slate-400 dark:text-slate-500">Pendente</div>
                <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
                  Nenhum simulado oficial realizado ainda.
                </div>
              `}
            </div>
          </div>

          <!-- Card 4: Tempo Total de Estudo -->
          <div class="card p-4 sm:p-5 flex flex-col justify-between">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Tempo Registrado</span>
              <div class="p-2 bg-amber-50 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 rounded-lg">
                ${icons.render('clock', 'w-5 h-5')}
              </div>
            </div>
            <div class="mt-4">
              <div class="flex items-baseline gap-2">
                <span class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">${stats.studyTimeFormatted}</span>
              </div>
              <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-2 flex items-center gap-1">
                ${icons.render('flame', 'w-3.5 h-3.5 text-amber-500')}
                Temporizador integrado disponível no Planner
              </div>
            </div>
          </div>
        </div>

        <!-- Atalhos Rápidos e Sugestão Inteligente -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Coluna 1 & 2: Ações Rápidas & Recomendação -->
          <div class="lg:col-span-2 space-y-6">
            <!-- Box de Ação Principal -->
            <div class="card p-5 sm:p-6 border-l-4 border-l-teal-600">
              <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span class="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 flex items-center gap-1.5">
                    ${icons.render('zap', 'w-4 h-4')}
                    Sugestão de Próximo Passo
                  </span>
                  <h3 class="text-lg font-bold text-slate-900 dark:text-white mt-1">
                    ${stats.smartRecommendation ? stats.smartRecommendation.title : 'Iniciar Módulo de Atendente SUS'}
                  </h3>
                  <p class="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-xl">
                    ${stats.smartRecommendation ? stats.smartRecommendation.description : 'Comece estudando os conceitos essenciais de acolhimento e rotinas administrativas.'}
                  </p>
                </div>
                <div class="flex flex-wrap sm:flex-nowrap gap-2.5 w-full sm:w-auto">
                  ${stats.smartRecommendation && stats.smartRecommendation.topicId ? `
                    <button onclick="window.AppRouter.navigate('courses', { disciplineId: '${stats.smartRecommendation.disciplineId}', topicId: '${stats.smartRecommendation.topicId}' })" class="btn-primary w-full sm:w-auto text-sm py-2 px-4 whitespace-nowrap">
                      Estudar Agora
                    </button>
                  ` : `
                    <button onclick="window.AppRouter.navigate('courses', { disciplineId: 'especificos', topicId: 'esp_top1' })" class="btn-primary w-full sm:w-auto text-sm py-2 px-4 whitespace-nowrap">
                      Iniciar Conteúdo
                    </button>
                  `}
                </div>
              </div>
            </div>

            <!-- Atalhos de Navegação Direta -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Continuar Aula -->
              <div class="card p-5 hover:border-teal-500 transition-all cursor-pointer group" onclick="window.AppRouter.navigate('courses', { disciplineId: '${lastVisitedDisc}' })">
                <div class="flex items-center gap-3">
                  <div class="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                    ${icons.render('book-open', 'w-6 h-6')}
                  </div>
                  <div>
                    <span class="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase">Continuar de onde parou</span>
                    <h4 class="text-sm font-bold text-slate-900 dark:text-white line-clamp-1 mt-0.5">${lastVisitedTitle}</h4>
                  </div>
                </div>
              </div>

              <!-- Iniciar Simulado -->
              <div class="card p-5 hover:border-teal-500 transition-all cursor-pointer group" onclick="window.AppRouter.navigate('exam')">
                <div class="flex items-center gap-3">
                  <div class="p-3 rounded-xl bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 group-hover:scale-105 transition-transform">
                    ${icons.render('award', 'w-6 h-6')}
                  </div>
                  <div>
                    <span class="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase">Treino Oficial</span>
                    <h4 class="text-sm font-bold text-slate-900 dark:text-white line-clamp-1 mt-0.5">Simulado 40 Questões (3h)</h4>
                  </div>
                </div>
              </div>
            </div>

            <!-- Desempenho por Matéria -->
            <div class="card p-5 sm:p-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  ${icons.render('bar-chart-2', 'w-5 h-5 text-teal-600 dark:text-teal-400')}
                  Rendimento por Disciplina Oficial
                </h3>
                <span class="text-xs text-slate-500">Baseado nas suas respostas</span>
              </div>

              <div class="space-y-4">
                ${window.EXAM_INFO.disciplines.map(disc => {
                  const ds = stats.disciplineStats[disc.id];
                  const hasAnswers = ds.questionsAnswered > 0;
                  const accuracyColor = ds.accuracy >= 70 ? 'bg-emerald-500' : (ds.accuracy >= 50 ? 'bg-amber-500' : 'bg-rose-500');

                  return `
                    <div class="space-y-1.5">
                      <div class="flex items-center justify-between text-xs">
                        <div class="flex items-center gap-2">
                          <span class="font-bold text-slate-800 dark:text-slate-200">${disc.name}</span>
                          <span class="text-[10px] px-1.5 py-0.5 rounded font-semibold ${disc.id === 'especificos' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 font-bold' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'}">
                            ${disc.questionsCount} questões • Peso ${disc.weight}
                          </span>
                        </div>
                        <div class="flex items-center gap-3">
                          <span class="text-slate-500">${ds.questionsAnswered} resolvidas</span>
                          <span class="font-extrabold ${hasAnswers ? (ds.accuracy >= 70 ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400') : 'text-slate-400'}">
                            ${hasAnswers ? `${ds.accuracy}%` : 'Sem dados'}
                          </span>
                        </div>
                      </div>
                      <div class="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                        <div class="${accuracyColor} h-full rounded-full transition-all duration-500" style="width: ${hasAnswers ? ds.accuracy : 0}%"></div>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>

              ${stats.worstDiscipline ? `
                <div class="mt-4 p-3 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 rounded-lg flex items-center gap-3 text-xs text-rose-800 dark:text-rose-300">
                  ${icons.render('alert-triangle', 'w-4 h-4 text-rose-500 shrink-0')}
                  <span>Atenção prioritária: Sua menor taxa de acerto está em <strong>${stats.worstDiscipline.name} (${stats.worstDiscipline.accuracy}%)</strong>. Foque em resolver mais questões desta área.</span>
                </div>
              ` : ''}
            </div>
          </div>

          <!-- Coluna 3: Atividades do Dia & Edital Oficial -->
          <div class="space-y-6">
            <!-- Tarefas Planejadas para Hoje -->
            <div class="card p-5 sm:p-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  ${icons.render('calendar', 'w-5 h-5 text-teal-600 dark:text-teal-400')}
                  Metas de Hoje
                </h3>
                <span class="text-xs text-teal-600 dark:text-teal-400 font-semibold cursor-pointer" onclick="window.AppRouter.navigate('planner')">Ajustar</span>
              </div>

              <div class="space-y-3">
                ${[
                  { id: "task_1", title: "Estudar 1 tópico de Conhecimentos Específicos", time: "35 min", disc: "especificos" },
                  { id: "task_2", title: "Resolver 5 questões de Políticas de Saúde - SUS", time: "15 min", disc: "sus" },
                  { id: "task_3", title: "Revisar 10 flashcards de repetição rápida", time: "10 min", disc: null },
                  { id: "task_4", title: "Treinar 1 exercício prático de Matemática", time: "15 min", disc: "matematica" }
                ].map(task => {
                  const isChecked = store.isDailyTaskCompleted(task.id);
                  return `
                    <div class="flex items-start gap-3 p-2.5 rounded-lg border ${isChecked ? 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800 opacity-60' : 'border-slate-200 dark:border-slate-800 hover:border-teal-400'} transition-all">
                      <input type="checkbox" id="${task.id}" ${isChecked ? 'checked' : ''} onchange="window.AppDashboard.handleToggleTask('${task.id}')" class="mt-1 w-4 h-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500 cursor-pointer">
                      <div class="flex-1 cursor-pointer" onclick="window.AppDashboard.handleToggleTask('${task.id}')">
                        <label for="${task.id}" class="text-xs font-semibold text-slate-800 dark:text-slate-200 cursor-pointer ${isChecked ? 'line-through text-slate-400' : ''}">
                          ${task.title}
                        </label>
                        <div class="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-0.5">
                          ${icons.render('clock', 'w-3 h-3')}
                          ${task.time}
                        </div>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- Card de Acesso ao Edital Oficial -->
            <div class="card p-5 border-t-4 border-t-slate-800 dark:border-t-teal-500">
              <div class="flex items-center gap-3 mb-3">
                <div class="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300">
                  ${icons.render('file-text', 'w-5 h-5')}
                </div>
                <div>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white">Documentos Oficiais</h4>
                  <span class="text-xs text-slate-500">IBAM Concursos</span>
                </div>
              </div>
              <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Consulte o edital oficial de abertura, as retificações e o Conteúdo Programático do Anexo II.
              </p>
              <div class="space-y-2">
                <a href="${window.EXAM_INFO.officialUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary w-full text-xs py-2 px-3 flex items-center justify-center gap-2">
                  ${icons.render('external-link', 'w-3.5 h-3.5')}
                  Acessar Página Oficial no IBAM
                </a>
                <button onclick="window.AppRouter.navigate('official')" class="btn-primary w-full text-xs py-2 px-3">
                  Ver Conteúdo Programático Completo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;
    this.startCountdownInterval();
  },

  handleToggleTask: function(taskId) {
    window.AppStore.toggleDailyTask(taskId);
    const container = document.getElementById("main-content");
    if (container) {
      this.render(container);
    }
  },

  startCountdownInterval: function() {
    if (this._interval) clearInterval(this._interval);
    this._interval = setInterval(() => {
      const countdown = window.AppStore.getExamCountdown();
      const elD = document.getElementById("countdown-days");
      const elH = document.getElementById("countdown-hours");
      const elM = document.getElementById("countdown-mins");
      const elS = document.getElementById("countdown-secs");
      if (elD && elH && elM && elS) {
        elD.innerText = countdown.days;
        elH.innerText = countdown.hours;
        elM.innerText = countdown.minutes;
        elS.innerText = countdown.seconds;
      } else {
        clearInterval(this._interval);
      }
    }, 1000);
  }
};
