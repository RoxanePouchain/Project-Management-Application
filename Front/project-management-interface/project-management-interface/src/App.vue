<script setup>
import { RouterLink, RouterView } from 'vue-router';
import PageHeader from './components/PageHeader.vue';
</script>

<template>
  <header>
    <PageHeader />
  </header>

  <main>
    <RouterView />
  </main>

  <footer class="footer">
    <div class="footer-text">
      <span>ECF - 1</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 4vh;
  color: var(--background-black-soft);
  background-color: var(--vt-c-white-soft);
  align-items: center;
  justify-content: center;
}
</style>