const checkNumber = function (num) {
  num = parseInt(num, 10)
  return num > 0
}

const dataBadgeSetter = function (hide, value) {
  if (hide) {
    this.el.removeAttribute('data-badge')
  } else if (!this.isNumber || checkNumber(value)) {
    this.el.setAttribute('data-badge', value)
  } else {
    this.el.removeAttribute('data-badge')
  }
}

export default {
  bind () {
    this.el.classList.add('mdl-badge')
    if ('overlap' in this.modifiers) {
      this.el.classList.add('mdl-badge--overlap')
    }
    if ('no-background' in this.modifiers) {
      this.el.classList.add('mdl-badge--no-background')
    }
    this.isNumber = 'number' in this.modifiers
  },
  params: ['hide-badge'],
  paramWatchers: {
    hideBadge (hide) {
      dataBadgeSetter.call(this, hide, this.value)
    }
  },
  update (value) {
    this.value = value
    dataBadgeSetter.call(this, this.params.hideBadge, value)
  }
}

