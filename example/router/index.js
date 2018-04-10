import Vue from 'vue'
import Router from 'vue-router'
import Example from '../views/Example'
import ButtonExample from '../views/ButtonExample'
import SwitchExample from '../views/SwitchExample'
import InputExample from '../views/InputExample'
import TabExample from '../views/TabExample'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Example,
    },
    {
      path: '/button',
      component: ButtonExample,
    },
    {
      path: '/switch',
      component: SwitchExample,
    },
    {
      path: '/input',
      component: InputExample,
    },
    {
      path: '/tab',
      component: TabExample,
    },
  ],
})
