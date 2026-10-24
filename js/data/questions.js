// Banco de Questões Interativo e Original - Atendente SUS Guarulhos IBAM 2026
// Alinhado ao Edital nº 06/2026-SGE01 e ao padrão da banca IBAM.
// 65 questões originais com gabarito fundamentado e justificativa detalhada de cada alternativa.

window.QUESTIONS_DATA = [
  // ==========================================
  // LÍNGUA PORTUGUESA (14 Questões)
  // ==========================================
  {
    id: "q_port_01",
    disciplineId: "portugues",
    topicId: "port_top1",
    statement: "Considere a frase extraída de uma cartilha de orientação aos usuários de uma UBS: 'Para garantir o atendimento ágil e seguro, é fundamental que o cidadão apresente um documento oficial com foto e o Cartão Nacional de Saúde atualizado'. A partir do texto, é correto inferir que:",
    options: [
      { letter: "A", text: "O atendimento na unidade de saúde será totalmente suspenso caso o usuário não possua o documento físico." },
      { letter: "B", text: "A apresentação da documentação oficial e do CNS constitui um fator facilitador para a rapidez e a segurança do fluxo assistencial." },
      { letter: "C", text: "Todos os cidadãos que comparecem à UBS já possuem o Cartão Nacional de Saúde devidamente atualizado." },
      { letter: "D", text: "A agilidade do serviço de saúde depende unicamente da vontade individual de cada atendente no balcão de recepção." }
    ],
    correctLetter: "B",
    explanation: "A alternativa B traduz com exatidão a inferência lógica do texto: os documentos são 'fundamentais para garantir atendimento ágil e seguro', logo facilitam o fluxo assistencial.\n\nPor que as outras estão incorretas:\n• A está incorreta porque extrapola o texto ao afirmar que o atendimento seria 'totalmente suspenso' (o SUS não nega socorro por falta de documento).\n• C está incorreta por generalizar que 'todos já possuem' atualizado, o que não é dito no texto.\n• D está incorreta por atribuir o fluxo 'unicamente à vontade individual', contrariando o sentido da cartilha.",
    difficulty: "Fácil"
  },
  {
    id: "q_port_02",
    disciplineId: "portugues",
    topicId: "port_top2",
    statement: "Assinale a alternativa em que a palavra destacada expressa uma ideia de conclusão:",
    options: [
      { letter: "A", text: "O paciente chegou com antecedência, PORÉM a sala de vacinas ainda não estava aberta." },
      { letter: "B", text: "O número de fichas se esgotou rapidamente, PORTANTO novos agendamentos serão abertos amanhã." },
      { letter: "C", text: "EMBORA houvesse muita chuva em Guarulhos, a equipe da unidade realizou as visitas domiciliares." },
      { letter: "D", text: "O atendente explicou o procedimento com calma PORQUE o usuário estava apreensivo." }
    ],
    correctLetter: "B",
    explanation: "A conjunção 'PORTANTO' é coordenativa conclusiva, ligando a premissa (esgotamento de fichas) ao seu desfecho ou conclusão lógica (novos agendamentos amanhã).\n\nAnálise das demais:\n• A: 'Porém' indica oposição/adversidade.\n• C: 'Embora' introduz oração subordinada concessiva.\n• D: 'Porque' expressa causa ou explicação da atitude do atendente.",
    difficulty: "Fácil"
  },
  {
    id: "q_port_03",
    disciplineId: "portugues",
    topicId: "port_top3",
    statement: "Quanto às regras oficiais de acentuação gráfica, assinale a opção que apresenta um par de palavras acentuadas pela mesma regra gramatical de 'PÚBLICO' e 'SAÚDE', respectivamente:",
    options: [
      { letter: "A", text: "Clínico e Juízo." },
      { letter: "B", text: "Remédio e Café." },
      { letter: "C", text: "História e País." },
      { letter: "D", text: "Prontuário e Baú." }
    ],
    correctLetter: "A",
    explanation: "• 'Público' é proparoxítona (todas são acentuadas); exatamente como 'Clínico'.\n• 'Saúde' é acentuada pela regra do hiato tônico (vogal 'u' tônica isolada na sílaba); exatamente como 'Juízo' (ju-í-zo).\n\nAnálise das demais:\n• B: Remédio é paroxítona terminada em ditongo e café é oxítona.\n• C: História é paroxítona terminada em ditongo e país é hiato.\n• D: Prontuário é paroxítona terminada em ditongo e baú é hiato.",
    difficulty: "Média"
  },
  {
    id: "q_port_04",
    disciplineId: "portugues",
    topicId: "port_top4",
    statement: "No que diz respeito à regência e ao emprego do sinal indicativo de crase, assinale a frase inteiramente correta segundo a norma-padrão:",
    options: [
      { letter: "A", text: "O atendente solicitou à todos os presentes que mantivessem o silêncio na sala de espera." },
      { letter: "B", text: "A coordenadora da UBS referiu-se à médica pediatra com muito respeito e admiração profissional." },
      { letter: "C", text: "A consulta de retorno foi agendada para começar à partir das 14 horas." },
      { letter: "D", text: "O motorista da ambulância dirigiu-se à uma farmácia de alto custo para retirar insumos." }
    ],
    correctLetter: "B",
    explanation: "Quem se refere, refere-se A (preposição exigida pelo verbo) + a médica pediatra (artigo feminino definido 'a') = À médica pediatra. O uso da crase está perfeito.\n\nErros das demais:\n• A: 'todos' é pronome indefinido masculino; crase proibida.\n• C: 'partir' é verbo; nunca ocorre crase antes de verbo.\n• D: 'uma' é artigo indefinido; não ocorre crase antes de artigo indefinido.",
    difficulty: "Média"
  },
  {
    id: "q_port_05",
    disciplineId: "portugues",
    topicId: "port_top4",
    statement: "Assinale a alternativa que preenche corretamente as lacunas quanto à concordância verbal:\n'Na semana passada, ________ diversas dúvidas sobre as regras de acolhimento e ________ dez novos funcionários na recepção.'",
    options: [
      { letter: "A", text: "houveram — chegou" },
      { letter: "B", text: "houve — chegaram" },
      { letter: "C", text: "havia — chegou" },
      { letter: "D", text: "houveram — chegaram" }
    ],
    correctLetter: "B",
    explanation: "O verbo HAVER no sentido de existir é impessoal: não possui sujeito e deve permanecer no SINGULAR ('houve diversas dúvidas'). Já o verbo CHEGAR tem sujeito claro e no plural ('dez novos funcionários'), devendo concordar no plural: 'chegaram dez novos funcionários'.\n\nPortanto, 'houve — chegaram'.",
    difficulty: "Média"
  },
  {
    id: "q_port_06",
    disciplineId: "portugues",
    topicId: "port_top1",
    statement: "Leia o trecho: 'A comunicação humanizada não se limita a pronunciar palavras polidas; envolve escutar atentamente as necessidades silenciadas do usuário'. O vocábulo 'polidas' possui, nesse contexto, sentido equivalente a:",
    options: [
      { letter: "A", text: "Ríspidas" },
      { letter: "B", text: "Corteses" },
      { letter: "C", text: "Confusas" },
      { letter: "D", text: "Ineficazes" },
    ],
    correctLetter: "B",
    explanation: "No contexto, 'palavras polidas' significa palavras educadas, gentis, corteses ou refinadas.\n\nAnálise das demais:\n• A: Ríspidas é antônimo (grosseiras).\n• C: Confusas não tem relação semântica com polidez.\n• D: Ineficazes refere-se a falta de resultado, não à civilidade.",
    difficulty: "Fácil"
  },
  {
    id: "q_port_07",
    disciplineId: "portugues",
    topicId: "port_top4",
    statement: "Assinale a frase em que a concordância nominal está em perfeita consonância com a norma culta da língua portuguesa:",
    options: [
      { letter: "A", text: "Para manter a organização do fluxo, é necessária paciência por parte de todos." },
      { letter: "B", text: "É proibido a entrada de pessoas estranhas no arquivo de prontuários clínicos." },
      { letter: "C", text: "As servidoras da recepção estavam meio cansadas ao final do expediente de atendimento." },
      { letter: "D", text: "Seguem anexo as declarações de comparecimento solicitadas pelos usuários da UBS." }
    ],
    correctLetter: "C",
    explanation: "Na opção C, a palavra 'meio' funciona como advérbio de intensidade (equivalente a 'um pouco'), sendo invariável: 'meio cansadas'.\n\nErros das demais:\n• A: A expressão 'é necessário' fica no masculino se não houver artigo antes do substantivo ('é necessário paciência'). Se houvesse 'a paciência', aí sim seria 'é necessária a paciência'.\n• B: Com o artigo 'a', deve-se flexionar: 'É proibida a entrada'.\n• D: A palavra 'anexo' deve concordar com o termo a que se refere: 'Seguem anexas as declarações'.",
    difficulty: "Difícil"
  },
  {
    id: "q_port_08",
    disciplineId: "portugues",
    topicId: "port_top2",
    statement: "Em 'A equipe ampliou o número de guichês, A FIM DE QUE a espera no saguão diminuísse consideravelmente', a locução conjuntiva em destaque expressa circunstância de:",
    options: [
      { letter: "A", text: "Finalidade" },
      { letter: "B", text: "Proporcionalidade" },
      { letter: "C", text: "Consequência" },
      { letter: "D", text: "Causa" }
    ],
    correctLetter: "A",
    explanation: "'A fim de que' introduz uma oração subordinada adverbial final, indicando o objetivo ou a finalidade da ação principal (com o propósito/objetivo de diminuir a espera).\n\nAnálise das demais:\n• B: Proporcionalidade seria 'à medida que', 'à proporção que'.\n• C: Consequência seria 'de modo que', 'de forma que'.\n• D: Causa seria 'já que', 'visto que', 'porque'.",
    difficulty: "Fácil"
  },
  {
    id: "q_port_09",
    disciplineId: "portugues",
    topicId: "port_top4",
    statement: "Observe a regência verbal: de acordo com a norma culta, o verbo ASSISTIR no sentido de 'presenciar, ver' rege a preposição 'a'. Assinale a alternativa que aplica essa regra com correção:",
    options: [
      { letter: "A", text: "O atendente assistiu o treinamento online sobre acolhimento no SUS." },
      { letter: "B", text: "O atendente assistiu ao treinamento online sobre acolhimento no SUS." },
      { letter: "C", text: "O médico assistiu ao paciente durante todo o procedimento de urgência." },
      { letter: "D", text: "Não assiste os cidadãos o dever de respeitar os servidores públicos." }
    ],
    correctLetter: "B",
    explanation: "No sentido de ver, presenciar ou participar como espectador, o verbo 'assistir' é transitivo indireto e exige a preposição 'a' ('assistiu AO treinamento').\n\nAnálise das demais:\n• A: Falta a preposição 'a' exigida pela norma culta.\n• C: No sentido de prestar socorro ou cuidar, 'assistir' é transitivo direto (assistiu o paciente).\n• D: No sentido de caber/pertencer a alguém, rege preposição 'a' (não assiste AOS cidadãos).",
    difficulty: "Média"
  },
  {
    id: "q_port_10",
    disciplineId: "portugues",
    topicId: "port_top3",
    statement: "De acordo com o Acordo Ortográfico vigente, assinale a alternativa em que todas as palavras estão grafadas corretamente, sem acento circunflexo nos encontros vocálicos:",
    options: [
      { letter: "A", text: "Vôo, lêem, crêem, dêem." },
      { letter: "B", text: "Voo, leem, creem, deem." },
      { letter: "C", text: "Voo, lêem, creem, dêem." },
      { letter: "D", text: "Vôo, leem, crêem, deem." }
    ],
    correctLetter: "B",
    explanation: "O Novo Acordo Ortográfico aboliu o acento circunflexo das palavras paroxítonas que possuem encontro vocálico dobrado 'oo' (voo, enjoo, abençoo) e nos verbos com 'ee' dobrado na terceira pessoa do plural (leem, creem, deem, veem).\n\nPortanto, todas se escrevem sem acento: voo, leem, creem, deem.",
    difficulty: "Média"
  },
  {
    id: "q_port_11",
    disciplineId: "portugues",
    topicId: "port_top4",
    statement: "No que se refere à colocação pronominal, assinale a opção que atende estritamente à norma-padrão da língua:",
    options: [
      { letter: "A", text: "Me informe, por favor, onde fica a sala de curativos da UBS." },
      { letter: "B", text: "Nunca disseram-me que o cartão SUS necessitava de validação presencial." },
      { letter: "C", text: "O médico não me chamou pelo nome completo durante o atendimento." },
      { letter: "D", text: "Os pacientes haviam retirado-se antes da chegada dos resultados laboratoriais." }
    ],
    correctLetter: "C",
    explanation: "A palavra 'não' é palavra atrativa de sentido negativo, que exige obrigatoriamente a próclise (pronome oblíquo antes do verbo: 'não me chamou').\n\nErros das demais:\n• A: É proibido iniciar frase com pronome oblíquo átono na norma culta (o correto seria 'Informe-me').\n• B: A palavra negativa 'nunca' atrai o pronome ('Nunca me disseram').\n• D: Em locuções com particípio ('haviam retirado'), não se coloca o pronome após o particípio.",
    difficulty: "Difícil"
  },
  {
    id: "q_port_12",
    disciplineId: "portugues",
    topicId: "port_top1",
    statement: "Assinale a alternativa em que a pontuação foi empregada de acordo com as regras gramaticais:",
    options: [
      { letter: "A", text: "Os usuários que aguardavam a triagem, reclamaram do atraso no atendimento." },
      { letter: "B", text: "O atendente explicou com muita clareza, os procedimentos para a obtenção do cartão." },
      { letter: "C", text: "Em Guarulhos, diversos programas municipais de saúde foram ampliados recentemente." },
      { letter: "D", text: "A equipe de enfermagem, realizou todos os testes rápidos solicitados pelos médicos." }
    ],
    correctLetter: "C",
    explanation: "Na alternativa C, a vírgula separa corretamente o adjunto adverbial de lugar deslocado no início da oração ('Em Guarulhos,').\n\nErros das demais:\n• A: Erro crasso: separou o sujeito ('Os usuários...') do verbo ('reclamaram') por vírgula.\n• B: Erro crasso: separou o verbo transitivo direto ('explicou') de seu objeto direto por vírgula.\n• D: Erro crasso: separou o sujeito ('A equipe de enfermagem') de seu verbo ('realizou') por vírgula.",
    difficulty: "Média"
  },
  {
    id: "q_port_13",
    disciplineId: "portugues",
    topicId: "port_top2",
    statement: "Identifique a figura de linguagem presente na oração: 'O atendente ouviu centenas de vozes pedindo informações ao mesmo tempo durante a manhã agitada na unidade':",
    options: [
      { letter: "A", text: "Hipérbole (exagero intencional de expressão)." },
      { letter: "B", text: "Eufemismo (suavização de uma ideia desagradável)." },
      { letter: "C", text: "Metonímia (uso da parte pelo todo: 'vozes' no lugar de pessoas/cidadãos)." },
      { letter: "D", text: "Pleonasmo (repetição enfática de termos equivalentes)." }
    ],
    correctLetter: "C",
    explanation: "O emprego do termo 'vozes' para designar 'pessoas' ou 'usuários que falavam' é um caso clássico de metonímia (tomar a parte pelo todo ou o efeito pela causa).\n\nAnálise das demais:\n• A: Embora haja certo vulto, a figura central é a substituição do elemento humano pelo som emitido.\n• B: Não há suavização de dor ou morte.\n• D: Não há redundância como 'subir para cima'.",
    difficulty: "Média"
  },
  {
    id: "q_port_14",
    disciplineId: "portugues",
    topicId: "port_top1",
    statement: "Assinale a alternativa em que a reescrita preserva integralmente o sentido original e a correção gramatical da frase: 'Como a demanda por vacinas aumentou, o horário do posto foi estendido':",
    options: [
      { letter: "A", text: "O horário do posto foi estendido, conquanto a demanda por vacinas tenha aumentado." },
      { letter: "B", text: "Visto que a demanda por vacinas aumentou, o horário do posto foi estendido." },
      { letter: "C", text: "A demanda por vacinas aumentou a fim de que o horário do posto fosse estendido." },
      { letter: "D", text: "O horário do posto foi estendido apesar de a demanda por vacinas ter aumentado." }
    ],
    correctLetter: "B",
    explanation: "Na frase original, a conjunção 'Como' no início expressa causa ('pelo fato de a demanda ter aumentado'). A locução 'Visto que' é causal e mantém rigorosamente o mesmo valor semântico e a correção.\n\nErros das demais:\n• A e D usam conectivos concessivos ('conquanto' e 'apesar de'), que invertem a lógica de causa/efeito.\n• C usa 'a fim de que', que indica finalidade e não causa.",
    difficulty: "Média"
  },

  // ==========================================
  // MATEMÁTICA (10 Questões)
  // ==========================================
  {
    id: "q_mat_01",
    disciplineId: "matematica",
    topicId: "mat_top1",
    statement: "Em um ambulatório de especialidades, o médico cardiologista atende a cada 18 minutos e o médico ortopedista atende a cada 24 minutos. Se ambos chamaram novos pacientes exatamente às 08h00, a que horas eles voltarão a chamar novos pacientes simultaneamente?",
    options: [
      { letter: "A", text: "08h42" },
      { letter: "B", text: "09h12" },
      { letter: "C", text: "09h36" },
      { letter: "D", text: "10h00" }
    ],
    correctLetter: "B",
    explanation: "Problema clássico de coincidência no tempo = Mínimo Múltiplo Comum (MMC) entre 18 e 24 minutos.\n• 18 = 2 x 3²\n• 24 = 2³ x 3\n• MMC(18, 24) = 2³ x 3² = 8 x 9 = 72 minutos.\n72 minutos equivalem a 1 hora e 12 minutos (60 min + 12 min).\nSomando às 08h00: 08h00 + 1h12min = 09h12.",
    difficulty: "Média"
  },
  {
    id: "q_mat_02",
    disciplineId: "matematica",
    topicId: "mat_top2",
    statement: "Uma unidade de saúde recebeu uma cota de 1.200 frascos de soro fisiológico. No primeiro mês, foram consumidos 35% do estoque total recebido. No segundo mês, foram consumidos 20% do volume restante. Quantos frascos de soro restaram no estoque ao final do segundo mês?",
    options: [
      { letter: "A", text: "540 frascos" },
      { letter: "B", text: "624 frascos" },
      { letter: "C", text: "660 frascos" },
      { letter: "D", text: "780 frascos" }
    ],
    correctLetter: "B",
    explanation: "Passo a passo:\n1. Primeiro mês: consumiu 35% de 1.200 = 0,35 x 1.200 = 420 frascos.\n2. Volume restante após o 1º mês = 1.200 - 420 = 780 frascos.\n3. Segundo mês: consumiu 20% do volume RESTANTE = 0,20 x 780 = 156 frascos.\n4. Resto final no estoque = 780 - 156 = 624 frascos.\n\nPegadinha clássica: Não se pode somar 35% + 20% = 55%, pois o segundo percentual incide sobre o restante!",
    difficulty: "Média"
  },
  {
    id: "q_mat_03",
    disciplineId: "matematica",
    topicId: "mat_top2",
    statement: "Quatro atendentes do SUS levam 45 minutos para realizar a conferência e o arquivamento de 120 pastas de prontuários. Se a unidade designar 6 atendentes com a mesma capacidade de trabalho para arquivar as mesmas 120 pastas de prontuários, qual será o tempo necessário?",
    options: [
      { letter: "A", text: "25 minutos" },
      { letter: "B", text: "30 minutos" },
      { letter: "C", text: "35 minutos" },
      { letter: "D", text: "67,5 minutos" }
    ],
    correctLetter: "B",
    explanation: "Grandezas INVERSAMENTE proporcionais: se aumentamos o número de atendentes, o tempo para realizar a mesma tarefa DIMINUI!\nMultiplica-se em linha horizontal:\n4 atendentes x 45 minutos = 6 atendentes x T minutos\n180 = 6T\nT = 180 / 6 = 30 minutos.",
    difficulty: "Fácil"
  },
  {
    id: "q_mat_04",
    disciplineId: "matematica",
    topicId: "mat_top3",
    statement: "O total de senhas distribuídas pela manhã em uma unidade foi igual a 150. Sabe-se que o número de senhas prioritárias distribuídas foi o dobro do número de senhas convencionais menos 30. Quantas senhas prioritárias foram distribuídas?",
    options: [
      { letter: "A", text: "60 senhas" },
      { letter: "B", text: "75 senhas" },
      { letter: "C", text: "90 senhas" },
      { letter: "D", text: "110 senhas" }
    ],
    correctLetter: "C",
    explanation: "Vamos equacionar:\n• Seja C = senhas convencionais e P = senhas prioritárias.\n• P + C = 150\n• P = 2C - 30\nSubstituindo P na primeira equação:\n(2C - 30) + C = 150\n3C - 30 = 150\n3C = 180\nC = 60 senhas convencionais.\nLogo, as senhas prioritárias P = 150 - 60 = 90 senhas (ou P = 2*60 - 30 = 90).",
    difficulty: "Média"
  },
  {
    id: "q_mat_05",
    disciplineId: "matematica",
    topicId: "mat_top3",
    statement: "Um atendente registrou a seguinte quantidade diária de emissões do Cartão Nacional de Saúde durante uma semana de trabalho: segunda-feira: 24; terça-feira: 31; quarta-feira: 29; quinta-feira: 36; sexta-feira: 30. A média aritmética diária de emissões foi de:",
    options: [
      { letter: "A", text: "28 cartões" },
      { letter: "B", text: "30 cartões" },
      { letter: "C", text: "32 cartões" },
      { letter: "D", text: "34 cartões" }
    ],
    correctLetter: "B",
    explanation: "Média aritmética = Soma de todos os valores / Quantidade de dias.\nSoma = 24 + 31 + 29 + 36 + 30 = 150 emissões.\nQuantidade de dias = 5.\nMédia = 150 / 5 = 30 emissões por dia.",
    difficulty: "Fácil"
  },
  {
    id: "q_mat_06",
    disciplineId: "matematica",
    topicId: "mat_top3",
    statement: "Uma caixa de arquivo no depósito de prontuários possui o formato de um paralelepípedo retângulo com dimensões de 40 cm de comprimento, 30 cm de largura e 25 cm de altura. O volume total dessa caixa de arquivo é de:",
    options: [
      { letter: "A", text: "30.000 cm³" },
      { letter: "B", text: "3.000 cm³" },
      { letter: "C", text: "300.000 cm³" },
      { letter: "D", text: "1.200 cm³" }
    ],
    correctLetter: "A",
    explanation: "O volume de um paralelepípedo reto-retângulo é o produto de suas três dimensões:\nVolume = Comprimento x Largura x Altura\nVolume = 40 cm x 30 cm x 25 cm = 1.200 x 25 = 30.000 cm³ (que equivale também a 30 litros).",
    difficulty: "Fácil"
  },
  {
    id: "q_mat_07",
    disciplineId: "matematica",
    topicId: "mat_top1",
    statement: "Deseja-se dividir 72 frascos de álcool em gel e 96 pacotes de gaze estéril em caixas de socorro, de modo que todas as caixas contenham a mesma quantidade de cada item, sem sobras e com o MAIOR número possível de caixas. Quantas caixas de socorro poderão ser montadas?",
    options: [
      { letter: "A", text: "12 caixas" },
      { letter: "B", text: "18 caixas" },
      { letter: "C", text: "24 caixas" },
      { letter: "D", text: "36 caixas" }
    ],
    correctLetter: "C",
    explanation: "Problema clássico de divisão em partes iguais no maior tamanho possível = Máximo Divisor Comum (MDC) de 72 e 96.\n• 72 = 2³ x 3²\n• 96 = 2⁵ x 3\n• MDC(72, 96) = 2³ x 3 = 8 x 3 = 24 caixas.\n(Cada caixa terá 72/24 = 3 frascos de álcool e 96/24 = 4 pacotes de gaze).",
    difficulty: "Média"
  },
  {
    id: "q_mat_08",
    disciplineId: "matematica",
    topicId: "mat_top3",
    statement: "Um técnico realizou um procedimento administrativo que durou exatamente 2,75 horas. Esse período corresponde a:",
    options: [
      { letter: "A", text: "2 horas e 75 minutos" },
      { letter: "B", text: "2 horas e 45 minutos" },
      { letter: "C", text: "2 horas e 30 minutos" },
      { letter: "D", text: "2 horas e 15 minutos" }
    ],
    correctLetter: "B",
    explanation: "2,75 horas é composto por 2 horas inteiras + 0,75 de hora.\nComo 1 hora tem 60 minutos:\n0,75 x 60 minutos = 45 minutos.\nPortanto, 2,75 horas = 2 horas e 45 minutos.\n\nPegadinha clássica do IBAM: muitos candidatos marcam 2h75m por desatenção!",
    difficulty: "Fácil"
  },
  {
    id: "q_mat_09",
    disciplineId: "matematica",
    topicId: "mat_top2",
    statement: "Uma ambulância do SAMU parte da base central e percorre uma distância de 45 quilômetros em 36 minutos para socorrer um paciente. A velocidade média desenvolvida pelo veículo nesse trajeto foi de:",
    options: [
      { letter: "A", text: "65 km/h" },
      { letter: "B", text: "70 km/h" },
      { letter: "C", text: "75 km/h" },
      { letter: "D", text: "80 km/h" }
    ],
    correctLetter: "C",
    explanation: "Velocidade média = Distância / Tempo.\n• Distância = 45 km.\n• Tempo em horas: 36 minutos = 36 / 60 = 0,6 horas.\n• Velocidade = 45 / 0,6 = 75 km/h.",
    difficulty: "Média"
  },
  {
    id: "q_mat_10",
    disciplineId: "matematica",
    topicId: "mat_top3",
    statement: "Um recepcionista organizou uma fila de espera retangular no saguão da unidade, com perímetro total de 28 metros. Sabe-se que o comprimento da área é 4 metros maior que a sua largura. Qual é a área dessa região em metros quadrados?",
    options: [
      { letter: "A", text: "40 m²" },
      { letter: "B", text: "45 m²" },
      { letter: "C", text: "48 m²" },
      { letter: "D", text: "52 m²" }
    ],
    correctLetter: "B",
    explanation: "Seja L a largura e C o comprimento.\n• Perímetro = 2C + 2L = 28 => C + L = 14.\n• C = L + 4.\nSubstituindo: (L + 4) + L = 14 => 2L = 10 => L = 5 metros de largura.\nComprimento C = 5 + 4 = 9 metros.\nÁrea do retângulo = Comprimento x Largura = 9 m x 5 m = 45 m².",
    difficulty: "Média"
  },

  // ==========================================
  // NOÇÕES DE INFORMÁTICA (10 Questões)
  // ==========================================
  {
    id: "q_info_01",
    disciplineId: "informatica",
    topicId: "info_top1",
    statement: "No sistema operacional Microsoft Windows 10/11, qual dos seguintes caracteres é plenamente VÁLIDO para ser utilizado na renomeação de uma pasta ou arquivo de texto?",
    options: [
      { letter: "A", text: "Sublinhado / Underline ( _ )" },
      { letter: "B", text: "Dois-pontos ( : )" },
      { letter: "C", text: "Barra invertida ( \\ )" },
      { letter: "D", text: "Ponto de interrogação ( ? )" }
    ],
    correctLetter: "A",
    explanation: "O caractere sublinhado/underline (_) e o hífen (-) são caracteres perfeitamente válidos e amplamente recomendados para nomear arquivos.\n\nCaracteres PROIBIDOS no Windows: \\ / : * ? \" < > |",
    difficulty: "Fácil"
  },
  {
    id: "q_info_02",
    disciplineId: "informatica",
    topicId: "info_top2",
    statement: "Em uma planilha eletrônica do Microsoft Excel ou LibreOffice Calc, as células B1, B2, B3, B4 contêm, respectivamente, os números 10, 20, 30 e 40. Qual será o resultado apresentado pela fórmula '=SOMA(B1;B4)'?",
    options: [
      { letter: "A", text: "50" },
      { letter: "B", text: "60" },
      { letter: "C", text: "100" },
      { letter: "D", text: "#VALOR!" }
    ],
    correctLetter: "A",
    explanation: "Atenção ao separador! O sinal de ponto e vírgula (;) seleciona apenas células isoladas (B1 E B4).\nLogo, =SOMA(B1;B4) somará apenas B1 (10) + B4 (40) = 50.\n\nSe fosse dois-pontos =SOMA(B1:B4), aí sim somaria todas de B1 até B4 (10+20+30+40 = 100).",
    difficulty: "Média"
  },
  {
    id: "q_info_03",
    disciplineId: "informatica",
    topicId: "info_top3",
    statement: "Um atendente recebe um e-mail com aparência do Ministério da Saúde alertando sobre o 'cancelamento imediato do seu acesso ao sistema caso não clique em um link externo para recadastrar sua senha pessoal'. Esse tipo de golpe cibernético é classificado como:",
    options: [
      { letter: "A", text: "Phishing" },
      { letter: "B", text: "Firewall" },
      { letter: "C", text: "Spooler de impressão" },
      { letter: "D", text: "Cookies de sessão" }
    ],
    correctLetter: "A",
    explanation: "Phishing é a fraude em que criminosos induzem o usuário a fornecer credenciais, senhas e informações sigilosas se passando por instituições confiáveis e legítimas.\n\nAnálise das demais:\n• B: Firewall é um dispositivo de segurança e filtro de tráfego de rede.\n• C: Spooler é serviço que gerencia a fila de impressão no SO.\n• D: Cookies são pequenos arquivos de texto com preferências de navegação.",
    difficulty: "Fácil"
  },
  {
    id: "q_info_04",
    disciplineId: "informatica",
    topicId: "info_top1",
    statement: "Assinale a alternativa que apresenta apenas dispositivos periféricos exclusivamente classificados como de ENTRADA de dados em um computador:",
    options: [
      { letter: "A", text: "Teclado, mouse e scanner." },
      { letter: "B", text: "Monitor de vídeo convencional, impressora térmica e caixa de som." },
      { letter: "C", text: "Mouse, impressora multifuncional e monitor." },
      { letter: "D", text: "Disco rígido (HD), memória RAM e processador." }
    ],
    correctLetter: "A",
    explanation: "Teclado, mouse e scanner enviam dados do mundo externo PARA DENTRO do computador, sendo estritamente periféricos de entrada (Input).\n\nAnálise das demais:\n• B traz periféricos de saída (Output).\n• C traz periféricos mistos/saída.\n• D traz componentes internos de hardware, e não periféricos de entrada.",
    difficulty: "Fácil"
  },
  {
    id: "q_info_05",
    disciplineId: "informatica",
    topicId: "info_top3",
    statement: "Qual tipo de código malicioso (malware) sequestra os arquivos do sistema da vítima através de criptografia complexa e exige pagamento financeiro (resgate) para o fornecimento da chave de liberação?",
    options: [
      { letter: "A", text: "Spyware" },
      { letter: "B", text: "Ransomware" },
      { letter: "C", text: "Adware" },
      { letter: "D", text: "Rootkit" }
    ],
    correctLetter: "B",
    explanation: "Ransomware (de 'ransom' = resgate) é o software malicioso que bloqueia e criptografa dados essenciais da vítima para extorquir resgates financeiros.\n\nAnálise das demais:\n• A: Spyware monitora e espiona o comportamento do usuário.\n• C: Adware exibe anúncios publicitários indesejados.\n• D: Rootkit mantém privilégios de administrador ocultos no sistema.",
    difficulty: "Fácil"
  },
  {
    id: "q_info_06",
    disciplineId: "informatica",
    topicId: "info_top1",
    statement: "No Explorador de Arquivos do Windows, a combinação de teclas de atalho utilizada para selecionar instantaneamente TODOS os itens contidos em uma pasta aberta é:",
    options: [
      { letter: "A", text: "Ctrl + T" },
      { letter: "B", text: "Ctrl + A" },
      { letter: "C", text: "Alt + A" },
      { letter: "D", text: "Shift + T" }
    ],
    correctLetter: "B",
    explanation: "No Windows em português, 'Ctrl + A' seleciona TODOS os arquivos da pasta atual.\n\nAtenção: No Word em português, selecionar tudo é 'Ctrl + T', mas no Explorador de Arquivos do Windows é 'Ctrl + A'!",
    difficulty: "Média"
  },
  {
    id: "q_info_07",
    disciplineId: "informatica",
    topicId: "info_top2",
    statement: "No Microsoft Excel, a função utilizada para contar quantas células dentro de um determinado intervalo atendem a um critério ou condição específica é:",
    options: [
      { letter: "A", text: "=CONT.SE" },
      { letter: "B", text: "=SOMASE" },
      { letter: "C", text: "=CONTAR.NÚM" },
      { letter: "D", text: "=LOCALIZAR" }
    ],
    correctLetter: "A",
    explanation: "=CONT.SE(intervalo; critérios) conta o número de células dentro de um intervalo que atendem a uma condição estipulada (por exemplo, contar quantos usuários são 'Idosos').\n\nSOMASE soma valores numéricos de células que cumprem a condição, e não apenas a quantidade de ocorrências.",
    difficulty: "Fácil"
  },
  {
    id: "q_info_08",
    disciplineId: "informatica",
    topicId: "info_top3",
    statement: "Sobre os procedimentos de cópia de segurança (backup), é correto afirmar que o 'Backup Incremental':",
    options: [
      { letter: "A", text: "Copia todos os arquivos existentes no sistema a cada execução diária." },
      { letter: "B", text: "Grava apenas os arquivos criados ou modificados desde o último backup (seja ele completo ou incremental)." },
      { letter: "C", text: "Apaga automaticamente os dados do computador após salvar na nuvem." },
      { letter: "D", text: "Exige que o computador esteja desconectado da energia elétrica durante o processo." }
    ],
    correctLetter: "B",
    explanation: "O Backup Incremental copia apenas os dados novos ou modificados desde o último backup de qualquer tipo, sendo mais ágil para gravação e ocupando menor espaço em disco.",
    difficulty: "Média"
  },
  {
    id: "q_info_09",
    disciplineId: "informatica",
    topicId: "info_top3",
    statement: "O protocolo de comunicação da internet que utiliza uma camada de segurança com certificação digital e criptografia SSL/TLS para garantir a confidencialidade e a integridade da navegação é o:",
    options: [
      { letter: "A", text: "HTTP" },
      { letter: "B", text: "FTP" },
      { letter: "C", text: "HTTPS" },
      { letter: "D", text: "SMTP" }
    ],
    correctLetter: "C",
    explanation: "HTTPS (HyperText Transfer Protocol Secure) adiciona criptografia SSL/TLS sobre o HTTP comum, garantindo tráfego protegido e confidencial de dados entre o navegador e o servidor web.",
    difficulty: "Fácil"
  },
  {
    id: "q_info_10",
    disciplineId: "informatica",
    topicId: "info_top1",
    statement: "Qual recurso do sistema operacional Windows é expressamente voltado para apoiar pessoas com deficiência visual, auditiva ou motora, incluindo lupa, narrador de tela e teclas de aderência?",
    options: [
      { letter: "A", text: "Central de Facilidade de Acesso / Acessibilidade" },
      { letter: "B", text: "Desfragmentador de Disco" },
      { letter: "C", text: "Windows Defender Offline" },
      { letter: "D", text: "Editor do Registro (Regedit)" }
    ],
    correctLetter: "A",
    explanation: "A Central de Facilidade de Acesso / Menu de Acessibilidade do Windows reúne ferramentas como Lupa, Narrador de tela, Contraste Alto, Reconhecimento de Fala e Teclado Virtual para promover a inclusão de usuários com necessidades específicas.",
    difficulty: "Fácil"
  },

  // ==========================================
  // POLÍTICAS PÚBLICAS DE SAÚDE — SUS (15 Questões)
  // ==========================================
  {
    id: "q_sus_01",
    disciplineId: "sus",
    topicId: "sus_top1",
    statement: "Segundo o Artigo 196 da Constituição Federal de 1988, a saúde é:",
    options: [
      { letter: "A", text: "Direito exclusivo dos trabalhadores formais que contribuem mensalmente para a previdência social." },
      { letter: "B", text: "Dever prioritário das famílias, cabendo ao Estado agir apenas em situações extremas de calamidade pública." },
      { letter: "C", text: "Direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas que visem à redução do risco de doença." },
      { letter: "D", text: "Serviço público tarifado, cobrado conforme a faixa de renda familiar declarada no censo oficial." }
    ],
    correctLetter: "C",
    explanation: "O Art. 196 da CF/88 é categórico: 'A saúde é direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas que visem à redução do risco de doença e de outros agravos e ao acesso universal e igualitário às ações e serviços para sua promoção, proteção e recuperação'.",
    difficulty: "Fácil"
  },
  {
    id: "q_sus_02",
    disciplineId: "sus",
    topicId: "sus_top2",
    statement: "A garantia de atendimento que prioriza pessoas com maior vulnerabilidade e necessidades clínicas mais urgentes, sem preconceitos e buscando reduzir as desigualdades sociais existentes na saúde, expressa o princípio doutrinário da:",
    options: [
      { letter: "A", text: "Universalidade" },
      { letter: "B", text: "Equidade" },
      { letter: "C", text: "Descentralização" },
      { letter: "D", text: "Hierarquização" }
    ],
    correctLetter: "B",
    explanation: "A Equidade é o princípio doutrinário de justiça distributiva ('tratar desigualmente os desiguais'), canalizando mais atenção e recursos àqueles que mais necessitam, com o objetivo de reduzir as disparidades de saúde.\n\nUniversalidade é o direito de todos ao acesso; Integralidade é enxergar o indivíduo como um todo; Descentralização e Hierarquização são princípios organizativos.",
    difficulty: "Fácil"
  },
  {
    id: "q_sus_03",
    disciplineId: "sus",
    topicId: "sus_top3",
    statement: "Nos termos da Lei Federal nº 8.142/1990, os Conselhos de Saúde possuem composição paritária, o que significa que o segmento de representantes dos USUÁRIOS corresponde a:",
    options: [
      { letter: "A", text: "25% do total de membros do conselho." },
      { letter: "B", text: "50% do total de membros do conselho." },
      { letter: "C", text: "33,3% do total de membros do conselho." },
      { letter: "D", text: "75% do total de membros do conselho." }
    ],
    correctLetter: "B",
    explanation: "A Lei 8.142/90 e a Resolução CNS nº 453/2012 determinam a composição paritária do Conselho de Saúde:\n• 50% de Usuários (sociedade civil);\n• 25% de Trabalhadores da Saúde;\n• 25% de Gestores e Prestadores de Serviços de Saúde.",
    difficulty: "Fácil"
  },
  {
    id: "q_sus_04",
    disciplineId: "sus",
    topicId: "sus_top1",
    statement: "Conforme o Artigo 199 da Constituição Federal de 1988, é expressamente VEDADA no Sistema Único de Saúde:",
    options: [
      { letter: "A", text: "A participação complementar de instituições filantrópicas sem fins lucrativos." },
      { letter: "B", text: "A realização de convênios com hospitais privados que prestem atendimento gratuito." },
      { letter: "C", text: "A destinação de recursos públicos para auxílios ou subvenções a instituições privadas com fins lucrativos." },
      { letter: "D", text: "A vacinação gratuita da população em farmácias ou drogarias comunitárias parceiras." }
    ],
    correctLetter: "C",
    explanation: "O Art. 199, § 2º da CF/88 veda taxativamente a destinação de recursos públicos para auxílios ou subvenções a instituições privadas com fins lucrativos, bem como a comercialização de órgãos, tecidos e substâncias humanas.",
    difficulty: "Média"
  },
  {
    id: "q_sus_05",
    disciplineId: "sus",
    topicId: "sus_top3",
    statement: "De acordo com o Decreto Federal nº 7.508/2011, constituem PORTAS DE ENTRADA do SUS nos serviços de atendimento aos usuários, EXCETO:",
    options: [
      { letter: "A", text: "Serviços de Atenção Primária à Saúde (UBS e USF)." },
      { letter: "B", text: "Serviços de Atenção de Urgência e Emergência (UPA, SAMU, Prontos-Socorros)." },
      { letter: "C", text: "Serviços de Atenção Psicossocial (CAPS)." },
      { letter: "D", text: "Hospitais Terciários e Ambulatórios Especializados de Alta Complexidade." }
    ],
    correctLetter: "D",
    explanation: "O Decreto nº 7.508/2011 define que são portas de entrada do SUS nas Redes de Atenção à Saúde as ações e serviços de:\n1. Atenção Primária;\n2. Atenção de Urgência e Emergência;\n3. Atenção Psicossocial (CAPS);\n4. Serviços Especiais de Acesso Aberto.\nHospitais especializados e serviços terciários são acessados mediante regulação (referência) a partir das portas de entrada, não sendo serviços de entrada direta.",
    difficulty: "Média"
  },
  {
    id: "q_sus_06",
    disciplineId: "sus",
    topicId: "sus_top2",
    statement: "A Lei Federal nº 8.080/1990 estabelece em seu Artigo 3º que os fatores determinantes e condicionantes da saúde incluem:",
    options: [
      { letter: "A", text: "Apenas os fatores biológicos e genéticos herdados dos antepassados." },
      { letter: "B", text: "Alimentação, moradia, saneamento básico, meio ambiente, trabalho, renda, educação, atividade física, transporte, lazer e acesso aos bens e serviços essenciais." },
      { letter: "C", text: "Exclusivamente a posse de plano de saúde privado suplementar." },
      { letter: "D", text: "Somente a frequência com que o indivíduo comparece a hospitais para consultas curativas." }
    ],
    correctLetter: "B",
    explanation: "O Art. 3º da Lei 8.080/90 adota a concepção ampliada de saúde: ela não decorre apenas da medicina curativa, mas de condições sociais, econômicas e ambientais dignas de vida e cidadania.",
    difficulty: "Fácil"
  },
  {
    id: "q_sus_07",
    disciplineId: "sus",
    topicId: "sus_top3",
    statement: "De acordo com a Lei nº 8.142/1990, a Conferência de Saúde reunir-se-á ordinariamente a cada:",
    options: [
      { letter: "A", text: "1 ano" },
      { letter: "B", text: "2 anos" },
      { letter: "C", text: "4 anos" },
      { letter: "D", text: "5 anos" }
    ],
    correctLetter: "C",
    explanation: "A Conferência de Saúde reunir-se-á a cada quatro anos com a representação dos vários segmentos sociais, para avaliar a situação de saúde e propor as diretrizes para a formulação da política de saúde nos níveis correspondentes.",
    difficulty: "Fácil"
  },
  {
    id: "q_sus_08",
    disciplineId: "sus",
    topicId: "sus_top2",
    statement: "No SUS, o princípio organizativo que preconiza a concentração da responsabilidade dos serviços e ações de saúde principalmente no âmbito municipal, mais próximo de onde as pessoas vivem, denomina-se:",
    options: [
      { letter: "A", text: "Descentralização político-administrativa" },
      { letter: "B", text: "Integralidade" },
      { letter: "C", text: "Equidade" },
      { letter: "D", text: "Privatização subsidiada" }
    ],
    correctLetter: "A",
    explanation: "A descentralização político-administrativa redistribui as atribuições e recursos da esfera federal para os estados e, fundamentalmente, para os municípios (processo de municipalização do SUS), mantendo direção única em cada esfera.",
    difficulty: "Fácil"
  },
  {
    id: "q_sus_09",
    disciplineId: "sus",
    topicId: "sus_top3",
    statement: "Segundo o Decreto nº 7.508/2011, o instrumento jurídico pelo qual os gestores do SUS (União, Estados e Municípios) acordam suas responsabilidades recíprocas na gestão e na integração das ações de saúde em uma Região de Saúde denomina-se:",
    options: [
      { letter: "A", text: "Contrato Organizativo da Ação Pública da Saúde (COAP)" },
      { letter: "B", text: "Termo de Ajustamento de Conduta Trabalhista" },
      { letter: "C", text: "Portaria de Alienação Financeira" },
      { letter: "D", text: "Contrato de Empréstimo Hospitalar" }
    ],
    correctLetter: "A",
    explanation: "O Contrato Organizativo da Ação Pública da Saúde (COAP) é o acordo formal de colaboração firmado entre os entes federativos para organizar a rede assistencial de uma Região de Saúde.",
    difficulty: "Média"
  },
  {
    id: "q_sus_10",
    disciplineId: "sus",
    topicId: "sus_top1",
    statement: "O Artigo 198 da Constituição Federal estabelece que as ações e serviços públicos de saúde integram uma rede regionalizada e hierarquizada e constituem um sistema único, organizado segundo as seguintes diretrizes:",
    options: [
      { letter: "A", text: "Centralização ministerial, atendimento curativo exclusivo e gestão empresarial privada." },
      { letter: "B", text: "Descentralização com direção única em cada esfera de governo; atendimento integral com prioridade para as atividades preventivas; e participação da comunidade." },
      { letter: "C", text: "Cobrança de coparticipação aos usuários de maior renda; controle exclusivamente médico; e subordinação aos planos privados." },
      { letter: "D", text: "Regionalização sem descentralização; foco em leitos de internação; e extinção dos conselhos populares." }
    ],
    correctLetter: "B",
    explanation: "O Art. 198 traz expressamente as três diretrizes constitucionais do SUS: I - descentralização, com direção única em cada esfera de governo; II - atendimento integral, com prioridade para as atividades preventivas, sem prejuízo dos serviços assistenciais; III - participação da comunidade.",
    difficulty: "Fácil"
  },
  {
    id: "q_sus_11",
    disciplineId: "sus",
    topicId: "sus_top2",
    statement: "O conjunto de ações capaz de eliminar, diminuir ou prevenir riscos à saúde e de intervir nos problemas sanitários decorrentes do meio ambiente, da produção e circulação de bens e da prestação de serviços de interesse da saúde define a:",
    options: [
      { letter: "A", text: "Vigilância Sanitária" },
      { letter: "B", text: "Vigilância Epidemiológica" },
      { letter: "C", text: "Atenção Terciária Hospitalar" },
      { letter: "D", text: "Regulação de Leitos" }
    ],
    correctLetter: "A",
    explanation: "Conforme o Artigo 6º, § 1º da Lei 8.080/1990, esta é a definição exata e literal de Vigilância Sanitária (controle de produtos, medicamentos, alimentos e estabelecimentos de saúde).",
    difficulty: "Média"
  },
  {
    id: "q_sus_12",
    disciplineId: "sus",
    topicId: "sus_top2",
    statement: "O conjunto de ações que proporciona o conhecimento, a detecção ou prevenção de qualquer mudança nos fatores determinantes e condicionantes de saúde individual ou coletiva, com a finalidade de recomendar e adotar medidas de prevenção e controle de doenças ou agravos transmissíveis e não transmissíveis, é a:",
    options: [
      { letter: "A", text: "Vigilância Epidemiológica" },
      { letter: "B", text: "Auditoria Contábil do SUS" },
      { letter: "C", text: "Ouvidoria Geral do Município" },
      { letter: "D", text: "Administração Penitenciária" }
    ],
    correctLetter: "A",
    explanation: "Definição literal do Artigo 6º, § 2º da Lei 8.080/1990 para Vigilância Epidemiológica (acompanhamento de casos de dengue, covid, sarampo, tuberculose e notificação compulsória).",
    difficulty: "Média"
  },
  {
    id: "q_sus_13",
    disciplineId: "sus",
    topicId: "sus_top3",
    statement: "A sigla RENAME, instituída no âmbito do SUS e disciplinada pelo Decreto nº 7.508/2011, corresponde à:",
    options: [
      { letter: "A", text: "Relação Nacional de Medicamentos Essenciais" },
      { letter: "B", text: "Rede Nacional de Médicos Especialistas" },
      { letter: "C", text: "Registro Nacional de Maternidades Públicas" },
      { letter: "D", text: "Regulação Normativa de Exames de Urgência" }
    ],
    correctLetter: "A",
    explanation: "RENAME significa Relação Nacional de Medicamentos Essenciais, que padroniza os fármacos fornecidos gratuitamente no âmbito do SUS em todo o país.",
    difficulty: "Fácil"
  },
  {
    id: "q_sus_14",
    disciplineId: "sus",
    topicId: "sus_top3",
    statement: "Uma Região de Saúde, para ser instituída segundo os critérios mínimos do Decreto Federal nº 7.508/2011, deve conter obrigatoriamente ações e serviços de:",
    options: [
      { letter: "A", text: "Atenção Primária; Urgência e Emergência; Atenção Psicossocial; Atenção Ambulatorial Especializada e Hospitalar; e Vigilância em Saúde." },
      { letter: "B", text: "Apenas hospital com pronto-socorro e farmácia municipal 24 horas." },
      { letter: "C", text: "Exclusivamente maternidade de alto risco e banco de leite humano." },
      { letter: "D", text: "Somente clínicas particulares conveniadas e laboratório central de análises." }
    ],
    correctLetter: "A",
    explanation: "O Art. 5º do Decreto 7.508/2011 exige expressamente a presença cumulativa desses cinco serviços essenciais para a instituição de uma Região de Saúde.",
    difficulty: "Média"
  },
  {
    id: "q_sus_15",
    disciplineId: "sus",
    topicId: "sus_top1",
    statement: "A respeito da direção do Sistema Único de Saúde (SUS), o Artigo 9º da Lei nº 8.080/1990 estabelece que ela é única, sendo exercida no âmbito dos Municípios pela:",
    options: [
      { letter: "A", text: "Secretaria Municipal de Saúde ou órgão equivalente." },
      { letter: "B", text: "Câmara Municipal de Vereadores." },
      { letter: "C", text: "Diretoria Regional de Saúde do Estado." },
      { letter: "D", text: "Delegacia de Polícia Civil do Município." }
    ],
    correctLetter: "A",
    explanation: "A direção única em cada esfera governamental é exercida no âmbito dos Municípios pela respectiva Secretaria Municipal de Saúde (SMS) ou órgão similar.",
    difficulty: "Fácil"
  },

  // ==========================================
  // CONHECIMENTOS ESPECÍFICOS DE ATENDENTE SUS (16 Questões - 50% DA PROVA!)
  // ==========================================
  {
    id: "q_esp_01",
    disciplineId: "especificos",
    topicId: "esp_top1",
    statement: "Um cidadão travesti comparece ao balcão de recepção da UBS em Guarulhos para agendar uma consulta médica e solicita ser identificado e chamado publicamente por seu Nome Social. De acordo com a legislação federal e as diretrizes do SUS, a conduta correta e obrigatória do atendente é:",
    options: [
      { letter: "A", text: "Exigir a apresentação de certidão de nascimento retificada judicialmente antes de qualquer atendimento com o nome social." },
      { letter: "B", text: "Garantir o registro e a chamada pública pelo Nome Social em guichês, filas, agendamentos e prontuário, assegurando respeito e dignidade." },
      { letter: "C", text: "Informar que o sistema do SUS não permite o cadastramento de nomes diferentes do registro civil de nascimento." },
      { letter: "D", text: "Chamar o usuário pelo nome civil de nascimento no saguão e utilizar o nome social somente na sala médica reservada." }
    ],
    correctLetter: "B",
    explanation: "O Decreto Presidencial nº 8.727/2016 e as normativas do SUS garantem expressamente a todas as pessoas travestis e transexuais o direito ao uso do Nome Social em chamadas públicas, cadastros, prontuários e carteiras do SUS, sem exigir alteração judicial prévia de documentos civis.",
    difficulty: "Fácil"
  },
  {
    id: "q_esp_02",
    disciplineId: "especificos",
    topicId: "esp_top2",
    statement: "No balcão de agendamento de uma unidade de saúde do SUS, encontram-se quatro usuários aguardando na fila preferencial. Tendo em vista as normas do Estatuto da Pessoa Idosa (Lei nº 10.741/2003) e da Lei nº 10.048/2000, qual deles possui a chamada 'superprioridade' de atendimento?",
    options: [
      { letter: "A", text: "Um idoso com 65 anos de idade com acompanhante." },
      { letter: "B", text: "Um idoso com 74 anos de idade com retorno marcado." },
      { letter: "C", text: "Uma usuária idosa com 82 anos de idade." },
      { letter: "D", text: "Um usuário com 58 anos de idade com receita de medicamento contínuo." }
    ],
    correctLetter: "C",
    explanation: "A Lei nº 13.466/2017 alterou o Estatuto da Pessoa Idosa para fixar a prioridade especial (superprioridade) aos maiores de 80 anos de idade, os quais devem ter suas demandas atendidas com preferência em relação aos demais idosos, ressalvados os casos de emergência médica.",
    difficulty: "Fácil"
  },
  {
    id: "q_esp_03",
    disciplineId: "especificos",
    topicId: "esp_top3",
    statement: "A respeito da propriedade, guarda e manuseio dos prontuários clínicos dos pacientes atendidos na rede pública de saúde, assinale a alternativa juridicamente correta:",
    options: [
      { letter: "A", text: "O prontuário pertence exclusivamente ao médico que atendeu o paciente, não podendo ser copiado pela unidade." },
      { letter: "B", text: "O prontuário é de propriedade do paciente, cabendo à unidade de saúde a sua custódia, guarda fiel e dever estrito de sigilo profissional." },
      { letter: "C", text: "O prontuário pode ser descartado em lixo comum após 1 ano do término do tratamento do usuário." },
      { letter: "D", text: "Qualquer vizinho ou empregador tem o direito de consultar livremente o prontuário do usuário, por ser um serviço público." }
    ],
    correctLetter: "B",
    explanation: "Jurisprudência pacífica do CFM e a legislação estabelecem que os dados contidos no prontuário pertencem ao paciente. A instituição de saúde é a guardiã fiel (fiel depositária) e deve zelar pelo sigilo e preservação do documento.",
    difficulty: "Média"
  },
  {
    id: "q_esp_04",
    disciplineId: "especificos",
    topicId: "esp_top3",
    statement: "Qual é o prazo mínimo de guarda obrigatória estabelecido por lei para os prontuários médicos em suporte de papel, contado a partir do último registro de atendimento do paciente na unidade?",
    options: [
      { letter: "A", text: "5 anos" },
      { letter: "B", text: "10 anos" },
      { letter: "C", text: "20 anos" },
      { letter: "D", text: "50 anos" }
    ],
    correctLetter: "C",
    explanation: "A Lei Federal nº 13.787/2018 (Art. 6º) e a Resolução CFM nº 1.821/2007 fixam expressamente o prazo mínimo de 20 (vinte) anos para a guarda e conservação de prontuários em suporte de papel, a contar da data do último atendimento registrado.",
    difficulty: "Média"
  },
  {
    id: "q_esp_05",
    disciplineId: "especificos",
    topicId: "esp_top4",
    statement: "No SUS, o sistema informatizado disponibilizado pelo Ministério da Saúde com a função primordial de regular e gerenciar a marcação de consultas médicas especializadas, exames diagnósticos de média e alta complexidade e a disponibilização de leitos hospitalares é o:",
    options: [
      { letter: "A", text: "SISREG (Sistema de Regulação)" },
      { letter: "B", text: "SINAN (Sistema de Informação de Agravos de Notificação)" },
      { letter: "C", text: "SIA/SUS (Sistema de Informações Ambulatoriais)" },
      { letter: "D", text: "SI-PNI (Sistema de Informação do Programa Nacional de Imunizações)" }
    ],
    correctLetter: "A",
    explanation: "O SISREG (Sistema de Regulação) é o software desenvolvido pelo Datasus para regular o acesso do cidadão a consultas com especialistas, exames complexos e internações hospitalares na rede conveniada/pública.",
    difficulty: "Fácil"
  },
  {
    id: "q_esp_06",
    disciplineId: "especificos",
    topicId: "esp_top3",
    statement: "O número do Cartão Nacional de Saúde (CNS), documento fundamental que identifica o usuário do SUS e reúne todo o seu histórico de atendimentos, é composto por:",
    options: [
      { letter: "A", text: "9 dígitos" },
      { letter: "B", text: "11 dígitos" },
      { letter: "C", text: "15 dígitos" },
      { letter: "D", text: "16 dígitos" }
    ],
    correctLetter: "C",
    explanation: "O Cartão Nacional de Saúde (CNS) é estruturado nacionalmente com 15 dígitos. Cartões definitivos iniciam com os dígitos 1 ou 2, enquanto cartões provisórios iniciam com 7 ou 8.",
    difficulty: "Fácil"
  },
  {
    id: "q_esp_07",
    disciplineId: "especificos",
    topicId: "esp_top5",
    statement: "De acordo com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018), os dados referentes à saúde, histórico médico, exames e diagnósticos de um usuário do SUS enquadram-se legalmente na categoria de:",
    options: [
      { letter: "A", text: "Dados públicos irrestritos de livre comercialização." },
      { letter: "B", text: "Dados pessoais sensíveis, que exigem especial cuidado no tratamento e estrito dever de sigilo." },
      { letter: "C", text: "Dados anônimos irrelevantes sem proteção regulatória." },
      { letter: "D", text: "Dados corporativos pertencentes exclusivamente à operadora de informática." }
    ],
    correctLetter: "B",
    explanation: "O Art. 5º, inciso II da LGPD classifica dados referentes à saúde ou à vida sexual, dados genéticos e biométricos expressamente como 'DADOS PESSOAIS SENSÍVEIS', com exigências e restrições rigorosas de segurança e confidencialidade.",
    difficulty: "Fácil"
  },
  {
    id: "q_esp_08",
    disciplineId: "especificos",
    topicId: "esp_top5",
    statement: "A Lei Federal nº 13.460/2017 disciplina os direitos dos usuários dos serviços públicos da administração pública. Segundo essa norma, o documento publicado pelo órgão que informa ao cidadão quais serviços são prestados, os requisitos para acessá-los, os horários e os prazos máximos de atendimento denomina-se:",
    options: [
      { letter: "A", text: "Carta de Serviços ao Usuário" },
      { letter: "B", text: "Edital de Convocação Pública" },
      { letter: "C", text: "Balanço Patrimonial Anual" },
      { letter: "D", text: "Regimento Disciplinar dos Servidores" }
    ],
    correctLetter: "A",
    explanation: "O Art. 7º da Lei 13.460/2017 institui a obrigatoriedade da 'Carta de Serviços ao Usuário', que deve detalhar de maneira clara e transparente os serviços prestados pela unidade, formas de acesso, prazos e locais de atendimento.",
    difficulty: "Fácil"
  },
  {
    id: "q_esp_09",
    disciplineId: "especificos",
    topicId: "esp_top1",
    statement: "Em uma manhã movimentada na recepção da UBS, um usuário chega bastante irritado e altera a voz com o atendente porque seu exame ainda não foi liberado. Diante dessa situação, a postura profissional esperada de um Atendente SUS pautada na ética e na comunicação humanizada é:",
    options: [
      { letter: "A", text: "Responder no mesmo tom agressivo para demonstrar autoridade como servidor público concursado." },
      { letter: "B", text: "Manter a calma, praticar a escuta qualificada sem interrupções ofensivas, demonstrar empatia com a aflição do usuário e verificar objetivamente no sistema o status real da solicitação, prestando orientações claras." },
      { letter: "C", text: "Recusar-se a prestar qualquer informação e acionar imediatamente a polícia militar sem antes ouvir o motivo do usuário." },
      { letter: "D", text: "Prometer falsamente que o resultado estará pronto em 10 minutos apenas para fazer o usuário sair do balcão." }
    ],
    correctLetter: "B",
    explanation: "A comunicação não-violenta, a inteligência emocional, a empatia e a escuta qualificada são pilares do atendimento humanizado no SUS. O atendente deve manter a serenidade, ouvir com atenção e buscar resolver a demanda dentro dos procedimentos institucionais cabíveis.",
    difficulty: "Fácil"
  },
  {
    id: "q_esp_10",
    disciplineId: "especificos",
    topicId: "esp_top4",
    statement: "No âmbito do Sistema de Informações Ambulatoriais (SIA/SUS), o Boletim de Produção Ambulatorial (BPA) é o instrumento utilizado para o registro de ações realizadas nas unidades. A modalidade BPA-I (Individualizado) diferencia-se da modalidade BPA-C (Consolidado) por exigir:",
    options: [
      { letter: "A", text: "Apenas o somatório numérico mensal dos procedimentos sem identificação do usuário." },
      { letter: "B", text: "A identificação individual do paciente por meio do número do Cartão Nacional de Saúde (CNS) e dados cadastrais específicos." },
      { letter: "C", text: "O comprovante de quitação eleitoral e a declaração de imposto de renda do cidadão." },
      { letter: "D", text: "A assinatura de próprio punho do prefeito municipal em cada atendimento ambulatorial." }
    ],
    correctLetter: "B",
    explanation: "O BPA-I (Individualizado) exige o registro nominal e detalhado de cada paciente (com o número do CNS e dados do procedimento), enquanto o BPA-C (Consolidado) apenas registra quantidades totais agregadas de procedimentos ambulatoriais mais simples.",
    difficulty: "Média"
  },
  {
    id: "q_esp_11",
    disciplineId: "especificos",
    topicId: "esp_top5",
    statement: "Um amigo pessoal do atendente comparece à recepção da unidade de saúde e pede para consultar se uma determinada vizinha esteve na unidade realizando exames de gravidez e qual médico a atendeu. Considerando os deveres de sigilo funcional e a LGPD, o atendente deve:",
    options: [
      { letter: "A", text: "Revelar os dados prontamente, visto que a amizade autoriza o acesso às informações cadastrais." },
      { letter: "B", text: "Imprimir a ficha médica da vizinha e entregá-la discretamente ao amigo fora do horário de expediente." },
      { letter: "C", text: "Negar categoricamente o fornecimento de qualquer dado clínico ou de comparecimento, esclarecendo que as informações de saúde são estritamente sigilosas e protegidas por lei." },
      { letter: "D", text: "Cobrar uma taxa administrativa informal para fazer a consulta no sistema do prontuário." }
    ],
    correctLetter: "C",
    explanation: "A violação do sigilo funcional na administração pública e o acesso indevido a dados de saúde violam a LGPD, o Estatuto dos Servidores e o Código Penal (Art. 325 - Violação de Sigilo Funcional). Nenhuma informação de saúde de terceiros pode ser repassada sem consentimento do titular ou ordem judicial.",
    difficulty: "Fácil"
  },
  {
    id: "q_esp_12",
    disciplineId: "especificos",
    topicId: "esp_top1",
    statement: "A Política Nacional de Humanização (HumanizaSUS) orienta o trabalho nas unidades de saúde por meio de diretrizes operacionais. A diretriz que estimula a reorganização dos ambientes físicos para torná-los confortáveis, acolhedores e integrados aos processos de trabalho é denominada:",
    options: [
      { letter: "A", text: "Ambiência" },
      { letter: "B", text: "Clínica Ampliada" },
      { letter: "C", text: "Co-gestão" },
      { letter: "D", text: "Transversalidade" }
    ],
    correctLetter: "A",
    explanation: "Ambiência no HumanizaSUS refere-se ao tratamento dado ao espaço físico (iluminação, cores, temperatura, sinalização acessível, ventilação e conforto nos espaços de recepção e espera), compreendido como facilitador do processo de produção de saúde.",
    difficulty: "Média"
  },
  {
    id: "q_esp_13",
    disciplineId: "especificos",
    topicId: "esp_top5",
    statement: "Nos termos da Lei de Acesso à Informação (LAI - Lei Federal nº 12.527/2011), as informações relativas à intimidade, vida privada, honra e imagem das pessoas:",
    options: [
      { letter: "A", text: "São totalmente públicas e podem ser publicadas em redes sociais da prefeitura." },
      { letter: "B", text: "Terão seu acesso restrito, independentemente de classificação de sigilo, pelo prazo máximo de 100 (cem) anos a contar da data de sua produção." },
      { letter: "C", text: "Devem ser destruídas imediatamente após o registro para evitar processos judiciais." },
      { letter: "D", text: "Perdem qualquer proteção legal a partir do momento em que o cidadão utiliza um serviço público gratuito." }
    ],
    correctLetter: "B",
    explanation: "O Art. 31, § 1º, inciso I da LAI estabelece que as informações pessoais que digam respeito à intimidade, vida privada, honra e imagem terão seu acesso restrito a agentes públicos legalmente autorizados e à própria pessoa, pelo prazo máximo de 100 anos.",
    difficulty: "Difícil"
  },
  {
    id: "q_esp_14",
    disciplineId: "especificos",
    topicId: "esp_top4",
    statement: "No cotidiano de uma Unidade Básica de Saúde da Família (USF), a ferramenta tecnológica central da estratégia e-SUS APS que armazena a ficha cadastral do indivíduo, os atendimentos da equipe multiprofissional e o agendamento compartilhado chama-se:",
    options: [
      { letter: "A", text: "Prontuário Eletrônico do Cidadão (PEC)" },
      { letter: "B", text: "Guia da Previdência Social (GPS)" },
      { letter: "C", text: "Sistema de Controle de Frequência Catraca" },
      { letter: "D", text: "Painel de Senhas Bancárias" }
    ],
    correctLetter: "A",
    explanation: "O Prontuário Eletrônico do Cidadão (PEC) é o software principal da estratégia e-SUS APS desenvolvido pelo Ministério da Saúde para informatizar a rotina das unidades de Atenção Primária.",
    difficulty: "Fácil"
  },
  {
    id: "q_esp_15",
    disciplineId: "especificos",
    topicId: "esp_top2",
    statement: "Segundo a Lei Federal nº 10.048/2000 e suas atualizações, a pessoa com Transtorno do Espectro Autista (TEA):",
    options: [
      { letter: "A", text: "Possui direito ao atendimento prioritário nas repartições públicas, extensivo ao seu acompanhante." },
      { letter: "B", text: "Deve aguardar o final de todos os atendimentos comuns antes de ser atendida." },
      { letter: "C", text: "Não se enquadra nos benefícios de acessibilidade legal por não possuir deficiência física aparente." },
      { letter: "D", text: "Pode receber atendimento apenas em hospitais psiquiátricos especializados fora do SUS." }
    ],
    correctLetter: "A",
    explanation: "A Lei nº 12.764/2012 (Política Nacional de Proteção dos Direitos da Pessoa com TEA) equiparou a pessoa com autismo à pessoa com deficiência para todos os efeitos legais, assegurando prioridade de atendimento inclusive para o acompanhante.",
    difficulty: "Fácil"
  },
  {
    id: "q_esp_16",
    disciplineId: "especificos",
    topicId: "esp_top5",
    statement: "De acordo com a Lei Federal nº 13.460/2017, a Ouvidoria do serviço público deverá responder às manifestações dos usuários (como reclamações e sugestões) no prazo máximo de:",
    options: [
      { letter: "A", text: "5 dias improrrogáveis." },
      { letter: "B", text: "30 dias, prorrogável de forma justificada por igual período." },
      { letter: "C", text: "1 ano corrido." },
      { letter: "D", text: "Não há prazo fixado na legislação federal para respostas da ouvidoria." }
    ],
    correctLetter: "B",
    explanation: "O Art. 16 da Lei nº 13.460/2017 estabelece que a ouvidoria responderá à manifestação no prazo de até 30 (trinta) dias, prorrogável de forma justificada por igual período uma única vez.",
    difficulty: "Média"
  }
];
