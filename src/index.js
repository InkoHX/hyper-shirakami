exports.decorateConfig = (config) => {
  return { ...config,
    css: `
      ${config.css || ''}
      .header_windowHeader {
        background: #1e90ff;
      }
      .header_appTitle {
        color: black
      }
      .header_windowControls {
        background: linear-gradient(
          rgba(0, 0, 0, 0.2), 
          rgba(0, 0, 0, 0.2)
        )
      }
      .header_hamburgerMenuLeft {
        background: linear-gradient(
          rgba(0, 0, 0, 0.2), 
          rgba(0, 0, 0, 0.2)
        )
      }
      .terms_terms:before {
        content: "";
        position: absolute;
        display: block;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-size: auto 100%;
        background-repeat: no-repeat;
        background-position: center bottom;
        background-image: url(https://i.imgur.com/I1yE1J5.png);
        opacity: 0.3;
      }
      .xterm .xterm-viewport {
        background-color: rgba(0,0,0,0) !impotant;
      }
    `,
    borderColor: '#1ed2a0',
    selectionColor: '#000',
    backgroundColor: '#82a0a0',
    foregroundColor: '#fff',
    cursorColor: '#fff',
    colors: {
      black: '#000000',
      red: '#C51E14',
      green: '#0f8a2b',
      yellow: '#e0dc36',
      blue: '#0A2FC4',
      magenta: '#C839C5',
      cyan: '#00d6d6',
      white: '#C7C7C7',
      lightBlack: '#686868',
      lightRed: '#FD6F6B',
      lightGreen: '#67F86F',
      lightYellow: '#FFFA72',
      lightBlue: '#6A76FB',
      lightMagenta: '#FD7CFC',
      lightCyan: '#68FDFE',
      lightWhite: '#FFFFFF'
    } }
}
