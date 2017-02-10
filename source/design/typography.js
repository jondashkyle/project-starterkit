var x = require('xtend')
var FontFaceObserver = require('fontfaceobserver')

exports.start = function (opts) {
  var o = x({
    family: '',
    timeout: 2000,
    active: function () { },
    inactive: function () { }
  }, opts)

  if (o.family) {
    var font = new FontFaceObserver(o.family)
    font.load().then(o.active, o.inactive)
  }
}
