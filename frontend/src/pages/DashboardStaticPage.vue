<template>
  <q-page class="q-pa-md">
    <div class="q-mb-md">
      <h4>DashBoard</h4>
    </div>
    <div id="dashboard-chart" style="width: 100%; height: 400px;"></div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import * as echarts from 'echarts';
import axios from 'axios';

export default defineComponent({
  name: 'DashboardStaticPage',
  setup() {
    const chart = ref(null);
    const chartData = ref({});

    const fetchChartData = async () => {
      try {
        const response = await axios.get('/api/dashboard-data');
        chartData.value = response.data;
        renderChart();
      } catch (error) {
        console.error('Ошибка при получении данных для DashBoard:', error);
      }
    };

    const renderChart = () => {
      if (chart.value) {
        const chartInstance = echarts.init(chart.value);
        const option = {
          title: {
            text: 'DashBoard Chart'
          },
          tooltip: {},
          xAxis: {
            data: chartData.value.categories
          },
          yAxis: {},
          series: [
            {
              name: 'Количество',
              type: 'bar',
              data: chartData.value.values
            }
          ]
        };
        chartInstance.setOption(option);
      }
    };

    onMounted(() => {
      chart.value = document.getElementById('dashboard-chart');
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
