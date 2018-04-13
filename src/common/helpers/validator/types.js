import { createAddAPI } from '../util'

const types = {
  string: val => typeof val === 'string',
  number: val => !isNaN(Number(val)),
  array: val => Array.isArray(val),
  date: val => !isNaN(Number(val)),
  email: val => typeof val === 'string' && /^[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)+$/i.test(val),
  tel: val => typeof val === 'string' && /^(11|13|14|15|17|18|19)[0-9]{9}$/.test(val),
  url: val => typeof val === 'string' && /(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(val)
}

const addType = createAddAPI(types)

export { types, addType }
