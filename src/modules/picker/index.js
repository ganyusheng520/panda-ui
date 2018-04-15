import Picker from '../../components/picker/VPicker'
import addPicker from './api'

Picker.install = function (Vue) {
  Vue.component(Picker.name, Picker)
  addPicker(Vue, Picker)
}

export default Picker
