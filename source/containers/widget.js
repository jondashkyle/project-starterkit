var widget = require('cache-element/widget')
var morph = require('nanomorph')
var x = require('xtend')
var h = require('bel')

function Element (opts) {
  var o = {
    text: 'Example'
  }

  var el = container(o)

  function update (opts) {
    o = opts ? x(o, opts) : o
    morph(container(), el)
  }

  function container () {
    return h`
      <div>
        ${o.text}
      </div>
    `
  }

  return widget({
    onload: function (el, opts) {

    },
    onupdate: function (el, opts) {
      update(opts)
    },
    render: function (opts) {
      return h`<div>${el}</div>`
    }
  })
}

module.exports = Element
