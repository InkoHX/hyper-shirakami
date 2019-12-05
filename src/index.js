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
    cursorColor: '#fff' }
}
