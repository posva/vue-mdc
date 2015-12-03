hljs = require 'highlight.js/lib/highlight'
module.exports =
  update: (value) ->
    @el.innerText = value
    hljs.highlightBlock @el
