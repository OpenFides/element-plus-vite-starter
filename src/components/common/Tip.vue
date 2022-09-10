<template>
  <el-tooltip
    :effect="isDark ? 'dark' : 'light'"
    :content="content"
    placement="top-start"
  >
    <div>
      <slot></slot>
      <el-icon style="margin: 0 0px"><el-icon-question /></el-icon>
    </div>
  </el-tooltip>
</template>

<script>
import { Question as ElIconQuestion } from '@element-plus/icons'
export default {
  components: {
    ElIconQuestion,
  },
  install(Vue) {
    window.$vueApp.component('Tip', this)
  },
  name: 'Tip',
  props: {
    isDark: {
      type: Boolean,
      default: false,
    },
    content: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
