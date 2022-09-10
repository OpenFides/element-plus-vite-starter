<template>
  <component
    v-bind="config.props"
    ref="form"
    :is="config.name"
    :mode="mode"
    v-model:value="_value"
  />
</template>

<script>
import { $on, $off, $once, $emit } from '../../../../utils/gogocodeTransfer'

import components from '@/views/common/form/ComponentExport'

export default {
  name: 'FormRender',
  components: components,
  props: {
    mode: {
      type: String,
      default: 'DESIGN',
    },
    value: {
      default: undefined,
    },
    config: {
      type: Object,
      default: () => {
        return {}
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
    validate(call) {
      this.$refs.form.validate(call)
    },
  },
  emits: ['update:value'],
}
</script>
