import hljs from 'highlight.js/lib/highlight'

export default {
  update (value) {
    this.el.innerText = value
    hljs.highlightBlock(this.el)
  }
}
