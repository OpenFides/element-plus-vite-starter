<script lang="ts" setup>
import { formItemValidateStates } from 'element-plus';
import { ref } from 'vue'
const input = ref('')

const props = defineProps({
    title: { type: String, required: true },
    name: { type: String, required: true },
    placeholder: { type: String },
    id: Number
})
const emit = defineEmits(['cancel', 'submit'])
</script>
    
<template>
    <el-form-item :label="title">
        <el-input v-model="input" :placeholder="placeholder" @change="emit('submit', input)" />
    </el-form-item>
</template>
  
