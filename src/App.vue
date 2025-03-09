<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <Navbar>
    <template #header>
      <RouterLink to="/">Eka Fajhari Adwar</RouterLink>
    </template>
    <template #list>
      <RouterLink to="/">Products</RouterLink>
      <RouterLink to="/users">Members</RouterLink>
    </template>
  </Navbar>

  <RouterView />
</template>
