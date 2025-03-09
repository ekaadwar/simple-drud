<template>
  <Modals :show="props.show" @close="emit('close')">
    <main class="form-canvas">
      <section class="form-group">
        <InputText
          :value="props.form.title"
          :label="'Product Name'"
          @update:value="props.form.title = $event"
        />
        <InputNumber
          :value="props.form.price"
          :label="'Price'"
          @update:value="props.form.price = $event"
        />
        <InputArea
          :value="props.form.description"
          :label="'Description'"
          @update:value="props.form.description = $event"
        />
        <InputText
          :value="props.form.category"
          :label="'Category'"
          @update:value="props.form.category = $event"
        />
        <InputNumber
          :value="props.form.rating.count"
          :label="'Stock'"
          @update:value="props.form.rating.count = $event"
        />
      </section>
      <section class="form-action">
        <Button :variant="'secondary'" @click="emit('close')">Cancel</Button>
        <Button :variant="'primary-yellow'" @click="emit('submit', props.form)">Save</Button>
      </section>
    </main>
  </Modals>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'

type Rating = {
  rate: number
  count: number
}

type Product = {
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

const props = defineProps<{
  show: boolean
  form: Product
}>()

const emit = defineEmits(['close', 'submit'])
</script>
