<script>
import VueApexCharts from 'vue-apexcharts';
import chartOptions from './config/line'

export default {
  name: 'ChartsLine',
  props: ['faturamento'],
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series: [{
        name: '',
        data: this.faturamento.map(arr => arr.faturamentoMes),
      }],
      chartOptions: {
        ...chartOptions,
        xaxis: {
          categories: this.faturamento.map(arr => new Date(arr.data).toLocaleString("PT-BR", { month: "numeric", year: "numeric" })),
          tickAmount: this.faturamento.length,
          labels: {
            style: {
              colors: "#444444",
              fontSize: "10px",
              fontFamily: "Nunito, sans-serif"
            },
          },
        },
      },
    }
  }
};

</script>

<template>
  <div class="shadow-default bg-white rounded custom-apexchart-area">
    <div class="area">
      <apexchart type="line" height="350" :options="chartOptions" :series="series" />
    </div>
  </div>
</template>

<style scoped>
.custom-apexchart-area {
  height: 23.3rem;
}

.area {
  width: 97.4%;
  height: 20.3rem;
}

#P-ChartsLine {
  font-size: medium;
  color: #444444;
  padding-left: 1.5rem;
}
</style>