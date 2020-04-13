<template>
  <section class="container">
    <div class="columns">
      <div class="column">
        <h3>DistrictWise Details</h3>
        <bar-chart></bar-chart>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <h3>Datewise COVID19 Positive Cases</h3>
        <line-chart></line-chart>
      </div>
    </div>
    <!-- <div class="columns">
      <div class="column">
        <h3>Bubble Chart</h3>
        <bubble-chart></bubble-chart>
      </div>
      <div class="column">
        <h3>Reactivity - Live update upon change in datasets</h3>
        <reactive :chart-data="datacollection"></reactive>
        <button class="button is-primary" @click="fillData()">Randomize</button>
      </div>
    </div> -->
  </section>
</template>

<script>
import LineChart from "@/components/LineChart";
import BarChart from "@/components/BarChart";

export default {
  name: "VueChartJS",
  components: {
    LineChart,
    BarChart
  }
};
</script>
