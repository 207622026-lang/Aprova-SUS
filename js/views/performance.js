// Visualização de Desempenho e Revisão Inteligente (Performance View)
// Gráficos SVG leves, diagnóstico real de pontos fracos e evolução dos simulados.

window.AppPerformance = {
  render: function(container) {
    const store = window.AppStore;
    const stats = store.getStats();
    const icons = window.AppIcons;
    const mockHistory = store.state.mockExamHistory || [];

    const html = `
      <div class="space-y-6 animate-fade-in max-w-5xl mx-auto">
        <!-- Topo: Diagnóstico de Desempenho -->
        <div class="card p-6 sm:p-8 space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 flex items-center gap-1.5">
                ${icons.render('bar-chart-2', 'w-4 h-4')}
                Análise Analítica do Estudante
              </span>
              <h2 class="text-2xl font-black text-slate-900 dark:text-white mt-1">
                Estatísticas e Diagnóstico Real
              </h2>
            </div>

            <div class="flex items-center gap-2 text-xs">
              <span class="text-slate-500">Total respondido:</span>
              <strong class="text-slate-900 dark:text-white font-extrabold text-sm">${stats.totalAnswered} questões</strong>
            </div>
          </div>

          <!-- Recomendação Inteligente Baseada em Dados Reais -->
          ${stats.smartRecommendation ? `
            <div class="p-5 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span class="text-xs font-extrabold uppercase text-teal-700 dark:text-teal-300 flex items-center gap-1.5">
                  ${icons.render('zap', 'w-4 h-4 text-teal-600')}
                  Recomendação do Sistema Inteligente
                </span>
                <h3 class="text-base font-bold text-slate-900 dark:text-white mt-1">
                  ${stats.smartRecommendation.title}
                </h3>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-xl leading-relaxed">
                  ${stats.smartRecommendation.description}
                </p>
              </div>

              ${stats.smartRecommendation.topicId ? `
                <button onclick="window.AppRouter.navigate('courses', { disciplineId: '${stats.smartRecommendation.disciplineId}', topicId: '${stats.smartRecommendation.topicId}' })" class="btn-primary text-xs py-2.5 px-4 font-bold shrink-0">
                  Revisar Conteúdo
                </button>
              ` : ''}
            </div>
          ` : `
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              Responda a pelo menos 3 a 5 questões no banco de questões ou realize um simulado para que o sistema gere recomendações e diagnósticos direcionados aos seus pontos fracos.
            </div>
          `}

          <!-- Indicadores Numéricos Principais -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div class="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
              <span class="text-[11px] font-semibold text-slate-500 uppercase block">Taxa Geral de Acertos</span>
              <div class="text-2xl font-black ${stats.overallAccuracy >= 70 ? 'text-emerald-600' : (stats.overallAccuracy >= 50 ? 'text-amber-500' : 'text-slate-400')} mt-1">
                ${stats.totalAnswered > 0 ? `${stats.overallAccuracy}%` : '—'}
              </div>
              <span class="text-[10px] text-slate-400">${stats.totalCorrect} acertos / ${stats.totalWrong} erros</span>
            </div>

            <div class="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
              <span class="text-[11px] font-semibold text-slate-500 uppercase block">Tempo de Estudo</span>
              <div class="text-2xl font-black text-slate-900 dark:text-white mt-1">
                ${stats.studyTimeFormatted}
              </div>
              <span class="text-[10px] text-slate-400">Registrado em sessões</span>
            </div>

            <div class="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
              <span class="text-[11px] font-semibold text-slate-500 uppercase block">Simulados Feitos</span>
              <div class="text-2xl font-black text-indigo-600 dark:text-indigo-400 mt-1">
                ${mockHistory.length}
              </div>
              <span class="text-[10px] text-slate-400">${mockHistory.length > 0 ? `Última nota: ${mockHistory[0].score}/100` : 'Nenhum feito'}</span>
            </div>

            <div class="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
              <span class="text-[11px] font-semibold text-slate-500 uppercase block">Tópicos Dominados</span>
              <div class="text-2xl font-black text-teal-600 dark:text-teal-400 mt-1">
                ${stats.completedTopicsCount}/${stats.totalTopicsCount}
              </div>
              <span class="text-[10px] text-slate-400">${stats.progressPercent}% do edital concluído</span>
            </div>
          </div>
        </div>

        <!-- Grade: Gráficos de Acerto por Disciplina + Evolução dos Simulados -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Gráfico de Barras: Taxa de Acertos por Disciplina -->
          <div class="card p-6 space-y-4">
            <h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              ${icons.render('bar-chart', 'w-5 h-5 text-teal-600')}
              Assertividade por Disciplina (%)
            </h3>

            <div class="space-y-4 pt-2">
              ${window.EXAM_INFO.disciplines.map(disc => {
                const ds = stats.disciplineStats[disc.id];
                const hasData = ds.questionsAnswered > 0;
                const barColor = ds.accuracy >= 70 ? 'bg-emerald-500' : (ds.accuracy >= 50 ? 'bg-amber-500' : 'bg-rose-500');

                return `
                  <div class="space-y-1">
                    <div class="flex justify-between text-xs">
                      <span class="font-bold text-slate-800 dark:text-slate-200">${disc.shortName}</span>
                      <span class="font-extrabold ${hasData ? (ds.accuracy >= 70 ? 'text-emerald-600' : 'text-amber-600') : 'text-slate-400'}">
                        ${hasData ? `${ds.accuracy}% (${ds.questionsCorrect}/${ds.questionsAnswered})` : 'Sem respostas'}
                      </span>
                    </div>
                    <div class="w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
                      <div class="${barColor} h-full rounded-full transition-all duration-700" style="width: ${hasData ? ds.accuracy : 0}%"></div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Histórico / Evolução dos Simulados -->
          <div class="card p-6 space-y-4">
            <h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              ${icons.render('award', 'w-5 h-5 text-indigo-600')}
              Evolução nos Simulados (Nota de 0 a 100)
            </h3>

            ${mockHistory.length > 0 ? `
              <!-- Gráfico Visual de Histórico -->
              <div class="h-44 flex items-end gap-3 pt-6 pb-2 px-2 border-b border-slate-200 dark:border-slate-800">
                ${mockHistory.slice(0, 7).reverse().map((m, idx) => {
                  const heightPct = Math.max(10, m.score);
                  const isPass = m.score >= 50;
                  return `
                    <div class="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                      <span class="text-[10px] font-bold ${isPass ? 'text-emerald-600' : 'text-rose-500'} opacity-0 group-hover:opacity-100 transition-opacity">
                        ${m.score} pts
                      </span>
                      <div class="w-full rounded-t-lg transition-all ${isPass ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-rose-500 hover:bg-rose-600'}" style="height: ${heightPct}%;"></div>
                      <span class="text-[9px] text-slate-400 font-semibold truncate w-full text-center">Sim. ${idx + 1}</span>
                    </div>
                  `;
                }).join('')}
              </div>
              <div class="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <span>Nota mínima de aprovação: 50 pts</span>
                <span class="text-emerald-600 font-bold">Verde = Aprovado</span>
              </div>
            ` : `
              <div class="p-8 text-center text-slate-500 space-y-2">
                <p class="text-xs">Você ainda não realizou simulados oficiais.</p>
                <button onclick="window.AppRouter.navigate('exam')" class="btn-primary text-xs py-2 px-4 font-bold">
                  Iniciar Primeiro Simulado
                </button>
              </div>
            `}
          </div>
        </div>

        <!-- Gerenciamento de Dados Locais e Backup -->
        <div class="card p-6 space-y-4 border-t-2 border-t-slate-300 dark:border-t-slate-700">
          <h3 class="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            ${icons.render('shield-check', 'w-4 h-4 text-teal-600')}
            Seus Dados e Backup (100% no seu Navegador)
          </h3>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Seus dados são salvos exclusivamente no armazenamento local deste navegador. Você pode baixar uma cópia de segurança em arquivo JSON para restaurar em outro dispositivo ou zerar os registros a qualquer momento.
          </p>

          <div class="flex flex-wrap gap-3 pt-2">
            <button onclick="window.AppStore.exportBackup()" class="btn-secondary text-xs py-2 px-4 flex items-center gap-2">
              ${icons.render('download', 'w-4 h-4')}
              Exportar Backup (JSON)
            </button>

            <button onclick="document.getElementById('import-file-input').click()" class="btn-secondary text-xs py-2 px-4 flex items-center gap-2">
              ${icons.render('upload', 'w-4 h-4')}
              Importar Backup (JSON)
            </button>
            <input type="file" id="import-file-input" accept=".json" class="hidden" onchange="window.AppPerformance.handleImportFile(event)">

            <button onclick="window.AppPerformance.confirmReset()" class="btn text-xs py-2 px-4 text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 border border-rose-200 dark:border-rose-900 flex items-center gap-2">
              ${icons.render('trash', 'w-4 h-4')}
              Zerar Todos os Dados
            </button>
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;
  },

  handleImportFile: function(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
      const res = window.AppStore.importBackup(evt.target.result);
      if (res.success) {
        alert("Backup importado com sucesso! Seus dados foram restaurados.");
        const container = document.getElementById("main-content");
        if (container) window.AppPerformance.render(container);
      } else {
        alert("Falha ao importar backup: " + res.error);
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  },

  confirmReset: function() {
    if (confirm("ATENÇÃO: Deseja realmente zerar todo o seu histórico de questões, anotações e simulados? Esta ação não poderá ser desfeita.")) {
      if (confirm("Confirmação final: Todos os dados salvos neste navegador serão apagados e voltarão ao estado inicial. Prosseguir?")) {
        window.AppStore.resetAllData();
        alert("Todos os dados foram resetados com sucesso.");
        window.AppRouter.navigate('dashboard');
      }
    }
  }
};
