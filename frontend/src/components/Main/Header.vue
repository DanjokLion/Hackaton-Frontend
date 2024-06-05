<template>
    <q-toolbar>
      <q-toolbar-title>
        Pro_Party
      </q-toolbar-title>
    </q-toolbar>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Header'
  });
  </script>
  
  <style scoped>
  q-toolbar {
      background-color: #4caf50;
      color: white;
  }
  </style>