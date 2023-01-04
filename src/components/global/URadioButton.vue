<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue'
const emits = defineEmits(['update:modelValue'])

const { modelValue } = defineProps({
  modelValue: Number,
  data: Array,
})

const value = ref(modelValue)

watch(value, () => {
  emits('update:modelValue', value)
})
</script>
<template>
  <el-radio-group v-model="value">
    <el-radio v-for="(star, index) in data" :key="star" :label="index + 1">{{
      star
    }}</el-radio>
  </el-radio-group>
</template>
