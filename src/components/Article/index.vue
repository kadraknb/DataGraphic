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
    this.getProdutos();
    this.getFaturamento();
  },
  methods: {
    async getProdutos() {
      const produtos = await Api.getTop10Produtos();
      this.produtos = FormatarAPI.productPercentage(produtos);
    },
    async getFaturamento() {
      const faturamento = await Api.getFaturamentoAnual();
      this.faturamento = FormatarAPI.billingOrderedDate(faturamento);
    },
  },
};
</script>


<template>
  <div class="article-contêiner">
    <div class="">
      <h1 id="h-article">Histórico</h1>
      <hr id="hr-article"/>
      <!-- ajuste if -->
      <div v-if="faturamento.length > 0" id="box-Charts" class="row">
        <div class="container-ChartsCircle">
          <ChartsCircle :produtos="produtos" />
        </div>
        <div class="container-ChartsTable">
          <ChartsTable :produtos="produtos" />
        </div>
        <div class="container-ChartsLine">
          <ChartsLine :faturamento="faturamento" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#h-article {
  font-size: x-large;
  margin-top: 1.9rem;
}
#hr-article {
  margin-top: 0.9rem;
  margin-bottom: 1.3rem;
}
.container-ChartsTable {
  margin-left: 0.3rem;
  width: 48.8%;
}
.article-contêiner {
  margin-left: 2.6rem;
}
.container-ChartsLine{
  width: 99.1%;
  margin-top: 1.29rem;
  padding: 0;
}
.container-ChartsCircle{
  width: 50%;
}
@media (max-width: 950px) {
  .container-ChartsCircle {
    width: 102%;
    margin-left: 6px;
  }
  .container-ChartsTable{
    width: 100%;
    margin-top: 1.29rem;
  }
  #box-Charts {
    flex-direction: column;
  }
}
</style>
