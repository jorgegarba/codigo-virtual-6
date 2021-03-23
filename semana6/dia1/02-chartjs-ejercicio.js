import { dataCovid } from "./covid-data.js";

let fechas = [];
let deaths = [];
let confirmed = [];

dataCovid.forEach((objCovid) => {
  deaths.push(objCovid.Deaths);
  confirmed.push(objCovid.Confirmed);
  let fechaString = objCovid.Date;
  let fecha = new Date(fechaString);
  let fechaLabel = fecha.getDate() + "-" + (+fecha.getMonth() + 1) + "-" + fecha.getFullYear();
  fechas.push(fechaLabel);
})

let ctx = document.getElementById("miGrafico");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: fechas,
    datasets: [
      {
        label: 'Fallecidos',
        data: deaths,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        yAxisID: "F"
      },
      {
        label: 'Casos confirmados',
        data: confirmed,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        yAxisID: "C"
      }
    ]
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            callback: function (value, index, values) {
              return value / 1e6 + "M"
            },
            fontColor: "rgba(54, 162, 235, 1)",
            // max: 3_000_000
          },
          id: "C",
          position: "left"
        },
        {
          ticks: {
            beginAtZero: true,
            fontColor: "rgba(255, 99, 132, 1)"
          },
          id: "F",
          position: "right"
        }
      ]
    }
  }
});

