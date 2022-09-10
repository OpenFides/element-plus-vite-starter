<template>
  <div>
    <el-form-item label="提示文字">
      <el-input
        size="small"
        v-model="value.placeholder"
        placeholder="请设置提示语"
      />
    </el-form-item>
    <el-form label-position="top">
      <el-form-item label="选项设置" class="options">
        <template v-slot:label>
          <div class="option-item-label">
            <span>选项设置</span>
            <el-button
              :icon="ElIconPlus"
              type="text"
              size="mini"
              @click="value.options.push('新选项')"
              >新增选项</el-button
            >
          </div>
        </template>
        <draggable
          :list="value.options"
          group="option"
          handler=".el-icon-rank"
          :options="dragOption"
        >
          <div
            v-for="(op, index) in value.options"
            :key="index"
            class="option-item"
          >
            <el-icon><el-icon-rank /></el-icon>
            <el-input
              v-model="value.options[index]"
              size="medium"
              placeholder="请设置选项值"
              clearable
            >
              <template v-slot:append>
                <el-button
                  :icon="ElIconDelete"
                  type="danger"
                  size="medium"
                  @click="value.options.splice(index, 1)"
                ></el-button>
              </template>
            </el-input>
          </div>
        </draggable>
      </el-form-item>
    </el-form>
    <el-form-item label="选项展开">
      <el-switch v-model="value.expanding"></el-switch>
    </el-form-item>
  </div>
</template>

<script>
import {
  Rank as ElIconRank,
  Plus as ElIconPlus,
  Delete as ElIconDelete,
} from '@element-plus/icons'
import draggable from 'vuedraggable'

export default {
  data() {
    return {
      dragOption: {
        animation: 300,
        sort: true,
      },
      ElIconPlus,
      ElIconDelete,
    }
  },
  components: {
    draggable,
    ElIconRank,
  },
  name: 'SelectInputConfig',
  props: {
    value: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  methods: {},
  emits: ['update:value'],
}
</script>

<style lang="less" scoped>
/deep/ .options {
  .el-form-item__label {
    display: block;
    width: 100%;
    text-align: left;
  }
  .el-icon-rank {
    padding-right: 5px;
    cursor: move;
  }
  .option-item {
    .el-input {
      width: 250px;
      float: right;
    }
  }
}
.option-item-label {
  height: 30px;
  line-height: 30px;
  button {
    float: right;
  }
}
</style>
