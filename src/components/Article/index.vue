<script>
import Api from '../../services/api';
import ChartsCircle from '../Charts/ChartsCircle';
import ChartsTable from '../Charts/ChartsTable';
import ChartsLine from '../Charts/ChartsLine';
import calculatePercentage from '../../utils/calculatePercentage';

export default {
  name: 'Charts',
  components: {
    ChartsCircle,
    ChartsTable,
    ChartsLine,
  },
  data() {
    return {
      produtos: [],
      faturamento: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      // ajuste sort protudos
      const produtos = await Api.getTop10Produtos();
      this.produtos = calculatePercentage(produtos);

      const faturamento = await Api.getFaturamentoAnual();
      this.faturamento = faturamento;
    },
  },
};
</script>


<template>
  <div>
    Histórico
    <hr />
    <!-- ajuste if -->
    <div v-if="produtos.length > 0">
      <ChartsCircle v-bind="{ produtos }" />
      <ChartsTable v-bind="{ produtos }" />
      <ChartsLine v-bind="{ faturamento }" />
    </div>
  </div>
</template>

<!-- <style scoped></style> -->
