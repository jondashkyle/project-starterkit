if (process.env.NODE_ENV === 'production') {
  module.exports = { start: function () {} }
} else {
  var typography = require('./typography')
  var styles = require('./styles')
  module.exports = {
    start: function () {
      typography.start()
      styles.start()
    }
  }
}
