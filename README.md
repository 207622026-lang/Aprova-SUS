# Aprova SUS — Atendente SUS 2026 (Prefeitura de Guarulhos / IBAM)

Plataforma educacional completa, moderna, funcional e responsiva, desenvolvida sob medida para a preparação direcionada ao concurso público de **Atendente SUS da Prefeitura Municipal de Guarulhos**, organizado pela banca **IBAM**, conforme o **Edital nº 06/2026-SGE01**.

---

## 🎯 Sobre o Concurso Oficial

- **Cargo:** Atendente SUS
- **Banca Organizadora:** IBAM (Instituto Brasileiro de Administração Municipal)
- **Órgão:** Prefeitura Municipal de Guarulhos / SP
- **Edital Oficial:** Edital de Abertura nº 06/2026-SGE01
- **Página Oficial do Concurso no IBAM:** [https://www.ibamsp-concursos.org.br/informacoes/192](https://www.ibamsp-concursos.org.br/informacoes/192)
- **Data da Prova:** **29/11/2026** (designada como data prevista até confirmação no edital de convocação)
- **Duração da Prova:** 3 horas (180 minutos)
- **Total de Questões:** 40 questões de múltipla escolha (A, B, C, D)
- **Pontuação Máxima:** 100 pontos (mínimo de 50 pontos para aprovação)

### 📊 Composição e Pesos Oficiais das Questões

| Disciplina Oficial | Nº de Questões | Peso por Questão | Pontuação Máxima | % da Prova |
|:---|:---:|:---:|:---:|:---:|
| **Língua Portuguesa** | 10 | 1 | 10 pontos | 10% |
| **Matemática** | 5 | 2 | 10 pontos | 10% |
| **Noções de Informática** | 5 | 2 | 10 pontos | 10% |
| **Políticas Públicas de Saúde — SUS** | 10 | 2 | 20 pontos | 20% |
| **Conhecimentos Específicos de Atendente SUS** | 10 | 5 | **50 pontos** | **50%** |
| **TOTAL GERAL** | **40** | — | **100 pontos** | **100%** |

> ⚠️ **Atenção:** A disciplina de *Conhecimentos Específicos* sozinha representa **50% de toda a pontuação da prova**! Por isso, o cronograma e o sistema recomendador priorizam fortemente este conteúdo.

---

## 🚀 Como Executar a Plataforma

A plataforma foi desenvolvida com arquitetura moderna e autônoma, sem exigir instalação prévia de Node.js, Python ou bancos de dados remotos:

### Opção 1: Execução com 1 Clique (Recomendado no Windows)
Dê um duplo clique no arquivo:
```
iniciar.bat
```
Ele iniciará automaticamente o servidor local em `http://localhost:3000/` e abrirá seu navegador padrão.

### Opção 2: Execução via PowerShell
Abra o PowerShell na pasta do projeto e execute:
```powershell
powershell -ExecutionPolicy Bypass -File .\start-server.ps1
```

### Opção 3: Abertura Direta no Navegador
Você também pode abrir o arquivo `index.html` diretamente com qualquer navegador web (Google Chrome, Microsoft Edge, Mozilla Firefox, Opera ou no celular).

---

## 🌟 Principais Funcionalidades da Plataforma

### 1. Painel Principal (Dashboard)
- **Contagem regressiva automática** em tempo real para a data prevista da prova (29/11/2026).
- **Métricas reais e honestas**: percentual do edital coberto, total de questões resolvidas, acertos/erros e nota do último simulado (sem valores fictícios; no primeiro uso, inicia zerado com mensagem convidando a começar).
- **Atalho "Continuar de onde parou"**: memoriza a última aula estudada para acesso imediato.
- **Sugestão Inteligente de Próximo Passo**: calcula seus pontos fracos reais e sugere o assunto mais urgente para estudar.
- **Rendimento comparativo por disciplina** com barras de assertividade.
- **Checklist diário de metas**: tarefas do dia com caixas de conclusão persistentes.

### 2. Aulas e Teoria Didática (5 Disciplinas Oficiais)
- Conteúdo programático completo baseado no **Anexo II do Edital**:
  - *Língua Portuguesa:* interpretação, coesão, acentuação, concordância, regência e crase.
  - *Matemática:* MMC/MDC, porcentagem, regra de três, equações do 1º grau, média e medidas.
  - *Noções de Informática:* hardware, Windows, Excel/Calc, internet e segurança da informação.
  - *Políticas Públicas de Saúde — SUS:* Arts. 196 a 200 da CF/88, Leis 8.080/90 e 8.142/90, Decreto 7.508/11 e PNAB.
  - *Conhecimentos Específicos:* acolhimento humanizado, atendimento prioritário, CadSUS/CNS, SISREG, e-SUS PEC, prontuários (guarda de 20 anos), LGPD na saúde, Lei 13.460/17 e LAI.
- Em cada tópico você encontra:
  - 📖 **Explicação do zero** passo a passo.
  - 🎯 **Resumo dos conceitos-chave**.
  - 🏥 **Exemplo prático** na rotina das Unidades de Saúde de Guarulhos.
  - 🔎 **Raio-X da Banca IBAM**: como o assunto é cobrado em prova.
  - ⚠️ **Quadro de Atenção e Pegadinhas Clássicas**.
  - 📝 **Exercício de Fixação Imediata** com feedback comentado.
  - ✍️ **Campo de anotações pessoais** com salvamento automático.
  - ✅ **Botão "Marcar como Estudado"** que atualiza o progresso global.

### 3. Banco de Questões Interativo (65 Questões Originais)
- Questões originais alinhadas ao estilo da banca IBAM, com 4 alternativas (A, B, C, D).
- Gabarito fundamentado com **análise completa de por que a alternativa correta é a certa e o erro de cada uma das incorretas**.
- Filtros avançados por:
  - Matéria oficial
  - Status (não respondidas, erradas, acertadas e favoritas)
  - Busca por palavras-chave
- **Dois Modos de Resolução:**
  - *Modo Aprendizagem:* revela o gabarito e o comentário didático imediatamente ao clicar na alternativa.
  - *Modo Treino:* permite responder a lista inteira em lote e conferir o resultado apenas ao submeter.

### 4. Simulado Oficial IBAM (40 Questões • 3 Horas)
- Distribuição exata da prova oficial:
  - 10 de Português (peso 1)
  - 5 de Matemática (peso 2)
  - 5 de Informática (peso 2)
  - 10 de Legislação SUS (peso 2)
  - 10 de Conhecimentos Específicos (peso 5)
- **Cronômetro funcional de 3 horas** com alerta nos últimos 15 minutos e encerramento automático ao zerar.
- Pausar e retomar a qualquer momento.
- Cartão-resposta visual numerado de 1 a 40 (verde = respondida; amarelo = marcada para revisão; cinza = pendente).
- Confirmação antecipada avisando quantas questões faltam responder.
- **Relatório Completo Pós-Simulado**:
  - Nota final calculada rigorosamente pelos pesos oficiais (escala de 0 a 100 pontos).
  - Indicador de classificação (mínimo de 50 pontos).
  - Rendimento detalhado por matéria (pontos obtidos / pontos máximos).
  - Lista de assuntos fracos para revisão urgente.
  - Gabarito comentado de todas as 40 questões.
  - Histórico de simulados salvos para acompanhar sua evolução.

### 5. Plano de Estudos Ajustável e Temporizador Pomodoro
- Ajuste de minutos disponíveis por dia (30 a 300 minutos) e seleção de dias da semana disponíveis.
- Distribuição automática do tempo semanal respeitando os pesos do concurso (50% Específicos, 20% SUS, etc.).
- **Cronômetro de Foco / Temporizador Integrado**: marque suas sessões de estudo em tempo real e salve as horas acumuladas diretamente no seu perfil.
- Checklist de metas diárias.

### 6. Flashcards com Repetição Espaçada
- Baralho completo com cartões frente/verso (efeito de virar em 3D).
- Classificação por facilidade: **Fácil (revisa em 6 dias)**, **Médio (revisa em 3 dias)** e **Difícil/Errei (revisa amanhã)**.
- Filtro por matéria e marcador de cartões favoritos.
- Abrange fórmulas de matemática, prazos de lei, regras gramaticais, princípios do SUS e rotinas administrativas.

### 7. Desempenho e Revisão Inteligente
- Gráficos visuais em SVG de assertividade por matéria.
- Gráfico de histórico dos simulados realizados.
- Alerta das matérias com pior desempenho para direcionamento de estudos.
- **Exportação e Importação de Backup (JSON)**: transfira seus dados para outro celular ou computador facilmente.
- Opção para zerar dados com confirmação em duas etapas.

---

## 📁 Estrutura de Arquivos do Projeto

```
aprova-sus/
├── index.html              # Shell HTML principal responsivo e acessível
├── start-server.ps1        # Servidor HTTP local leve e autônomo em PowerShell
├── iniciar.bat             # Inicializador em 1 clique para Windows
├── README.md               # Manual completo de utilização e do concurso
├── css/
│   └── styles.css          # Estilos customizados, modo claro/escuro e acessibilidade
└── js/
    ├── app.js              # Roteador de abas e orquestrador principal
    ├── store.js            # Gerenciador de estado e persistência no LocalStorage
    ├── components/
    │   ├── icons.js        # Ícones SVG autônomos (100% offline)
    │   └── modal.js        # Componente de modal acessível
    ├── data/
    │   ├── exam_info.js    # Metadados oficiais, datas e pesos da banca IBAM
    │   ├── courses.js      # Conteúdo teórico didático de todas as disciplinas
    │   ├── questions.js    # 65 questões originais comentadas alternativa por alternativa
    │   └── flashcards.js   # Baralho de flashcards estratégicos
    └── views/
        ├── dashboard.js    # Visão do painel de controle e contagem regressiva
        ├── courses.js      # Visão das aulas teóricas com anotações e fixação
        ├── questions.js    # Visão do banco de questões (aprendizagem e treino)
        ├── exam.js         # Visão do simulado oficial (40 questões, 3h, pesos)
        ├── planner.js      # Visão do planejador e temporizador de estudo
        ├── performance.js  # Visão analítica, gráficos e backup JSON
        ├── flashcards.js   # Visão de flashcards com repetição espaçada
        └── official.js     # Visão do edital oficial e links do IBAM
```

---

## 🔒 Privacidade e Armazenamento

- **100% Gratuito e Pessoal:** Nenhum cadastro ou login com senha é exigido.
- **Privacidade Total:** Todas as suas anotações, respostas e simulados ficam armazenados localmente no seu navegador (`localStorage`).
- **Segurança:** Nenhum dado pessoal é transmitido para servidores remotos ou APIs pagas.
