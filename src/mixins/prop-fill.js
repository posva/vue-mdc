// When declaring a prop with no value it should be evaluated to true
// but '' is falsy. As a solution add the
export default {
  created () {
    if (!this.$options.props) return
    for (let prop of Object.keys(this.$options.props)) {
      let data = this.$options.propsData[prop]
      let options = this.$options.props[prop]
      if (options.fill && data === '') {
        // this.$options.propsData[prop] = prop
      }
    }
  }
}
