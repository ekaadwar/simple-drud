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
          @onEdit="editProduct(product)"
        />
      </div>
    </Container>

    <FormProduct :show="showForm" :form="newProduct" @close="showForm = false" @submit="submit" />
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
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

const productStore = useProductStore()
const { products } = storeToRefs(productStore)

const action = ref<string>('')
const showForm = ref<boolean>(false)
const newProduct = ref<Product>({
  id: 0,
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

const submit = (form: Product) => {
  if (action.value === 'addProduct') {
    const newId = products.value.length + 1
    newProduct.value.id = newId
    newProduct.value.image = '/images/products/additional_image.jpg'
    productStore.addProduct(newProduct.value)
  } else if (action.value === 'editProduct') {
    productStore.updateProduct(newProduct.value)
  }

  showForm.value = false
}

const editProduct = (form: Product) => {
  console.log({ form })
  action.value = 'editProduct'
  newProduct.value = { ...form }
  showForm.value = true
}

const formToogle = (): void => {
  action.value = 'addProduct'
  newProduct.value = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: { rate: 0, count: 0 },
  }
  showForm.value = !showForm.value
}

const deleteProduct = (id: number) => {
  const confirmDelete = confirm('Apakah kamu yakin ingin menghapus produk ini?')
  if (confirmDelete) {
    productStore.removeProduct(id)
  }
}
</script>
