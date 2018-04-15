import {
  Style,
  VCell,
  VTab,
  VSwitch,
  VIcon,
  VButton,
  VInput,
  VLoading,
  VPopup,
  VToast,
  VPicker,
  createAPI
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
    VLoading,
    VPopup,
    VToast,
    VPicker
  ]
  components.forEach((Component) => {
    Component.install(Vue)
  })
}

const panda = {
  version: '__VERSION__',
  install,
  createAPI
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export default panda
