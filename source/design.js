var h = require('bel')
var reset = require('recsst')
var gr8 = require('gr8')

/**
 * Gr8
 */

var css = gr8({
  responsive: true,
})

var colors = [
  { white: '#fff' },
  { black: '#000' }
]

css.add({
  prop: 'font-family',
  hyphenate: true,
  vals: [{
    sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'
  }, {
    serif: 'Times'
  }]
})

css.add({
  prop: 'background-color',
  prefix: 'bg',
  hyphenate: true,
  vals: colors
})

css.add({
  prop: 'color',
  prefix: 'tc',
  hyphenate: true,
  vals: colors
})

/**
 * Custom
 */

var custom = `
  html { font-size: 62.5% }
`

/**
 * Init
 */

function start () {
  var style = h`<style></style>`
  style.innerHTML = custom
  css.attach()
  reset.attach()
  document.head.appendChild(style)
}

module.exports = {
  start: start
}
