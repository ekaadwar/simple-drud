<template>
  <main class="input-area">
    <label>{{ props.label }}</label>
    <textarea v-model="modelValue" rows="4"></textarea>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  label: string
  value: string
}>()

const emit = defineEmits(['update:value'])

const modelValue = computed({
  get: () => props.value,
  set: (newValue) => emit('update:value', newValue),
})
</script>
