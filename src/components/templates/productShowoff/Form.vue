<template>
  <Modals :show="props.show" @close="emit('close')"> Form </Modals>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'

const props = defineProps<{
  show: boolean
}>()

const emit = defineEmits(['close'])
</script>
