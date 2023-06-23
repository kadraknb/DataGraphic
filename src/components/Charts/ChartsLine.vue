

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
  name: 'ChartsLine',
  props: ['faturamento'],
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series: [{
        data: this.faturamento.map(arr => arr.faturamentoMes),
      }],
      chartOptions: {
        // ajuste tirar sombra
        markers: {
          size: 5,
          hover: {
            size: 9,
          },
        },
        chart: {
          height: 350,
          type: 'area',
          toolbar: { show: false },
          animations: { enabled: false },
          zoom: { enabled: false },
        },
        dataLabels: { enabled: false },
        stroke: {
          curve: 'smooth',
          // ajuste cor da linha
          colors: [],
        // width: 10,
        },
        title: {
          // ajuste https://apexcharts.com/docs/options/title/
          text: 'Total de vendas - Últimos 12 meses',
        },
        xaxis: {
          type: 'datetime',
          categories: this.faturamento.map(arr => arr.data),
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm',
          },
        },
      },
    };
  },
};
</script>
w
<template>
  <div>
    <apexchart type="area" height="350" :options="chartOptions" :series="series" />
  </div>
</template>

<style scoped></style>
