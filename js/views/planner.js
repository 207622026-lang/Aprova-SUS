// Visualização do Plano de Estudos Ajustável (Planner View)
// Cronograma balanceado pelos pesos do edital (50% Específicos), metas semanais e temporizador Pomodoro.

window.AppPlanner = {
  // Estado do temporizador / cronômetro de estudo integrado
  timerMode: "stopwatch", // 'stopwatch' ou 'pomodoro'
  timerRunning: false,
  timerSeconds: 0,
  timerInterval: null,

  render: function(container) {
    const store = window.AppStore;
    const icons = window.AppIcons;
    const settings = store.state.plannerSettings || { dailyMinutes: 90, daysOfWeek: [1, 2, 3, 4, 5, 6] };
    const countdown = store.getExamCountdown();

    const daysMap = [
      { id: 1, name: "Seg", full: "Segunda-feira" },
      { id: 2, name: "Ter", full: "Terça-feira" },
      { id: 3, name: "Qua", full: "Quarta-feira" },
      { id: 4, name: "Qui", full: "Quinta-feira" },
      { id: 5, name: "Sex", full: "Sexta-feira" },
      { id: 6, name: "Sáb", full: "Sábado" },
      { id: 0, name: "Dom", full: "Domingo" }
    ];

    // Calcula horas semanais
    const activeDaysCount = settings.daysOfWeek.length;
    const weeklyMinutes = activeDaysCount * settings.dailyMinutes;
    const weeklyHours = (weeklyMinutes / 60).toFixed(1);

    // Divisão sugerida de tempo semanal pelos pesos da prova
    // Específicos (50%), SUS (20%), Port (10%), Mat (10%), Info (10%)
    const distribution = [
      { name: "Conhecimentos Específicos", pct: 50, mins: Math.round(weeklyMinutes * 0.50), color: "bg-indigo-600", text: "text-indigo-600 dark:text-indigo-400" },
      { name: "Políticas de Saúde — SUS", pct: 20, mins: Math.round(weeklyMinutes * 0.20), color: "bg-teal-600", text: "text-teal-600 dark:text-teal-400" },
      { name: "Língua Portuguesa", pct: 10, mins: Math.round(weeklyMinutes * 0.10), color: "bg-blue-600", text: "text-blue-600 dark:text-blue-400" },
      { name: "Matemática", pct: 10, mins: Math.round(weeklyMinutes * 0.10), color: "bg-emerald-600", text: "text-emerald-600 dark:text-emerald-400" },
      { name: "Informática", pct: 10, mins: Math.round(weeklyMinutes * 0.10), color: "bg-cyan-600", text: "text-cyan-600 dark:text-cyan-400" }
    ];

    // Formata tempo do temporizador
    const tMin = Math.floor(this.timerSeconds / 60);
    const tSec = this.timerSeconds % 60;
    const timerDisplay = `${tMin.toString().padStart(2, '0')}:${tSec.toString().padStart(2, '0')}`;

    const html = `
      <div class="space-y-6 animate-fade-in max-w-5xl mx-auto">
        <!-- Topo: Configuração do Plano -->
        <div class="card p-6 sm:p-8 space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 flex items-center gap-1.5">
                ${icons.render('target', 'w-4 h-4')}
                Planejador Estratégico de Estudos
              </span>
              <h2 class="text-2xl font-black text-slate-900 dark:text-white mt-1">
                Cronograma até a Prova de 29/11/2026
              </h2>
            </div>

            <div class="flex items-center gap-2 text-xs bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg text-slate-700 dark:text-slate-300">
              ${icons.render('calendar', 'w-4 h-4 text-teal-600')}
              <span>Faltam <strong>${countdown.days} dias</strong> de preparação</span>
            </div>
          </div>

          <!-- Ajustes de Metas: Minutos por dia e Dias da Semana -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-800">
            <!-- Meta diária em minutos -->
            <div class="space-y-2">
              <label class="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center justify-between">
                <span>Tempo Diário de Estudo:</span>
                <span class="text-teal-600 dark:text-teal-400 font-extrabold text-sm" id="label-minutes">${settings.dailyMinutes} minutos (${(settings.dailyMinutes/60).toFixed(1)}h)</span>
              </label>
              <input type="range" min="30" max="300" step="15" value="${settings.dailyMinutes}" oninput="window.AppPlanner.handleMinutesChange(this.value)" class="w-full accent-teal-600 cursor-pointer">
              <div class="flex justify-between text-[10px] text-slate-400 font-semibold">
                <span>30 min (Leve)</span>
                <span>90 min (Recomendado)</span>
                <span>300 min (Intensivo)</span>
              </div>
            </div>

            <!-- Dias da Semana Disponíveis -->
            <div class="space-y-2">
              <label class="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                Dias Disponíveis na Semana:
              </label>
              <div class="flex flex-wrap gap-2">
                ${daysMap.map(day => {
                  const isSelected = (settings.daysOfWeek || []).includes(day.id);
                  return `
                    <button onclick="window.AppPlanner.toggleDay(${day.id})" class="px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${isSelected ? 'bg-teal-600 text-white border-teal-600 shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-teal-400'}">
                      ${day.name}
                    </button>
                  `;
                }).join('')}
              </div>
              <div class="text-[11px] text-slate-500 mt-1">
                Carga semanal planejada: <strong>${weeklyHours} horas/semana</strong> (${activeDaysCount} dias de estudo).
              </div>
            </div>
          </div>

          <!-- Distribuição Proporcional pelos Pesos Oficiais -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <h3 class="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Divisão Semanal Sugerida (Foco no Peso da Prova)
              </h3>
              <span class="text-xs text-indigo-600 dark:text-indigo-400 font-bold">Específicos = 50% dos pontos</span>
            </div>

            <!-- Barra Segmentada -->
            <div class="w-full h-3 rounded-full overflow-hidden flex bg-slate-200 dark:bg-slate-700">
              ${distribution.map(d => `
                <div class="${d.color} h-full transition-all" style="width: ${d.pct}%" title="${d.name}: ${d.pct}%"></div>
              `).join('')}
            </div>

            <!-- Legenda da Distribuição -->
            <div class="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs pt-1">
              ${distribution.map(d => `
                <div class="p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800">
                  <span class="font-bold block ${d.text}">${d.pct}%</span>
                  <span class="text-[11px] text-slate-600 dark:text-slate-300 block line-clamp-1">${d.name}</span>
                  <span class="text-[10px] text-slate-400">${Math.round(d.mins / 60)}h ${d.mins % 60}m/sem</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Grade: Temporizador de Estudo (Pomodoro) + Checklist de Tarefas -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
          <!-- Coluna 1: Temporizador de Estudo Integrado (5 Colunas) -->
          <div class="md:col-span-5 space-y-4">
            <div class="card p-6 text-center space-y-4 border-t-4 border-t-amber-500">
              <div class="flex items-center justify-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                ${icons.render('clock', 'w-4 h-4')}
                Sessão de Foco / Temporizador
              </div>

              <!-- Display Digital do Temporizador -->
              <div class="font-mono text-5xl font-black text-slate-900 dark:text-white py-2" id="planner-timer-display">
                ${timerDisplay}
              </div>

              <p class="text-xs text-slate-500 dark:text-slate-400">
                O tempo registrado é salvo automaticamente no seu perfil ao finalizar a sessão.
              </p>

              <!-- Botões Iniciar / Parar / Resetar -->
              <div class="flex items-center justify-center gap-2 pt-2">
                <button onclick="window.AppPlanner.toggleTimer()" class="btn ${this.timerRunning ? 'bg-amber-600 hover:bg-amber-700 text-white' : 'btn-primary'} text-xs py-2 px-5 font-bold flex items-center gap-1.5 shadow-md">
                  ${this.timerRunning ? icons.render('pause', 'w-4 h-4') : icons.render('play', 'w-4 h-4')}
                  <span>${this.timerRunning ? 'Pausar' : 'Iniciar Foco'}</span>
                </button>

                <button onclick="window.AppPlanner.saveAndResetTimer()" ${this.timerSeconds < 10 ? 'disabled' : ''} class="btn-secondary text-xs py-2 px-4 flex items-center gap-1.5 ${this.timerSeconds < 10 ? 'opacity-40 cursor-not-allowed' : ''}">
                  ${icons.render('check', 'w-4 h-4')}
                  <span>Salvar Tempo</span>
                </button>
              </div>

              <div class="pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 flex justify-between">
                <span>Tempo total acumulado:</span>
                <strong class="text-slate-900 dark:text-white">${store.getTotalStudyTimeFormatted()}</strong>
              </div>
            </div>
          </div>

          <!-- Coluna 2: Tarefas Diárias e Roteiro Sugerido (7 Colunas) -->
          <div class="md:col-span-7 space-y-4">
            <div class="card p-6 space-y-4">
              <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    ${icons.render('calendar', 'w-5 h-5 text-teal-600')}
                    Roteiro Prático de Estudos Diário
                  </h3>
                  <p class="text-xs text-slate-500">Marque as atividades concluídas para manter a constância.</p>
                </div>
              </div>

              <!-- Lista de Tarefas com Checkbox -->
              <div class="space-y-3">
                ${[
                  { id: "plan_task_1", title: "Conhecimentos Específicos: Estudar 1 tópico de rotinas ou sistemas", time: "45 min", badge: "Peso 5 • Prioridade 1", color: "text-indigo-600" },
                  { id: "plan_task_2", title: "Políticas do SUS: Leitura de artigos da CF/88 ou Leis 8.080/8.142", time: "25 min", badge: "Peso 2 • Prioridade 2", color: "text-teal-600" },
                  { id: "plan_task_3", title: "Língua Portuguesa ou Matemática: Resolução de 10 exercícios", time: "20 min", badge: "Fixação Ativa", color: "text-blue-600" },
                  { id: "plan_task_4", title: "Flashcards: Revisão de 15 cartões de conceitos e fórmulas", time: "15 min", badge: "Repetição Espaçada", color: "text-amber-600" },
                  { id: "plan_task_5", title: "Simulado Semanal: Realizar simulado de 40 questões no final de semana", time: "3 horas", badge: "Treino de Prova", color: "text-rose-600" }
                ].map(item => {
                  const isChecked = store.isDailyTaskCompleted(item.id);
                  return `
                    <div class="p-3.5 rounded-xl border ${isChecked ? 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-60' : 'border-slate-200 dark:border-slate-700 hover:border-teal-400 bg-white dark:bg-slate-800'} transition-all flex items-start gap-3">
                      <input type="checkbox" id="${item.id}" ${isChecked ? 'checked' : ''} onchange="window.AppPlanner.handleToggleTask('${item.id}')" class="mt-1 w-4 h-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500 cursor-pointer">
                      <div class="flex-1 cursor-pointer" onclick="window.AppPlanner.handleToggleTask('${item.id}')">
                        <div class="flex items-center justify-between gap-2">
                          <label for="${item.id}" class="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 cursor-pointer ${isChecked ? 'line-through text-slate-400' : ''}">
                            ${item.title}
                          </label>
                          <span class="text-[10px] font-extrabold ${item.color} shrink-0 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">
                            ${item.badge}
                          </span>
                        </div>
                        <div class="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                          ${icons.render('clock', 'w-3 h-3')}
                          Estimativa: ${item.time}
                        </div>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;
  },

  handleMinutesChange: function(val) {
    const minutes = parseInt(val, 10);
    window.AppStore.updatePlannerSettings({ dailyMinutes: minutes });
    const lbl = document.getElementById("label-minutes");
    if (lbl) {
      lbl.innerText = `${minutes} minutos (${(minutes/60).toFixed(1)}h)`;
    }
  },

  toggleDay: function(dayId) {
    const store = window.AppStore;
    let days = store.state.plannerSettings.daysOfWeek || [1, 2, 3, 4, 5, 6];
    if (days.includes(dayId)) {
      if (days.length > 1) { // Manter pelo menos 1 dia
        days = days.filter(d => d !== dayId);
      } else {
        alert("Selecione pelo menos um dia disponível de estudo na semana.");
        return;
      }
    } else {
      days.push(dayId);
    }
    store.updatePlannerSettings({ daysOfWeek: days });
    const container = document.getElementById("main-content");
    if (container) this.render(container);
  },

  handleToggleTask: function(taskId) {
    window.AppStore.toggleDailyTask(taskId);
    const container = document.getElementById("main-content");
    if (container) this.render(container);
  },

  toggleTimer: function() {
    this.timerRunning = !this.timerRunning;
    if (this.timerRunning) {
      this.timerInterval = setInterval(() => {
        this.timerSeconds++;
        const el = document.getElementById("planner-timer-display");
        if (el) {
          const m = Math.floor(this.timerSeconds / 60);
          const s = this.timerSeconds % 60;
          el.innerText = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        }
      }, 1000);
    } else {
      clearInterval(this.timerInterval);
    }
    const container = document.getElementById("main-content");
    if (container) this.render(container);
  },

  saveAndResetTimer: function() {
    if (this.timerSeconds >= 10) {
      window.AppStore.addStudyTime(this.timerSeconds);
      alert(`Excelente sessão de estudos! ${Math.floor(this.timerSeconds / 60)} minuto(s) foram adicionados ao seu tempo total.`);
    }
    this.timerRunning = false;
    clearInterval(this.timerInterval);
    this.timerSeconds = 0;
    const container = document.getElementById("main-content");
    if (container) this.render(container);
  }
};
