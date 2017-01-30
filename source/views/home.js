var h = require('bel')
var Widget = require('../containers/widget')
var example = Widget()

function View (state, prev, send) {
  var elExample = example({
    text: state.options.title
  })

  return h`
    <main class="ff-sans fs1">
      ${elExample} 
    </main>
  `
}

module.exports = View
