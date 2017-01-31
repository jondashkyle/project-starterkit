var h = require('bel')
var reset = require('recsst')
var gr8 = require('gr8')

var settings = require('./settings')
var css = gr8(settings)

css.add({
  prop: 'font-family',
  hyphenate: true,
  vals: settings.typography
})

css.add({
  prop: 'background-color',
  prefix: 'bg',
  hyphenate: true,
  vals: settings.colors
})

css.add({
  prop: 'color',
  prefix: 'tc',
  hyphenate: true,
  vals: settings.colors
})

var custom = `
  html { font-size: 62.5% }
`

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
