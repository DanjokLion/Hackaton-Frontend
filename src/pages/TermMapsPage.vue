<template>
  <q-page class="q-pa-md">
    <div class="q-mb-md">
      <h4>Term Map</h4>
    </div>
    <div id="term-map" style="width: 100%; height: 400px;"></div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import * as echarts from 'echarts';
import axios from 'axios';

export default defineComponent({
  name: 'TermMapsPage',
  setup() {
    const chart = ref(null);
    const chartData = ref({});

    const fetchChartData = async () => {
      try {
        const response = await axios.get('/api/term-map-data');
        chartData.value = response.data;
        renderChart();
      } catch (error) {
        console.error('Ошибка при получении данных для Term Map:', error);
      }
    };

    const renderChart = () => {
      if (chart.value) {
        const chartInstance = echarts.init(chart.value);
        const option = {
          title: {
            text: 'Term Map'
          },
          tooltip: {},
          series: [
            {
              type: 'graph',
              layout: 'force',
              data: chartData.value.nodes,
              links: chartData.value.links,
              roam: true,
              label: {
                show: true
              },
              force: {
                repulsion: 100
              }
            }
          ]
        };
        chartInstance.setOption(option);
      }
    };

    onMounted(() => {
      chart.value = document.getElementById('term-map');
      fetchChartData();
    });

    return {};
  }
});
</script>

<style scoped>
.q-page {
  max-width: 800px;
  margin: 0 auto;
}
</style>
