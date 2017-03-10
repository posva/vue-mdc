import decamelize from 'decamelize'

export function propsToClasses (base, props) {
  return Object.keys(props).reduce((classes, key) => {
    if (props[key]) classes += ` ${base}--${decamelize(key, '-')}`
    return classes
  }, base)
}
