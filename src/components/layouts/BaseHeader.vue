<script lang="ts" setup>
  import { toggleDark } from '~/composables';
  import {
  Location,
  Document,
  Grid,
  Setting,
} from '@element-plus/icons-vue'

import zhCn from 'element-plus/lib/locale/lang/zh-cn'
</script>

<template>
  <el-menu mode="horizontal">
    <el-menu-item index="1"><router-link to="/"><el-icon><grid >Fides</grid></el-icon></router-link>
    
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">
        <router-link to="/work/form">Form</router-link>
      </el-menu-item>
      <el-menu-item index="2-2">
        <router-link to="/work/flow">Work flow</router-link>
      </el-menu-item>
      <el-menu-item index="2-3">
        <router-link to="/work/data">Data flow</router-link>
      </el-menu-item>
      <!-- <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu> -->
    </el-sub-menu>
    <el-menu-item index="3" disabled>ESHOP</el-menu-item>
    <el-menu-item index="4" >  <router-link to="/workplace">Work Place</router-link> </el-menu-item>
    <el-menu-item index="5"> <router-link to="/about">About</router-link></el-menu-item>
    <el-menu-item h="full" @click="toggleDark()">
      <button class="border-none w-full bg-transparent cursor-pointer" style="height: var(--ep-menu-item-height);">
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>
    <el-menu-item>  <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <router-link to="/login">Tom</router-link> </el-header>
  </el-container>
</el-menu-item>
  </el-menu>

</template>
