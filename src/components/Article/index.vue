<script>
import Api from '../../services/api';
import FormatarAPI from '../../utils/formatarAPI';

import ChartsCircle from '../Charts/ChartsCircle';
import ChartsTable from '../Charts/ChartsTable';
import ChartsLine from '../Charts/ChartsLine';

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
      const produtos = await Api.getTop10Produtos();
      this.produtos = FormatarAPI.productPercentage(produtos);

      const faturamento = await Api.getFaturamentoAnual();
      this.faturamento = FormatarAPI.billingOrderedDate(faturamento);
    },
  },
};
</script>


<template>
  <div>
    Histórico
    <hr />
    <!-- ajuste if -->
    <div v-if="faturamento.length > 0">
      <ChartsCircle v-bind="{ produtos }" />
      <ChartsTable v-bind="{ produtos }" />
      <ChartsLine v-bind="{ faturamento }" />
    </div>
  </div>
</template>

<!-- <style scoped></style> -->
