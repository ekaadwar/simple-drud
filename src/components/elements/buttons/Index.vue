<template>
  <button @click="emit('click')" :class="buttonClass">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, defineEmits } from 'vue'

const emit = defineEmits(['click'])

const props = defineProps<{
  variant?: 'primary-yellow' | 'primary-navy' | 'secondary' | 'primary-red'
}>()

const buttonClass = computed(() => {
  return {
    'btn btn-primary-yellow': props.variant === 'primary-yellow',
    'btn btn-primary-navy': props.variant === 'primary-navy',
    'btn btn-secondary': props.variant === 'secondary',
    'btn btn-primary-red': !props.variant || props.variant === 'primary-red',
  }
})
</script>
