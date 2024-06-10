<template>
    <q-page>
        <div class="q-pa-md">
            <q-table :rows="results" :columns="columns" />
        </div>
    </q-page>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "DashboardPage",
  props: {
    results: {
        type: Array as PropType<Array<Record<string, any>>>,
        required: true
    }
  },
  data() {
    return {
      columns: Object.keys(this.results[0] || {}).map(key => ({
        name: key,
        requirede: true,
        label: key,
        field: key,
        alignn: "left",
        format: val => `${val}`,
        sortable: true
      })) 
    }
  }
});

</script>

<style scoped>

</style>