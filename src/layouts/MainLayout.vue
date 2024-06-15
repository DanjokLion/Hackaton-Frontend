<template>
  <q-layout>
    <q-header class="header">
      <Header />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="footer">
      <Footer />
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '../components/Main/Header.vue';
import Footer from '../components/Main/Footer.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    Header,
    Footer
  }
});
</script>

<style scoped>
.header,
.footer {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
