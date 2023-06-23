export default class FormatarAPI {
  static billingOrderedDate(api) {
    const formattedData = api.map(item => ({
      faturamentoMes: parseFloat(item.faturamentoMes).toFixed(2),
      data: item.data,
    }));

    formattedData.sort((a, b) => new Date(a.data) - new Date(b.data));

    return formattedData;
  }

  static productPercentage(api) {
    const parsedData = api.map(item => ({
      ...item,
      vendas: parseInt(item.vendas, 10),
      porcentagem: parseInt(item.porcentagem, 10),
    }));

    const somaPorcentagens = parsedData.reduce(
      (total, product) => total + product.porcentagem,
      0,
    );

    if (somaPorcentagens !== 0) {
      return parsedData.map((product) => {
        const porcentagemCalculada = parseFloat(
          (product.porcentagem / somaPorcentagens) * 100,
        ).toFixed(2);
        return {
          ...product,
          PorcentagemCalculada: Number(porcentagemCalculada),
        };
      }).sort((a, b) => b.PorcentagemCalculada - a.PorcentagemCalculada);
    }
    return parsedData.map(product => ({
      ...product,
      PorcentagemCalculada: 0,
    }));
  }
}
