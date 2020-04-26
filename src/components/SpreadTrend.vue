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
            borderColor: "#f599a1",
            pointHighlightStroke: colors.purple.stroke,
            borderCapStyle: "butt",
            data: data.spreadTrend.positive,
          },
          {
            label: "Active Cases",
            fill: false,
            backgroundColor: "purple",
            pointBackgroundColor: colors.darkBlue.stroke,
            borderColor: "#8fa8c8",
            pointHighlightStroke: colors.darkBlue.stroke,
            borderCapStyle: "butt",
            data: data.spreadTrend.active,
          },
          {
            label: "Discharged Cases",
            fill: false,
            backgroundColor: "green",
            pointBackgroundColor: colors.darkBlue.stroke,
            borderColor: "#5eb84d",
            pointHighlightStroke: colors.darkBlue.stroke,
            borderCapStyle: "butt",
            data: data.spreadTrend.cured,
          },
          {
            label: "Death Cases",
            fill: false,
            backgroundColor: "blue",
            pointBackgroundColor: colors.lightBlue.stroke,
            borderColor: "#92bed2",
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
                display: false,
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
