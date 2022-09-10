import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Index.vue'
import  WorkSpace from '@/views/workspace/WorkSpace.vue'
const viewport = {
  content: 'width=device-width, initial-scale=1.0, user-scalable=no',
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'index',
      component: HomeView,
      meta: { title: 'OA工作流', viewport: viewport },
    },
    {
      path: '/workspace',
      name: 'workspace',
      component: WorkSpace,
      meta: { title: '工作区', viewport: viewport },
    },
    {
      path: '/formsPanel',
      name: 'formsPanel',
      component: Vue.defineAsyncComponent(
        () => import('@/views/admin/FormsPanel.vue')
      ),
      meta: { title: '表单列表', viewport: viewport },
    },
    {
      path: '/admin/design',
      name: 'design',
      component: Vue.defineAsyncComponent(
        () => import('@/views/admin/FormProcessDesign.vue')
      ),
      meta: { title: '表单流程设计', viewport: viewport },
      /*   children: [
      {
        path: "baseSetting",
        name: "baseSetting",
        component: () => import("@/views/admin/layout/FormBaseSetting.vue"),
        meta: {title: '基础设置'}
      }, {
        path: "formSetting",
        name: "formSetting",
        component: () => import("@/views/admin/layout/FormDesign.vue"),
        meta: {title: '表单设计'}
      }, {
        path: "processDesign",
        name: "processDesign",
        component: () => import("@/views/admin/layout/ProcessDesign.vue"),
        meta: {title: '流程设计'}
      }, {
        path: "proSetting",
        name: "proSetting",
        component: () => import("@/views/admin/layout/FormProSetting.vue"),
        meta: {title: '高级设置'}
      }
    ]*/
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

export default router
