<script>

export default {
  name: 'ChartsTable',
  props: ['produtos'],
  data() {
    return {
      head: ['Produto', 'Vendas', 'Porcentagem'],
    };
  },
};
</script>

<template>
  <div class="custom-container-table shadow-default rounded bg-white">
    <div class="custom-table">
      <table class="table">
        <thead>
          <tr>
            <th v-for="(head, index) in this.head" :key="index">{{ head }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(produto, index) in produtos" :key="index">
            <td>{{ produto.produto }}</td>
            <td>{{ produto.vendas }}</td>
            <td>{{ produto.PorcentagemCalculada }}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<style scoped>
.custom-container-table {
  color: #707070;
  width: 100%;
  height: 23.59rem;
}

.custom-table {
  padding-top: 3.4rem !important;
  padding-left: 1.7rem;
  margin-right: 1.7rem;
}

.table {
  font-size: x-small;
}

.table th {
  border-top: 1px solid #f3f3f3;
  border-bottom: 0;
  color: #444444;
  padding-left: 0;
  padding-top: 0.2rem;
  padding-bottom: 0.28rem;
  padding-right: 1rem;

}

.table th:first-child {
  width: 30.4rem;
}

.table th:nth-child(2) {
  width: 6.4rem;
}

.table td {
  border-top: 1px solid #f3f3f3;
  padding: 0.28rem 0;
}
</style>
