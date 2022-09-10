<template>
  <div style="margin-top: 10px">
    <el-tag
      class="org-item"
      :type="org.type === 'dept' ? '' : 'info'"
      v-for="(org, index) in _value"
      :key="index + '_org'"
      closable
      size="mini"
      @close="removeOrgItem(index)"
    >
      {{ org.name }}
    </el-tag>
  </div>
</template>

<script>
import { $on, $off, $once, $emit } from '../../../utils/gogocodeTransfer'
export default {
  name: 'OrgItems',
  components: {},
  props: {
    value: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  computed: {
    _value: {
      get() {
        return this.value
      },
      set(val) {
        $emit(this, 'update:value', val)
      },
    },
  },
  data() {
    return {}
  },
  methods: {
    removeOrgItem(index) {
      this._value.splice(index, 1)
    },
  },
  emits: ['update:value'],
}
</script>

<style scoped>
.org-item {
  margin: 5px;
}
</style>
