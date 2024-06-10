<template>
    <q-toolbar elevated class="bg-primary text-white">
      <q-toolbar-title>Parser Patents from db</q-toolbar-title>
      <q-btn flat label="Main" @click="navigateTo('/')" />
      <q-btn flat label="Dashboard" @click="navigateTo('/dashboard')" />
      <q-btn flat label="All stats" @click="navigateTo('/statistics')" />
      <q-btn flat label="PlayerAnalytics" @click="navigateTo('/player-analysis')" />
      <q-btn flat label="MapTerms" @click="navigateTo('term-maps')" />
    </q-toolbar>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    name: 'Header',
    setup() {
      const router = useRouter();

      const navigateTo = (path: string) => {
        router.push(path);
      };

      return {
        navigateTo
      }
    }
  });

  </script>
  
  <style scoped>
  q-toolbar {
      background-color: #1976D2;
      /* #4caf50; */
      color: white;
  }
  </style>