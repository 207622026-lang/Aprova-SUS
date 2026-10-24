// Visualização do Simulado Oficial (Exam View)
// Reproduz com fidelidade as 40 questões, 3 horas de prova e os pesos oficiais da banca IBAM.

window.AppExam = {
  examActive: false,
  examFinished: false,
  questions: [], // 40 questões selecionadas
  currentIndex: 0,
  userAnswers: {}, // index: letter
  flaggedForReview: {}, // index: boolean
  timeRemainingSeconds: 180 * 60, // 3 horas = 10.800 seg
  isPaused: false,
  timerInterval: null,
  examResult: null,

  render: function(container) {
    if (this.examActive && !this.examFinished) {
      this.renderLiveExam(container);
    } else if (this.examFinished && this.examResult) {
      this.renderExamResult(container);
    } else {
      this.renderExamIntro(container);
    }
  },

  // 1. Tela Inicial do Simulado (Instruções e Escolha de Modo)
  renderExamIntro: function(container) {
    const store = window.AppStore;
    const icons = window.AppIcons;
    const history = store.state.mockExamHistory || [];

    const html = `
      <div class="space-y-6 animate-fade-in max-w-4xl mx-auto">
        <!-- Banner Oficial -->
        <div class="card p-6 sm:p-8 space-y-6 border-t-4 border-t-indigo-600">
          <div class="flex items-center gap-3">
            <div class="p-3 bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 rounded-xl">
              ${icons.render('award', 'w-8 h-8')}
            </div>
            <div>
              <span class="text-xs uppercase font-extrabold text-indigo-600 dark:text-indigo-400 tracking-wider">
                Simulador Oficial IBAM 2026
              </span>
              <h2 class="text-2xl font-black text-slate-900 dark:text-white">
                Simulado Geral — Atendente SUS Guarulhos
              </h2>
            </div>
          </div>

          <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Este simulado reproduz a composição exata da prova oficial do Edital nº 06/2026-SGE01, com contagem estrita de tempo, pesos por matéria e escala de 0 a 100 pontos.
          </p>

          <!-- Tabela Oficial de Composição e Pesos -->
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse">
              <thead>
                <tr class="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold uppercase text-[11px] border-b border-slate-200 dark:border-slate-700">
                  <th class="py-3 px-4">Disciplina Oficial</th>
                  <th class="py-3 px-4 text-center">Nº de Questões</th>
                  <th class="py-3 px-4 text-center">Peso Oficial</th>
                  <th class="py-3 px-4 text-right">Pontuação Máxima</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                <tr>
                  <td class="py-3 px-4 font-semibold">Língua Portuguesa</td>
                  <td class="py-3 px-4 text-center">10 questões</td>
                  <td class="py-3 px-4 text-center">Peso 1</td>
                  <td class="py-3 px-4 text-right font-bold text-slate-900 dark:text-white">10 pontos</td>
                </tr>
                <tr>
                  <td class="py-3 px-4 font-semibold">Matemática</td>
                  <td class="py-3 px-4 text-center">5 questões</td>
                  <td class="py-3 px-4 text-center">Peso 2</td>
                  <td class="py-3 px-4 text-right font-bold text-slate-900 dark:text-white">10 pontos</td>
                </tr>
                <tr>
                  <td class="py-3 px-4 font-semibold">Noções de Informática</td>
                  <td class="py-3 px-4 text-center">5 questões</td>
                  <td class="py-3 px-4 text-center">Peso 2</td>
                  <td class="py-3 px-4 text-right font-bold text-slate-900 dark:text-white">10 pontos</td>
                </tr>
                <tr>
                  <td class="py-3 px-4 font-semibold">Políticas Públicas de Saúde — SUS</td>
                  <td class="py-3 px-4 text-center">10 questões</td>
                  <td class="py-3 px-4 text-center">Peso 2</td>
                  <td class="py-3 px-4 text-right font-bold text-slate-900 dark:text-white">20 pontos</td>
                </tr>
                <tr class="bg-indigo-50/50 dark:bg-indigo-950/20 font-bold text-indigo-900 dark:text-indigo-200">
                  <td class="py-3 px-4 flex items-center gap-1.5">
                    Conhecimentos Específicos de Atendente
                    <span class="text-[10px] bg-indigo-600 text-white px-1.5 py-0.5 rounded">50% da Prova</span>
                  </td>
                  <td class="py-3 px-4 text-center">10 questões</td>
                  <td class="py-3 px-4 text-center">Peso 5</td>
                  <td class="py-3 px-4 text-right font-black text-indigo-600 dark:text-indigo-400">50 pontos</td>
                </tr>
                <tr class="bg-slate-100 dark:bg-slate-800 font-black text-slate-900 dark:text-white">
                  <td class="py-3 px-4">TOTAL DA PROVA</td>
                  <td class="py-3 px-4 text-center">40 questões</td>
                  <td class="py-3 px-4 text-center">—</td>
                  <td class="py-3 px-4 text-right text-emerald-600 dark:text-emerald-400">100 pontos</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Regras e Instruções -->
          <div class="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 text-xs text-slate-600 dark:text-slate-300">
            <h4 class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              ${icons.render('info', 'w-4 h-4 text-teal-600')}
              Instruções Gerais para o Simulado:
            </h4>
            <ul class="list-disc list-inside space-y-1">
              <li>Duração máxima de <strong>3 horas (180 minutos)</strong> contadas em regressiva.</li>
              <li>Você pode navegar livremente entre as 40 questões e marcar dúvidas para revisão.</li>
              <li>O cronômetro encerra e corrige a prova automaticamente ao atingir 00:00:00.</li>
              <li>A nota final é calculada de 0 a 100 pontos conforme os pesos oficiais do edital.</li>
            </ul>
          </div>

          <!-- Botões de Ação -->
          <div class="flex flex-col sm:flex-row gap-3 pt-2">
            <button onclick="window.AppExam.startFullExam()" class="btn-primary flex-1 text-sm py-3 px-6 font-bold flex items-center justify-center gap-2 shadow-lg">
              ${icons.render('play', 'w-4 h-4')}
              Iniciar Simulado Completo (40 Questões • 3h)
            </button>
            <button onclick="window.AppExam.startDisciplineExam('especificos')" class="btn-secondary text-sm py-3 px-5 font-semibold flex items-center justify-center gap-2">
              Treinar Somente Específicos (Peso 5)
            </button>
          </div>
        </div>

        <!-- Histórico dos Simulados Anteriores -->
        ${history.length > 0 ? `
          <div class="card p-6 space-y-4">
            <h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              ${icons.render('clock', 'w-5 h-5 text-teal-600')}
              Histórico dos Seus Simulados Realizados
            </h3>
            <div class="space-y-3">
              ${history.map((h, i) => `
                <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs">
                  <div>
                    <div class="font-bold text-slate-900 dark:text-white text-sm">
                      Simulado #${history.length - i} • ${new Date(h.date).toLocaleDateString('pt-BR')} às ${new Date(h.date).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                    </div>
                    <div class="text-slate-500 mt-1">
                      ${h.correctCount} acertos de ${h.totalQuestions} questões • Tempo: ${Math.round((h.timeSpentSeconds || 0) / 60)} min
                    </div>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="text-right">
                      <div class="text-xl font-black ${h.score >= 50 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-500'}">
                        ${h.score} pts
                      </div>
                      <div class="text-[10px] font-semibold text-slate-400">
                        ${h.score >= 50 ? 'Classificado (≥ 50 pts)' : 'Eliminado (< 50 pts)'}
                      </div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `;

    container.innerHTML = html;
  },

  // 2. Tela Durante o Simulado em Execução
  renderLiveExam: function(container) {
    const icons = window.AppIcons;
    const q = this.questions[this.currentIndex];
    const totalQ = this.questions.length;
    const answeredCount = Object.keys(this.userAnswers).length;
    const isCurrentFlagged = Boolean(this.flaggedForReview[this.currentIndex]);
    const currentAnswer = this.userAnswers[this.currentIndex];

    // Formata cronômetro HH:MM:SS
    const hrs = Math.floor(this.timeRemainingSeconds / 3600);
    const mins = Math.floor((this.timeRemainingSeconds % 3600) / 60);
    const secs = this.timeRemainingSeconds % 60;
    const timerFormatted = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    const isUrgent = this.timeRemainingSeconds < 15 * 60; // Menos de 15 min

    const disc = window.EXAM_INFO.disciplines.find(d => d.id === q.disciplineId);

    const html = `
      <div class="space-y-6 animate-fade-in max-w-5xl mx-auto">
        <!-- Barra Superior Fixa de Cronômetro e Controle -->
        <div class="card p-4 sticky top-16 z-30 shadow-md flex items-center justify-between gap-4 border-b-2 border-b-teal-600">
          <div class="flex items-center gap-3">
            <span class="text-xs font-bold text-slate-500 dark:text-slate-400 hidden sm:inline">Progresso:</span>
            <div class="text-xs font-black text-slate-900 dark:text-white">
              Questão ${this.currentIndex + 1} de ${totalQ}
            </div>
            <span class="text-xs text-slate-400">(${answeredCount} respondidas)</span>
          </div>

          <!-- Cronômetro Central -->
          <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg border ${isUrgent ? 'bg-rose-50 text-rose-600 border-rose-300 animate-pulse dark:bg-rose-950 dark:text-rose-300' : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700'}">
            ${icons.render('clock', 'w-4 h-4')}
            <span class="font-mono text-sm sm:text-base font-black tracking-wider" id="exam-timer-display">${timerFormatted}</span>
          </div>

          <!-- Botões de Ação da Barra -->
          <div class="flex items-center gap-2">
            <button onclick="window.AppExam.togglePause()" class="btn-secondary text-xs py-1.5 px-3 flex items-center gap-1.5">
              ${this.isPaused ? icons.render('play', 'w-3.5 h-3.5') : icons.render('pause', 'w-3.5 h-3.5')}
              <span class="hidden sm:inline">${this.isPaused ? 'Retomar' : 'Pausar'}</span>
            </button>
            <button onclick="window.AppExam.confirmFinishExam()" class="btn-primary text-xs py-1.5 px-3 font-bold bg-rose-600 hover:bg-rose-700">
              Entregar Prova
            </button>
          </div>
        </div>

        ${this.isPaused ? `
          <div class="card p-12 text-center space-y-4">
            <div class="p-4 bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
              ${icons.render('pause', 'w-8 h-8')}
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">Simulado Pausado</h3>
            <p class="text-sm text-slate-500 max-w-md mx-auto">
              O cronômetro está parado. Respire fundo, tome uma água e clique em retomar quando estiver pronto.
            </p>
            <button onclick="window.AppExam.togglePause()" class="btn-primary text-sm py-2.5 px-6 font-bold">
              Continuar Simulado
            </button>
          </div>
        ` : `
          <!-- Grade de Navegação das 40 Questões -->
          <div class="card p-4">
            <div class="flex items-center justify-between mb-3 text-xs text-slate-500">
              <span class="font-bold uppercase tracking-wider">Cartão-Resposta Rápido (1 a ${totalQ})</span>
              <div class="flex items-center gap-3 text-[11px]">
                <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-teal-600 inline-block"></span> Respondida</span>
                <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-amber-400 inline-block"></span> Revisão</span>
                <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-slate-200 dark:bg-slate-700 inline-block"></span> Pendente</span>
              </div>
            </div>

            <div class="grid grid-cols-8 sm:grid-cols-10 md:grid-cols-20 gap-1.5 text-center">
              ${this.questions.map((item, idx) => {
                const isAns = Boolean(this.userAnswers[idx]);
                const isFlag = Boolean(this.flaggedForReview[idx]);
                const isCur = idx === this.currentIndex;

                let colorClass = "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700";
                if (isAns) colorClass = "bg-teal-600 text-white border-teal-600 font-bold";
                if (isFlag) colorClass = "bg-amber-400 text-slate-900 border-amber-500 font-bold";

                return `
                  <button onclick="window.AppExam.goToQuestion(${idx})" class="p-1.5 rounded text-xs border ${colorClass} ${isCur ? 'ring-2 ring-teal-400 ring-offset-1 font-black scale-105' : 'hover:opacity-80'} transition-all">
                    ${idx + 1}
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Card da Questão Atual -->
          <div class="card p-6 sm:p-8 space-y-6">
            <div class="flex items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800 text-xs">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="font-extrabold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg">
                  Questão ${this.currentIndex + 1}
                </span>
                <span class="px-2.5 py-1 rounded-lg font-bold ${disc ? disc.badgeColor : 'bg-slate-100 text-slate-700'}">
                  ${disc ? disc.name : q.disciplineId} (Peso ${disc ? disc.weight : 1})
                </span>
              </div>

              <!-- Botão Marcar para Revisão -->
              <button onclick="window.AppExam.toggleFlagCurrent()" class="p-2 rounded-lg border ${isCurrentFlagged ? 'bg-amber-50 border-amber-300 text-amber-600 dark:bg-amber-950/40' : 'border-slate-200 dark:border-slate-700 text-slate-400 hover:text-amber-500'} flex items-center gap-1.5 text-xs font-semibold">
                ${icons.render('bookmark', 'w-4 h-4')}
                <span>${isCurrentFlagged ? 'Marcada para Revisão' : 'Dúvida (Marcar)'}</span>
              </button>
            </div>

            <!-- Enunciado -->
            <p class="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-relaxed">
              ${q.statement}
            </p>

            <!-- Alternativas A, B, C, D -->
            <div class="space-y-3">
              ${q.options.map(opt => {
                const isSelected = currentAnswer === opt.letter;
                return `
                  <button onclick="window.AppExam.selectExamOption('${opt.letter}')" class="w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 cursor-pointer ${isSelected ? 'bg-teal-50 dark:bg-teal-950/50 border-teal-500 dark:border-teal-400 text-teal-950 dark:text-teal-100 font-bold ring-2 ring-teal-500/30' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-teal-400 text-slate-800 dark:text-slate-200'}">
                    <span class="w-6 h-6 rounded-lg border flex items-center justify-center text-xs font-black shrink-0 mt-0.5 ${isSelected ? 'bg-teal-600 text-white border-teal-600' : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600'}">
                      ${opt.letter}
                    </span>
                    <span class="text-xs sm:text-sm leading-relaxed flex-1">${opt.text}</span>
                  </button>
                `;
              }).join('')}
            </div>

            <!-- Botões Anterior / Próxima -->
            <div class="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
              <button onclick="window.AppExam.prevQuestion()" ${this.currentIndex === 0 ? 'disabled' : ''} class="btn-secondary text-xs py-2 px-4 flex items-center gap-2 ${this.currentIndex === 0 ? 'opacity-40 cursor-not-allowed' : ''}">
                ${icons.render('chevron-left', 'w-4 h-4')}
                Anterior
              </button>

              <button onclick="window.AppExam.nextQuestion()" class="btn-primary text-xs py-2 px-5 flex items-center gap-2">
                <span>${this.currentIndex === totalQ - 1 ? 'Revisar / Entregar' : 'Próxima Questão'}</span>
                ${icons.render('chevron-right', 'w-4 h-4')}
              </button>
            </div>
          </div>
        `}
      </div>
    `;

    container.innerHTML = html;
  },

  // 3. Tela de Relatório e Correção do Simulado
  renderExamResult: function(container) {
    const res = this.examResult;
    const icons = window.AppIcons;

    const html = `
      <div class="space-y-6 animate-fade-in max-w-4xl mx-auto">
        <!-- Cartão de Pontuação Oficial -->
        <div class="card p-6 sm:p-8 space-y-6 text-center border-t-8 ${res.isApproved ? 'border-t-emerald-500' : 'border-t-rose-500'}">
          <div class="inline-flex p-4 rounded-full ${res.isApproved ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'} mx-auto">
            ${res.isApproved ? icons.render('award', 'w-12 h-12') : icons.render('alert-triangle', 'w-12 h-12')}
          </div>

          <div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              ${res.isApproved ? 'Parabéns! Você atingiu a nota de corte!' : 'Simulado Finalizado — Atenção aos Pontos Fracos'}
            </h2>
            <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">
              ${res.isApproved ? 'Seu rendimento está acima dos 50 pontos mínimos exigidos pelo edital.' : 'Você obteve pontuação inferior aos 50 pontos necessários para classificação.'}
            </p>
          </div>

          <!-- Nota de 0 a 100 -->
          <div class="p-6 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800 max-w-md mx-auto">
            <span class="text-xs uppercase font-bold tracking-widest text-slate-500">Nota Final com Pesos Oficiais</span>
            <div class="text-5xl sm:text-6xl font-black ${res.isApproved ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'} mt-1">
              ${res.score} <span class="text-2xl font-bold text-slate-400">/ 100</span>
            </div>
            <div class="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs">
              <div>
                <span class="text-slate-500 block">Acertos</span>
                <strong class="text-emerald-600 font-black text-base">${res.correctCount}</strong>
              </div>
              <div>
                <span class="text-slate-500 block">Erros</span>
                <strong class="text-rose-600 font-black text-base">${res.wrongCount}</strong>
              </div>
              <div>
                <span class="text-slate-500 block">Em Branco</span>
                <strong class="text-slate-400 font-black text-base">${res.blankCount}</strong>
              </div>
            </div>
          </div>

          <!-- Desempenho por Disciplina -->
          <div class="space-y-3 text-left">
            <h3 class="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              ${icons.render('bar-chart-2', 'w-4 h-4 text-teal-600')}
              Desempenho por Disciplina no Simulado
            </h3>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${Object.entries(res.disciplineScores).map(([dId, dData]) => {
                const disc = window.EXAM_INFO.disciplines.find(d => d.id === dId);
                const pct = dData.maxPoints > 0 ? Math.round((dData.earnedPoints / dData.maxPoints) * 100) : 0;
                return `
                  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 space-y-2">
                    <div class="flex items-center justify-between text-xs">
                      <span class="font-bold text-slate-900 dark:text-white">${disc ? disc.name : dId}</span>
                      <span class="font-black text-teal-600 dark:text-teal-400">${dData.earnedPoints} / ${dData.maxPoints} pts</span>
                    </div>
                    <div class="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div class="${pct >= 70 ? 'bg-emerald-500' : (pct >= 50 ? 'bg-amber-500' : 'bg-rose-500')} h-full rounded-full" style="width: ${pct}%"></div>
                    </div>
                    <div class="text-[11px] text-slate-500 flex justify-between">
                      <span>${dData.correct}/${dData.total} acertos (Peso ${dData.weight})</span>
                      <span>${pct}% de aproveitamento</span>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Assuntos para Revisar -->
          ${res.weakTopics && res.weakTopics.length > 0 ? `
            <div class="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5 text-left space-y-2">
              <h4 class="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                ${icons.render('alert-triangle', 'w-4 h-4 text-amber-600')}
                Tópicos Recomendados para Revisão Urgente:
              </h4>
              <p class="text-xs text-amber-900 dark:text-amber-200">
                Você errou questões nas seguintes matérias durante o simulado. Revise os resumos e flashcards antes do próximo treino:
              </p>
              <ul class="list-disc list-inside text-xs text-amber-950 dark:text-amber-100 space-y-1">
                ${res.weakTopics.map(t => `<li><strong>${t}</strong></li>`).join('')}
              </ul>
            </div>
          ` : ''}

          <!-- Botões -->
          <div class="flex flex-col sm:flex-row gap-3 pt-4">
            <button onclick="window.AppExam.resetToStart()" class="btn-primary flex-1 text-sm py-3 font-bold">
              Realizar Novo Simulado
            </button>
            <button onclick="window.AppRouter.navigate('dashboard')" class="btn-secondary text-sm py-3 px-6">
              Voltar ao Painel Principal
            </button>
          </div>
        </div>

        <!-- Gabarito Comentado Completo das 40 Questões -->
        <div class="card p-6 sm:p-8 space-y-6">
          <h3 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            ${icons.render('file-text', 'w-5 h-5 text-teal-600')}
            Gabarito Comentado Questão por Questão
          </h3>

          <div class="space-y-6">
            ${this.questions.map((q, idx) => {
              const userLetter = this.userAnswers[idx] || "Em branco";
              const isCorrect = userLetter === q.correctLetter;

              return `
                <div class="p-5 rounded-xl border ${isCorrect ? 'border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/20' : 'border-rose-200 dark:border-rose-900/50 bg-rose-50/20'} space-y-3 text-xs leading-relaxed">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-slate-900 dark:text-white text-sm">
                      Questão #${idx + 1} • Gabarito: ${q.correctLetter}
                    </span>
                    <span class="font-bold px-2 py-0.5 rounded ${isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}">
                      Sua resposta: ${userLetter} (${isCorrect ? 'Acertou' : 'Errou'})
                    </span>
                  </div>

                  <p class="font-semibold text-slate-800 dark:text-slate-200">
                    ${q.statement}
                  </p>

                  <div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 whitespace-pre-line">
${q.explanation}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;
  },

  // Iniciar Simulado Completo de 40 Questões
  startFullExam: function() {
    const allQuestions = window.QUESTIONS_DATA || [];
    
    // Distribuição Oficial: 10 Port, 5 Mat, 5 Info, 10 SUS, 10 Específicos
    const port = this.pickQuestions(allQuestions.filter(q => q.disciplineId === 'portugues'), 10);
    const mat = this.pickQuestions(allQuestions.filter(q => q.disciplineId === 'matematica'), 5);
    const info = this.pickQuestions(allQuestions.filter(q => q.disciplineId === 'informatica'), 5);
    const sus = this.pickQuestions(allQuestions.filter(q => q.disciplineId === 'sus'), 10);
    const esp = this.pickQuestions(allQuestions.filter(q => q.disciplineId === 'especificos'), 10);

    this.questions = [...port, ...mat, ...info, ...sus, ...esp];
    this.currentIndex = 0;
    this.userAnswers = {};
    this.flaggedForReview = {};
    this.timeRemainingSeconds = 180 * 60; // 3h
    this.isPaused = false;
    this.examActive = true;
    this.examFinished = false;
    this.examResult = null;

    this.startTimer();
    const container = document.getElementById("main-content");
    if (container) this.render(container);
  },

  startDisciplineExam: function(disciplineId) {
    const allQuestions = window.QUESTIONS_DATA || [];
    const discQuestions = allQuestions.filter(q => q.disciplineId === disciplineId);
    this.questions = this.pickQuestions(discQuestions, Math.min(10, discQuestions.length));
    this.currentIndex = 0;
    this.userAnswers = {};
    this.flaggedForReview = {};
    this.timeRemainingSeconds = 60 * 60; // 1h para treino específico
    this.isPaused = false;
    this.examActive = true;
    this.examFinished = false;
    this.examResult = null;

    this.startTimer();
    const container = document.getElementById("main-content");
    if (container) this.render(container);
  },

  pickQuestions: function(arr, count) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  },

  startTimer: function() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      if (!this.isPaused) {
        this.timeRemainingSeconds--;
        const display = document.getElementById("exam-timer-display");
        if (display) {
          const hrs = Math.floor(this.timeRemainingSeconds / 3600);
          const mins = Math.floor((this.timeRemainingSeconds % 3600) / 60);
          const secs = this.timeRemainingSeconds % 60;
          display.innerText = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }

        if (this.timeRemainingSeconds <= 0) {
          clearInterval(this.timerInterval);
          alert("O tempo limite de 3 horas da prova foi esgotado! Seu simulado será corrigido automaticamente agora.");
          this.calculateAndFinish();
        }
      }
    }, 1000);
  },

  togglePause: function() {
    this.isPaused = !this.isPaused;
    const container = document.getElementById("main-content");
    if (container) this.render(container);
  },

  goToQuestion: function(idx) {
    this.currentIndex = idx;
    const container = document.getElementById("main-content");
    if (container) this.render(container);
  },

  prevQuestion: function() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      const container = document.getElementById("main-content");
      if (container) this.render(container);
    }
  },

  nextQuestion: function() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      const container = document.getElementById("main-content");
      if (container) this.render(container);
    } else {
      this.confirmFinishExam();
    }
  },

  selectExamOption: function(letter) {
    this.userAnswers[this.currentIndex] = letter;
    const container = document.getElementById("main-content");
    if (container) this.render(container);
  },

  toggleFlagCurrent: function() {
    this.flaggedForReview[this.currentIndex] = !this.flaggedForReview[this.currentIndex];
    const container = document.getElementById("main-content");
    if (container) this.render(container);
  },

  confirmFinishExam: function() {
    const answeredCount = Object.keys(this.userAnswers).length;
    const totalQ = this.questions.length;
    const pending = totalQ - answeredCount;

    let msg = `Você respondeu ${answeredCount} de ${totalQ} questões.`;
    if (pending > 0) {
      msg += ` Restam ${pending} questão(ões) em branco!`;
    }
    msg += " Deseja realmente finalizar e entregar a prova?";

    if (confirm(msg)) {
      this.calculateAndFinish();
    }
  },

  calculateAndFinish: function() {
    if (this.timerInterval) clearInterval(this.timerInterval);

    let totalPoints = 0;
    let correctCount = 0;
    let wrongCount = 0;
    let blankCount = 0;
    const disciplineScores = {};
    const weakTopicsSet = new Set();

    // Inicializa placar das disciplinas
    window.EXAM_INFO.disciplines.forEach(d => {
      disciplineScores[d.id] = {
        name: d.name,
        weight: d.weight,
        total: 0,
        correct: 0,
        earnedPoints: 0,
        maxPoints: 0
      };
    });

    this.questions.forEach((q, idx) => {
      const disc = window.EXAM_INFO.disciplines.find(d => d.id === q.disciplineId);
      const weight = disc ? disc.weight : 1;
      const userAns = this.userAnswers[idx];

      if (!disciplineScores[q.disciplineId]) {
        disciplineScores[q.disciplineId] = { name: q.disciplineId, weight, total: 0, correct: 0, earnedPoints: 0, maxPoints: 0 };
      }

      disciplineScores[q.disciplineId].total++;
      disciplineScores[q.disciplineId].maxPoints += weight;

      if (!userAns) {
        blankCount++;
        weakTopicsSet.add(`${disc ? disc.name : q.disciplineId}: Questão em branco`);
      } else if (userAns === q.correctLetter) {
        correctCount++;
        totalPoints += weight;
        disciplineScores[q.disciplineId].correct++;
        disciplineScores[q.disciplineId].earnedPoints += weight;
        // Grava no histórico geral do store
        window.AppStore.recordAnswer(q.id, userAns, true, q.disciplineId, q.topicId);
      } else {
        wrongCount++;
        weakTopicsSet.add(`${disc ? disc.name : q.disciplineId}`);
        // Grava no histórico geral do store
        window.AppStore.recordAnswer(q.id, userAns, false, q.disciplineId, q.topicId);
      }
    });

    const timeSpentSeconds = (180 * 60) - this.timeRemainingSeconds;
    const isApproved = totalPoints >= 50;

    this.examResult = {
      date: new Date().toISOString(),
      score: totalPoints,
      totalQuestions: this.questions.length,
      correctCount,
      wrongCount,
      blankCount,
      isApproved,
      timeSpentSeconds,
      disciplineScores,
      weakTopics: Array.from(weakTopicsSet).slice(0, 4)
    };

    // Salva no store
    window.AppStore.saveMockExamResult(this.examResult);

    this.examActive = false;
    this.examFinished = true;

    const container = document.getElementById("main-content");
    if (container) this.render(container);
  },

  resetToStart: function() {
    this.examActive = false;
    this.examFinished = false;
    this.examResult = null;
    const container = document.getElementById("main-content");
    if (container) this.render(container);
  }
};
