import Card from './Card/Card'
import CardPrimary from './Card/CardPrimary'
import CardTitle from './Card/CardTitle'
import CardSubtitle from './Card/CardSubtitle'
import CardActions from './Card/CardActions'
import CardMedia from './Card/CardMedia'
import CardSupportingText from './Card/CardSupportingText'
import Button from './Button'
import ripple from './ripple'

// import './style.scss'

const components = {
  Card,
  CardPrimary,
  CardTitle,
  CardSubtitle,
  CardActions,
  CardMedia,
  CardSupportingText,
  Button,
}

function plugin (Vue, opts = { prefix: 'Mdc' }) {
  const { prefix } = opts
  const compNames = Object.keys(components)
  for (let i = 0; i < compNames.length; i++) {
    const name = compNames[i]
    Vue.component(`${prefix}${name}`, components[name])
  }
  Vue.directive('ripple', ripple)
}

export default plugin
// Export all components too
const version = '__VERSION__'
export {
  version,

  // components
  Card,
  CardPrimary,
  CardTitle,
  CardSubtitle,
  CardActions,
  CardMedia,
  CardSupportingText,
  Button,

  // directives
  ripple,
}
