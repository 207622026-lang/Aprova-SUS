// Baralho de Flashcards Estratégicos - Atendente SUS Guarulhos IBAM 2026
// Fórmulas, regras, leis, diferenciações de conceitos e rotinas administrativas do SUS.

window.FLASHCARDS_DATA = [
  // ==============================
  // SUS & Legislação
  // ==============================
  {
    id: "fc_sus_01",
    disciplineId: "sus",
    topic: "Princípios do SUS",
    front: "O que diferencia o princípio da EQUIDADE do princípio da IGUALDADE no SUS?",
    back: "A Igualdade prega que todos são iguais perante a lei, enquanto a EQUIDADE prega tratar desigualmente os desiguais ('dar mais a quem mais precisa'), priorizando populações vulneráveis para reduzir as disparidades sociais em saúde.",
    tags: ["Doutrinários", "Pegadinha IBAM"]
  },
  {
    id: "fc_sus_02",
    disciplineId: "sus",
    topic: "Constituição Federal / Art. 196",
    front: "Qual é a redação exata do Artigo 196 da CF/88 quanto ao conceito de saúde?",
    back: "'A saúde é direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas que visem à redução do risco de doença e de outros agravos e ao acesso universal e igualitário às ações e serviços para sua promoção, proteção e recuperação.'",
    tags: ["Constituição", "Artigo 196"]
  },
  {
    id: "fc_sus_03",
    disciplineId: "sus",
    topic: "Lei 8.142/90 / Controle Social",
    front: "Qual a periodicidade da Conferência de Saúde e a composição paritária do Conselho de Saúde?",
    back: "• Conferência de Saúde: reúne-se a cada 4 ANOS.\n• Conselho de Saúde: órgão PERMANENTE e DELIBERATIVO.\n• Paridade: 50% de representantes dos Usuários, 25% de Trabalhadores da Saúde e 25% de Gestores e Prestadores.",
    tags: ["Lei 8142", "Controle Social"]
  },
  {
    id: "fc_sus_04",
    disciplineId: "sus",
    topic: "Decreto 7.508/11 / Portas de Entrada",
    front: "Quais são as 4 Portas de Entrada oficiais do SUS segundo o Decreto nº 7.508/2011?",
    back: "1. Atenção Primária (UBS / USF)\n2. Atenção de Urgência e Emergência (UPA, SAMU, Prontos-Socorros)\n3. Atenção Psicossocial (CAPS)\n4. Serviços Especiais de Acesso Aberto.",
    tags: ["Decreto 7508", "Portas de Entrada"]
  },
  {
    id: "fc_sus_05",
    disciplineId: "sus",
    topic: "Constituição Federal / Art. 199",
    front: "A iniciativa privada pode atuar no SUS? Em que condição e sob quais vedações?",
    back: "Sim, de forma COMPLEMENTAR, mediante contrato de direito público ou convênio, com preferência a entidades filantrópicas e sem fins lucrativos.\nVEDAÇÃO: É proibido destinar recursos públicos para auxílios ou subvenções a empresas com fins lucrativos.",
    tags: ["Artigo 199", "Iniciativa Privada"]
  },
  {
    id: "fc_sus_06",
    disciplineId: "sus",
    topic: "Decreto 7.508/11 / Região de Saúde",
    front: "Quais são as 5 ações/serviços mínimos obrigatórios para instituir uma Região de Saúde?",
    back: "1. Atenção Primária\n2. Urgência e Emergência\n3. Atenção Psicossocial\n4. Atenção Ambulatorial Especializada e Hospitalar\n5. Vigilância em Saúde.",
    tags: ["Região de Saúde", "Decreto 7508"]
  },

  // ==============================
  // Conhecimentos Específicos
  // ==============================
  {
    id: "fc_esp_01",
    disciplineId: "especificos",
    topic: "Acolhimento no SUS",
    front: "O Acolhimento no SUS é exclusivo de médicos e enfermeiros na sala de triagem?",
    back: "NÃO! O Acolhimento é uma postura ética e diretriz operacional do HumanizaSUS compartilhada por TODOS os trabalhadores da unidade, inclusive atendentes, recepcionistas e seguranças, desde a chegada até a saída do paciente.",
    tags: ["HumanizaSUS", "Acolhimento"]
  },
  {
    id: "fc_esp_02",
    disciplineId: "especificos",
    topic: "Atendimento Prioritário / Idoso",
    front: "A partir de qual idade surge a prioridade geral e a 'superprioridade' da pessoa idosa?",
    back: "• Prioridade Legal Geral: a partir dos 60 ANOS (Estatuto da Pessoa Idosa).\n• SUPERPRIORIDADE: a partir dos 80 ANOS (preferência sobre todos os outros idosos, exceto emergências clínicas).",
    tags: ["Estatuto do Idoso", "Prioridades"]
  },
  {
    id: "fc_esp_03",
    disciplineId: "especificos",
    topic: "Prontuários Médicos",
    front: "A quem pertence o prontuário do paciente e qual o tempo mínimo legal de guarda em papel?",
    back: "O prontuário pertence exclusivamente ao PACIENTE (a instituição é guardiã e fiel depositária). O tempo de guarda em papel é de no mínimo 20 ANOS após o último registro.",
    tags: ["Prontuário", "Sigilo"]
  },
  {
    id: "fc_esp_04",
    disciplineId: "especificos",
    topic: "Cartão Nacional de Saúde (CNS)",
    front: "Quantos dígitos possui o CNS e o que indicam os números iniciais?",
    back: "Possui 15 DÍGITOS.\n• Início 1 ou 2: Cartão Definitivo (base CPF validada).\n• Início 7 ou 8: Cartão Provisório (gerado em cadastro rápido com pendências).",
    tags: ["CadSUS", "CNS"]
  },
  {
    id: "fc_esp_05",
    disciplineId: "especificos",
    topic: "Sistemas do SUS: SISREG vs SIA vs e-SUS",
    front: "Qual a diferença de função entre SISREG, e-SUS APS (PEC) e SIA/SUS?",
    back: "• SISREG: Regulação de consultas com especialistas, exames complexos e leitos hospitalares.\n• e-SUS APS (PEC): Prontuário eletrônico da atenção primária (cadastro da família, agendamento de consultas da UBS).\n• SIA/SUS: Sistema ambulatorial para controle de faturamento e produção da unidade.",
    tags: ["Sistemas SUS", "Diferenças"]
  },
  {
    id: "fc_esp_06",
    disciplineId: "especificos",
    topic: "LGPD e Dados de Saúde",
    front: "Como a LGPD (Lei 13.709/18) classifica os dados de saúde e histórico médico?",
    back: "Classifica como DADOS PESSOAIS SENSÍVEIS (Art. 5º, II). Seu tratamento exige rigoroso dever de sigilo profissional, finalidade legítima e salvaguardas de segurança para evitar vazamento ou discriminação.",
    tags: ["LGPD", "Dados Sensíveis"]
  },
  {
    id: "fc_esp_07",
    disciplineId: "especificos",
    topic: "Lei 13.460/17 / Ouvidoria",
    front: "Qual o prazo padrão da Ouvidoria do serviço público para responder ao usuário?",
    back: "Prazo de até 30 DIAS, prorrogável de forma justificada por igual período uma única vez.",
    tags: ["Lei 13460", "Ouvidoria"]
  },
  {
    id: "fc_esp_08",
    disciplineId: "especificos",
    topic: "Respeito à Diversidade / Nome Social",
    front: "Como deve ser feita a chamada pública de pessoas travestis e transexuais no balcão do SUS?",
    back: "SEMPRE pelo NOME SOCIAL declarado no cadastro ou Cartão SUS, em cumprimento ao Decreto nº 8.727/2016 e à Carta de Direitos dos Usuários da Saúde, evitando qualquer constrangimento civil.",
    tags: ["Nome Social", "Ética"]
  },

  // ==============================
  // Língua Portuguesa
  // ==============================
  {
    id: "fc_port_01",
    disciplineId: "portugues",
    topic: "Crase Facultativa (M-P-A)",
    front: "Quais são os 3 casos clássicos em que o uso da crase é facultativo?",
    back: "Regra do M-P-A:\n1. Diante de nome próprio feminino de Mulher (Fui a / à Maria).\n2. Diante de pronome Possessivo feminino singular (Refiro-me a / à minha unidade).\n3. Após a preposição Até (Caminhei até a / até à farmácia).",
    tags: ["Crase", "Gramática"]
  },
  {
    id: "fc_port_02",
    disciplineId: "portugues",
    topic: "Crase Proibida",
    front: "Cite 4 casos em que o uso da crase é estritamente PROIBIDO:",
    back: "1. Antes de palavra masculina (Andar a pé, pagar a prazo).\n2. Antes de verbo (Começou a tossir).\n3. Antes de pronomes pessoais e indefinidos (Entregou a ela, a todos).\n4. Entre palavras repetidas (Dia a dia, cara a cara).",
    tags: ["Crase", "Proibições"]
  },
  {
    id: "fc_port_03",
    disciplineId: "portugues",
    topic: "Concordância com o Verbo HAVER",
    front: "Qual a regra de concordância do verbo HAVER no sentido de existir ou tempo decorrido?",
    back: "É verbo impessoal: NÃO possui sujeito e fica obrigatoriamente no SINGULAR!\nEx: 'Havia dez pacientes na sala' (e nunca 'haviam').",
    tags: ["Concordância", "Verbo Haver"]
  },
  {
    id: "fc_port_04",
    disciplineId: "portugues",
    topic: "Acentuação / Paroxítonas vs Proparoxítonas",
    front: "Qual a regra de ouro das palavras proparoxítonas e por que 'Saúde' é acentuada?",
    back: "• Proparoxítonas: 100% delas são acentuadas (médico, clínico, público).\n• Saúde (sa-ú-de): é acentuada pela regra do HIATO TÔNICO (vogal 'u' tônica sozinha na sílaba, sem nh depois).",
    tags: ["Acentuação", "Hiato"]
  },

  // ==============================
  // Matemática
  // ==============================
  {
    id: "fc_mat_01",
    disciplineId: "matematica",
    topic: "MMC vs MDC em Problemas",
    front: "Como saber se um problema de concurso pede MMC ou MDC?",
    back: "• MMC: Ideia de TEMPO FUTURO, repetição periódica ou acontecimentos que voltam a COINCIDIR simultaneamente ('Quando se encontrarão de novo?').\n• MDC: Ideia de DIVISÃO, corte ou repartição em lotes do MAIOR tamanho possível sem sobras.",
    tags: ["Aritmética", "MMC/MDC"]
  },
  {
    id: "fc_mat_02",
    disciplineId: "matematica",
    topic: "Regra de Três Inversa",
    front: "Como identificar e resolver uma regra de três inversamente proporcional?",
    back: "Ocorre quando o aumento de uma grandeza provoca a redução proporcional da outra (ex: mais atendentes = menos tempo de fila; maior velocidade = menor tempo).\nRESOLUÇÃO: Multiplica-se em LINHA HORIZONTAL DIRETA (A * B = C * X).",
    tags: ["Proporcionalidade", "Regra de Três"]
  },
  {
    id: "fc_mat_03",
    disciplineId: "matematica",
    topic: "Conversão de Tempo Decimal",
    front: "A quanto equivale 1,4 hora em horas e minutos?",
    back: "Equivale a 1 HORA e 24 MINUTOS!\n(Pois 1 hora inteira + 0,4 * 60 minutos = 24 minutos. NUNCA confunda 1,4h com 1h40m!).",
    tags: ["Unidades", "Medidas"]
  },
  {
    id: "fc_mat_04",
    disciplineId: "matematica",
    topic: "Equivalência de Volume e Capacidade",
    front: "Quantos litros há em 1 m³ (metro cúbico) e em 1 dm³ (decímetro cúbico)?",
    back: "• 1 m³ = 1.000 litros\n• 1 dm³ = 1 litro\n• 1 cm³ = 1 mililitro (mL).",
    tags: ["Geometria", "Capacidade"]
  },

  // ==============================
  // Noções de Informática
  // ==============================
  {
    id: "fc_info_01",
    disciplineId: "informatica",
    topic: "Arquivos no Windows / Caracteres Proibidos",
    front: "Quais caracteres NÃO podem ser usados para nomear pastas e arquivos no Windows?",
    back: "São 9 caracteres proibidos: \\ / : * ? \" < > |\n(Dica do 'bonequinho': barras, dois-pontos, asterisco, interrogação, aspas, menor, maior e barra vertical).",
    tags: ["Windows", "Arquivos"]
  },
  {
    id: "fc_info_02",
    disciplineId: "informatica",
    topic: "Excel: Dois-pontos (:) vs Ponto e vírgula (;)",
    front: "Qual a diferença crucial entre =SOMA(A1:A5) e =SOMA(A1;A5) no Excel?",
    back: "• Dois-pontos (:) = 'ATÉ' (intervalo contínuo: soma A1, A2, A3, A4 e A5).\n• Ponto e vírgula (;) = 'E' (células isoladas: soma APENAS a célula A1 e a célula A5).",
    tags: ["Planilhas", "Fórmulas"]
  },
  {
    id: "fc_info_03",
    disciplineId: "informatica",
    topic: "Segurança / Tipos de Malware",
    front: "Qual a diferença entre Vírus, Worm e Ransomware?",
    back: "• Vírus: Precisa de um arquivo hospedeiro e da execução pelo usuário para se propagar.\n• Worm: Propaga-se sozinho pela rede explorando brechas, sem precisar de hospedeiro.\n• Ransomware: Criptografa arquivos do usuário e exige resgate financeiro para fornecer a chave.",
    tags: ["Segurança", "Malware"]
  },
  {
    id: "fc_info_04",
    disciplineId: "informatica",
    topic: "Correio Eletrônico / Campo Cco",
    front: "Por que usar o campo Cco (Cópia Oculta) ao enviar e-mails em massa na saúde?",
    back: "Para que nenhum destinatário veja os endereços de e-mail dos outros cidadãos, garantindo privacidade, discrição e total conformidade com a LGPD.",
    tags: ["E-mail", "LGPD"]
  }
];
