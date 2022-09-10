<template>
  <div>
    <p class="desc">选择能发起该审批的人员/部门，不选则默认开放给所有人</p>
    <el-button
      size="mini"
      @click="selectOrg"
      :icon="ElIconPlus"
      type="primary"
      round
      >请选择</el-button
    >
    <org-items v-model:value="select" />
    <org-picker
      title="请选择可发起本审批的人员/部门"
      multiple
      ref="orgPicker"
      :selected="select"
      @ok="selected"
    />
  </div>
</template>

<script>
import { Plus as ElIconPlus } from '@element-plus/icons'
import OrgPicker from '@/components/common/OrgPicker'
import OrgItems from '../OrgItems'

export default {
  data() {
    return {
      showOrgSelect: false,
      ElIconPlus,
    }
  },
  name: 'RootConfig',
  components: { OrgPicker, OrgItems },
  props: {
    config: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  computed: {
    select() {
      return this.config.assignedUser
    },
  },
  methods: {
    selectOrg() {
      this.$refs.orgPicker.show()
    },
    selected(select) {
      this.select.length = 0
      select.forEach((val) => this.select.push(val))
    },
    removeOrgItem(index) {
      this.select.splice(index, 1)
    },
  },
}
</script>

<style lang="less" scoped>
.desc {
  font-size: small;
  color: #8c8c8c;
}
.org-item {
  margin: 5px;
}
</style>
