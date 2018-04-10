import VButton from '../../components/button/VButton'
import VButtonBox from '../../components/button/VButtonBox'

VButton.install = function install(Vue) {
  Vue.component(VButton.name, VButton)
  Vue.component(VButtonBox.name, VButtonBox)
}

VButton.VButtonBox = VButtonBox

export default VButton
