<script lang="ts" setup>
import { reactive, ref } from "vue"
import { useRouter } from "vue-router"
import type { FormInstance, FormRules } from "element-plus"
import {
  Platform as ElIconSPlatform,
  Eleme as ElIconSCustom,
  User as ElIconUser,
} from '@element-plus/icons-vue'

import { ElMessage } from 'element-plus'

import OrgPicker from '@/components/common/TreeSelect.vue'
const selected = (data: any, en: any) => {
  console.info('test', data, en);

};
</script>
  
<template>
  <div style="text-align: center">
    <h4>先选择本次登录人员的身份，再进入相应的系统 😅</h4>
    <div class="work-panel">
      <div class="user">
        <el-button type="primary" round size="small" :icon="ElIconUser">选择本次登录者
        </el-button>

      </div>
      <div class="panel">

      </div>
    </div>
    <org-picker type="user" checkbox="true" @submit="selected" ref="orgPicker"></org-picker>
  </div>
</template>

<style scoped>
h4 {
  margin: 0 auto;
  color: #38adff;
  margin-top: 150px;
}

.user {
  position: absolute;
  left: 20%;
  margin-top: 20px;


}

.user div {
  margin-left: 20px;
  display: inline-block;
}

.work-panel {
  text-align: left;
  display: flex;
  justify-content: center;
  position: relative;


}

.work-panel .panel {
  margin-top: 80px;
  max-width: 700px;
  display: flex;
  justify-content: center;

}

.work-panel .panel .panel-item {
  cursor: pointer;
  margin: 0 40px;
  width: 250px;
  padding: 10px;
  display: inline-block;
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #ffffff;
  box-shadow: 1px 1px 8px 0 #b0b0b1;

}

.work-panel .panel .panel-item :hover {
  border: 1px solid #2594ff;
  box-shadow: 1px 1px 13px 0 #a4a4a5;
}

.work-panel .panel .panel-item div:nth-child(1) {
  color: #7a7a7a;
  font-weight: bold;
  height: 60px;
  line-height: 60px;
  font-size: large;
  border-bottom: 1px solid #cccdcd;



}

.work-panel .panel .panel-item div:nth-child(1) span {
  margin-left: 30px;
}

.work-panel .panel .panel-item i {
  padding: 8px;
  color: #ffffff;
  background: #2594ff;
  font-size: 25px;
  border-radius: 5px;
}

.work-panel .panel .panel-item .el-icon-s-platform {
  background: rgb(255, 148, 62);
}

.work-panel .panel .panel-item p {
  padding: 10px 0;
  color: #7a7a7a;
  font-size: medium;
}
</style>
