const chartOptions = {
  fill: {
    colors: [
      "#50478a",
      "#514ba3",
      "#5454bd",
      "#5050da",
      "#6666fa",
      "#ce2626",
      "#e53535",
      "#ff5757",
      "#f66126",
      "#ff8826"
    ]
  },
  title: {
    margin: 14,
    text: "Vendas por produto - Todo período",
    offsetX: 14,
    offsetY: 16,
    style: {
      fontSize: "16px",
      fontWeight: "normal",
      fontFamily: "Nunito, sans-serif",
      color: "#444444"
    }
  },
  plotOptions: {
    pie: {
      offsetX: 0,
      offsetY: 13,
      customScale: 1,
      expandOnClick: false,
      donut: {
        size: "74%"
      }
    }
  },
  stroke: {
    show: false
  },
  chart: {
    id: "ChartsCircleDonut",
    type: "donut",
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 1000
    }
  },
  legend: {
    position: "bottom",
    horizontalAlign: "center",
    fontFamily: "Nunito, sans-serif",
    fontSize: "10px",
    offsetX: 0,
    offsetY: -13,
    labels: {
      colors: "#707070"
    },
    markers: {
      fillColors: [
        "#50478a",
        "#514ba3",
        "#5454bd",
        "#5050da",
        "#6666fa",
        "#ce2626",
        "#e53535",
        "#ff5757",
        "#f66126",
        "#ff8826"
      ],
      width: 15,
      height: 15
    }
  },
  dataLabels: {
    enabled: false
  },
  
};


export default chartOptions