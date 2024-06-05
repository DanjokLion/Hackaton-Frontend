<template>
    <q-card>
        <q-card-section>
            <h2>Processed Dataset</h2>
            <q-table :rows="results" :columns="columns" row-key="id" />
        </q-card-section>
    </q-card>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';

export default defineComponent({
    name: 'ResultTable',
    props: {
        results: {
            type: Array as PropType<Array<Record<string, any>>>,
            required: true
        }
    },
    setup(props) {
        const columns = computed(() => {
            return props.results.length > 0 ? Object.keys(props.results[0]).map((key) => ({ name: key, label: key, field: key })) : [];
        });

        return {
            columns
        };
    }
            });


</script>

<style scoped>
.q-card{
    max-width: 800px;
    max-width: 2rem auto;
}
</style>