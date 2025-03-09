<template>
  <div v-if="props.show" class="modals">
    <div class="modals-content">
      <header class="modals-close">
        <span @click="emit('close')" class="icon"
          ><font-awesome-icon :icon="['fas', 'circle-xmark']"
        /></span>
      </header>

      <main>
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'

const props = defineProps<{
  show: boolean
}>()

const emit = defineEmits(['close'])
</script>
