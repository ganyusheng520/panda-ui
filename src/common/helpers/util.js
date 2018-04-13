function deepAssign(to, from) {
  Object.keys(from).forEach((key) => {
    if (!to[key] || typeof to[key] !== 'object') {
      to[key] = from[key]
    } else {
      deepAssign(to[key], from[key])
    }
  })
}

function createAddAPI(baseObj) {
  return function add(...args) {
    if (typeof args[0] === 'string') {
      args[0] = {
        [args[0]]: args[1]
      }
    }
    deepAssign(baseObj, args[0])
  }
}

function toLocaleDateString(timestamp, locale) {
  const date = new Date(timestamp)

  if (locale === 'zh') {
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
  }
  return date.toDateString()
}

const typesReset = {
  $set(obj, key, value) {
    obj[key] = value
  },
  string(obj, key) {
    typesReset.$set(obj, key, '')
  },
  number(obj, key) {
    typesReset.$set(obj, key, 0)
  },
  boolean(obj, key) {
    typesReset.$set(obj, key, false)
  },
  object(obj, key, value) {
    if (Array.isArray(value)) {
      typesReset.$set(obj, key, [])
    } else {
      typesReset.$set(obj, key, {})
    }
  }
}
function resetTypeValue(obj, key, defVal) {
  if (defVal !== undefined) {
    typesReset.$set(obj, key, defVal)
  }
  if (key) {
    const value = obj[key]
    const resetHandler = typesReset[typeof value]
    if (resetHandler) {
      resetHandler(obj, key, value)
    }
  } else {
    Object.keys(obj).forEach(k => resetTypeValue(obj, k))
  }
}

export { deepAssign, createAddAPI, toLocaleDateString, resetTypeValue }
