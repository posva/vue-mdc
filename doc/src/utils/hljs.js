import hljs from 'highlight.js/lib/highlight'

export default {
  bind (el, { value }) {
    el.innerText = value
    hljs.highlightBlock(el)
  },
  update (el, { value }) {
    el.innerText = value
    hljs.highlightBlock(el)
  }
}
