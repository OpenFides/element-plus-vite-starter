<template>
  <div>
    <el-form-item label="提示文字">
      <el-input
        size="small"
        v-model="value.placeholder"
        placeholder="请设置提示语"
      />
    </el-form-item>
    <el-form-item label="数量限制">
      <template v-slot:label>
        <tip content="限制最大上传图片数量（为0则不限制）">数量限制</tip>
      </template>
      <el-input-number
        class="max-fill"
        controls-position="right"
        :precision="0"
        size="small"
        v-model="value.maxNumber"
        placeholder="最多上传几张图片"
      />
    </el-form-item>
    <el-form-item label="大小限制">
      <template v-slot:label>
        <tip content="限制单个文件最大大小-MB（为0则不限制）">大小限制</tip>
      </template>
      <el-input-number
        class="max-fill"
        controls-position="right"
        :precision="1"
        size="small"
        v-model="value.maxSize"
        placeholder="单个文件最大大小"
      />
    </el-form-item>
    <el-form-item label="类型限制">
      <template v-slot:label>
        <tip content="限制上传文件的后缀类型">类型限制</tip>
      </template>
      <el-select
        size="small"
        style="width: 100%"
        v-model="value.fileTypes"
        multiple
        filterable
        allow-create
        default-first-option
        clearable
        placeholder="允许上传文件的后缀格式，可设置多种"
      />
    </el-form-item>
    <el-form-item label="不可下载">
      <el-switch v-model="value.onlyRead"></el-switch>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: 'FileUploadConfig',
  components: {},
  props: {
    value: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {}
  },
  methods: {},
  emits: ['update:value'],
}
</script>

<style lang="less" scoped>
/deep/ .el-form-item__label {
  padding: 0 12px 0 0;
}
</style>
