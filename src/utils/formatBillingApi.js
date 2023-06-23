function formatarAPI(api) {
  const formattedData = api.map(item => ({
    faturamentoMes: parseFloat(item.faturamentoMes).toFixed(2),
    data: item.data,
  }));

  formattedData.sort((a, b) => new Date(a.data) - new Date(b.data));

  return formattedData;
}

export default formatarAPI;
