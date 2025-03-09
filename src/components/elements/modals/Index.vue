<template>
  <div v-if="props.show" class="modals">
    <div class="modals-content">
      <header class="modals-close">
        <span @click="emit('close')" class="icon"
          ><font-awesome-icon :icon="['fas', 'circle-xmark']"
        /></span>
      </header>

      <main>
        <section class="input-text">
          <label>Title</label>
          <input class="input-text" type="text" />
        </section>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'

const props = defineProps<{
  show: boolean
  form: {}
}>()

const emit = defineEmits(['close'])
</script>

<style>
.input-text {
  padding: 12px 4px;
  border-radius: 4px;
  border: 0 !important;
  display: flex;
  flex-direction: column;
  font-size: 16px;
}

.input-text label {
  margin-bottom: 4px;
}
</style>
