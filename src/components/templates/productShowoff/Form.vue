<template>
  <Modals :show="props.show"> Form </Modals>
</template>

<script setup lang="ts">
import Modals from '@/components/elements/cards/Modals.vue'

const props = defineProps<{
  show: boolean
}>()
</script>
