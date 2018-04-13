import VLoading from '../../components/loading/VLoading'
import VToast from '../../components/toast/VToast'
import addToast from './api'

VToast.install = function (Vue) {
  Vue.component(VLoading.name, VLoading)
  Vue.component(VToast.name, VToast)
  addToast(Vue, VToast)
}

VToast.Loading = VLoading

export default VToast
