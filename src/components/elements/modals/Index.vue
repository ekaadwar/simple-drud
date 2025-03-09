<template>
  <div v-if="props.show" class="modals">
    <div class="card">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  show: boolean
}>()
</script>
