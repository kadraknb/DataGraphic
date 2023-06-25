const chartOptions = {
  chart: {
    height: 300,
    type: "line",
    toolbar: { show: false },
    animations: { enabled: true },
    zoom: { enabled: false }
  },
  dataLabels: { enabled: false },
  stroke: {
    colors: "#4b4bf9",
    curve: "smooth",
    width: 3
  },
  markers: {
    strokeColors: "#0000000",
    colors: "#4b4bf9",
    size: 5,
    hover: {
      size: 5
    }
  },
  title: {
    margin: 14,
    text: "Total de vendas - Últimos 12 meses",
    offsetX: 14,
    offsetY: 16,
    style: {
      fontSize: "16px",
      fontWeight: "normal",
      fontFamily: "Nunito, sans-serif",
      color: "#444444"
    }
  },
  yaxis: {
    tickAmount: 10,
    labels: {
      minWidth: 0,
      maxWidth: 160,
      floating: true,
      style: {
        colors: "#707070",
        fontSize: "10px",
        fontFamily: "Nunito, sans-serif",
        fontWeight: 100
      }
    }
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm"
    }
  }
};

export default chartOptions
