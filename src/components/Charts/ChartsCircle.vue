<script>
import VueApexCharts from 'vue-apexcharts';

export default {
  name: 'ChartsCircle',
  props: ['produtos'],
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      chartOptions: {
        fill: {
          colors: ['#1A73E8', '#B32824'],
        },
        plotOptions: {
          pie: {
            expandOnClick: false,
            donut: {
              size: '80%',
            },
          },
        },
        stroke: {
          show: false,
        },
        chart: {
          id: 'ChartsCircleDonut',
          type: 'donut',
          animations: {
            enabled: false,
            easing: 'easeinout',
            speed: 1000,
          },
        },
        legend: {
          position: 'bottom',
          horizontalAlign: 'center',
        },
        dataLabels: {
          enabled: false,
        },
        labels: ['Apple', 'Orange', 'Banana', 'Mango'],
      },
      chartSeries: [44, 55, 13, 33],
    };
  },
};
</script>

<template>
  <div>
    <p>Vendas por produto - Todo período</p>
    <div id="Chart">

      <apexchart type="donut" :options="chartOptions" :series="chartSeries" />
    </div>
    <div v-for="({ produto }, index) in produtos" :key="index">
      <span>{{ produto }}</span>
    </div>
  </div>
</template>

<style scoped>
#Chart {
  width: 900px;
}
</style>

