<template>
  <main class="products">
    <Container>
      <section class="action">
        <Button @click="formToogle"> Add Product </Button>
      </section>
    </Container>
    <Container>
      <div class="grid-content">
        <CardProducts
          v-for="(product, id) in products"
          :key="id"
          :id="product.id"
          :title="product.title"
          :price="product.price"
          :category="product.category"
          :image="product.image"
          :rating="product.rating"
          @onDelete="deleteProduct(product.id)"
        />
      </div>
    </Container>

    <FormProduct :show="showForm" @close="showForm = false" />
  </main>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/productStore'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const productStore = useProductStore()
const { products } = storeToRefs(productStore)

const showForm = ref<boolean>(false)

const formToogle = (): void => {
  showForm.value = !showForm.value
}

const deleteProduct = (id: number) => {
  const confirmDelete = confirm('Apakah kamu yakin ingin menghapus produk ini?')
  if (confirmDelete) {
    productStore.removeProduct(id)
  }
}
</script>
