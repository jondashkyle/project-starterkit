var gr8 = require('gr8')
var rst = require('recsst')
var dev = require('gr8-dev')
var h = require('bel')

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

  dev.attach()
  css.attach()
  rst.attach()

  document.head.appendChild(style)
}

function build () {
  var built = rst.toString()
    + css.toString()
    + custom

  if (typeof window === 'undefined') {
    process.stdout.write(built)
  } else return built
}

module.exports = {
  start: start,
  build: build
}
