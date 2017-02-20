var x = require('xtend')
var xhr = require('xhr')

module.exports = {
  state: {
    options: {
      title: 'Choo Starter two'
    }
  },
  reducers: {
    options: function (state, data) {
      return x(state.options, { options: data })
    }
  }
}
