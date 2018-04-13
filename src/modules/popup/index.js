import VPopup from '../../components/popup/VPopup'

import addPopup from './api'

VPopup.install = function (Vue) {
  Vue.component(VPopup.name, VPopup)
  addPopup(Vue, VPopup)
}

export default VPopup
