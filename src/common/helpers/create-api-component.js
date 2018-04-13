import instantiateComponent from './instantiate-component'
import parseRenderData from './parse-render-data'

export default function createAPIComponent(Vue, Component, events = [], single = false) {
  let singleComponent
  let singleInstance
  const beforeFns = []
  const api = {
    before(fn) {
      beforeFns.push(fn)
    },
    open(data, renderFn, instanceSingle) {
      // 不传递renderFn，第二个参数为single
      if (typeof renderFn !== 'function') {
        instanceSingle = renderFn
        renderFn = null
      }
      // 执行回调函数
      beforeFns.forEach((before) => {
        before(data, renderFn, instanceSingle)
      })
      // 没传入instanceSingle
      if (instanceSingle === undefined) {
        instanceSingle = single
      }
      //
      if (instanceSingle && singleComponent) {
        singleInstance.updateRenderData(data, renderFn)
        singleInstance.$forceUpdate()
        // singleComponent.show && singleComponent.show()
        return singleComponent
      }
      // 初始化组件并挂载到body
      const component = instantiateComponent(Vue, Component, data, renderFn)
      // 获取父节点
      const instance = component.$parent
      const originRemove = component.remove
      // 重写remove方法
      component.remove = function () {
        if (instance.pandaDestroyed) {
          return
        }
        if (originRemove) {
          originRemove.call(this)
        }
        instance.destroy()
        instance.pandaDestroyed = true
        if (instanceSingle) {
          singleComponent = null
          singleInstance = null
        }
      }
      const originShow = component.show
      component.show = function () {
        if (originShow) {
          originShow.call(this)
        }
        return this
      }
      const originHide = component.hide
      component.hide = function () {
        if (originHide) {
          originHide.call(this)
        }
        return this
      }
      if (instanceSingle) {
        singleComponent = component
        singleInstance = instance
      }
      // component.show && component.show()
      return component
    },
    create(config, renderFn, _single) {
      const ownerInstance = this
      const component = api.open(parseRenderData(config, events), renderFn, _single)

      if (component.pandaParent !== ownerInstance) {
        component.pandaParent = ownerInstance
        const beforeDestroy = function () {
          if (component.pandaParent === ownerInstance) {
            component.remove()
          }
          ownerInstance.$off('hook:beforeDestroy', beforeDestroy)
          component.pandaParent = null
        }
        ownerInstance.$on('hook:beforeDestroy', beforeDestroy)
      }
      return component
    }
  }
  return api
}
