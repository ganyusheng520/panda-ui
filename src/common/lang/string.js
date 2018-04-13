const camelizeRE = /-(\w)/g
export const camelize = (str) => {
  str = String(str)
  return str.replace(camelizeRE, (m, c) => (c ? c.toUpperCase() : ''))
}
export const noop = () => {}
