// Conteúdo Programático Oficial Didático - Atendente SUS Guarulhos IBAM 2026
// Módulos, tópicos, explicações passo a passo, resumos, exemplos práticos na saúde, pegadinhas IBAM e questões de fixação.

window.COURSES_DATA = [
  // ==========================================
  // 1. LÍNGUA PORTUGUESA (10 questões - Peso 1)
  // ==========================================
  {
    disciplineId: "portugues",
    title: "Língua Portuguesa",
    shortName: "Português",
    weightNotice: "10 questões • Peso 1 • 10 pontos",
    color: "blue",
    modules: [
      {
        id: "port_mod1",
        title: "Módulo 1: Leitura, Interpretação e Tipologia Textual",
        topics: [
          {
            id: "port_top1",
            title: "Compreensão vs Interpretação e Sentidos Explícitos/Implícitos",
            estimatedMinutes: 25,
            explanation: `Para o IBAM, é essencial diferenciar **compreensão** de **interpretação**:
• **Compreensão Textual**: Trata das informações **explícitas**, ditas com todas as letras no texto ("Segundo o texto...", "O autor afirma que..."). Você encontra a resposta diretamente na superfície textual.
• **Interpretação Textual**: Trata das informações **implícitas**, que exigem **inferência** ("Depreende-se do texto...", "Pode-se concluir que..."). Você deduz com base nas pistas dadas pelo autor, sem extrapolar os limites do texto.
• **Pressupostos vs Subentendidos**: 
  - *Pressuposto*: decorre de uma palavra ou marcador ("João *parou* de fumar" -> pressupõe que ele fumava antes).
  - *Subentendido*: insinuação que depende da interpretação do contexto pelo leitor.`,
            summary: [
              "Compreensão = o que está explícito (está no texto).",
              "Interpretação = o que se deduz logicamente (inferência a partir do texto).",
              "Extrapolação: Erro clássico ao marcar o que você acha e não o que o texto fundamenta.",
              "Redução: Erro clássico ao marcar uma alternativa incompleta que restringe o sentido geral."
            ],
            practicalExamples: "Na recepção da UBS: Um cartaz diz 'A partir de hoje, as fichas prioritárias serão emitidas exclusivamente no guichê 1'. Compreensão: As fichas prioritárias estão no guichê 1. Inferência (pressuposto): Antes de hoje, as fichas eram emitidas de outra forma ou em outros guichês.",
            examTips: "A banca IBAM costuma colocar textos de crônicas ou artigos de opinião sobre saúde e convivência urbana. Cuidado com alternativas que usam palavras restritivas como 'sempre', 'nunca', 'apenas' ou 'exclusivamente' quando o texto original foi moderado.",
            traps: "Pegadinha IBAM: A alternativa parece totalmente verdadeira na vida real, mas NÃO foi dita nem sugerida no texto. A resposta certa DEVE ter respaldo no texto da prova!",
            flashcardPreview: [
              { front: "Qual a diferença entre compreender e interpretar um texto?", back: "Compreender é identificar o que está expresso e explícito no texto; interpretar é deduzir ou inferir logicamente a partir das pistas textuais." }
            ],
            fixationQuestions: [
              {
                statement: "Ao ler a frase em um informe da Secretaria de Saúde de Guarulhos: 'A UBS Cecap voltou a realizar coletas de exames laboratoriais no primeiro horário', é correto inferir que:",
                options: [
                  "A UBS Cecap nunca havia realizado coletas de exames laboratoriais anteriormente.",
                  "A realização de coletas no primeiro horário havia sido interrompida em momento anterior.",
                  "Todas as unidades de saúde de Guarulhos agora realizam coletas no mesmo horário.",
                  "Os pacientes preferem realizar exames exclusivamente no período vespertino."
                ],
                correctIndex: 1,
                justification: "O verbo 'voltou a realizar' pressupõe que a atividade já acontecia no passado e sofreu uma interrupção temporária."
              }
            ]
          },
          {
            id: "port_top2",
            title: "Coesão, Coerência e Conectivos (Conjunções)",
            estimatedMinutes: 30,
            explanation: `A coesão textual é a ligação harmônica entre palavras, frases e parágrafos através de conectivos (conjunções, pronomes, preposições):
1. **Conjunções Coordenativas**:
   - *Adversativas* (ideia de oposição/contraste): mas, porém, contudo, todavia, entretanto, no entanto.
   - *Conclusivas* (conclusão/fechamento): portanto, logo, por isso, assim, por conseguinte.
   - *Explicativas* (justificativa): porque, pois (antes do verbo), que, já que.
2. **Conjunções Subordinativas**:
   - *Concessivas* (oposição suave que não anula a oração principal): embora, ainda que, mesmo que, conquanto, apesar de que.
   - *Causais* (motivo da ação): visto que, como (no início da frase), já que, uma vez que.
   - *Condicionais*: se, caso, desde que.
   - *Temporais*: quando, enquanto, assim que, logo que.`,
            summary: [
              "'Mas', 'porém', 'contudo' = oposição total.",
              "'Embora', 'conquanto', 'ainda que' = concessão (exige verbo no subjuntivo).",
              "'Portanto', 'por conseguinte' = conclusão.",
              "'Como' no início da frase = causal ('Como choveu, cheguei atrasado')."
            ],
            practicalExamples: "'O paciente chegou fora do horário agendado, CONTUDO a equipe realizou o acolhimento para avaliação de risco.' O conectivo 'contudo' expressa oposição/ressalva.",
            examTips: "O IBAM adora pedir: 'O termo sublinhado estabelece relação de...' ou 'Sem alterar o sentido do texto, a conjunção EMBORA pode ser substituída por...'. A resposta clássica para 'embora' é 'conquanto' ou 'ainda que'.",
            traps: "Não confunda CAUSA com CONSEQUÊNCIA: A causa ocorre ANTES no tempo cronológico; a consequência ocorre DEPOIS. Exemplo: 'Não tomou o remédio (causa), por isso a febre persistiu (consequência)'.",
            flashcardPreview: [
              { front: "Quais conjunções expressam concessão?", back: "Embora, conquanto, ainda que, mesmo que, apesar de que, se bem que." }
            ],
            fixationQuestions: [
              {
                statement: "Assinale a alternativa em que o conectivo destacado introduz uma oração de valor concessivo:",
                options: [
                  "O atendimento foi mantido, EMBORA faltassem alguns minutos para o término do expediente.",
                  "O usuário solicitou uma declaração, PORTANTO o atendente realizou a impressão do documento.",
                  "A agenda foi aberta ontem, PORÉM já não há vagas para a especialidade solicitada.",
                  "O profissional explicou a dosagem do medicamento PORQUE o paciente demonstrou dúvidas."
                ],
                correctIndex: 0,
                justification: "'Embora' introduz ideia de concessão (um obstáculo que não impede a realização da oração principal)."
              }
            ]
          },
          {
            id: "port_top3",
            title: "Ortografia, Acentuação Gráfica e Novo Acordo",
            estimatedMinutes: 25,
            explanation: `Regras essenciais de acentuação gráfica cobradas pelo IBAM:
1. **Proparoxítonas**: TODAS são acentuadas (ex: mé-di-co, clí-ni-co, pú-bli-co, re-méd-io/paroxítona terminada em ditongo).
2. **Paroxítonas**: Acentuam-se as terminadas em: R, X, N, L, I(s), U(s), PS, Ã(s), Ão(s), UM/UNS e DITONGO ORAL (ex: cá-rter, tó-rax, hí-fen, fá-cil, jú-ri, ví-rus, bí-ceps, ór-fã, ór-gão, ál-bum, re-mé-dio, re-gi-ão).
   - ATENÇÃO: As paroxítonas terminadas em A, E, O (seguidos ou não de S) e EM/ENS **NÃO** levam acento (ex: item, itens, jovens, nuvens).
3. **Oxítonas**: Acentuam-se as terminadas em A, E, O (seguidos ou não de S), EM, ENS e nos ditongos abertos ÉI, ÉU, ÓI (ex: so-fá, ca-fé, ci-pó, ar-ma-zém, pa-ra-béns, he-rói, tro-féu).
4. **Hiatos I e U**: Acentuam-se as vogais I e U tônicas que formam hiato sozinhas na sílaba ou com S (ex: sa-ú-de, pa-ís, ba-ú, ju-í-zo).
   - Não se acentua se seguidas de NH (ex: ra-i-nha) ou se repetidas (ex: xi-i-ta).
5. **Novo Acordo**: Ditongos abertos 'ei' e 'oi' em palavras PAROXÍTONAS **perderam** o acento (ex: ideia, assembleia, jiboia, colmeia). Nas oxítonas continuam acentuados (ex: herói, troféu).`,
            summary: [
              "Proparoxítonas: 100% acentuadas.",
              "Saúde: acentuada por ser hiato tônico (U sozinho na sílaba).",
              "Ideia e jiboia: NÃO têm acento (paroxítonas com ditongo aberto perdem acento).",
              "Público: acentuada por ser proparoxítona."
            ],
            practicalExamples: "A palavra 'SUS' é sigla. A palavra 'Saúde' tem acento agudo no 'u' porque forma hiato tônico isolado na sílaba (sa-ú-de). Já 'itens' não tem acento (paroxítona terminada em -ens).",
            examTips: "Questão clássica do IBAM: 'A palavra SAÚDE é acentuada pela mesma regra de...'. Resposta: procure palavras com hiato em I ou U tônico (ex: país, baú, juízo), e NUNCA confunda com oxítonas ou proparoxítonas.",
            traps: "Pegadinha IBAM: 'Item' e 'itens' NÃO têm acento gráfico. 'Hífen' tem acento, mas seu plural 'hifens' NÃO tem acento!",
            flashcardPreview: [
              { front: "Por que a palavra SAÚDE é acentuada?", back: "Pela regra do hiato tônico: a vogal 'u' é tônica, está sozinha na sílaba e não é seguida de nh." }
            ],
            fixationQuestions: [
              {
                statement: "Assinale a alternativa em que todos os vocábulos seguem estritamente a mesma regra de acentuação gráfica da palavra 'MÉDICO':",
                options: [
                  "Público, clínica, farmacêutico.",
                  "Saúde, juízo, saída.",
                  "Café, maracujá, você.",
                  "Fácil, tórax, hífen."
                ],
                correctIndex: 0,
                justification: "'Médico', 'público', 'clínica' e 'farmacêutico' são todas proparoxítonas (sílaba tônica é a antepenúltima), e todas as proparoxítonas são acentuadas."
              }
            ]
          },
          {
            id: "port_top4",
            title: "Concordância, Regência e o Uso da Crase",
            estimatedMinutes: 35,
            explanation: `Pontos cruciais de concordância, regência e crase:
1. **Concordância Verbal com o verbo HAVER**:
   - 'Haver' no sentido de *existir* ou *tempo decorrido* é impessoal: fica no **singular**!
   - Errado: 'Haviam dez pacientes na sala'.
   - Certo: '**Havia** dez pacientes na sala'.
2. **Concordância com 'É proibido / É necessário'**:
   - Sem artigo: 'É proibid**o** entrada' / 'É necessári**o** paciência'.
   - Com artigo feminino: 'É proibid**a a** entrada' / 'É necessári**a a** paciência'.
3. **Crase Obrigatória**:
   - Diante de palavras femininas que exigem artigo 'a' antecedidas de termo regente com preposição 'a' (Vou à farmácia).
   - Locuções adverbiais, prepositivas e conjuntivas femininas: à noite, à tarde, às pressas, à espera de, à medida que.
4. **Crase Proibida**:
   - Diante de palavras masculinas (Vendeu a prazo, andou a pé).
   - Diante de verbos (Começou a reclamar).
   - Diante de pronomes de tratamento e indefinidos (Entregou a ela, a quem, a todos).
   - Entre palavras repetidas (Cara a cara, dia a dia).
   - Diante de palavra feminina no plural antecedida de 'a' singular (Entregou a pessoas estranhas).
5. **Crase Facultativa** (Regra do 'M-P-A'):
   - Diante de nomes de **M**ulher (Entreguei a / à Mariana).
   - Diante de pronome **P**ossessivo feminino singular (Fui a / à minha unidade).
   - Depois da preposição **A**té (Caminhou até a / até à recepção).`,
            summary: [
              "Havia muitos usuários (sempre no singular quando indica existir).",
              "Crase = Preposição A + Artigo A.",
              "Nunca use crase antes de verbo, palavra masculina ou pronomes indefinidos/pessoais.",
              "Crase facultativa: nome próprio feminino, possessivo feminino singular ('minha') e após 'até'."
            ],
            practicalExamples: "No comunicado da recepção: 'O atendimento terá início **às 8h** (crase obrigatória em horas exatas), mas pedimos atenção **a todos** (proibida antes de pronome indefinido) para manter a ordem.'",
            examTips: "Para testar se há crase diante de palavra feminina, troque mentalmente por uma masculina similar. Se virar 'ao', tem crase! Exemplo: 'Fui à farmácia' -> 'Fui ao hospital' (tem crase!). 'Respeito a médica' -> 'Respeito o médico' (não virou 'ao', logo sem crase!).",
            traps: "Pegadinha IBAM: 'Ficou cara a cara com o médico' -> palavras repetidas NUNCA levam crase!",
            flashcardPreview: [
              { front: "Quais são os 3 casos clássicos de crase facultativa?", back: "1. Diante de nome próprio feminino; 2. Diante de pronome possessivo feminino singular (minha, sua, tua); 3. Após a preposição 'até'." }
            ],
            fixationQuestions: [
              {
                statement: "Assinale a frase em que o sinal indicativo de crase foi empregado em total conformidade com a norma-padrão:",
                options: [
                  "O atendente encaminhou o prontuário à um médico especialista.",
                  "A enfermeira orientou a paciente à seguir rigorosamente o tratamento prescrito.",
                  "O agendamento das consultas especializadas começará às 7 horas da manhã.",
                  "A equipe de recepção compareceu à palestras sobre acolhimento humanizado."
                ],
                correctIndex: 2,
                justification: "Usa-se obrigatoriamente crase na indicação de horas exatas ('às 7 horas'). Nas outras opções: 'um' é masculino/indefinido; 'seguir' é verbo; e 'palestras' está no plural antecedido de 'à' singular (ou seria 'a palestras' sem crase ou 'às palestras')."
              }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // 2. MATEMÁTICA (5 questões - Peso 2)
  // ==========================================
  {
    disciplineId: "matematica",
    title: "Matemática",
    shortName: "Matemática",
    weightNotice: "5 questões • Peso 2 • 10 pontos",
    color: "emerald",
    modules: [
      {
        id: "mat_mod1",
        title: "Módulo 1: Operações, Aritmética e Proporcionalidade",
        topics: [
          {
            id: "mat_top1",
            title: "Múltiplos, Divisores, MMC e MDC na Prática de Concursos",
            estimatedMinutes: 30,
            explanation: `Como identificar se o problema pede MMC ou MDC no enunciado da banca IBAM:
1. **MMC (Mínimo Múltiplo Comum)**:
   - Dica do enunciado: Ideia de **coincidência**, **tempo futuro**, repetição periódica ou acontecimentos simultâneos ("Quando tomarão os remédios juntos novamente?", "Quando as luzes piscarão juntas?", "Quando dois ônibus partirão no mesmo instante?").
   - Como calcular: Fatora os números juntos por números primos e multiplica todos os fatores.
2. **MDC (Máximo Divisor Comum)**:
   - Dica do enunciado: Ideia de **divisão**, **repartição**, corte em partes de **maior tamanho possível**, sem sobras ("Qual o maior número de kits que se pode formar?", "Qual o maior comprimento de fita sem sobras?").
   - Como calcular: Fatora e pega apenas os fatores primos comuns que dividiram todos os números ao mesmo tempo.`,
            summary: [
              "Ideia de encontro/coincidência no tempo = MMC.",
              "Ideia de dividir em lotes iguais com o maior número possível = MDC.",
              "Números primos fundamentais para fatoração: 2, 3, 5, 7, 11, 13..."
            ],
            practicalExamples: "Um médico da UBS receitou ao paciente dois medicamentos: o antibiótico A deve ser tomado de 8 em 8 horas e o anti-inflamatório B de 12 em 12 horas. Se o paciente tomou ambos às 08:00 de segunda-feira, quando tomará os dois remédios juntos novamente? -> MMC(8, 12) = 24 horas. Logo, tomará juntos exatamente às 08:00 de terça-feira!",
            examTips: "A banca IBAM adora problemas de escalas de trabalho de servidores ('O servidor João folga a cada 4 dias e Maria a cada 6 dias...'). Isso é puramente MMC!",
            traps: "Fique atento à pergunta final: às vezes a questão não pede o MMC, mas quantas vezes se encontraram no mês ou o horário exato da próxima coincidência.",
            flashcardPreview: [
              { front: "Como diferenciar problemas de MMC e MDC?", back: "MMC indica eventos simultâneos que voltam a coincidir no tempo; MDC indica divisão/repartição em partes iguais com o maior tamanho possível." }
            ],
            fixationQuestions: [
              {
                statement: "Na recepção de uma unidade básica de saúde de Guarulhos, dois servidores organizam formulários de cadastro. O servidor A confere um lote a cada 15 minutos e o servidor B confere um lote a cada 20 minutos. Se ambos iniciaram uma conferência simultaneamente às 08h00, qual será o próximo horário em que iniciarão uma conferência juntos?",
                options: [
                  "08h35",
                  "09h00",
                  "09h30",
                  "10h00"
                ],
                correctIndex: 1,
                justification: "Calcula-se o MMC de 15 e 20: 15 = 3 x 5; 20 = 2² x 5. MMC(15, 20) = 2² x 3 x 5 = 60 minutos (1 hora). Somando 1 hora às 08h00, o próximo horário simultâneo é 09h00."
              }
            ]
          },
          {
            id: "mat_top2",
            title: "Porcentagem, Regra de Três Simples e Sistema Monetário",
            estimatedMinutes: 35,
            explanation: `Conceitos essenciais explicados passo a passo:
1. **Regra de Três Simples**:
   - *Diretamente Proporcional*: Se uma grandeza aumenta, a outra também aumenta (ex: mais pacientes atendidos = mais formulários impressos). Multiplica-se em **cruz** (X).
   - *Inversamente Proporcional*: Se uma grandeza aumenta, a outra diminui (ex: mais atendentes no balcão = menos tempo na fila; maior velocidade = menor tempo de trajeto). Multiplica-se em **linha reta** (=).
2. **Porcentagem (%)**:
   - % significa divisão por 100. Exemplo: 25% de 400 = (25 / 100) * 400 = 0,25 * 400 = 100.
   - Cálculo rápido mental: 10% é só andar uma vírgula para a esquerda. 5% é a metade de 10%. 20% é o dobro de 10%.
   - Aumento percentual: Valor * (1 + taxa). Ex: aumento de 15% em R$ 200 = 200 * 1,15 = R$ 230.
   - Desconto percentual: Valor * (1 - taxa). Ex: desconto de 20% em R$ 80 = 80 * 0,80 = R$ 64.`,
            summary: [
              "Direta: Multiplica em cruz.",
              "Inversa: Multiplica em linha reta (velocidade/tempo, operários/tempo).",
              "Calcular X% de Y: Multiplica X por Y e divide por 100.",
              "Acréscimos e descontos sucessivos NÃO se somam diretamente!"
            ],
            practicalExamples: "Em um dia na UPA, foram atendidos 150 pacientes. Desses, 60% procuraram clínico geral e o restante foi para a pediatria. Quantos pacientes foram para a pediatria? Se 60% foram clínico, 40% foram pediatria -> 40% de 150 = 0,40 * 150 = 60 pacientes.",
            examTips: "Cuidado clássico em regra de três: Sempre verifique se as grandezas são diretas ou inversas antes de multiplicar. Coloque setas para não errar!",
            traps: "Se um produto de R$ 100 sofre um desconto de 10% (fica R$ 90) e depois tem um aumento de 10%, ele NÃO volta para R$ 100! 10% de 90 é 9, ficando R$ 99. O IBAM adora essa pegadinha!",
            flashcardPreview: [
              { front: "Como se multiplica uma regra de três inversamente proporcional?", back: "Em linha reta horizontal (A * B = C * X), pois o aumento de uma grandeza provoca a redução proporcional da outra." }
            ],
            fixationQuestions: [
              {
                statement: "Três atendentes do SUS atendem 180 usuários em um turno regular de 6 horas. Quantos usuários serão atendidos no mesmo turno de 6 horas se a equipe for reforçada e contar com 5 atendentes com a mesma capacidade de trabalho?",
                options: [
                  "250 usuários",
                  "300 usuários",
                  "320 usuários",
                  "360 usuários"
                ],
                correctIndex: 1,
                justification: "Grandezas diretamente proporcionais (mais atendentes = mais usuários atendidos). 3 atendentes --- 180 usuários; 5 atendentes --- X usuários. 3 * X = 5 * 180 => 3X = 900 => X = 900 / 3 = 300 usuários."
              }
            ]
          },
          {
            id: "mat_top3",
            title: "Equações do 1º Grau, Média Aritmética e Conversão de Medidas",
            estimatedMinutes: 30,
            explanation: `1. **Equação do 1º Grau**:
   - O segredo é traduzir o português para a matemática:
     - "Um número": x
     - "O dobro de um número": 2x
     - "A soma de um número com 15": x + 15
     - "O triplo diminuído de 4": 3x - 4
   - Regra de ouro da equação: letra de um lado, número do outro. Mudou de lado do sinal '=', inverte a operação (+ vira -, * vira /).
2. **Média Aritmética Simples**:
   - Soma de todos os valores dividida pela quantidade de elementos.
   - Média = (x1 + x2 + ... + xn) / n.
3. **Conversão de Unidades de Medida**:
   - Comprimento: 1 km = 1.000 m; 1 m = 100 cm.
   - Massa: 1 kg = 1.000 g; 1 tonelada = 1.000 kg.
   - Volume/Capacidade: 1 litro = 1.000 ml; 1 m³ = 1.000 litros.
   - Tempo: 1 hora = 60 minutos; 1 minuto = 60 segundos; 1 hora = 3.600 segundos.
   - CUIDADO com tempo em decimais: 1,5 hora NÃO É 1h50m! 1,5 hora = 1 hora inteira + 0,5 hora (metade de 60 min = 30 min) = 1h30m!`,
            summary: [
              "Média = Soma total / Quantidade.",
              "1 m³ = 1.000 L; 1 L = 1.000 mL.",
              "0,5 hora = 30 minutos; 0,25 hora = 15 minutos.",
              "Para passar de km/h para m/s, divide-se por 3,6."
            ],
            practicalExamples: "Se a média de tempo de atendimento de 4 pacientes foi de 12 minutos, a soma total do tempo foi 4 * 12 = 48 minutos.",
            examTips: "O IBAM frequentemente traz questões de gráficos de barras com o número de atendimentos de segunda a sexta e pede a média semanal.",
            traps: "Pegadinha comum: 'Um procedimento durou 2,4 horas. Isso corresponde a quantas horas e minutos?' Resposta: 2 horas inteiras + (0,4 * 60 minutos) = 2 horas e 24 minutos (e NÃO 2h40m!).",
            flashcardPreview: [
              { front: "A quanto equivale 2,5 horas em horas e minutos?", back: "2 horas e 30 minutos (pois 0,5 de hora equivale a 50% de 60 minutos, ou seja, 30 minutos)." }
            ],
            fixationQuestions: [
              {
                statement: "Uma UBS registrou o seguinte número de atendimentos de triagem durante quatro dias da semana: Segunda-feira: 45; Terça-feira: 52; Quarta-feira: 38; Quinta-feira: 65. Qual foi a média diária de atendimentos de triagem nesse período?",
                options: [
                  "48 atendimentos",
                  "50 atendimentos",
                  "52 atendimentos",
                  "55 atendimentos"
                ],
                correctIndex: 1,
                justification: "Média = (45 + 52 + 38 + 65) / 4 = 200 / 4 = 50 atendimentos diários."
              }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // 3. NOÇÕES DE INFORMÁTICA (5 questões - Peso 2)
  // ==========================================
  {
    disciplineId: "informatica",
    title: "Noções de Informática",
    shortName: "Informática",
    weightNotice: "5 questões • Peso 2 • 10 pontos",
    color: "cyan",
    modules: [
      {
        id: "info_mod1",
        title: "Módulo 1: Sistemas, Aplicativos e Segurança da Informação",
        topics: [
          {
            id: "info_top1",
            title: "Hardware, Windows e Gerenciamento de Pastas e Arquivos",
            estimatedMinutes: 25,
            explanation: `1. **Hardware vs Software**:
   - Hardware: Parte física (placa-mãe, processador/CPU, memórias, disco rígido/SSD, teclado, monitor, impressora).
   - Software: Parte lógica, programas e sistemas operacionais (Windows, Linux, LibreOffice, navegador).
   - Memória RAM: Volátil (apaga tudo ao desligar o PC), armazena dados em uso temporário.
   - Disco rígido (HD) / SSD: Não volátil, memória de armazenamento permanente.
   - Periféricos: Entrada (teclado, mouse, scanner); Saída (monitor, impressora, caixa de som); Entrada/Saída (tela touch, pendrive).
2. **Windows e Atalhos Clássicos**:
   - Win + E: Abre o Explorador de Arquivos.
   - Win + D: Minimiza tudo e mostra a Área de Trabalho.
   - Ctrl + C (Copiar), Ctrl + X (Recortar), Ctrl + V (Colar), Ctrl + Z (Desfazer).
   - Shift + Delete: Exclui permanentemente sem enviar para a Lixeira!
3. **Nomes de Arquivos no Windows**:
   - Caracteres que NÃO podem ser usados em nomes de arquivos ou pastas: \\ / : * ? " < > | (Dica mnemônica: 'bonequinho' com braços, pernas e olhos: duas barras, dois pontos, asterisco, interrogação, aspas, menor, maior, pipe).`,
            summary: [
              "RAM = rápida e volátil; SSD/HD = permanente.",
              "Shift + Del = exclui direto sem ir para a Lixeira.",
              "Caracteres proibidos em nomes de arquivos: \\ / : * ? \" < > |",
              "Win + E abre o Explorador de Arquivos."
            ],
            practicalExamples: "Na recepção, ao salvar um relatório de atendimentos no Windows, o sistema não aceitará o nome 'Atendimentos:24/10/2026.pdf' devido aos dois pontos e barras. Deve-se usar 'Atendimentos_24-10-2026.pdf'.",
            examTips: "A banca IBAM adora perguntar qual caractere é inválido para nomear pastas ou qual atalho exclui sem passar pela lixeira (Shift + Delete).",
            traps: "Arquivos excluídos de pen drives ou unidades de rede NÃO vão para a Lixeira do computador; são apagados diretamente!",
            flashcardPreview: [
              { front: "Quais caracteres são proibidos em nomes de arquivos no Windows?", back: "Barras (/ \\), dois pontos (:), asterisco (*), ponto de interrogação (?), aspas duplas (\"), sinal de menor/maior (< >) e barra vertical (|)." }
            ],
            fixationQuestions: [
              {
                statement: "Ao organizar as pastas de relatórios em um computador com sistema operacional Windows 10/11, qual combinação de teclas permite ao atendente excluir um arquivo de forma definitiva, sem enviá-lo para a Lixeira?",
                options: [
                  "Ctrl + Delete",
                  "Alt + Delete",
                  "Shift + Delete",
                  "Ctrl + Shift + X"
                ],
                correctIndex: 2,
                justification: "A combinação 'Shift + Delete' remove o arquivo permanentemente do disco sem enviá-lo para a Lixeira."
              }
            ]
          },
          {
            id: "info_top2",
            title: "Planilhas Eletrônicas (Excel e Calc): Fórmulas e Funções Fundamentais",
            estimatedMinutes: 30,
            explanation: `Nas rotinas administrativas do SUS, planilhas são muito usadas para controlar filas, estoques e agendamentos:
1. **Estrutura Básica**:
   - Colunas são identificadas por letras (A, B, C...).
   - Linhas são identificadas por números (1, 2, 3...).
   - Toda fórmula obrigatoriamente começa com o sinal de igual (=).
2. **Diferença entre dois-pontos (:) e ponto e vírgula (;)**:
   - Dois-pontos (:) significa **ATÉ** (um intervalo contínuo). Ex: =SOMA(A1:A5) soma A1, A2, A3, A4 e A5.
   - Ponto e vírgula (;) significa **E** (células isoladas). Ex: =SOMA(A1;A5) soma APENAS a célula A1 e a célula A5!
3. **Funções Mais Cobradas pelo IBAM**:
   - =SOMA(intervalo): soma os valores numéricos.
   - =MÉDIA(intervalo): calcula a média aritmética.
   - =MÁXIMO(intervalo): retorna o maior valor.
   - =MÍNIMO(intervalo): retorna o menor valor.
   - =CONT.VALORES(intervalo): conta quantas células não estão vazias.
   - =SE(teste_lógico; valor_se_verdadeiro; valor_se_falso): condicional lógica.`,
            summary: [
              ": (dois pontos) = ATÉ (intervalo contínuo).",
              "; (ponto e vírgula) = E (células específicas).",
              "Toda fórmula começa com '='.",
              "=MÉDIA(A1:A4) calcula a média do intervalo de A1 a A4."
            ],
            practicalExamples: "Em uma planilha de controle da UBS: A1=10, A2=20, A3=30, A4=40. A fórmula =SOMA(A1:A3) resulta em 10+20+30 = 60. Já =SOMA(A1;A3) resulta em 10+30 = 40.",
            examTips: "O IBAM costuma dar uma tabelinha e perguntar o resultado exato de =MÉDIA(A1:A3) ou trocar o sinal de dois-pontos por ponto e vírgula para induzir o candidato ao erro.",
            traps: "Muito cuidado: a função para média leva ACENTO no Excel em português (=MÉDIA). Sem acento, em versões padrão do Excel, pode acusar erro de fórmula.",
            flashcardPreview: [
              { front: "Qual a diferença entre =SOMA(B1:B10) e =SOMA(B1;B10)?", back: "=SOMA(B1:B10) soma todas as células de B1 até B10; =SOMA(B1;B10) soma apenas a célula B1 e a célula B10." }
            ],
            fixationQuestions: [
              {
                statement: "Em uma planilha do Microsoft Excel, as células A1, A2 e A3 contêm, respectivamente, os valores 12, 18 e 30. O resultado da fórmula '=MÉDIA(A1:A3)' será:",
                options: [
                  "15",
                  "20",
                  "30",
                  "60"
                ],
                correctIndex: 1,
                justification: "A soma dos valores é 12 + 18 + 30 = 60. Como o intervalo contém 3 células (A1 até A3), a média aritmética é 60 / 3 = 20."
              }
            ]
          },
          {
            id: "info_top3",
            title: "Internet, Correio Eletrônico e Segurança da Informação",
            estimatedMinutes: 25,
            explanation: `1. **Correio Eletrônico (E-mail)**:
   - Para (To): Destinatário principal.
   - Cc (Cópia Carbono): Destinatário secundário; todos os outros veem seu endereço.
   - Cco (Cópia Carbono Oculta / Bcc): Destinatário invisível. Os outros destinatários **NÃO** sabem que ele recebeu a mensagem. Muito usado para proteger a privacidade e conformidade com a LGPD!
2. **Segurança e Ameaças (Malwares)**:
   - **Vírus**: Necessita de hospedeiro (executável) e de ação do usuário para se propagar.
   - **Worm**: Propaga-se automaticamente pela rede explorando vulnerabilidades, sem precisar de hospedeiro.
   - **Trojan (Cavalo de Troia)**: Parece um programa legítimo e útil (ex: visualizador de exames falso), mas executa ações maliciosas ocultas.
   - **Phishing**: Golpe para 'pescar' dados confidenciais (senhas, dados bancários) fingindo ser comunicação oficial de órgãos conhecidos.
   - **Ransomware**: Malware que **criptografa** os arquivos da vítima e exige resgate financeiro para devolver a chave.
3. **Cópia de Segurança (Backup)**:
   - Backup Completo (Full): Copia 100% dos dados. Mais lento para fazer, mas restauração mais rápida.
   - Backup Incremental: Copia apenas o que foi alterado desde o último backup (seja full ou incremental). Mais rápido para gravar.
   - Backup Diferencial: Copia tudo o que mudou desde o último backup completo.`,
            summary: [
              "Cco (cópia oculta) esconde o e-mail dos demais destinatários.",
              "Phishing = golpe de engenharia social (e-mails falsos solicitando senhas).",
              "Ransomware = sequestro de dados mediante criptografia.",
              "HTTPS = protocolo seguro com certificado e criptografia SSL/TLS."
            ],
            practicalExamples: "Se a gerência da UBS vai disparar um comunicado para 100 pacientes sobre a campanha de vacinação, todos os e-mails dos usuários devem ser colocados no campo 'Cco' para que nenhum usuário tenha acesso ao e-mail dos outros pacientes, resguardando a privacidade.",
            examTips: "A banca IBAM foca muito em segurança básica: saber identificar tentativas de phishing e as características de um e-mail com anexo suspeito.",
            traps: "Se você enviar um e-mail com destinatários em 'Cco', eles não veem os outros do Cco, mas veem quem está em 'Para' e 'Cc'!",
            flashcardPreview: [
              { front: "O que é Phishing?", back: "Uma técnica de fraude eletrônica usada para enganar usuários e roubar informações confidenciais (senhas, cartões) simulando comunicações confiáveis." }
            ],
            fixationQuestions: [
              {
                statement: "Ao enviar um comunicado interno para diversos servidores de unidades de saúde de Guarulhos sem que nenhum dos destinatários visualize o endereço eletrônico dos demais, o atendente deve inserir os e-mails no campo:",
                options: [
                  "Para",
                  "Cc (Cópia Carbono)",
                  "Cco (Cópia Carbono Oculta)",
                  "Assunto"
                ],
                correctIndex: 2,
                justification: "O campo Cco (Cópia Carbono Oculta) oculta os endereços de todos os destinatários nele inseridos, garantindo privacidade."
              }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // 4. POLÍTICAS PÚBLICAS DE SAÚDE — SUS (10 questões - Peso 2)
  // ==========================================
  {
    disciplineId: "sus",
    title: "Políticas Públicas de Saúde — SUS",
    shortName: "Legislação SUS",
    weightNotice: "10 questões • Peso 2 • 20 pontos",
    color: "teal",
    modules: [
      {
        id: "sus_mod1",
        title: "Módulo 1: Constituição Federal de 1988 e Leis Orgânicas da Saúde",
        topics: [
          {
            id: "sus_top1",
            title: "Constituição Federal de 1988: Artigos 196 a 200",
            estimatedMinutes: 35,
            explanation: `Os artigos 196 a 200 da CF/88 formam a base constitucional do SUS:
• **Art. 196**: A saúde é **direito de todos e dever do Estado**, garantido mediante políticas sociais e econômicas que visem à redução do risco de doença e de outros agravos e ao **acesso universal e igualitário** às ações e serviços para sua promoção, proteção e recuperação.
• **Art. 197**: As ações e serviços de saúde são de **relevância pública**, cabendo ao Poder Público dispor sobre sua regulamentação, fiscalização e controle. A execução pode ser direta ou por terceiros (pessoa física ou jurídica de direito privado).
• **Art. 198**: O SUS é formado por uma rede regionalizada e hierarquizada, com as seguintes **diretrizes**:
  1. *Descentralização*, com direção única em cada esfera de governo.
  2. *Atendimento integral*, com prioridade para as atividades preventivas, sem prejuízo dos serviços assistenciais.
  3. *Participação da comunidade*.
  - O § 1º prevê financiamento por seguridade social, União, Estados, DF e Municípios.
• **Art. 199**: A assistência à saúde é **livre à iniciativa privada**. Instituições privadas podem participar do SUS de forma **complementar**, com preferência para entidades filantrópicas e sem fins lucrativos.
  - VEDAÇÃO ABSOLUTA: É vedada a destinação de recursos públicos para auxílios ou subvenções a instituições privadas com fins lucrativos. É vedada a participação direta ou indireta de empresas ou capitais estrangeiros, salvo nos casos previstos em lei.
• **Art. 200**: Competências do SUS: controle de produtos/substâncias, vigilância sanitária e epidemiológica, saúde do trabalhador, recursos humanos, saneamento básico, meio ambiente, etc.`,
            summary: [
              "Art. 196: Saúde é direito de todos e dever do Estado (Universal e Igualitário).",
              "Art. 198: 3 Diretrizes Constitucionais: Descentralização, Atendimento Integral e Participação da Comunidade.",
              "Art. 199: Iniciativa privada participa de forma COMPLEMENTAR (preferência filantrópica/sem fins lucrativos).",
              "É proibido destinar recursos públicos para auxílios/subvenções a instituições privadas com fins lucrativos."
            ],
            practicalExamples: "Em uma UBS de Guarulhos, mesmo um cidadão sem comprovante de residência local ou estrangeiro tem direito ao atendimento imediato, pois o Art. 196 da CF assegura o acesso universal e igualitário, sem discriminação.",
            examTips: "A banca IBAM ama trocar a palavra 'COMPLEMENTAR' por 'suplementar' ou 'prioritária' no Art. 199. A iniciativa privada atua no SUS em caráter COMPLEMENTAR!",
            traps: "Cuidado: No Art. 198, a prioridade é para as atividades PREVENTIVAS, sem prejuízo dos serviços assistenciais (curativos). Bancas costumam dizer que a prioridade é para atendimento de alta complexidade hospitalar, o que é falso!",
            flashcardPreview: [
              { front: "Quais são as três diretrizes do SUS presentes no Art. 198 da CF/88?", back: "1. Descentralização (com direção única em cada esfera); 2. Atendimento integral (com prioridade preventiva); 3. Participação da comunidade." }
            ],
            fixationQuestions: [
              {
                statement: "Conforme dispõe o artigo 199 da Constituição Federal de 1988, as instituições privadas poderão participar de forma complementar do Sistema Único de Saúde (SUS), segundo diretrizes deste, mediante contrato de direito público ou convênio, tendo preferência as entidades:",
                options: [
                  "Cooperativas médicas multinacionais.",
                  "Filantrópicas e as sem fins lucrativos.",
                  "Comprovadamente sediadas no município de atendimento.",
                  "Empresas de grande porte do setor farmacêutico."
                ],
                correctIndex: 1,
                justification: "O Art. 199, § 1º da CF/88 estabelece expressamente que as entidades filantrópicas e as sem fins lucrativos terão preferência na participação complementar do SUS."
              }
            ]
          },
          {
            id: "sus_top2",
            title: "Lei Federal nº 8.080/1990: Princípios, Diretrizes e Organização",
            estimatedMinutes: 40,
            explanation: `A Lei 8.080/1990 é a Lei Orgânica da Saúde:
1. **Determinantes e Condicionantes da Saúde (Art. 3º)**:
   - A saúde não é apenas ausência de doença! Depende de: alimentação, moradia, saneamento básico, meio ambiente, trabalho, renda, educação, atividade física, transporte, lazer e acesso aos bens e serviços essenciais.
2. **Princípios Doutrinários (Valores Filosóficos)**:
   - **Universalidade**: Acesso garantido a TODAS as pessoas, sem qualquer distinção ou exigência de contribuição.
   - **Equidade**: Tratar desigualmente os desiguais para diminuir as disparidades ("dar mais a quem mais precisa"). Prioridade a vulneráveis.
   - **Integralidade**: Enxergar o indivíduo como um todo biopsicossocial, articulando ações preventivas, curativas e reabilitadoras em todos os níveis de complexidade.
3. **Princípios Organizativos (Operacionais)**:
   - **Descentralização político-administrativa**: Redistribuição de poder e responsabilidades para os Municípios (municipalização).
   - **Regionalização e Hierarquização**: Serviços organizados em níveis crescentes de complexidade tecnológica (Atenção Básica -> Média Complexidade -> Alta Complexidade) dentro de uma área geográfica delimitada.
   - **Participação Popular / Controle Social**: Envolvimento da comunidade na gestão do SUS.
4. **Direção Única do SUS**:
   - Nacional: Ministério da Saúde.
   - Estadual: Secretaria de Estado da Saúde (SES).
   - Municipal: Secretaria Municipal de Saúde (SMS).`,
            summary: [
              "Princípios Doutrinários: Universalidade, Equidade, Integralidade.",
              "Princípios Organizativos: Descentralização, Regionalização, Hierarquização, Participação da Comunidade.",
              "Equidade = justiça social (atender mais quem tem maior necessidade).",
              "Direção única em cada esfera de governo."
            ],
            practicalExamples: "Na triagem da UPA de Guarulhos, a classificação de risco (Protocolo de Manchester) atende primeiro o paciente com infarto e depois quem tem dor leve. Isso é uma aplicação prática direta do princípio da **Equidade** (priorizar a maior necessidade clínica).",
            examTips: "O IBAM adora cobrar situações-problema e perguntar qual princípio doutrinário foi atendido. Lembre-se: 'Universalidade' é para TODOS; 'Equidade' é JUSTIÇA SOCIAL / PRIORIZAR VULNERABILIDADES; 'Integralidade' é o cuidado COMPLETO e articulado.",
            traps: "Pegadinha clássica: 'Igualdade' vs 'Equidade'. O SUS busca a equidade porque tratar todos de forma friamente idêntica quando as necessidades são diferentes perpetua as injustiças sociais.",
            flashcardPreview: [
              { front: "O que preconiza o princípio da Equidade no SUS?", back: "Garantir justiça social no atendimento, oferecendo mais atenção e recursos a quem mais precisa, diminuindo as desigualdades em saúde." }
            ],
            fixationQuestions: [
              {
                statement: "Ao acolher um usuário na unidade de saúde e garantir que ele receba desde orientações preventivas na Atenção Básica até exames de alta complexidade e reabilitação conforme sua necessidade, o serviço de saúde cumpre fundamentalmente o princípio da:",
                options: [
                  "Descentralização",
                  "Integralidade",
                  "Hierarquização",
                  "Privatização"
                ],
                correctIndex: 1,
                justification: "A Integralidade consiste na consideração do indivíduo como um todo, garantindo um conjunto articulado e contínuo de ações e serviços preventivos e curativos em todos os níveis de complexidade."
              }
            ]
          },
          {
            id: "sus_top3",
            title: "Lei nº 8.142/1990 e Decreto nº 7.508/2011",
            estimatedMinutes: 35,
            explanation: `1. **Lei Federal nº 8.142/1990 (Participação da Comunidade e Recursos)**:
   - Institui duas instâncias colegiadas fundamentais do SUS:
     a) **Conferência de Saúde**: Reúne-se a cada **4 anos** com representação dos vários segmentos sociais para avaliar a situação de saúde e propor diretrizes para as políticas públicas. Convocada pelo Poder Executivo ou pelos Conselhos.
     b) **Conselho de Saúde**: Órgão colegiado de caráter **permanente e deliberativo**. Atua na formulação de estratégias e no controle da execução da política de saúde, inclusive nos aspectos econômicos e financeiros. Suas decisões são homologadas pelo chefe do executivo.
   - **Composição Paritária dos Conselhos**:
     * **50% de Usuários** (sociedade civil).
     * 25% de Trabalhadores de Saúde.
     * 25% de Gestores e Prestadores de Serviços de Saúde (privados conveniados ou públicos).
2. **Decreto Presidencial nº 7.508/2011 (Regulamenta a Lei 8.080/90)**:
   - **Região de Saúde**: Espaço geográfico contínuo constituído por agrupamentos de Municípios limítrofes para integrar organização, planejamento e execução de ações. Para ser instituída, a Região de Saúde DEVE conter no mínimo:
     1. Atenção Primária;
     2. Urgência e Emergência;
     3. Atenção Psicossocial (CAPS);
     4. Atenção Ambulatorial Especializada e Hospitalar;
     5. Vigilância em Saúde.
   - **Portas de Entrada do SUS** (serviços de primeiro contato):
     * Atenção Primária (UBS / USF);
     * Atenção de Urgência e Emergência (UPA / Pronto-Socorro / SAMU);
     * Atenção Psicossocial (CAPS);
     * Especiais de Acesso Aberto.
   - **Protocolo de Regulação / Acesso aos outros serviços**: O acesso a especialistas e exames complexos se dá por regulação e referência a partir das portas de entrada!
   - **RENAME**: Relação Nacional de Medicamentos Essenciais.
   - **RENASES**: Relação Nacional de Ações e Serviços de Saúde.`,
            summary: [
              "Lei 8.142/90: Conferências (a cada 4 anos) e Conselhos (permanentes e deliberativos).",
              "Paridade no Conselho: 50% Usuários, 25% Trabalhadores, 25% Gestores/Prestadores.",
              "Decreto 7.508/11: Portas de entrada (Atenção Primária, Urgência/Emergência, CAPS e Acesso Aberto).",
              "Região de Saúde exige os 5 serviços mínimos obrigatórios."
            ],
            practicalExamples: "Se um morador de Guarulhos precisa de uma cirurgia eletiva ou consulta com cardiologista, ele não pode bater diretamente na porta do hospital terciário. Ele deve ser acolhido na UBS (Porta de Entrada), que gera o encaminhamento via regulação (SISREG / CROSS).",
            examTips: "Memorize a proporção do Conselho de Saúde: Usuários são SEMPRE 50% (paritário em relação à soma dos outros dois grupos: 25% profissionais + 25% gestores/prestadores).",
            traps: "O IBAM costuma dizer que hospitais especializados são portas de entrada abertas a qualquer cidadão. Falso! Hospitais especializados são serviços de referência acessados por regulação, não portas de entrada universais.",
            flashcardPreview: [
              { front: "Qual a composição dos Conselhos de Saúde segundo a Lei 8.142/90?", back: "50% de representantes de usuários, 25% de trabalhadores de saúde e 25% de representantes de governo e prestadores de serviços." }
            ],
            fixationQuestions: [
              {
                statement: "De acordo com a Lei Federal nº 8.142/1990, a representação dos usuários nos Conselhos de Saúde e nas Conferências de Saúde deve ser:",
                options: [
                  "Maioritária, correspondendo a pelo menos 75% dos membros.",
                  "Paritária em relação ao conjunto dos demais segmentos (50% do total).",
                  "Minoritária, correspondendo a no máximo 25% dos membros.",
                  "Livremente definida pelo Secretário Municipal de Saúde em cada mandato."
                ],
                correctIndex: 1,
                justification: "A Lei 8.142/90 determina que a representação dos usuários seja paritária em relação ao conjunto dos demais segmentos, ou seja, 50% de usuários e 50% divididos entre trabalhadores, gestores e prestadores."
              }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // 5. CONHECIMENTOS ESPECÍFICOS DE ATENDENTE SUS (10 questões - Peso 5 = 50% DA PROVA!)
  // ==========================================
  {
    disciplineId: "especificos",
    title: "Conhecimentos Específicos de Atendente SUS",
    shortName: "Específicos Atendente",
    weightNotice: "10 questões • Peso 5 • 50 pontos (50% da prova!)",
    color: "indigo",
    modules: [
      {
        id: "esp_mod1",
        title: "Módulo 1: Acolhimento, Atendimento Humanizado e Postura Ética",
        topics: [
          {
            id: "esp_top1",
            title: "Acolhimento no SUS, Escuta Qualificada e HumanizaSUS",
            estimatedMinutes: 35,
            explanation: `O atendimento no balcão da unidade de saúde é a porta de entrada da dignidade no SUS:
1. **O que é Acolhimento?**:
   - Acolhimento **NÃO é uma triagem fria**, não é um espaço isolado e não é apenas ser educado.
   - É uma **postura ética e técnica**, uma diretriz da Política Nacional de Humanização (HumanizaSUS).
   - O acolhimento deve acontecer desde a recepção até a alta do paciente, por **todos** os profissionais da unidade.
   - Baseia-se na **escuta qualificada**: ouvir as queixas e aflições do usuário sem julgamentos morais, compreendendo seu contexto de vida.
2. **Papel do Atendente SUS no Acolhimento**:
   - Fornecer informações claras, sem jargões técnicos ininteligíveis.
   - Nunca dispensar um usuário desamparado: se a unidade não realiza aquele procedimento, o atendente deve orientar onde e como ele terá acesso (responsabilização e resolutividade).
   - Manter a calma diante de situações de estresse, compreendendo que o usuário muitas vezes chega fragilizado pela dor, medo ou doença de familiares.
3. **Respeito à Diversidade e Nome Social**:
   - O Decreto nº 8.727/2016 e as portarias do SUS garantem o direito ao uso do **Nome Social** para pessoas travestis e transexuais em todas as fichas, prontuários, cadastros e chamadas públicas no guichê. O atendente JAMAIS deve constranger o cidadão usando o nome civil na chamada pública.`,
            summary: [
              "Acolhimento = postura ética e diretriz do HumanizaSUS presente em todas as etapas.",
              "Escuta qualificada = escutar ativamente sem julgamentos morais para dar resolutividade.",
              "Nome social = direito inalienável no SUS; a chamada pública deve ser SEMPRE pelo nome social.",
              "Responsabilização = não dar respostas evasivas ('aqui não faz, se vira')."
            ],
            practicalExamples: "Uma usuária trans chega ao balcão da UBS Cecap para retirar medicamento. No Cartão SUS consta o Nome Social em destaque e o nome civil nos registros internos. O atendente a chama no saguão respeitosamente pelo Nome Social. Isso cumpre as diretrizes de humanização e respeito aos direitos humanos.",
            examTips: "Para o IBAM, acolhimento é sinônimo de processo de trabalho integrador, escuta atenta e resolutividade, e NUNCA sinônimo de triagem excludente ou mera simpatia superficial.",
            traps: "Pegadinha IBAM: A alternativa afirma que 'acolhimento é atribuição exclusiva do enfermeiro ou médico na sala de triagem'. FALSO! O acolhimento é responsabilidade de TODOS os trabalhadores, a começar pelo atendente na recepção!",
            flashcardPreview: [
              { front: "Acolhimento no SUS é de responsabilidade exclusiva dos profissionais de saúde de nível superior?", back: "Não! O acolhimento é uma postura ética e diretriz operacional que cabe a TODOS os trabalhadores da unidade, inclusive atendentes e recepcionistas." }
            ],
            fixationQuestions: [
              {
                statement: "No contexto da Política Nacional de Humanização (HumanizaSUS) e das rotinas de atendimento ao público, o acolhimento na recepção de uma unidade básica de saúde deve ser compreendido como:",
                options: [
                  "Um procedimento burocrático de triagem administrativa voltado a dispensar pacientes sem agendamento prévio.",
                  "Uma postura ética de escuta qualificada, responsabilização e resolutividade compartilhada por todos os profissionais da unidade.",
                  "Uma atividade restrita aos profissionais médicos no momento do diagnóstico clínico definitivo.",
                  "A aplicação estrita de punições a usuários que não portarem documentos originais com foto."
                ],
                correctIndex: 1,
                justification: "O acolhimento é uma postura ética que envolve escuta qualificada, vínculo, responsabilização e resolutividade, sendo exercido por todos os trabalhadores da equipe."
              }
            ]
          },
          {
            id: "esp_top2",
            title: "Atendimento Prioritário e Acessibilidade (Lei 10.048/2000 e Estatutos)",
            estimatedMinutes: 30,
            explanation: `Regras de Atendimento Prioritário obrigatórias no serviço público de saúde:
1. **Público com Atendimento Prioritário por Lei (Lei nº 10.048/2000 atualizada)**:
   - Pessoas com deficiência (física, auditiva, visual, intelectual);
   - Pessoas idosas (idade igual ou superior a 60 anos);
   - Gestantes e lactantes;
   - Pessoas com crianças de colo;
   - Pessoas obesas;
   - Pessoas com Transtorno do Espectro Autista (TEA) - inclusive acompanhantes;
   - Doadores de sangue (conforme leis complementares aplicáveis).
2. **Superprioridade do Idoso (Estatuto da Pessoa Idosa - Lei nº 10.741/2003)**:
   - Dentre os idosos, os maiores de **80 anos** têm **prioridade especial sobre os demais idosos**, exceto em casos de emergência médica evidente.
3. **Emergência Médica prevalece sobre Prioridade Legal de Fila**:
   - Em serviços de urgência/emergência (UPA, PS), a prioridade clínica (risco de morte avaliado pelo protocolo de acolhimento e classificação de risco) PREVALECE sobre a prioridade legal cronológica de idade.`,
            summary: [
              "Idade para idoso comum = a partir de 60 anos.",
              "Superprioridade = maiores de 80 anos têm preferência sobre os outros idosos.",
              "TEA tem direito a atendimento prioritário por lei.",
              "Na UPA/PS, a gravidade clínica (risco de morte) sempre supera a prioridade etária do balcão."
            ],
            practicalExamples: "No balcão de agendamento da UBS, há dois idosos aguardando senha preferencial: o Sr. Carlos de 65 anos e a D. Nair de 84 anos. Pela regra de superprioridade, D. Nair (84 anos) deve ser atendida antes do Sr. Carlos.",
            examTips: "O IBAM ama testar o candidato sobre a faixa de 80 anos (superprioridade) e sobre o fato de pessoas com autismo (TEA) terem direito garantido à prioridade legal de atendimento.",
            traps: "Não confunda: 60 anos é idoso com prioridade geral. A prioridade sobre os outros idosos só existe a partir de 80 anos!",
            flashcardPreview: [
              { front: "A partir de qual idade a pessoa idosa adquire a 'superprioridade' sobre os demais idosos?", back: "A partir dos 80 anos de idade (Lei nº 10.741/2003 - Estatuto da Pessoa Idosa)." }
            ],
            fixationQuestions: [
              {
                statement: "Ao organizar a fila de atendimento prioritário em uma UBS de Guarulhos, o atendente depara-se com quatro cidadãos aguardando a emissão de guias. De acordo com a legislação federal vigente, terá prioridade especial sobre os demais o usuário com:",
                options: [
                  "62 anos de idade, sem comorbidades declaradas.",
                  "75 anos de idade com agendamento prévio.",
                  "83 anos de idade, em razão da superprioridade estabelecida no Estatuto da Pessoa Idosa.",
                  "59 anos de idade, por residir próximo à unidade."
                ],
                correctIndex: 2,
                justification: "O Estatuto da Pessoa Idosa estabelece que os maiores de 80 anos possuem prioridade especial frente aos demais idosos (regra da superprioridade)."
              }
            ]
          }
        ]
      },
      {
        id: "esp_mod2",
        title: "Módulo 2: Rotinas Administrativas, Prontuários e Sistemas do SUS",
        topics: [
          {
            id: "esp_top3",
            title: "CadSUS, Cartão Nacional de Saúde (CNS) e Prontuários Médicos",
            estimatedMinutes: 40,
            explanation: `1. **Cartão Nacional de Saúde (CNS)**:
   - É o documento de identificação única dos usuários do SUS em todo o território nacional.
   - Vincula todos os contatos do cidadão com as ações e serviços de saúde (consultas, exames, vacinas, cirurgias, medicamentos).
   - Número do CNS: possui **15 dígitos**.
   - Faixas numéricas do CNS:
     * Iniciados em **1 ou 2**: Cartões Definitivos (gerados a partir de base com CPF validado).
     * Iniciados em **7 ou 8**: Cartões Provisórios (cadastros rápidos com pendência de validação de documentos).
   - O atendente é responsável por cadastrar e atualizar o CNS no sistema **CadSUS Web**, verificando dados pessoais, nome da mãe, data de nascimento e endereço.
2. **Organização e Guarda de Prontuários Clínicos**:
   - O prontuário pertence ao **paciente**; o hospital ou unidade de saúde é apenas o fiel depositário e guardião das informações.
   - O paciente tem direito a ter acesso e cópia integral do seu prontuário quando solicitar formalmente.
   - **Sigilo e Confidencialidade**: O atendente lida diariamente com dados clínicos altamente sensíveis. É expressamente proibido comentar diagnósticos com colegas, terceiros, vizinhos ou familiares sem autorização legal.
   - **Tempo de Guarda Obrigatório**: Prontuários em suporte papel devem ser mantidos guardados pela unidade por no mínimo **20 anos** a partir do último registro (Lei Federal nº 13.787/2018 e Resolução CFM). Prontuários eletrônicos com certificação digital ICP-Brasil podem ser arquivados em meio digital permanentemente.`,
            summary: [
              "CNS tem 15 dígitos. Início 1 ou 2 = definitivo; 7 ou 8 = provisório.",
              "O prontuário é de propriedade do paciente; a unidade é a guardiã.",
              "Tempo mínimo de guarda de prontuários em papel: 20 anos após o último registro.",
              "Sigilo absoluto: quebra de sigilo constitui falta grave e crime contra a administração pública."
            ],
            practicalExamples: "Um usuário solicita cópia do seu prontuário médico na UBS. O atendente NÃO pode negar dizendo que o documento é 'propriedade exclusiva da prefeitura'. O atendente deve registrar a solicitação formal e providenciar o acesso garantido por lei.",
            examTips: "Questões frequentes do IBAM cobram: 'A quem pertence o prontuário do paciente?' (Ao paciente!) e 'Qual o prazo mínimo de guarda de prontuários em papel?' (20 anos a partir do último atendimento).",
            traps: "Pegadinha IBAM: Um vizinho ou amigo de um paciente vai até a UBS pedir informações sobre o resultado do exame de HIV ou biópsia dele. O atendente JAMAIS pode fornecer essas informações a terceiros sem procuração formal, mesmo que aleguem 'ser para ajudar'.",
            flashcardPreview: [
              { front: "A quem pertence o prontuário médico e por quantos anos o documento em papel deve ser guardado?", back: "Pertence ao paciente (sendo a instituição guardiã fiel) e deve ser arquivado por no mínimo 20 anos a partir do último registro." }
            ],
            fixationQuestions: [
              {
                statement: "Sobre a guarda, manuseio e confidencialidade dos prontuários clínicos nas unidades de saúde do SUS, assinale a afirmativa correta:",
                options: [
                  "O prontuário é propriedade da unidade de saúde, sendo vedado ao paciente solicitar cópias dos seus registros clínicos.",
                  "O atendente pode compartilhar dados diagnósticos com parentes do usuário no balcão, dispensando autorização formal por se tratar de serviço público.",
                  "Os prontuários em papel devem ser preservados pelo prazo mínimo de 20 anos a partir do último registro do paciente.",
                  "Após 5 anos do último atendimento, os prontuários físicos podem ser incinerados sem qualquer necessidade de digitalização."
                ],
                correctIndex: 2,
                justification: "A legislação nacional e as normas do CFM fixam o prazo mínimo de 20 anos para a guarda de prontuários em papel a contar do último atendimento registrado."
              }
            ]
          },
          {
            id: "esp_top4",
            title: "Sistemas de Informação em Saúde: SISREG, e-SUS APS, PEC, SIA e BPA",
            estimatedMinutes: 35,
            explanation: `Sistemas fundamentais que o Atendente SUS de Guarulhos opera no dia a dia:
1. **SISREG (Sistema de Regulação)**:
   - Software disponibilizado pelo Ministério da Saúde para gerenciar a **marcação de consultas especializadas, exames diagnósticos complexos e leitos hospitalares**.
   - Opera com base em cotas, protocolos de acesso e critérios clínicos de prioridade (urgência vs eletivo).
   - No Estado de SP, atua frequentemente integrado à CROSS (Central de Regulação de Ofertas de Serviços de Saúde).
2. **e-SUS APS e Prontuário Eletrônico do Cidadão (PEC)**:
   - Estratégia nacional para informatizar a Atenção Primária à Saúde.
   - O PEC integra a agenda de atendimentos, o histórico clínico do usuário, vacinas, dispensação de medicamentos e dados cadastrais da família.
   - O atendente usa o PEC para agendar consultas, confirmar presenças, registrar acolhimento administrativo e emitir declarações de comparecimento.
3. **SIA/SUS (Sistema de Informações Ambulatoriais)**:
   - Processa a produção ambulatorial realizada pelas unidades de saúde para faturamento e controle de recursos pelo Ministério da Saúde.
4. **BPA (Boletim de Produção Ambulatorial)**:
   - Instrumento de registro onde são lançados os procedimentos ambulatoriais realizados (consultas, curativos, coletas, vacinas).
   - Divide-se em:
     * *BPA-I (Individualizado)*: exige o número do CNS e dados detalhados do paciente.
     * *BPA-C (Consolidado)*: quantitativo global de procedimentos simples que não exigem identificação nominal do usuário.`,
            summary: [
              "SISREG = regulação de consultas especializadas, exames e leitos.",
              "e-SUS PEC = prontuário eletrônico na Atenção Primária (agenda, cadastros e histórico).",
              "SIA/SUS = Sistema de Informações Ambulatoriais (faturamento e controle de produção).",
              "BPA = Boletim de Produção Ambulatorial (BPA-I individualizado e BPA-C consolidado)."
            ],
            practicalExamples: "Quando um médico da UBS solicita uma tomografia para um paciente, o atendente insere o pedido no sistema regulador (SISREG), vinculando a justificativa clínica para que o médico regulador autorize e agende na rede referenciada.",
            examTips: "A banca IBAM foca na finalidade de cada sigla. Não confunda SISREG (regulação de vagas e exames) com SIA/SUS (informações ambulatoriais e faturamento) ou CadSUS (cadastro de usuários).",
            traps: "Lembre-se: O atendente opera o SISREG inserindo solicitações conforme o pedido médico, mas quem aprova ou nega a vaga é o MÉDICO REGULADOR, nunca o atendente por conta própria!",
            flashcardPreview: [
              { front: "Qual a finalidade principal do sistema SISREG?", back: "Gerenciar e regular o acesso a consultas médicas especializadas, exames diagnósticos de média/alta complexidade e internações hospitalares no SUS." }
            ],
            fixationQuestions: [
              {
                statement: "Ao receber o encaminhamento médico de um paciente para a realização de uma consulta com neurologista, qual sistema oficial do SUS deve ser utilizado pelo atendente para solicitar e gerenciar o agendamento na rede referenciada?",
                options: [
                  "SIA/SUS",
                  "SISREG",
                  "SINAN",
                  "CadWeb Fiscal"
                ],
                correctIndex: 1,
                justification: "O SISREG (Sistema de Regulação) é o sistema destinado a gerenciar e regular o fluxo de agendamento de consultas especializadas, exames e leitos no SUS."
              }
            ]
          },
          {
            id: "esp_top5",
            title: "Legislação Aplicada: Lei 13.460/2017, LGPD (Lei 13.709/2018) e LAI (Lei 12.527/2011)",
            estimatedMinutes: 40,
            explanation: `Três leis fundamentais para a atuação do Atendente SUS:
1. **Lei Federal nº 13.460/2017 (Código de Defesa do Usuário do Serviço Público)**:
   - Garante direitos básicos: urbanidade, respeito, atendimento por ordem de chegada (salvo prioridades legais), identificação do servidor por crachá e clareza de informações.
   - **Carta de Serviços ao Usuário**: Documento obrigatório da unidade que informa os serviços prestados, horários de funcionamento, documentos exigidos e prazos de resposta.
   - **Ouvidoria**: Canal para o usuário manifestar elogios, sugestões, reclamações e denúncias. Prazo padrão de resposta ao usuário: **30 dias**, prorrogável por mais 30 mediante justificativa.
2. **LGPD - Lei Federal nº 13.709/2018 (Lei Geral de Proteção de Dados)**:
   - Dados de saúde são classificados pela LGPD como **DADOS PESSOAIS SENSÍVEIS** (origem racial, convicção religiosa, dados referentes à saúde, vida sexual ou dado genético/biométrico).
   - O tratamento de dados pessoais de saúde na rede pública deve ter finalidade pública legítima (cuidado à saúde do paciente).
   - O atendente que vaza prontuários, lista de pacientes com determinada patologia ou fotos de fichas comete infração administrativa grave e violação da LGPD.
3. **LAI - Lei Federal nº 12.527/2011 (Lei de Acesso à Informação)**:
   - Regra geral na administração pública: **A publicidade é o preceito geral; o sigilo é a exceção**.
   - Informações institucionais (escalas de plantão, contratos, estoques) são públicas.
   - EXCEÇÃO CRÍTICA NA SAÚDE: As informações pessoais relativas à **intimidade, vida privada, honra e imagem** (como o diagnóstico de um paciente) têm **acesso restrito** por até 100 anos, resguardando o sigilo do cidadão!`,
            summary: [
              "Lei 13.460/17: Carta de Serviços, urbanidade e Ouvidoria (resposta em até 30 dias prorrogáveis).",
              "LGPD (Lei 13.709/18): Dados de saúde são DADOS SENSÍVEIS sujeitos a proteção rigorosa.",
              "LAI (Lei 12.527/11): Transparência pública é regra, MAS informações médicas e pessoais são protegidas pelo sigilo (intimidade e privacidade).",
              "O atendente deve portar crachá visível com seu nome funcional."
            ],
            practicalExamples: "Um usuário solicita saber quantos médicos estão de plantão na UBS hoje. Essa é uma informação pública transparente sob a LAI. Já se ele perguntar qual doença o paciente do leito ao lado tem, essa informação é privada e sensível sob a LGPD e o sigilo médico, devendo ser estritamente protegida.",
            examTips: "O IBAM adora contrapor a LAI (acesso à informação pública) com a proteção de dados pessoais e sigilo médico: escalas de trabalho são públicas; diagnósticos e prontuários são estritamente sigilosos!",
            traps: "Pegadinha clássica: 'Pela Lei de Acesso à Informação, qualquer cidadão tem o direito de ler a ficha médica de qualquer usuário da UBS'. TOTALMENTE FALSO! A LAI resguarda expressamente a intimidade e dados pessoais sensíveis.",
            flashcardPreview: [
              { front: "Dados de saúde são classificados como que tipo de dado pela LGPD?", back: "Dados pessoais sensíveis, sujeitos a regras rigorosas de proteção, finalidade e sigilo." }
            ],
            fixationQuestions: [
              {
                statement: "De acordo com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018), as informações referentes à saúde dos pacientes cadastrados no SUS são legalmente enquadradas como:",
                options: [
                  "Dados abertos de utilidade pública irrestrita.",
                  "Dados pessoais sensíveis, cujo tratamento exige rigoroso dever de confidencialidade.",
                  "Informações comerciais de propriedade da empresa de software municipal.",
                  "Documentos administrativos de domínio comum sem restrições de compartilhamento."
                ],
                correctIndex: 1,
                justification: "A LGPD define dados referentes à saúde ou à vida sexual como 'dados pessoais sensíveis', exigindo cuidados e salvaguardas especiais para garantir o sigilo e a privacidade."
              }
            ]
          }
        ]
      }
    ]
  }
];
