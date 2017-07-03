var fs = require('fs')
var assert = require('assert')
var xtend = require('xtend')
var yaml = require('js-yaml')
var npath = require('path')
var level = require('level')

var client = require('./app/src')
var routes = require('./app/src/routes')
var server = require('./server')

var config = options({
  port: process.env.PORT,
  db: '.db',
  bundles: 'app/dist/',
  content: 'content/'
})

var db = level(config.db)

var app = server({
  db: db,
  routes: routes,
  render: render,
  bundles: config.bundles,
  content: config.content
})

// init
app.start({
  port: config.port,
  db: db
})

// read defaults and get going
function options (defaults) {
  var config = fs.readFileSync(npath.join(__dirname, 'config.development.yaml'), 'utf8')
  var options = xtend(defaults, yaml.safeLoad(config))

  assert(typeof options !== Object, 'Can not parse configuration file')
  assert(typeof config !== Object, 'No configuration file found')
  return options
}

// handle client routes
function render (route) {
  assert(typeof route !== String, 'Invalid route')
  try {
    return client.toString(route, client.state)
  } catch (err) {
    return '404'
  }
}
