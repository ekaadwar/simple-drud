<template>
  <main class="input-text">
    <label>{{ props.label }}</label>
    <input v-model="modelValue" type="text" />
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
