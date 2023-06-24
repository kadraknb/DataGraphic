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
          // ajuste add as cores
          colors: ['#1A73E8', '#B32824'],
        },
        title: {
          margin: 14,
          text: 'Vendas por produto - Todo período',
          offsetX: 14,
          offsetY: 16,
          style: {
            fontSize: '16px',
            fontWeight: 'normal',
            fontFamily: 'Nunito, sans-serif',
            color: '#444444',
          },
        },
        plotOptions: {
          pie: {
            offsetX: 0,
            offsetY: 13,
            // offsetY: -170,
            // customScale: 0.405,
            customScale: 1,
            expandOnClick: false,
            donut: {
              size: '74%',
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
            // ajute
            enabled: false,
            easing: 'easeinout',
            speed: 1000,
          },
        },
        legend: {
          position: 'bottom',
          horizontalAlign: 'center',
          fontFamily: 'Nunito, sans-serif',
          fontSize: '10px',
          offsetX: 0,
          offsetY: -13,
          // offsetY: -177,
          labels: {
            colors: '#707070',
          },
          // ajuste cor da bolinha markers https://apexcharts.com/docs/options/legend/
          markers: {
            width: 15,
            height: 15,
          },
        },
        dataLabels: {
          enabled: false,
        },
        labels: this.produtos.map(arr => arr.produto),
      },
      chartSeries: this.produtos.map(arr => arr.PorcentagemCalculada),
    };
  },
};
</script>

<template>
  <div class="shadow-default bg-white rounded custom-ChartsCircle">
    <!-- <p id="P-donut" class="text-small">Vendas por produto - Todo período</p> -->
    <div id="chart-donut">

      <apexchart type="donut" height="376" :options="chartOptions" :series="chartSeries" />
    </div>
  </div>
</template>

<style scoped>
#P-donut{
  font-size: medium;
  color: #444444;
  /* margin-top: ; */
  padding-top: 1.3rem;
  padding-left: 1.5rem;
  /* margin: 0px,0px,0px,0px; */
  margin-bottom: 0.5rem;
}
#chart-donut {
 /* outline: 1px solid rgb(55, 0, 255); */
 
 /* height: 466px; */

}

.custom-ChartsCircle {
  color: #707070;
  width: 97.6%;
  height: 23.3rem;
  /* margin-bottom: 20px; */
  /* margin-left: 1.7rem; */

  /* width: 600px; */

}
</style>

