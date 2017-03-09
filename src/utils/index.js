export function propsToClasses (base, props) {
  return Object.keys(props).reduce((classes, key) => {
    if (props[key]) classes += ` ${base}--${key}`
    return classes
  }, base)
}
