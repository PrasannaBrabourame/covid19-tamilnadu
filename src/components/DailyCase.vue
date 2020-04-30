<script>
import { Bar } from "vue-chartjs";
import data from "../../google-sheet/process.json";
export default {
  extends: Bar,
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
            backgroundColor: '#f87979',
            data: data.dateWise,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: true,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                autoSkip: true,
                maxTicksLimit: 15,
              },
            },
          ],
        },
        legend: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    this.renderChart(this.datacollection, this.options);
  },
};
</script>
