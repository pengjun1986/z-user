// router lazy loading
const Index = () => import('./views/index') // 首页
const List = () => import('./views/list') // 列表
const Detail = () => import('./views/detail') // 详情

const routes = [{
  path: '/',
  name: 'Index',
  component: Index
}, {
  path: '/list',
  name: 'List',
  component: List
}, {
  path: '/detail',
  name: 'Detail',
  component: Detail
}]

const router = new VueRouter({
  routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  next()
})

// 全局解析守卫
router.beforeResolve((to, from, next) => {
  next()
})

// 全局后置钩子
router.afterEach((to, from) => {

})

export default router
