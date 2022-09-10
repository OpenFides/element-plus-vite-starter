<template>
  <el-popover
    placement="bottom-start"
    title="添加流程节点"
    width="350"
    trigger="click"
  >
    <div class="node-select">
      <div @click="addApprovalNode">
        <el-icon style="color: rgb(255, 148, 62)"><el-icon-s-check /></el-icon>
        <span>审批人</span>
      </div>
      <div @click="addCcNode">
        <el-icon style="color: rgb(50, 150, 250)"
          ><el-icon-s-promotion
        /></el-icon>
        <span>抄送人</span>
      </div>
      <div @click="addConditionsNode">
        <el-icon style="color: rgb(21, 188, 131)"><el-icon-share /></el-icon>
        <span>条件分支</span>
      </div>
      <div @click="addConcurrentsNode">
        <el-icon style="color: #718dff"><el-icon-s-operation /></el-icon>
        <span>并行分支</span>
      </div>
      <div @click="addDelayNode">
        <el-icon style="color: #f25643"><el-icon-time /></el-icon>
        <span>延迟等待</span>
      </div>
      <div @click="addTriggerNode">
        <el-icon style="color: #15bc83"><el-icon-set-up /></el-icon>
        <span>触发器</span>
      </div>
    </div>
    <template v-slot:reference>
      <el-button
        :icon="ElIconPlus"
        type="primary"
        size="small"
        circle
      ></el-button>
    </template>
  </el-popover>
</template>

<script>
import {
  SCheck as ElIconSCheck,
  SPromotion as ElIconSPromotion,
  Share as ElIconShare,
  SOperation as ElIconSOperation,
  Time as ElIconTime,
  SetUp as ElIconSetUp,
  Plus as ElIconPlus,
} from '@element-plus/icons'
import { $on, $off, $once, $emit } from '../../utils/gogocodeTransfer'
export default {
  data() {
    return {
      ElIconPlus,
    }
  },
  components: {
    ElIconSCheck,
    ElIconSPromotion,
    ElIconShare,
    ElIconSOperation,
    ElIconTime,
    ElIconSetUp,
  },
  name: 'InsertButton',
  computed: {
    selectedNode() {
      this.$store.state.selectedNode
    },
  },
  methods: {
    addApprovalNode() {
      $emit(this, 'insertNode', 'APPROVAL')
    },
    addCcNode() {
      $emit(this, 'insertNode', 'CC')
    },
    addDelayNode() {
      $emit(this, 'insertNode', 'DELAY')
    },
    addConditionsNode() {
      $emit(this, 'insertNode', 'CONDITIONS')
    },
    addConcurrentsNode() {
      $emit(this, 'insertNode', 'CONCURRENTS')
    },
    addTriggerNode() {
      $emit(this, 'insertNode', 'TRIGGER')
    },
  },
  emits: ['insertNode'],
}
</script>

<style lang="less" scoped>
.node-select {
  div {
    display: inline-block;
    margin: 5px 5px;
    cursor: pointer;
    padding: 10px 15px;
    border: 1px solid #f8f9f9;
    background-color: #f8f9f9;
    border-radius: 10px;
    width: 130px;
    position: relative;
    span {
      position: absolute;
      left: 65px;
      top: 18px;
    }
    &:hover {
      background-color: #fff;
      box-shadow: 0 0 8px 2px #d6d6d6;
    }
    i {
      font-size: 25px;
      padding: 5px;
      border: 1px solid #dedfdf;
      border-radius: 14px;
    }
  }
}
</style>
