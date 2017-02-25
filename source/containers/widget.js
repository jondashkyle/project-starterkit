var widget = require('cache-element/widget')
var morph = require('nanomorph')
var x = require('xtend')
var h = require('bel')

function Element (opts) {
  var o = {
    text: 'Example'
  }

  function update (opts) {
    o = opts ? x(o, opts) : o
  }

  function container () {
    return h`
      <div>
        ${o.text}
      </div>
    `
  }

  return widget({
    onupdate: function (el, opts) {
      update(opts)
      morph(container(), el.children[0])
    },
    render: function (opts) {
      return h`<div>${container()}</div>`
    }
  })
}

module.exports = Element
