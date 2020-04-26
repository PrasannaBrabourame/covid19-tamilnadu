<script>
import { Doughnut } from "vue-chartjs";
import data from "../../google-sheet/process.json";
export default {
  extends: Doughnut,
  data() {
    return {
      datacollection: {
        labels: ["Male", "Female"],
        datasets: [
          {
            backgroundColor: ["#e67300", "#00e6e6"],
            data: [data.distribution["male-t"], data.distribution["female-t"]],
          },
        ],
      },
      options: {
        legend: {
          display: true,
          position: 'right'
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
