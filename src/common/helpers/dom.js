import { inBrowser } from './env'

export function hasClass(el, className) {
  const reg = new RegExp(`(^|\\s)${className}(\\s|$)`)
  return reg.test(el.className)
}

export function addClass(el, className) {
  /* istanbul ignore if */
  if (hasClass(el, className)) {
    return
  }

  const newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function removeClass(el, className) {
  /* istanbul ignore if */
  if (!hasClass(el, className)) {
    return
  }

  const reg = new RegExp(`(^|\\s)${className}(\\s|$)`, 'g')
  el.className = el.className.replace(reg, ' ')
}

export function getData(el, name) {
  const prefix = 'data-'
  return el.getAttribute(prefix + name)
}

export function getRect(el) {
  return {
    top: el.offsetTop,
    left: el.offsetLeft,
    width: el.offsetWidth,
    height: el.offsetHeight
  }
}

const vendor = (() => {
  /* istanbul ignore if */
  if (!inBrowser) {
    return false
  }
  const elementStyle = document.createElement('div').style
  const transformNames = {
    standard: 'transform',
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform'
  }
  let key
  Object.keys(transformNames).forEach((k) => {
    if (elementStyle[transformNames[key]] !== undefined) {
      key = k
    }
  })

  /* istanbul ignore next */
  return key || false
})()

export function prefixStyle(style) {
  if (vendor === false) {
    return false
  }

  if (vendor === 'standard') {
    if (style === 'transitionEnd') {
      return 'transitionend'
    }
    return style
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}

export function getMatchedTarget(e, targetClassName) {
  let el = e.target

  while (el && !hasClass(el, targetClassName)) {
    if (el === e.currentTarget) return null
    el = el.parentNode
  }

  return el
}
