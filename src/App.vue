<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
import BaseHeader from './components/layouts/BaseHeader.vue'
import BaseSide from './components/layouts/BaseSide.vue'
import zhCn from "element-plus/lib/locale/lang/zh-cn"
/** 将 Element-Plus 的语言设置为中文 */
const locale = zhCn
</script>
<template>
  <el-config-provider namespace="ep" :locale="locale">
    <el-container>
      <el-header>
        <BaseHeader />
      </el-header>
      <el-container>
        <el-aside>
          <BaseSide />
        </el-aside>
        <el-container>
          <el-main>
            <RouterView />
          </el-main>
          <el-footer>@</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </el-config-provider>
</template>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.element-plus-logo {
  width: 50%;
}
</style>
