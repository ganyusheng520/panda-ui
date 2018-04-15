import VPicker from '../../components/picker/VPicker'
import addPicker from './api'

VPicker.install = function (Vue) {
  Vue.component(VPicker.name, VPicker)
  addPicker(Vue, VPicker)
}

export default VPicker
