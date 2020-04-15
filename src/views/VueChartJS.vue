<template>
  <section class="container">
    <div class="columns">
      <div class="column">
        <h3>DISTRICTWISE POSITIVE DETAILS</h3>
        <bar-chart></bar-chart>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <h3>DATEWISE POSITIVE CASES</h3>
        <daily-case></daily-case>
        
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <h3>SPREAD TRENDS TAMILNADU</h3>
        <spread-trend></spread-trend>
      </div>
    </div>
  </section>
</template>

<script>
import DailyCase from "@/components/DailyCase";
import BarChart from "@/components/BarChart";
import SpreadTrend from "@/components/SpreadTrend"

export default {
  name: "VueChartJS",
  components: {
    DailyCase,
    BarChart,
    SpreadTrend
  }
};
</script>
