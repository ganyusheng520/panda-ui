import VActionSheet from '../../components/action-sheet/VActionSheet'
import addActionSheet from './api'

VActionSheet.install = function (Vue) {
  Vue.component(VActionSheet.name, VActionSheet)
  addActionSheet(Vue, VActionSheet)
}

export default VActionSheet
