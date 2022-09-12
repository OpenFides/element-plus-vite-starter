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
      <ComponentGroup title="布局" :list="element.layoutComponents"></ComponentGroup>
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


          <el-tabs v-model="configTab" type="card">
            <el-tab-pane label="字段属性" name="字段属性">
              <ElWidgetConfig v-model:select="widgetFormCurrentSelect" />
            </el-tab-pane>
            <el-tab-pane label="表单属性" name="表单属性">
              <ElFormConfig v-model:config="widgetForm.config" />
            </el-tab-pane>
            <el-tab-pane label="布局" name="布局">todo</el-tab-pane>
          </el-tabs>

        </el-header>
        <el-main>


        </el-main>
      </el-container>
    </el-aside>
  </el-container>

</template> 
