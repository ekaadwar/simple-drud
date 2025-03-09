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

    <FormProduct
      :show="showForm"
      :form="newProduct"
      @close="showForm = false"
      @submit="addProduct"
    />
  </main>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/productStore'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

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

const productStore = useProductStore()
const { products } = storeToRefs(productStore)

const showForm = ref<boolean>(false)

const newProduct = ref<Product>({
  title: '',
  price: 0,
  description: '',
  category: '',
  image: '',
  rating: {
    rate: 0,
    count: 0,
  },
})

const addProduct = (form: Product) => {
  const newId = products.value.length + 1
  productStore.addProduct({
    id: newId,
    ...newProduct.value,
  })

  newProduct.value = {
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: { rate: 0, count: 0 },
  }

  showForm.value = false
  console.log({ form })
}

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
