const checkNumber = function (num) {
  num = parseInt(num, 10)
  return num > 0
}

const updateBadgeValue = function (el, binding) {
  if (!binding.modifiers.number || checkNumber(binding.value)) {
    el.setAttribute('data-badge', binding.value)
  } else {
    el.removeAttribute('data-badge')
  }
}

export default {
  bind (el, binding) {
    el.classList.add('mdl-badge')
    if ('overlap' in binding.modifiers) {
      el.classList.add('mdl-badge--overlap')
    }
    if ('no-background' in binding.modifiers) {
      el.classList.add('mdl-badge--no-background')
    }

    updateBadgeValue(el, binding)
  },
  update (el, binding) {
    updateBadgeValue(el, binding)
  }
}

