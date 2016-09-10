import hljs from 'highlight.js/lib/highlight'

export default function (el, { value }) {
  el.innerText = value
  hljs.highlightBlock(el)
}
