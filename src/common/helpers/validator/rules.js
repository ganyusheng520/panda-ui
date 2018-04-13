import { createAddAPI } from '../util'
import { types } from './types'

const rules = {
  required: (val, required, type) => {
    type = type || (Array.isArray(val) ? 'array' : typeof val)
    if (type === 'array' && Array.isArray(val)) {
      return val.length > 0
    }
    return val !== '' && val !== undefined && val !== null
  },
  type: (val, type) => !types[type] || types[type](val),
  min: (val, min, type) => {
    type = type || (typeof val)
    if (type === 'number' || type === 'date') {
      return Number(val) >= min
    }
    return val.length >= min
  },
  max: (val, max, type) => {
    type = type || (typeof val)
    if (type === 'number' || type === 'date') {
      return Number(val) <= max
    }
    return val.length <= max
  },
  len: (val, len, type) => {
    type = type || (typeof val)
    if (type === 'number' || type === 'date') {
      return Number(val) === len
    }
    return val.length === len
  },
  notWhitespace: val => !/^\s+$/.test(val),
  pattern: (val, pattern) => pattern.test(val),
  custom: (val, custom) => custom(val)
}

const addRule = createAddAPI(rules)

export { rules, addRule }
