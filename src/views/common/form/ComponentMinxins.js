import { $on, $off, $once, $emit } from '../../../utils/gogocodeTransfer'
export default {
  props: {
    mode: {
      type: String,
      default: 'DESIGN',
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
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
  emits: ['update:value'],
}
