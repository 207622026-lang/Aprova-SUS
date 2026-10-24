// Informações Oficiais do Concurso Atendente SUS Guarulhos - IBAM
// Edital nº 06/2026-SGE01

window.EXAM_INFO = {
  title: "Atendente SUS",
  organizer: "IBAM - Instituto Brasileiro de Administração Municipal",
  agency: "Prefeitura Municipal de Guarulhos / SP",
  noticeNumber: "Edital de Abertura nº 06/2026-SGE01",
  officialUrl: "https://www.ibamsp-concursos.org.br/informacoes/192",
  officialDocuments: [
    {
      title: "01 - Edital de Abertura Oficial",
      url: "https://anexos-r2.selecao.net.br/uploads/810/concursos/192/anexos/254c0afa-2fd4-402f-adb0-dbe3299074f9.pdf",
      description: "Edital completo com disposições preliminares, inscrições, vagas e regras."
    },
    {
      title: "02 - Retificação do Edital de Abertura",
      url: "https://anexos-r2.selecao.net.br/uploads/810/concursos/192/anexos/1da80b12-cd59-4f21-b567-9994a3c05149.pdf",
      description: "Retificação oficial sobre cronograma e disposições gerais."
    },
    {
      title: "Página Oficial do Concurso no IBAM",
      url: "https://www.ibamsp-concursos.org.br/informacoes/192",
      description: "Área de acompanhamento de comunicados, convocações e gabaritos."
    }
  ],
  // Data prevista: 29/11/2026 às 09:00 (sujeita à confirmação em edital de convocação)
  expectedDateIso: "2026-11-29T09:00:00",
  expectedDateLabel: "29/11/2026 (Data Prevista)",
  durationMinutes: 180, // 3 horas
  totalQuestions: 40,
  maxScore: 100,
  passingScore: 50,
  disciplines: [
    {
      id: "portugues",
      name: "Língua Portuguesa",
      shortName: "Português",
      questionsCount: 10,
      weight: 1,
      maxPoints: 10,
      color: "blue",
      badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
      icon: "book-open",
      description: "Interpretação textual, gramática normativa, sintaxe, concordância e regência."
    },
    {
      id: "matematica",
      name: "Matemática",
      shortName: "Matemática",
      questionsCount: 5,
      weight: 2,
      maxPoints: 10,
      color: "emerald",
      badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
      icon: "calculator",
      description: "Operações fundamentais, MMC/MDC, porcentagem, regra de três, equações e medidas."
    },
    {
      id: "informatica",
      name: "Noções de Informática",
      shortName: "Informática",
      questionsCount: 5,
      weight: 2,
      maxPoints: 10,
      color: "cyan",
      badgeColor: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300",
      icon: "laptop",
      description: "Hardware, Windows, LibreOffice/MS Office, internet, correio e segurança da informação."
    },
    {
      id: "sus",
      name: "Políticas Públicas de Saúde — SUS",
      shortName: "Legislação SUS",
      questionsCount: 10,
      weight: 2,
      maxPoints: 20,
      color: "teal",
      badgeColor: "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300",
      icon: "heart-pulse",
      description: "CF/88 arts. 196 a 200, Leis 8.080/90 e 8.142/90, Decreto 7.508/11 e PNAB."
    },
    {
      id: "especificos",
      name: "Conhecimentos Específicos de Atendente SUS",
      shortName: "Específicos Atendente",
      questionsCount: 10,
      weight: 5,
      maxPoints: 50,
      color: "indigo",
      badgeColor: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300",
      icon: "shield-check",
      description: "50% da pontuação total da prova! Atendimento, CadSUS, SISREG, e-SUS PEC, prontuários, LGPD, Lei 13.460/17 e ética."
    }
  ]
};
