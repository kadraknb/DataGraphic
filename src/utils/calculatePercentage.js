function calculatePercentage(dados) {
  const parsedDados = dados.map(item => ({
    ...item,
    vendas: parseInt(item.vendas, 10),
    porcentagem: parseInt(item.porcentagem, 10),
  }));

  const somaPorcentagens = parsedDados.reduce(
    (total, produto) => total + produto.porcentagem,
    0,
  );

  if (somaPorcentagens !== 0) {
    return parsedDados.map((produto) => {
      const porcentagemCalculada = parseFloat(
        (produto.porcentagem / somaPorcentagens) * 100,
      ).toFixed(2);
      return {
        ...produto,
        PorcentagemCalculada: Number(porcentagemCalculada),
      };
    }).sort((a, b) => b.PorcentagemCalculada - a.PorcentagemCalculada);
  }
  return parsedDados.map(produto => ({
    ...produto,
    PorcentagemCalculada: 0,
  }));
}

export default calculatePercentage;
