var choo = require('choo')
var models = require('./model')
var views = require('./views')

var app = choo()
models.map(model => app.model(model))
app.router({ default: '/404' }, views)

function start () {
  var tree = app.start()
  document.body.appendChild(tree)
}

module.exports = {
  start: start
}
