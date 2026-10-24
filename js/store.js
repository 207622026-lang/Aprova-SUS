// Gerenciador de Armazenamento Local (LocalStorage) e Estado Reativo
// Garante persistência total dos dados do estudante, sem login e sem servidores externos.

(function() {
  const STORAGE_KEY = "aprova_sus_guarulhos_2026_data";

  const DEFAULT_STATE = {
    version: "1.0",
    theme: "light",
    completedTopics: [],
    topicNotes: {},
    answers: {}, // questionId: { letter, isCorrect, timestamp, disciplineId, topicId }
    favoriteQuestions: [],
    favoriteCards: [],
    mockExamHistory: [], // { date, score, totalQuestions, correct, wrong, blank, seconds, disciplineScores, weakTopics }
    flashcardReviews: {}, // cardId: { level, reps, lastReview, nextReview }
    studyTimeSeconds: 0,
    studySessions: [],
    plannerSettings: {
      dailyMinutes: 90,
      daysOfWeek: [1, 2, 3, 4, 5, 6], // Seg a Sáb
      examDate: "2026-11-29T09:00:00"
    },
    dailyTasksStatus: {}, // 'YYYY-MM-DD_taskId': true
    lastVisited: null // { disciplineId, topicId }
  };

  class Store {
    constructor() {
      this.state = this.loadState();
      this.listeners = [];
    }

    loadState() {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          return { ...DEFAULT_STATE, ...parsed };
        }
      } catch (e) {
        console.error("Erro ao carregar dados do localStorage:", e);
      }
      return JSON.parse(JSON.stringify(DEFAULT_STATE));
    }

    saveState() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
        this.notifyListeners();
      } catch (e) {
        console.error("Erro ao salvar dados no localStorage:", e);
      }
    }

    subscribe(listener) {
      this.listeners.push(listener);
      return () => {
        this.listeners = this.listeners.filter(l => l !== listener);
      };
    }

    notifyListeners() {
      this.listeners.forEach(fn => fn(this.state));
    }

    // --- TEMA (Claro / Escuro) ---
    getTheme() {
      return this.state.theme || "light";
    }

    setTheme(theme) {
      this.state.theme = theme;
      this.saveState();
      this.applyTheme();
    }

    toggleTheme() {
      const newTheme = this.getTheme() === "dark" ? "light" : "dark";
      this.setTheme(newTheme);
      return newTheme;
    }

    applyTheme() {
      const theme = this.getTheme();
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }

    // --- CONTAGEM REGRESSIVA OFICIAL ---
    getExamCountdown() {
      const examDate = new Date(this.state.plannerSettings.examDate || "2026-11-29T09:00:00").getTime();
      const now = new Date().getTime();
      const difference = examDate - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds, isPast: false };
    }

    // --- PROGRESSO DAS AULAS ---
    isTopicCompleted(topicId) {
      return (this.state.completedTopics || []).includes(topicId);
    }

    toggleTopicCompleted(topicId) {
      if (!this.state.completedTopics) this.state.completedTopics = [];
      const idx = this.state.completedTopics.indexOf(topicId);
      if (idx > -1) {
        this.state.completedTopics.splice(idx, 1);
      } else {
        this.state.completedTopics.push(topicId);
      }
      this.saveState();
      return this.isTopicCompleted(topicId);
    }

    getTopicNote(topicId) {
      return (this.state.topicNotes && this.state.topicNotes[topicId]) || "";
    }

    saveTopicNote(topicId, noteText) {
      if (!this.state.topicNotes) this.state.topicNotes = {};
      this.state.topicNotes[topicId] = noteText;
      this.saveState();
    }

    setLastVisited(disciplineId, topicId) {
      this.state.lastVisited = { disciplineId, topicId, timestamp: Date.now() };
      this.saveState();
    }

    getLastVisited() {
      return this.state.lastVisited;
    }

    // --- RESPOSTAS DE QUESTÕES ---
    recordAnswer(questionId, selectedLetter, isCorrect, disciplineId, topicId) {
      if (!this.state.answers) this.state.answers = {};
      this.state.answers[questionId] = {
        selectedLetter,
        isCorrect: Boolean(isCorrect),
        timestamp: Date.now(),
        disciplineId,
        topicId
      };
      this.saveState();
    }

    getAnswer(questionId) {
      return this.state.answers && this.state.answers[questionId];
    }

    toggleFavoriteQuestion(questionId) {
      if (!this.state.favoriteQuestions) this.state.favoriteQuestions = [];
      const idx = this.state.favoriteQuestions.indexOf(questionId);
      if (idx > -1) {
        this.state.favoriteQuestions.splice(idx, 1);
      } else {
        this.state.favoriteQuestions.push(questionId);
      }
      this.saveState();
      return this.isFavoriteQuestion(questionId);
    }

    isFavoriteQuestion(questionId) {
      return (this.state.favoriteQuestions || []).includes(questionId);
    }

    // --- FLASHCARDS & REPETIÇÃO ESPAÇADA ---
    toggleFavoriteCard(cardId) {
      if (!this.state.favoriteCards) this.state.favoriteCards = [];
      const idx = this.state.favoriteCards.indexOf(cardId);
      if (idx > -1) {
        this.state.favoriteCards.splice(idx, 1);
      } else {
        this.state.favoriteCards.push(cardId);
      }
      this.saveState();
      return this.isFavoriteCard(cardId);
    }

    isFavoriteCard(cardId) {
      return (this.state.favoriteCards || []).includes(cardId);
    }

    recordFlashcardReview(cardId, difficulty) {
      // difficulty: 'hard' (1 dia), 'medium' (3 dias), 'easy' (6 dias)
      if (!this.state.flashcardReviews) this.state.flashcardReviews = {};
      const current = this.state.flashcardReviews[cardId] || { reps: 0, level: 'new' };
      
      let days = 1;
      if (difficulty === 'easy') days = 5 + (current.reps * 2);
      else if (difficulty === 'medium') days = 2 + current.reps;
      else days = 1; // errou/difícil, revisa logo

      const now = Date.now();
      this.state.flashcardReviews[cardId] = {
        reps: current.reps + 1,
        difficulty,
        lastReviewed: now,
        nextReview: now + (days * 24 * 60 * 60 * 1000)
      };
      this.saveState();
    }

    getFlashcardReview(cardId) {
      return this.state.flashcardReviews && this.state.flashcardReviews[cardId];
    }

    // --- TEMPO DE ESTUDO & CRONÔMETRO ---
    addStudyTime(seconds) {
      if (isNaN(seconds) || seconds <= 0) return;
      this.state.studyTimeSeconds = (this.state.studyTimeSeconds || 0) + seconds;
      if (!this.state.studySessions) this.state.studySessions = [];
      this.state.studySessions.push({
        date: new Date().toISOString(),
        durationSeconds: seconds
      });
      this.saveState();
    }

    getTotalStudyTimeFormatted() {
      const totalSec = this.state.studyTimeSeconds || 0;
      const hours = Math.floor(totalSec / 3600);
      const minutes = Math.floor((totalSec % 3600) / 60);
      return `${hours}h ${minutes.toString().padStart(2, '0')}m`;
    }

    // --- SIMULADOS ---
    saveMockExamResult(result) {
      if (!this.state.mockExamHistory) this.state.mockExamHistory = [];
      this.state.mockExamHistory.unshift(result);
      if (result.timeSpentSeconds) {
        this.addStudyTime(result.timeSpentSeconds);
      }
      this.saveState();
    }

    getLastMockExam() {
      return (this.state.mockExamHistory && this.state.mockExamHistory[0]) || null;
    }

    // --- PLANNER / CRONOGRAMA ---
    updatePlannerSettings(settings) {
      this.state.plannerSettings = { ...this.state.plannerSettings, ...settings };
      this.saveState();
    }

    isDailyTaskCompleted(taskId) {
      const dateStr = new Date().toISOString().slice(0, 10);
      const key = `${dateStr}_${taskId}`;
      return Boolean(this.state.dailyTasksStatus && this.state.dailyTasksStatus[key]);
    }

    toggleDailyTask(taskId) {
      const dateStr = new Date().toISOString().slice(0, 10);
      const key = `${dateStr}_${taskId}`;
      if (!this.state.dailyTasksStatus) this.state.dailyTasksStatus = {};
      this.state.dailyTasksStatus[key] = !this.state.dailyTasksStatus[key];
      this.saveState();
      return this.state.dailyTasksStatus[key];
    }

    // --- ESTATÍSTICAS E RECOMENDAÇÃO INTELIGENTE ---
    getStats() {
      // 1. Contagem de tópicos totais vs completados
      let totalTopicsCount = 0;
      const disciplineStats = {};

      window.EXAM_INFO.disciplines.forEach(d => {
        disciplineStats[d.id] = {
          id: d.id,
          name: d.name,
          shortName: d.shortName,
          color: d.color,
          weight: d.weight,
          topicsTotal: 0,
          topicsCompleted: 0,
          questionsAnswered: 0,
          questionsCorrect: 0,
          questionsWrong: 0,
          accuracy: 0
        };
      });

      if (window.COURSES_DATA) {
        window.COURSES_DATA.forEach(course => {
          if (disciplineStats[course.disciplineId]) {
            course.modules.forEach(mod => {
              mod.topics.forEach(t => {
                totalTopicsCount++;
                disciplineStats[course.disciplineId].topicsTotal++;
                if (this.isTopicCompleted(t.id)) {
                  disciplineStats[course.disciplineId].topicsCompleted++;
                }
              });
            });
          }
        });
      }

      // 2. Análise real das questões respondidas
      const answers = this.state.answers || {};
      const answeredKeys = Object.keys(answers);
      const totalAnswered = answeredKeys.length;
      let totalCorrect = 0;
      let totalWrong = 0;

      const topicErrors = {}; // topicId: count

      answeredKeys.forEach(qId => {
        const item = answers[qId];
        if (item.isCorrect) {
          totalCorrect++;
        } else {
          totalWrong++;
          if (item.topicId) {
            topicErrors[item.topicId] = (topicErrors[item.topicId] || 0) + 1;
          }
        }

        if (item.disciplineId && disciplineStats[item.disciplineId]) {
          disciplineStats[item.disciplineId].questionsAnswered++;
          if (item.isCorrect) {
            disciplineStats[item.disciplineId].questionsCorrect++;
          } else {
            disciplineStats[item.disciplineId].questionsWrong++;
          }
        }
      });

      // Calcula taxa de acerto por disciplina
      let worstDiscipline = null;
      let minAccuracy = 101;

      Object.values(disciplineStats).forEach(ds => {
        if (ds.questionsAnswered > 0) {
          ds.accuracy = Math.round((ds.questionsCorrect / ds.questionsAnswered) * 100);
          if (ds.accuracy < minAccuracy) {
            minAccuracy = ds.accuracy;
            worstDiscipline = ds;
          }
        }
      });

      const overallAccuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
      const completedTopicsCount = (this.state.completedTopics || []).length;
      const progressPercent = totalTopicsCount > 0 ? Math.round((completedTopicsCount / totalTopicsCount) * 100) : 0;

      // Disciplinas iniciadas e concluídas
      let disciplinesStarted = 0;
      let disciplinesCompleted = 0;
      Object.values(disciplineStats).forEach(ds => {
        if (ds.topicsCompleted > 0) disciplinesStarted++;
        if (ds.topicsTotal > 0 && ds.topicsCompleted === ds.topicsTotal) disciplinesCompleted++;
      });

      // 3. Recomendação Inteligente Real
      let smartRecommendation = null;
      if (totalAnswered >= 3) {
        // Encontra o tópico com maior número de erros
        const sortedTopicsWithErrors = Object.entries(topicErrors).sort((a, b) => b[1] - a[1]);
        if (sortedTopicsWithErrors.length > 0 && sortedTopicsWithErrors[0][1] > 0) {
          const worstTopicId = sortedTopicsWithErrors[0][0];
          // Procura o nome do tópico
          let topicName = worstTopicId;
          let discId = "especificos";
          window.COURSES_DATA.forEach(c => {
            c.modules.forEach(m => {
              m.topics.forEach(t => {
                if (t.id === worstTopicId) {
                  topicName = t.title;
                  discId = c.disciplineId;
                }
              });
            });
          });
          smartRecommendation = {
            type: "weakness",
            disciplineId: discId,
            topicId: worstTopicId,
            title: `Revisar: ${topicName}`,
            description: `Você cometeu ${sortedTopicsWithErrors[0][1]} erro(s) recente(s) neste assunto. Recomendamos reler a teoria e refazer os exercícios de fixação.`
          };
        } else if (worstDiscipline && worstDiscipline.accuracy < 70) {
          smartRecommendation = {
            type: "discipline",
            disciplineId: worstDiscipline.id,
            title: `Reforçar: ${worstDiscipline.name}`,
            description: `Sua taxa de acerto nesta matéria é de ${worstDiscipline.accuracy}%. Dedique sua próxima sessão para elevar seu rendimento.`
          };
        }
      }

      // Se não houver recomendação por fraqueza, sugerir o próximo tópico não estudado priorizando Específicos (peso 5)
      if (!smartRecommendation && window.COURSES_DATA) {
        const priorityOrder = ["especificos", "sus", "portugues", "matematica", "informatica"];
        let nextTopic = null;
        for (const discId of priorityOrder) {
          const course = window.COURSES_DATA.find(c => c.disciplineId === discId);
          if (course) {
            for (const mod of course.modules) {
              for (const top of mod.topics) {
                if (!this.isTopicCompleted(top.id)) {
                  nextTopic = { discId, top };
                  break;
                }
              }
              if (nextTopic) break;
            }
          }
          if (nextTopic) break;
        }

        if (nextTopic) {
          smartRecommendation = {
            type: "next_lesson",
            disciplineId: nextTopic.discId,
            topicId: nextTopic.top.id,
            title: `Avançar no Edital: ${nextTopic.top.title}`,
            description: `Este tópico de ${disciplineStats[nextTopic.discId].shortName} ainda não foi marcado como estudado. Que tal dominar esse conteúdo hoje?`
          };
        }
      }

      return {
        totalTopicsCount,
        completedTopicsCount,
        progressPercent,
        disciplinesStarted,
        disciplinesCompleted,
        totalAnswered,
        totalCorrect,
        totalWrong,
        overallAccuracy,
        disciplineStats,
        worstDiscipline,
        smartRecommendation,
        lastMock: this.getLastMockExam(),
        studyTimeFormatted: this.getTotalStudyTimeFormatted()
      };
    }

    // --- BACKUP & RESTAURAÇÃO ---
    exportBackup() {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.state, null, 2));
      const downloadAnchor = document.createElement("a");
      const date = new Date().toISOString().slice(0, 10);
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `aprova_sus_backup_${date}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    }

    importBackup(jsonString) {
      try {
        const parsed = JSON.parse(jsonString);
        if (parsed && typeof parsed === "object") {
          this.state = { ...DEFAULT_STATE, ...parsed };
          this.saveState();
          this.applyTheme();
          return { success: true };
        }
      } catch (err) {
        return { success: false, error: err.message };
      }
      return { success: false, error: "Arquivo JSON inválido" };
    }

    resetAllData() {
      this.state = JSON.parse(JSON.stringify(DEFAULT_STATE));
      this.saveState();
      this.applyTheme();
    }
  }

  window.AppStore = new Store();
})();
