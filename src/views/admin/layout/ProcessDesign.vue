<template>
  <el-main>
    <div class="scale">
      <el-button
        :icon="ElIconPlus"
        size="small"
        @click="scale += 10"
        :disabled="scale >= 150"
        circle
      ></el-button>
      <span>{{ scale }}%</span>
      <el-button
        :icon="ElIconMinus"
        size="small"
        @click="scale -= 10"
        :disabled="scale <= 40"
        circle
      ></el-button>
      <!--      <el-button @click="validate">校验流程</el-button>-->
    </div>
    <div class="design" :style="'transform: scale(' + scale / 100 + ');'">
      <process-tree ref="process-tree" @selectedNode="nodeSelected" />
    </div>
    <el-drawer
      :title="selectedNode.name"
      v-model:visible="showConfig"
      :modal-append-to-body="false"
      :size="selectedNode.type === 'CONDITION' ? '600px' : '500px'"
      direction="rtl"
      :modal="false"
      destroy-on-close
    >
      <template v-slot:title>
        <div>
          <el-input
            v-model="selectedNode.name"
            size="medium"
            v-show="showInput"
            style="width: 300px"
            @blur="showInput = false"
          ></el-input>
          <el-link
            v-show="!showInput"
            @click="showInput = true"
            style="font-size: medium"
          >
            <el-icon style="margin-right: 10px"><el-icon-edit /></el-icon>
            {{ selectedNode.name }}
          </el-link>
        </div>
      </template>
      <div class="node-config-content">
        <node-config />
      </div>
    </el-drawer>
  </el-main>
</template>

<script>
import {
  Edit as ElIconEdit,
  Plus as ElIconPlus,
  Minus as ElIconMinus,
} from '@element-plus/icons'
import ProcessTree from './process/ProcessTree.vue'
import NodeConfig from '../../common/process/config/NodeConfig'

export default {
  data() {
    return {
      scale: 100,
      selected: {},
      showInput: false,
      showConfig: false,
      ElIconPlus,
      ElIconMinus,
    }
  },
  components: {
    ProcessTree,
    NodeConfig,
    ElIconEdit,
  },
  name: 'ProcessDesign',
  computed: {
    selectedNode() {
      return this.$store.state.selectedNode
    },
  },
  mounted() {},
  methods: {
    validate() {
      return this.$refs['process-tree'].validateProcess()
    },
    nodeSelected(node) {
      console.log('配置节点', node)
      this.showConfig = true
    },
  },
  watch: {
    /*selectedNode:{
deep: true,
handler(node){
  console.log("更新")
  this.$refs["process-tree"].nodeDomUpdate(node)
}
}*/
  },
}
</script>

<style lang="less" scoped>
.design {
  margin-top: 100px;
  display: flex;
  transform-origin: 50% 0px 0px;
}
.scale {
  z-index: 999;
  position: fixed;
  top: 80px;
  right: 40px;
  span {
    margin: 0 10px;
    font-size: 15px;
    color: #7a7a7a;
    width: 50px;
  }
}
.node-config-content {
  padding: 0 20px 20px;
}
/deep/ .el-drawer__body {
  overflow-y: auto;
}
</style>
