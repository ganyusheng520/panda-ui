import {
  Style,
  VCell,
  VTab,
  VSwitch,
  VIcon,
  VButton,
  VInput,
} from './module'


function install(Vue) {
  if (install.installed) {
    return
  }
  install.installed = true
  const components = [
    Style,
    VTab,
    VCell,
    VSwitch,
    VIcon,
    VButton,
    VInput,
  ]
  components.forEach((Component) => {
    Component.install(Vue)
  })
}

const panda = {
  version: '__VERSION__',
  install,
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export default panda
