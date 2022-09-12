<script setup lang="ts">
import { ref } from "vue";
import ComponentGroup from "@/components/form/components/ComponentGroup.vue";
import { element } from "@/components/form/config";
import ElWidgetForm from "./ElWidgetForm.vue";
import ElFormConfig from "./ElFormConfig.vue"
import ElWidgetConfig from "./ElWidgetConfig.vue"
defineOptions({
  name: "FormDesign",
});

const widgetForm = ref(JSON.parse(JSON.stringify(element.widgetForm)));
const widgetFormCurrentSelect = ref(null);

const configTab = ref('widget')
</script>
<template>

  <el-container>
    <el-aside width="266px">
      <!-- 左侧 -->
      <ComponentGroup title="基础字段" :list="element.basicComponents"></ComponentGroup>
      <ComponentGroup title="扩展字段" :list="element.advanceComponents"></ComponentGroup>
    </el-aside>
    <el-main>
      <ElWidgetForm v-model:widgetForm="widgetForm" v-model:widgetFormCurrentSelect="widgetFormCurrentSelect">
      </ElWidgetForm>
    </el-main>
    <el-aside width="300px">
      <!-- {{widgetFormCurrentSelect}}  -->
      <el-container>
        <el-header>
          <div :class="{ active: configTab === 'widget' }" @click="configTab = 'widget'">
            字段属性
          </div>
          <div :class="{ active: configTab === 'form' }" @click="configTab = 'form'">
            表单属性
          </div>
        </el-header>
        <el-main>
          <ElWidgetConfig v-show="configTab === 'widget'" v-model:select="widgetFormCurrentSelect" />
          <ElFormConfig v-show="configTab === 'form'" v-model:config="widgetForm.config" />
        </el-main>
      </el-container>
    </el-aside>
  </el-container>

</template> 
