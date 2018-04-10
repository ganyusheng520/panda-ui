import VCell from '../../components/cell/VCell'
import VCellGroup from '../../components/cell/VCellGroup'
import VCellNote from '../../components/cell/VCellNote'
import VCellTitle from '../../components/cell/VCellTitle'


VCell.install = function install(Vue) {
  Vue.component(VCell.name, VCell)
  Vue.component(VCellGroup.name, VCellGroup)
  Vue.component(VCellNote.name, VCellNote)
  Vue.component(VCellTitle.name, VCellTitle)
}

VCell.VCellGroup = VCellGroup
VCell.VCellNote = VCellNote
VCell.VCellTitle = VCellTitle

export default VCell
