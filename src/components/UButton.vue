<script setup>
import { defineProps } from 'vue'
defineProps({
  action: Function,
})
</script>
<template>
  <el-button type="primary" @click="action"><slot></slot></el-button>
</template>
