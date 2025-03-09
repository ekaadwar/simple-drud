<template>
  <main class="users">
    <Container>
      <div class="grid-content">
        <CardUsers
          v-for="(user, id) in users"
          :key="id"
          :address="user.address"
          :id="user.id"
          :email="user.email"
          :username="user.username"
          :name="user.name"
          :phone="user.phone"
        />
      </div>
    </Container>
  </main>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { users } = storeToRefs(userStore)
</script>
