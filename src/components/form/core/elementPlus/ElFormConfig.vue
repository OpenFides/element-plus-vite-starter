<template>
    <div class="m-ElFormConfig">
        <el-form label-position="top" size="small">
            <el-form-item label="标签对齐方式">
                <el-radio-group v-model="config.labelPosition">
                    <el-radio-button label="left">左对齐</el-radio-button>
                    <el-radio-button label="right">右对齐</el-radio-button>
                    <el-radio-button label="top">顶部对齐</el-radio-button>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="标签宽度">
                <el-input-number v-model.number="config.labelWidth" :min="0" />
            </el-form-item>

            <el-form-item label="组件尺寸">
                <el-radio-group v-model="config.size">
                    <el-radio-button label="medium">大</el-radio-button>
                    <el-radio-button label="small">默认</el-radio-button>
                    <el-radio-button label="mini">小</el-radio-button>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="隐藏必选标记">
                <el-switch v-model="config.hideRequiredAsterisk" />
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { PropType, ref, watch } from 'vue'
import { WidgetForm } from '../../config/element';
defineOptions({
    name: "ElFormConfig",
});

const props = defineProps({
    config: {
        type: Object as PropType<WidgetForm['config']>,
        required: true
    }
})
const emits = defineEmits(["update:config"])
watch(() => props.config, (newValue) => {
    emits("update:config", newValue)
})
</script>

<style lang="less">
.m-ElFormConfig {}
</style>