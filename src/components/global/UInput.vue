<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue'

const emits = defineEmits(['update:modelValue'])
const { modelValue } = defineProps({
  modelValue: String,
  placeholder: String,
  clearable: {
    required: false,
  },
  type: {
    type: String,
    default: 'text',
    validator: (value) => ['text', 'textarea'].includes(value),
  },
})

const value = ref(modelValue)

watch(value, () => {
  emits('update:modelValue', value)
})
</script>
<template>
  <el-input
    :type="type"
    :placeholder="placeholder"
    :clearable="clearable"
    v-model="value"
  />
</template>
