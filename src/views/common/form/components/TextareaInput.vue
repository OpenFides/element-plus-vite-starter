<template>
  <div>
    <div v-if="mode === 'DESIGN'">
      <el-input
        size="medium"
        disabled
        :placeholder="placeholder"
        show-word-limit
        :rows="2"
        type="textarea"
      />
    </div>
    <div v-else>
      <el-input
        size="medium"
        v-model="_value"
        clearable
        :maxlength="255"
        :placeholder="placeholder"
        show-word-limit
        :rows="3"
        type="textarea"
      />
    </div>
  </div>
</template>

<script>
import { $on, $off, $once, $emit } from '../../../../utils/gogocodeTransfer'
import componentMinxins from '../ComponentMinxins'

export default {
  mixins: [componentMinxins],
  name: 'TextareaInput',
  components: {},
  props: {
    value: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: '请输入内容',
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
  methods: {},
  emits: ['update:value'],
}
</script>
