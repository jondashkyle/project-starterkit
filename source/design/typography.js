var x = require('xtend')
var wfl = require('webfontloader')

var families = [
  'SussieIntl'
]

var urls = [
  '/assets/fonts.css'
]

exports.start = function (opts) {
  var o = x({
    timeout: 2000,
    active: function () { },
    inactive: function () { }
  }, opts)

  wfl.load({
    timeout: o.timeout,
    active: o.active,
    inactive: o.inactive,
    custom: {
      families: families,
      urls: urls
    }
  })
}
