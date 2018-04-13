import { camelize } from '../lang/string'
import createAPIComponent from './create-api-component'

export default function createAPI(Vue, Component, events, single) {
  const api = createAPIComponent.apply(this, [Vue, Component, events, single])
  const name = Component.name
  const pureName = name.replace(/^v-/i, '')
  const createName = `$${camelize(`create-${pureName}`)}`
  Vue.prototype[createName] = api.create
  Component.$create = api.create
  return api
}
