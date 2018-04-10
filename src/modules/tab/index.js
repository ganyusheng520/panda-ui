import VTab from '../../components/tab/VTab'
import VTabContainer from '../../components/tab/VTabContainer'
import VTabItem from '../../components/tab/VTabItem'


VTab.install = function install(Vue) {
  Vue.component(VTab.name, VTab)
  Vue.component(VTabContainer.name, VTabContainer)
  Vue.component(VTabItem.name, VTabItem)
}

VTab.VTabContainer = VTabContainer
VTab.VTabItem = VTabItem

export default VTab
