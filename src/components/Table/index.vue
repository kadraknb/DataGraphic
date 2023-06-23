<script>
// ajuste delet
export default {
  name: 'Table',
  components: {
  },
  props: ['produtos'],
  mounted() {
    console.log('🚀 ~ produtos:', this.produtos[0].produto);
  },
};
</script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Vendas</th>
          <th>Porcentagem</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="(produto, index) in produtos" :key="index">
            <td>{{ produto.produto }}</td>
          </tr>
        <tr>
          <td></td>
          <td>$50,00</td>
          <td>$300,000</td>
          <td>$70,000</td>
        </tr>
        <tr>
          <td>$200,00</td>
          <td>$50,00</td>
          <td>$300,000</td>
          <td>$70,000</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
