<script>
import { Doughnut } from "vue-chartjs";
import data from "../../google-sheet/process.json";
// "distribution": {
//         "date": "25-Apr-2020",
//         "male-t": "1240",
//         "female-t": "581",
//         "m": "55",
//         "f": "49",
//         "m_2": "1032",
//         "f_2": "471",
//         "m_3": "153",
//         "f_3": "61"
//     }
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
