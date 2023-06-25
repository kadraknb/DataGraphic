<script>
import VueApexCharts from 'vue-apexcharts';
import chartOptions from './config/circle'

export default {
  name: 'ChartsCircle',
  props: ['produtos'],
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      chartOptions: { ...chartOptions, labels: this.produtos.map(arr => arr.produto) },
      chartSeries: this.produtos.map(arr => arr.PorcentagemCalculada),
    };
  },
};
</script>

<template>
  <div class="shadow-default bg-white rounded custom-ChartsCircle">
    <div id="chart-donut">

      <apexchart type="donut" height="376" :options="chartOptions" :series="chartSeries" />
    </div>
  </div>
</template>

<style scoped>
#P-donut {
  font-size: medium;
  color: #444444;
  padding-top: 1.3rem;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
}

.custom-ChartsCircle {
  color: #707070;
  width: 97.6%;
  height: 23.3rem;
}
</style>

