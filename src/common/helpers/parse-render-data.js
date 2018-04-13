import { camelize } from '../lang/string'

function parseEvents(events) {
  const parsedEvents = {}
  events.forEach((name) => {
    parsedEvents[name] = camelize(`on-${name}`)
  })
  return parsedEvents
}

export default function parseRenderData(data = {}, events = {}) {
  events = parseEvents(events)
  const props = { ...data }
  const on = {}

  Object.keys(events).forEach((name) => {
    if (events.hasOwnProperty(name)) {
      const handlerName = events[name]
      if (props[handlerName]) {
        on[name] = props[handlerName]
        delete props[handlerName]
      }
    }
  })
  return {
    props,
    on
  }
}

