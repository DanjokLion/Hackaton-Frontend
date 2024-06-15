<template>
    <q-page class="flex flex-center">
      <div class="text-center">
        <h1>404</h1>
        <p>Page Not Found</p>
        <q-btn color="primary" @click="$router.push('/')">Go Home</q-btn>
      </div>
    </q-page>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'ErrorNotFound'
  });
  </script>
  
  <style>
  </style>
  