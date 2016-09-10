export default {
  bind (el) {
    componentHandler.upgradeElements(this && this.el || el)
  }
}
