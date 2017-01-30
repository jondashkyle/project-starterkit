var x = require('xtend')

module.exports = {
  state: {
    options: {
      title: 'Choo Starter'
    }
  },
  reducers: {
    options: function (state, data) {
      return x(state.options, { options: data })
    }
  }
}
