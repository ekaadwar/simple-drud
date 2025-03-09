<template>
  <Modals :show="props.show">
    <CardModals>
      <slot />
    </CardModals>
  </Modals>
</template>

<script setup lang="ts">
const props = defineProps<{
  show: boolean
}>()
</script>
