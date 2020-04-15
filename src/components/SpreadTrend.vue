<script>
import { Line } from "vue-chartjs";
import data from "../../google-sheet/process.json";
const colors = {
  green: {
    fill: "#e0eadf",
    stroke: "#5eb84d",
  },
  lightBlue: {
    stroke: "#6fccdd",
  },
  darkBlue: {
    fill: "#92bed2",
    stroke: "#3282bf",
  },
  purple: {
    fill: "#8fa8c8",
    stroke: "#75539e",
  },
};
export default {
  extends: Line,
  data() {
    return {
      datacollection: {
        labels: data.spreadTrend.date,
        datasets: [
          {
            label: "Positive Cases",
            fill: false,
            backgroundColor: "red",
            pointBackgroundColor: colors.purple.stroke,
            borderColor: "red",
            pointHighlightStroke: colors.purple.stroke,
            borderCapStyle: "butt",
            data: data.spreadTrend.positive,
          },
          {
            label: "Discharged Cases",
            fill: false,
            backgroundColor: "green",
            pointBackgroundColor: colors.darkBlue.stroke,
            borderColor: "green",
            pointHighlightStroke: colors.darkBlue.stroke,
            borderCapStyle: "butt",
            data: data.spreadTrend.cured,
          },
          {
            label: "Death Cases",
            fill: false,
            backgroundColor: "blue",
            pointBackgroundColor: colors.lightBlue.stroke,
            borderColor: "blue",
            pointHighlightStroke: colors.lightBlue.stroke,
            borderCapStyle: "butt",
            data: data.spreadTrend.death,
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
