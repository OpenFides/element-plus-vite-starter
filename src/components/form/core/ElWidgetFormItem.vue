<template>
  <el-form-item v-if="element" :key="element.key" class="m-ElWidgetFormItem-view"
    :class="{ active: selectWidget?.key === element.key }" :label="element.label" :rules="element.options.rules">
    <template v-if="element.type === 'input'">
      <el-input readonly :modelValue="element.options.defaultValue" :style="{ width: element.options.width }"
        :placeholder="element.options.placeholder" :maxlength="parseInt(element.options.maxlength)"
        :clearable="element.options.clearable" :disabled="element.options.disabled">
        <template #prefix v-if="element.options.prefix">
          {{ element.options.prefix }}
        </template>
        <template #suffix v-if="element.options.suffix">
          {{ element.options.suffix }}
        </template>
        <template #prepend v-if="element.options.prepend">
          {{ element.options.prepend }}
        </template>
        <template #append v-if="element.options.append">
          {{ element.options.append }}
        </template>
      </el-input>
    </template>

    <template v-if="element.type === 'password'">
      <el-input readonly :modelValue="element.options.defaultValue" :style="{ width: element.options.width }"
        :placeholder="element.options.placeholder" :maxlength="parseInt(element.options.maxlength)"
        :clearable="element.options.clearable" :disabled="element.options.disabled"
        :show-password="element.options.showPassword">
        <template #prefix v-if="element.options.prefix">
          {{ element.options.prefix }}
        </template>
        <template #suffix v-if="element.options.suffix">
          {{ element.options.suffix }}
        </template>
        <template #prepend v-if="element.options.prepend">
          {{ element.options.prepend }}
        </template>
        <template #append v-if="element.options.append">
          {{ element.options.append }}
        </template>
      </el-input>
    </template>

    <template v-if="element.type === 'textarea'">
      <el-input type="textarea" resize="none" readonly :rows="element.options.rows"
        :modelValue="element.options.defaultValue" :style="{ width: element.options.width }"
        :placeholder="element.options.placeholder" :maxlength="parseInt(element.options.maxlength)"
        :show-word-limit="element.options.showWordLimit" :autosize="element.options.autosize"
        :clearable="element.options.clearable" :disabled="element.options.disabled" />
    </template>

    <template v-if="element.type === 'number'">
      <el-input-number :modelValue="element.options.defaultValue" :style="{ width: element.options.width }"
        :max="element.options.max" :min="element.options.min" :disabled="element.options.disabled" />
    </template>

    <template v-if="element.type === 'radio'">
      <el-radio-group :modelValue="element.options.defaultValue" :style="{ width: element.options.width }"
        :disabled="element.options.disabled">
        <el-radio v-for="item of element.options.options" :key="item.value" :label="item.value" :style="{
          display: element.options.inline ? 'inline-block' : 'block',
        }">{{ element.options.showLabel ? item.label : item.value }}</el-radio>
      </el-radio-group>
    </template>

    <template v-if="element.type === 'checkbox'">
      <el-checkbox-group :modelValue="element.options.defaultValue" :style="{ width: element.options.width }"
        :disabled="element.options.disabled">
        <el-checkbox v-for="item of element.options.options" :key="item.value" :label="item.value" :style="{
          display: element.options.inline ? 'inline-block' : 'block',
        }">{{ element.options.showLabel ? item.label : item.value }}
        </el-checkbox>
      </el-checkbox-group>
    </template>

    <template v-if="element.type === 'time'">
      <el-time-picker :modelValue="element.options.defaultValue" :placeholder="element.options.placeholder"
        :readonly="element.options.readonly" :editable="element.options.editable" :clearable="element.options.clearable"
        :format="element.options.format" :disabled="element.options.disabled"
        :style="{ width: element.options.width }" />
    </template>

    <template v-if="element.type === 'date'">
      <el-date-picker :modelValue="element.options.defaultValue" :placeholder="element.options.placeholder"
        :readonly="element.options.readonly" :editable="element.options.editable" :clearable="element.options.clearable"
        :format="element.options.format" :disabled="element.options.disabled"
        :style="{ width: element.options.width }" />
    </template>

    <template v-if="element.type === 'rate'">
      <el-rate :modelValue="element.options.defaultValue" :max="element.options.max"
        :allowHalf="element.options.allowHalf" :disabled="element.options.disabled" />
    </template>

    <template v-if="element.type === 'select'">
      <el-select :modelValue="element.options.defaultValue" :multiple="element.options.multiple"
        :placeholder="element.options.placeholder" :clearable="element.options.clearable"
        :filterable="element.options.filterable" :disabled="element.options.disabled"
        :style="{ width: element.options.width }">
        <el-option v-for="item of element.options.options" :key="item.value" :value="item.value"
          :label="element.options.showLabel ? item.label : item.value" />
      </el-select>
    </template>

    <template v-if="element.type === 'switch'">
      <el-switch :modelValue="element.options.defaultValue" :active-text="element.options.activeText"
        :inactive-text="element.options.inactiveText" :disabled="element.options.disabled" />
    </template>

    <template v-if="element.type === 'slider'">
      <el-slider :modelValue="element.options.defaultValue" :min="element.options.min" :max="element.options.max"
        :step="element.options.step" :range="element.options.range" :disabled="element.options.disabled"
        :style="{ width: element.options.width }" />
    </template>

    <template v-if="element.type == 'text'">
      <span>{{ element.options.defaultValue }}</span>
    </template>

    <template v-if="element.type === 'img-upload'">
      <el-upload :name="element.options.file" :action="element.options.action" :accept="element.options.accept"
        :file-list="element.options.defaultValue" :listType="element.options.listType"
        :multiple="element.options.multiple" :limit="element.options.limit" :disabled="element.options.disabled">
        <SvgIcon v-if="element.options.listType === 'picture-card'" name="insert" />
        <el-button v-else>
          <SvgIcon name="img-upload" style="margin-right: 10px" />
          点击上传
        </el-button>
      </el-upload>
    </template>

    <!-- <template v-if="element.type === 'richtext-editor'">
      <RichTextEditor
        :value="element.options.defaultValue"
        :disable="element.options.disabled"
        :style="{ width: element.options.width }"
      />
    </template> -->

    <template v-if="element.type === 'cascader'">
      <el-cascader :modelValue="element.options.defaultValue" :options="element.options.remoteOptions"
        :placeholder="element.options.placeholder" :filterable="element.options.filterable"
        :clearable="element.options.clearable" :disabled="element.options.disabled"
        :style="{ width: element.options.width }" />
    </template>
  </el-form-item>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import SvgIcon from "@/components/form/components/SvgIcon.vue";
import { WidgetFormItem } from "@/components/form/config/element";

const props = defineProps({
  element: {
    type: Object,
    required: true,
  },
  selectWidget: {
    type: Object as PropType<null | undefined | WidgetFormItem>,
  },
});
</script>
