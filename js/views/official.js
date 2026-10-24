// Visualização do Edital e Documentos Oficiais do Concurso (Official View)
// Links oficiais para IBAM, retificações, cronograma e Anexo II - Conteúdo Programático.

window.AppOfficial = {
  render: function(container) {
    const icons = window.AppIcons;
    const info = window.EXAM_INFO;

    const html = `
      <div class="space-y-6 animate-fade-in max-w-4xl mx-auto">
        <!-- Banner Oficial -->
        <div class="card p-6 sm:p-8 space-y-4 border-l-4 border-l-teal-600">
          <div class="flex items-center gap-3">
            <div class="p-3 bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 rounded-xl">
              ${icons.render('file-text', 'w-8 h-8')}
            </div>
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                Transparência e Fonte Oficial
              </span>
              <h2 class="text-2xl font-black text-slate-900 dark:text-white">
                ${info.agency} — ${info.noticeNumber}
              </h2>
            </div>
          </div>

          <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Todas as diretrizes pedagógicas, distribuição de questões, conteúdos e critérios de pontuação desta plataforma foram rigorosamente mapeados a partir dos documentos públicos oficiais emitidos pelo IBAM.
          </p>

          <div class="p-4 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 rounded-xl flex items-start gap-3 text-xs text-amber-900 dark:text-amber-200">
            ${icons.render('info', 'w-5 h-5 text-amber-600 shrink-0 mt-0.5')}
            <div>
              <strong>Aviso Importante sobre o Cronograma:</strong>
              A data da prova objetiva está designada para o dia <strong>29/11/2026</strong> na condição de data prevista. Os horários e locais exatos de realização serão divulgados pela organizadora IBAM por meio do Edital de Convocação Oficial.
            </div>
          </div>
        </div>

        <!-- Links Oficiais e Publicações -->
        <div class="card p-6 space-y-4">
          <h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            ${icons.render('external-link', 'w-5 h-5 text-teal-600')}
            Publicações e Documentos Oficiais do Certame
          </h3>

          <div class="space-y-3">
            ${info.officialDocuments.map(doc => `
              <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 hover:border-teal-400 transition-all flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs">
                <div class="space-y-1">
                  <div class="font-bold text-slate-900 dark:text-white text-sm">${doc.title}</div>
                  <div class="text-slate-500">${doc.description}</div>
                </div>
                <a href="${doc.url}" target="_blank" rel="noopener noreferrer" class="btn-primary shrink-0 py-2 px-4 text-xs font-semibold flex items-center justify-center gap-1.5">
                  ${icons.render('download', 'w-3.5 h-3.5')}
                  Acessar Documento Oficial
                </a>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Conteúdo Programático Oficial Resumido (Anexo II) -->
        <div class="card p-6 space-y-6">
          <h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            ${icons.render('book-open', 'w-5 h-5 text-teal-600')}
            Anexo II — Conteúdo Programático do Cargo de Atendente SUS
          </h3>

          <div class="space-y-4 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
              <span class="font-extrabold text-blue-700 dark:text-blue-400 block text-sm">
                1. Língua Portuguesa (10 questões • Peso 1)
              </span>
              <p>
                Leitura e interpretação de textos de diferentes gêneros; informações explícitas e implícitas; inferência; coesão e coerência textual; significação das palavras no contexto (sinônimos, antônimos, sentido próprio e figurado); ortografia oficial e acentuação gráfica; classes de palavras e seus empregos; concordância nominal e verbal; regência nominal e verbal; emprego da crase; colocação dos pronomes; pontuação; tempos e modos verbais; formação de palavras; reescrita de frases.
              </p>
            </div>

            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
              <span class="font-extrabold text-emerald-700 dark:text-emerald-400 block text-sm">
                2. Matemática (5 questões • Peso 2)
              </span>
              <p>
                Números naturais, inteiros e racionais (formas fracionária e decimal); operações fundamentais e potenciação; múltiplos e divisores, MMC e MDC; porcentagem, razão e proporção, regra de três simples; equações do 1º grau; sistema monetário brasileiro; grandezas e medidas (tempo, comprimento, superfície, capacidade e massa); velocidade média e consumo; leitura e interpretação de tabelas e gráficos; média aritmética; geometria básica.
              </p>
            </div>

            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
              <span class="font-extrabold text-cyan-700 dark:text-cyan-400 block text-sm">
                3. Noções de Informática (5 questões • Peso 2)
              </span>
              <p>
                Conceitos básicos de informática, hardware, software e periféricos; sistema operacional Windows, área de trabalho, arquivos e pastas; operações com documentos e planilhas eletrônicas (fórmulas, funções básicas, filtros); navegadores web, pesquisas e correio eletrônico (anexos, cópia oculta); segurança da informação, malwares, phishing, senhas e cópias de segurança (backup).
              </p>
            </div>

            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
              <span class="font-extrabold text-teal-700 dark:text-teal-400 block text-sm">
                4. Políticas Públicas de Saúde — SUS (10 questões • Peso 2)
              </span>
              <p>
                Constituição Federal de 1988 (Artigos 196 a 200); Lei Federal nº 8.080/1990; Lei Federal nº 8.142/1990; Decreto Federal nº 7.508/2011; princípios e diretrizes do SUS; universalidade, equidade e integralidade; descentralização e regionalização; regiões de saúde e portas de entrada; controle social (conferências e conselhos de saúde); Política Nacional de Atenção Básica (PNAB); noções de vigilância epidemiológica e sanitária.
              </p>
            </div>

            <div class="p-4 rounded-xl border-2 border-indigo-500/50 dark:border-indigo-500/30 bg-indigo-50/30 dark:bg-indigo-950/20 space-y-2">
              <div class="flex items-center justify-between">
                <span class="font-extrabold text-indigo-700 dark:text-indigo-300 text-sm">
                  5. Conhecimentos Específicos de Atendente SUS (10 questões • Peso 5 • 50 Pontos)
                </span>
                <span class="text-[10px] bg-indigo-600 text-white font-bold px-2 py-0.5 rounded">
                  50% da Nota da Prova
                </span>
              </div>
              <p>
                Atendimento presencial e telefônico em unidades de saúde; acolhimento administrativo e comunicação humanizada; acessibilidade e respeito à diversidade; atendimento prioritário (Estatutos e Leis 10.048/00 e 13.466/17); identificação de usuários, organização e guarda de prontuários clínicos (sigilo, confidencialidade e tempo legal de guarda); rotinas administrativas do SUS; sistemas de informação em saúde: CadSUS, Cartão Nacional de Saúde (CNS), SISREG, e-SUS APS, PEC, SIA/SUS e BPA; Lei nº 13.460/2017 (Carta de Serviços ao Usuário e Ouvidoria); Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) na saúde pública; Lei de Acesso à Informação (LAI - Lei nº 12.527/2011); ética e postura profissional no serviço público.
              </p>
            </div>
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;
  }
};
