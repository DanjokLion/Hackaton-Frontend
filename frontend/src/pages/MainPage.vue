<template>
    <div>
      <UploadForm @results-updated="updateResults" />
      <ResultsTable :results="results" v-if="results.length" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import UploadForm from './UploadForm.vue';
  import ResultsTable from './ResultsTable.vue';
  
  export default defineComponent({
    components: {
      UploadForm,
      ResultsTable
    },
    setup() {
      const results = ref([]);
  
      const updateResults = (newResults: Array<Record<string, any>>) => {
        results.value = newResults;
      };
  
      return {
        results,
        updateResults
      };
    }
  });
  </script>
  
  <style>
  /* Добавьте стили по вашему усмотрению */
  </style>
  