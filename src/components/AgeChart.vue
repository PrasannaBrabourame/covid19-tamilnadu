<script>
import { Bar } from "vue-chartjs";
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
  extends: Bar,
  data() {
    return {
      datacollection: {
        labels: ["Below 10", "10 to 60", "60+"],
        datasets: [
          {
            label: "Male",
            backgroundColor: "#e67300",
            stack: "Stack 0",
            data: [
              data.distribution["m"],
              data.distribution["m_2"],
              data.distribution["m_3"],
            ],
          },
          {
            label: "Female",
            backgroundColor:  "#00e6e6",
            stack: "Stack 1",
            data: [
              data.distribution["f"],
              data.distribution["f_2"],
              data.distribution["f_3"],
            ],
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              stacked: true,
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
              stacked: true,
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: true,
          position: "right",
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
