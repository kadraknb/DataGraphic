<template>
  <div class="shadow-default bg-white rounded custom-apexchart-area">
    <div class="area">
      <apexchart type="line" height="350" :options="chartOptions" :series="series" />
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

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
        chart: {
          height: 300,
          type: 'line',
          toolbar: { show: false },
          animations: { enabled: false },
          zoom: { enabled: false },
        },
        dataLabels: { enabled: false },
        stroke: {
          colors: '#4b4bf9',
          curve: 'smooth',
          width: 3,
        },
        markers: {
          strokeColors: '#0000000',
          colors: '#4b4bf9',
          size: 5,
          hover: {
            size: 5,
          },
        },
        title: {
          margin: 14,
          text: 'Total de vendas - Últimos 12 meses',
          offsetX: 14,
          offsetY: 16,
          style: {
            fontSize: '16px',
            fontWeight: 'normal',
            fontFamily: 'Nunito, sans-serif',
            color: '#444444',
          },
        },
        xaxis: {
          type: 'datetime',
          categories: this.faturamento.map(arr => arr.data),
          tickAmount: this.faturamento.length,
          labels: {
            formatter(value, timestamp) {
              const date = new Date(timestamp);
              const formattedDate = format(date, 'MMM/yyyy', { locale: ptBR });
              return formattedDate;
            },
            style: {
              colors: '#444444',
              fontSize: '10px',
              fontFamily: 'Nunito, sans-serif',
            },
          },
        },
        yaxis: {
          tickAmount: 10,
          labels: {
            minWidth: 0,
            maxWidth: 160,
            decimalsInFloat: 4,
            floating: true,
            style: {
              colors: '#707070',
              fontSize: '10px',
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 100,
            },
          },
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
