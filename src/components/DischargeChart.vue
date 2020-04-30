<script>
import { Bar } from "vue-chartjs";
import data from "../../google-sheet/process.json";

export default {
  extends: Bar,
  data() {
    return {
      datacollection: {
        labels: data.dischargeData.dischargeDistrict,
        datasets: [
          {
            label: "Discharged",
            backgroundColor: "#ff9800",
            pointBackgroundColor: "black",
            borderWidth: 0.2,
            pointBorderColor: "#249EBF",
            data: data.dischargeData.dischargeCount,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                autoSkip: true,
                maxTicksLimit: 15,
              },
              gridLines: {
                display: true,
              },
            },
          ],
          xAxes: [
            {
              stacked: true,
              gridLines: {
                display: false,
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
