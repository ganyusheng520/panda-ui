import VDialog from '../../components/dialog/VDialog'
import addDialog from './api'

VDialog.install = function (Vue) {
  Vue.component(VDialog.name, VDialog)
  addDialog(Vue, VDialog)
}

export default VDialog
