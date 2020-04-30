<template>
  <div>
    <!-- <span>Start</span>
    <test-store></test-store>
    <span>End</span> -->
    <bullet-points></bullet-points>
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
      <div class="columns">
        <div class="column">
          <h3>DISTRICTWISE DISCHARGE DETAILS</h3>
          <discharge-chart></discharge-chart>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <h3>SEX DISTRIBUTION</h3>
          <distribution-chart></distribution-chart>
        </div>
        <div class="column">
          <h3>AGE DISTRIBUTION</h3>
          <age-chart></age-chart>
        </div>
      </div>
    </section>
    <footer>
      <a
        href="https://github.com/PrasannaBrabourame/covid19-tamilnadu"
        class="button github"
        target="_blank"
        rel="noopener noreferrer"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
          ></path></svg
        ><span>Open Sourced on GitHub</span></a
      >
      <a
        class="button excel"
        href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSagkzDV_lF9I2thTHNwWo5S8G7BJ0nPFBx_VkCRViMjvK0dAkDu1YB_rzHsa1UH7GTp8W5BPqyXwpj/pubhtml#"
        target="_blank"
        rel="noopener noreferrer"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg
        ><span>Crowdsourced Patient Database&nbsp;</span></a
      >
      <p class="footer-heart">
        Made with
        <g-emoji
          class="g-emoji"
          alias="heart"
          fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"
        >
          <img
            class="emoji"
            alt="heart"
            height="20"
            width="20"
            src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"
        /></g-emoji>
        by
        <a href="https://github.com/PrasannaBrabourame">Prasanna Brabourame</a>
      </p>
    </footer>
  </div>
</template>

<script>
import DailyCase from "@/components/DailyCase";
import BarChart from "@/components/BarChart";
import SpreadTrend from "@/components/SpreadTrend";
import DistributionChart from "@/components/DistributionChart";
import AgeChart from "@/components/AgeChart";
import DischargeChart from "@/components/DischargeChart";
import TestStore from "@/components/TestStore";

import BulletPoints from "./BulletPoints";

export default {
  name: "VueChartJS",
  components: {
    BulletPoints,
    DailyCase,
    BarChart,
    SpreadTrend,
    DistributionChart,
    AgeChart,
    DischargeChart,
    TestStore,
  },
};
</script>

<style>
footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 5rem;
  margin-top: 5rem;
}
.button {
  background: rgba(0, 123, 255, 0.0627451);
  border: 0;
  border-radius: 5px;
  color: rgba(0, 123, 255, 0.6);
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-family: "archia";
  font-size: 0.75rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  margin-top: 0.25rem;
  outline: none;
  padding: 0.5rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: background 0.2s ease-in-out;
}
.github {
  background: #000 !important;
  color: #fff !important;
  justify-content: center;
  padding-left: 0.65rem;
  transition: all 0.2s ease-in-out;
  width: 15.5rem;
}
.excel {
  background: rgba(51, 166, 103, 0.19);
  color: #33a667;
}

footer > * {
  align-self: center;
  text-align: center;
}
</style>
