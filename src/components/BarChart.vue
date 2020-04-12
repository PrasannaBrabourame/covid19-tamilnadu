<script>
import { Bar } from "vue-chartjs";
import data from "../../google-sheet/process.json";

export default {
  extends: Bar,
  data() {
    return {
      datacollection: {
        labels: data.district,
        datasets: [
          {
            label: "Above 20",
            backgroundColor: "#e91e27",
            pointBackgroundColor: "black",
            borderWidth: 0.2,
            pointBorderColor: "#249EBF",
            data: data.dorson.red
          },
          {
            label: "Above 10 Below 20",
            backgroundColor: "#ff9800",
            pointBackgroundColor: "black",
            borderWidth: 0.2,
            pointBorderColor: "#249EBF",
            data: data.dorson.orange
          },
          {
            label: "Below 10",
            backgroundColor: "#cddc39",
            pointBackgroundColor: "black",
            borderWidth: 0.2,
            pointBorderColor: "#249EBF",
            data: data.dorson.yellow
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  mounted() {
    this.renderChart(this.datacollection, this.options);
  }
};
</script>
