// Biblioteca de ícones SVG autônomos (estilo Lucide)
// Garante funcionamento 100% offline, rápido e sem dependência de bibliotecas externas.

window.AppIcons = {
  render: function(name, className = "w-5 h-5", size = 20) {
    const stroke = "currentColor";
    const fill = "none";
    const strokeWidth = "2";
    const strokeLinecap = "round";
    const strokeLinejoin = "round";
    const baseSvg = (content) => `<svg class="${className}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}" stroke-linejoin="${strokeLinejoin}">${content}</svg>`;

    switch (name) {
      case 'home':
        return baseSvg('<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>');
      case 'book':
      case 'book-open':
        return baseSvg('<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>');
      case 'check-circle':
        return baseSvg('<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>');
      case 'clock':
        return baseSvg('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>');
      case 'calendar':
        return baseSvg('<rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>');
      case 'bar-chart':
      case 'bar-chart-2':
        return baseSvg('<line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/>');
      case 'award':
        return baseSvg('<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>');
      case 'file-text':
        return baseSvg('<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/>');
      case 'help-circle':
        return baseSvg('<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" x2="12.01" y1="17" y2="17"/>');
      case 'layers':
        return baseSvg('<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>');
      case 'cards':
        return baseSvg('<rect width="16" height="12" x="4" y="6" rx="2"/><path d="M2 10v6a2 2 0 0 0 2 2h12"/>');
      case 'sun':
        return baseSvg('<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>');
      case 'moon':
        return baseSvg('<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>');
      case 'search':
        return baseSvg('<circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/>');
      case 'play':
        return baseSvg('<polygon points="5 3 19 12 5 21 5 3"/>');
      case 'pause':
        return baseSvg('<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>');
      case 'rotate-ccw':
        return baseSvg('<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>');
      case 'chevron-left':
        return baseSvg('<polyline points="15 18 9 12 15 6"/>');
      case 'chevron-right':
        return baseSvg('<polyline points="9 18 15 12 9 6"/>');
      case 'chevron-down':
        return baseSvg('<polyline points="6 9 12 15 18 9"/>');
      case 'check':
        return baseSvg('<polyline points="20 6 9 17 4 12"/>');
      case 'x':
        return baseSvg('<line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/>');
      case 'alert-triangle':
        return baseSvg('<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/>');
      case 'bookmark':
        return baseSvg('<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>');
      case 'star':
        return baseSvg('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>');
      case 'arrow-right':
        return baseSvg('<line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/>');
      case 'download':
        return baseSvg('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>');
      case 'upload':
        return baseSvg('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>');
      case 'trash':
      case 'trash-2':
        return baseSvg('<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>');
      case 'shield-check':
        return baseSvg('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/>');
      case 'heart-pulse':
        return baseSvg('<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l1.5-3 2 6.5 1.5-3.5h6.28"/>');
      case 'laptop':
        return baseSvg('<rect width="18" height="12" x="3" y="4" rx="2" ry="2"/><line x1="2" x2="22" y1="20" y2="20"/>');
      case 'calculator':
        return baseSvg('<rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/>');
      case 'graduation-cap':
        return baseSvg('<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>');
      case 'flame':
        return baseSvg('<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>');
      case 'filter':
        return baseSvg('<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>');
      case 'external-link':
        return baseSvg('<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/>');
      case 'menu':
        return baseSvg('<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>');
      case 'info':
        return baseSvg('<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12.01" y1="8" y2="8"/>');
      case 'edit':
        return baseSvg('<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>');
      case 'target':
        return baseSvg('<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>');
      case 'zap':
        return baseSvg('<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>');
      default:
        return baseSvg('<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>');
    }
  }
};
