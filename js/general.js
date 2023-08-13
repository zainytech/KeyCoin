const colors = {
  purple: {
    default: "#47C6CC",
    half: "rgba(71,198,204,0.5)",
    quarter: "rgba(71,198,204,0.5)",
    zero: "rgba(255,235,212,0.5)",
  },
  indigo: {
    default: "#3C3C3C",
  },
};

const weight = [60.0, 60.2, 59.1, 61.4, 59.9, 61.9, 62.1];

const labels = [
  "5:30AM",
  "8:30AM",
  "11:30AM",
  "2:30AM",
  "5:30AM",
  "9:30AM",
  "12:30AM",
];

const ctx = document.getElementById("canvas").getContext("2d");
ctx.canvas.height = 100;

gradient = ctx.createLinearGradient(0, 25, 0, 300);
gradient.addColorStop(0, colors.purple.half);
gradient.addColorStop(0.35, colors.purple.quarter);
gradient.addColorStop(1, colors.purple.zero);

const options = {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        fill: true,
        backgroundColor: gradient,
        pointBackgroundColor: colors.purple.default,
        borderColor: colors.purple.default,
        data: weight,
        lineTension: 0.2,
        borderWidth: 2,
        pointRadius: 3,
      },
    ],
  },
  options: {
    responsive: true,
    legend: {
      display: false,
    },

    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            autoSkip: false,
            // maxRotation: 15,
            // minRotation: 15,
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
          },
          gridLines: {
            display: false,
            color: colors.indigo.quarter,
          },
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  },
};

window.onload = function () {
  window.myLine = new Chart(ctx, options);
  Chart.defaults.global.defaultFontColor = colors.indigo.default;
  Chart.defaults.global.defaultFontFamily = "Kanit";
};
