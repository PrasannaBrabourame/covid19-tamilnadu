<script>
import { Line } from "vue-chartjs";
import data from "../../google-sheet/process.json";

export default {
  extends: Line,
  data() {
    return {
      datacollection: {
        labels: data.dateList,
        datasets: [
          {
            label: "Total Cases",
            borderColor: "#249EBF",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            backgroundColor: "transparent",
            data: data.dateWise
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
