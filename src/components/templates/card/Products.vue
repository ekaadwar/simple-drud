<template>
  <Card>
    <header>
      <img :src="props.image || '/src/assets/images/products/additional_image.jpg'" />
    </header>

    <main>
      <section class="head">
        <h3>{{ props.title ?? 'No Title' }}</h3>
        <p>#{{ props.category ?? 'No Category' }}</p>
      </section>

      <p><font-awesome-icon :icon="['fas', 'sack-dollar']" /> {{ props.price ?? 'No Price' }}</p>

      <section class="ratings">
        <p><font-awesome-icon :icon="['fas', 'star']" /> {{ props.rating?.rate ?? 'No Rating' }}</p>
        <p>
          <font-awesome-icon :icon="['fas', 'boxes-stacked']" />
          {{ props.rating?.count ?? 'Empty Stock' }}
          unit
        </p>
      </section>
    </main>

    <footer>
      <Button :variant="'primary-navy'" @click="emit('onDelete')">
        <font-awesome-icon :icon="['fas', 'trash']" />
      </Button>
      <Button :variant="'primary-yellow'">
        <font-awesome-icon :icon="['fas', 'pen']" />
      </Button>
    </footer>
  </Card>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'

const props = defineProps<{
  id: number
  title?: string
  price?: number
  category?: string
  image?: string
  rating?: {
    rate?: number
    count?: number
  }
}>()

const emit = defineEmits(['onDelete'])
</script>
