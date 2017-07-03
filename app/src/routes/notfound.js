var html = require('choo/html')

module.exports = notfound

function notfound (state, emit) {
  return html`
    <body>
      not found
    </body>
  `
}
