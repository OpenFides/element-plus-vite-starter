<template>
  <div class="m-ElDesignForm">
    <el-container class="m-ElDesignForm-container">
      <el-aside width="266px" class="m-ElDesignForm-aside">
        <!-- 左侧 -->
        <ComponentGroup title="基础字段" :list="element.basicComponents"></ComponentGroup>
        <ComponentGroup title="扩展字段" :list="element.advanceComponents"></ComponentGroup>
      </el-aside>
      <el-main class="m-ElDesignForm-main">
        <ElWidgetForm v-model:widgetForm="widgetForm" v-model:widgetFormCurrentSelect="widgetFormCurrentSelect">
        </ElWidgetForm>
      </el-main>
      <el-aside width="300px" class="m-ElDesignForm-aside">
        <!-- {{widgetFormCurrentSelect}}  -->
        <el-container class="m-config-container">
          <el-header>
            <div class="m-config-tab" :class="{ active: configTab === 'widget' }" @click="configTab = 'widget'">
              字段属性
            </div>
            <div class="m-config-tab" :class="{ active: configTab === 'form' }" @click="configTab = 'form'">
              表单属性
            </div>
          </el-header>
          <el-main class="m-config-content">
            <ElWidgetConfig v-show="configTab === 'widget'" v-model:select="widgetFormCurrentSelect" />
            <ElFormConfig v-show="configTab === 'form'" v-model:config="widgetForm.config" />
          </el-main>
        </el-container>
      </el-aside>
    </el-container>
  </div>
</template> 
<script setup lang="ts">
import { ref } from "vue";
import ComponentGroup from "@/components/form/components/ComponentGroup.vue";
import { element } from "@/components/form/config";
import ElWidgetForm from "./ElWidgetForm.vue";
import ElFormConfig from "./ElFormConfig.vue"
import ElWidgetConfig from "./ElWidgetConfig.vue"
defineOptions({
  name: "ElDesignForm",
});

const widgetForm = ref(JSON.parse(JSON.stringify(element.widgetForm)));
const widgetFormCurrentSelect = ref(null);

const configTab = ref('widget')
</script>

<style lang="less">
.m-ElDesignForm {
  width: 100%;
  height: 100%;

  .m-ElDesignForm-container {
    width: 100%;
    height: 100%;

    .m-ElDesignForm-main {
      box-sizing: border-box;
      border-right: 1px solid #d3d3d3;
      border-left: 1px solid #d3d3d3;
      box-shadow: 0px 20px 50px 0px rgba(191, 21, 108, 0.05),
        0px 8px 32px 0px rgba(191, 21, 108, 0.05);
    }

    .m-ElDesignForm-aside {
      &:nth-child(3) {
        position: relative;

        .m-config-container {
          height: 100%;
        }

        .m-config-tab {
          height: 41px;
          line-height: 41px;
          display: inline-block;
          width: 130px;
          text-align: center;
          font-size: 14px;
          font-weight: 500;
          position: relative;
          cursor: pointer;

          &.active {
            border-bottom: 2px solid #409EFF;
          }
        }

        .m-config-content {
          padding: 10px;
          background: #FFF;
          overflow: auto;

          .el-form-item,
          h4 {
            padding-bottom: 10px;
            border-bottom: 1px solid #e1e1e1;
          }

          .el-form-item__label {
            font-weight: 500;
            padding: 0;
          }

          .label {
            font-size: 14px;
            font-weight: 500;
            margin: 0 5px;

            &:first-child {
              margin-left: 0;
            }
          }

          .drag-item {
            font-size: 16px;
            margin: 0 5px;
            cursor: move;
          }
        }
      }
    }
  }
}
</style>
