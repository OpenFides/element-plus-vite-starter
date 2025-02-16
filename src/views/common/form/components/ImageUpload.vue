<template>
  <div>
    <div v-if="mode === 'DESIGN'">
      <div class="design">
        <el-icon><el-icon-plus /></el-icon>
      </div>
      <p>{{ placeholder }} {{ sizeTip }}</p>
    </div>
    <div v-else>
      <el-upload
        :file-list="_value"
        action="#"
        :limit="maxSize"
        with-credentials
        :multiple="maxSize > 0"
        :data="uploadParams"
        list-type="picture-card"
        :auto-upload="false"
        :before-upload="beforeUpload"
      >
        <template v-slot:default>
          <el-icon><el-icon-plus /></el-icon>
        </template>
        <template v-slot:file="{ file }">
          <div>
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url"
              alt=""
            />
            <span class="el-upload-list__item-actions">
              <span
                class="el-upload-list__item-preview"
                @click="handlePictureCardPreview(file)"
              >
                <el-icon><el-icon-zoom-in /></el-icon>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleDownload(file)"
              >
                <el-icon><el-icon-download /></el-icon>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleRemove(file)"
              >
                <el-icon><el-icon-delete /></el-icon>
              </span>
            </span>
          </div>
        </template>
        <template v-slot:tip>
          <div class="el-upload__tip">{{ placeholder }} {{ sizeTip }}</div>
        </template>
      </el-upload>
    </div>
  </div>
</template>

<script>
import {
  Plus as ElIconPlus,
  ZoomIn as ElIconZoomIn,
  Download as ElIconDownload,
  Delete as ElIconDelete,
} from '@element-plus/icons'
import componentMinxins from '../ComponentMinxins'

export default {
  components: {
    ElIconPlus,
    ElIconZoomIn,
    ElIconDownload,
    ElIconDelete,
  },
  mixins: [componentMinxins],
  name: 'ImageUpload',
  props: {
    value: {
      type: Array,
      default: () => {
        return []
      },
    },
    placeholder: {
      type: String,
      default: '请选择图片',
    },
    maxSize: {
      type: Number,
      default: 5,
    },
    maxNumber: {
      type: Number,
      default: 10,
    },
    enableZip: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    sizeTip() {
      return this.maxSize > 0 ? `| 每张图不超过${this.maxSize}MB` : ''
    },
  },
  data() {
    return {
      disabled: false,
      uploadParams: {},
    }
  },
  methods: {
    beforeUpload(file) {
      const alows = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg']
      if (alows.indexOf(file.type) === -1) {
        this.$message.warning('存在不支持的图片格式')
      } else if (this.maxSize > 0 && file.size / 1024 / 1024 > this.maxSize) {
        this.$message.warning(`单张图片最大不超过 ${this.maxSize}MB`)
      } else {
        return true
      }
      return false
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      console.log(file)
    },
    handleDownload(file) {
      console.log(file)
    },
  },
  emits: ['update:value'],
}
</script>

<style lang="less" scoped>
.design {
  i {
    padding: 10px;
    font-size: xx-large;
    background: white;
    border: 1px dashed #8c8c8c;
  }
}
/deep/ .el-upload--picture-card {
  width: 80px;
  height: 80px;
  line-height: 87px;
}
/deep/ .el-upload-list__item {
  width: 80px;
  height: 80px;
  .el-upload-list__item-actions {
    & > span + span {
      margin: 1px;
    }
  }
}
</style>
