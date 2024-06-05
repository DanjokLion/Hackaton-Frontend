<template>
    <q-layout view="hHh lpR fFf">
      <q-header elevated>
        <Header />
      </q-header>
  
      <q-page-container>
        <router-view />
      </q-page-container>
  
      <q-footer class="bg-primary text-white">
        <Footer />
      </q-footer>
    </q-layout>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Header from '../components/Main/Header.vue';
  import Footer from '../components/Main/Footer.vue';
  
  export default defineComponent({
    components: {
      Header,
      Footer
    }
  });
  </script>
  
  <style>
  </style>