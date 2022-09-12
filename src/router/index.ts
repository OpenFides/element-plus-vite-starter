import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import LoginView from '@/views/login/Index.vue'
import WorkPlace from '@/views/WorkSpace.vue'
import FormView from '~/views/FormView.vue'
import { pa } from 'element-plus/es/locale'
const viewport = {
  content: 'width=device-width, initial-scale=1.0, user-scalable=no',
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: HomeView,
      meta: { title: '流数系统管理台', viewport: viewport },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { title: '关于我们', viewport: viewport },
    }, {
      path: '/login',
      name: 'Login',
      component: LoginView,
      meta: { title: '用户登录', viewport: viewport },
    },
    {
      path: '/work',
      name: 'Work',
      component: WorkPlace,
      meta: { title: '工作区', viewport: viewport },

    }, {
      path: '/work/form',
      name: 'Form',
      component: FormView,
      meta: { title: '表单设计', viewport: viewport },
    },

  ],
})

router.beforeEach((to, from, next) => {

  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.meta.content) {
    let head = document.getElementByTagName('head')
    let meta = document.createElemnet('meta')
    meta.name = 'viewport'
    meta.content = 'width=device-width, initial-scale=1.0, user-scalable=no'
    head[0].appendChild(meta)
  }
  next()
  sessionStorage.setItem('router-path', to.path)
})
/** 重置路由 */
export function resetRouter() {
  // 注意：所有动态路由路由必须带有 Name 属性，否则可能会不能完全重置干净
  try {
    router.getRoutes().forEach((route) => {
      const { name, meta } = route
      if (name && meta.roles?.length) {
        router.hasRoute(name) && router.removeRoute(name)
      }
    })
  } catch (error) {
    // 强制刷新浏览器也行，只是交互体验不是很好
    window.location.reload()
  }
}

export default router
