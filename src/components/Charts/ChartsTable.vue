<script>

export default {
  name: 'ChartsTable',
  components: {
  },
  props: ['produtos'],
  data() {
    return {
      head: ['Produto', 'Vendas', 'Porcentagem'],
    };
  },
};
</script>

<template>
    <table>
      <thead>
        <tr>
          <th v-for="(head, index) in this.head" :key="index">{{ head }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(produto, index) in produtos" :key="index">
          <td>{{ produto.produto }}</td>
          <td>{{ produto.vendas }}</td>
          <td>{{ produto.porcentagem }}</td>
        </tr>
      </tbody>
    </table>
</template>


<style scoped></style>
