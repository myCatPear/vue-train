<script setup>
import { computed, defineProps, defineEmits, watch, ref } from 'vue'

const emits = defineEmits(['update:modelValue'])

const { modelValue } = defineProps({
  modelValue: File,
})

const value = ref(modelValue)

const uploadFile = (e) => {
  const file = e.target.files[0]
  value.value = file
}

const previewFilePath = computed(() => {
  if (value.value) return URL.createObjectURL(value.value)
})

watch(value, () => {
  emits('update:modelValue', value)
})
</script>
<template>
  <div>
    <input type="file" @change="uploadFile" />
    <img
      v-if="value"
      :src="previewFilePath"
      alt="avatar"
      style="width: 100px"
    />
  </div>
</template>
