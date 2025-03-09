<template>
  <Card>
    <header>
      <img :src="`@/src/assets/images/users/${props.username}.jpg`" />
    </header>

    <main>
      <section class="head">
        <h3>{{ props.name ?? 'No Title' }}</h3>
        <p>@{{ props.username ?? 'No Category' }}</p>
      </section>

      <p>
        <span style="color: var(btn-primary-yellow)"
          ><font-awesome-icon :icon="['fas', 'phone']"
        /></span>
        {{ props.phone ?? 'No Price' }}
      </p>
      <p><font-awesome-icon :icon="['fas', 'envelope']" /> {{ props.email ?? 'No Price' }}</p>
      <p><font-awesome-icon :icon="['fas', 'location-dot']" /> {{ props.address ?? 'No Price' }}</p>
    </main>
  </Card>
</template>

<script setup lang="ts">
const props = defineProps<{
  address: string
  id: number
  email: string
  username: string
  name: string
  phone: string
}>()
</script>
