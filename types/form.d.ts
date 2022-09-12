declare module "form" {
  interface FormMeta {
    /**
     * 设置该路由在侧边栏和面包屑中展示的名字
     */
    title?: string
    /**
     * 设置该路由的图标，记得将 svg 导入 @/icons/svg
     */
    icon?: string
    /**
     * 默认 false，设置 true 的时候该路由不会在侧边栏出现
     */
    hidden?: boolean
    /**
     * 示例: activeMenu: "/xxx/xxx"，
     * 当设置了该属性进入路由时，则会高亮 activeMenu 属性对应的侧边栏。
     * 该属性适合使用在有 hidden: true 属性的路由上
     */
    activeMenu?: string
  }
}
