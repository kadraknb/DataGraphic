function calculatePercentage(data) {
  const totalPercentage = data.reduce((total, product) => total + product.Percentage, 0);

  if (totalPercentage !== 0) {
    return data.map(product => ({
      ...product,
      CalculatedPercentage: (product.Percentage / totalPercentage) * 100,
    }));
  }
  return data.map(product => ({
    ...product,
    CalculatedPercentage: 0,
  }));
}

export default calculatePercentage;
