<template>
  <!--渲染表单-->
  <el-form
    ref="form"
    class="process-form"
    label-position="top"
    :rules="rules"
    :model="_value"
  >
    <template v-for="(item, index) in forms">
      <el-form-item
        v-if="item.name !== 'SpanLayout' && item.name !== 'Description'"
        :prop="item.id"
        :label="item.title"
      >
        <form-design-render
          :ref="`sub-item_${item.id}`"
          v-model:value="_value[item.id]"
          mode="PC"
          :config="item"
        />
      </el-form-item>
    </template>
    <form-design-render
      ref="span-layout"
      v-else
      v-model:value="_value"
      mode="PC"
      :config="item"
    />
  </el-form>
</template>

<script>
import { $on, $off, $once, $emit } from '../../../utils/gogocodeTransfer'
import FormDesignRender from '@/views/admin/layout/form/FormDesignRender'

export default {
  name: 'FormRender',
  components: { FormDesignRender },
  props: {
    forms: {
      type: Array,
      default: () => {
        return []
      },
    },
    value: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      rules: {},
    }
  },
  created() {
    this.loadFormConfig(this.forms)
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
  methods: {
    validate(call) {
      let success = true
      this.$refs.form.validate((valid) => {
        success = valid
        if (valid) {
          //校验成功再校验内部
          for (let i = 0; i < this.forms.length; i++) {
            if (this.forms[i].name === 'TableList') {
              let formRef = this.$refs[`sub-item_${this.forms[i].id}`]
              if (formRef && Array.isArray(formRef) && formRef.length > 0) {
                formRef[0].validate((subValid) => {
                  success = subValid
                })
                if (!success) {
                  break
                }
              }
            }
          }
        }
        call(success)
      })
    },
    loadFormConfig(forms) {
      forms.forEach((item) => {
        if (item.name === 'SpanLayout') {
          this.loadFormConfig(item.props.items)
        } else {
          this._value[item.id] = this.value[item.id]
          if (item.props.required) {
            this.rules[item.id] = [
              {
                type: item.valueType === 'Array' ? 'array' : undefined,
                required: true,
                message: `请填写${item.title}`,
                trigger: 'blur',
              },
            ]
          }
        }
      })
    },
  },
  emits: ['update:value'],
}
</script>

<style lang="less" scoped>
.process-form {
  /deep/ .el-form-item__label {
    padding: 0 0;
  }
}
</style>
