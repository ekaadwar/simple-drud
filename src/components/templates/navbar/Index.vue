<template>
  <header>
    <nav class="navbar">
      <Container>
        <header>
          <slot name="header" />
        </header>
        <main>
          <slot name="list" />
        </main>
      </Container>
    </nav>
  </header>
</template>
