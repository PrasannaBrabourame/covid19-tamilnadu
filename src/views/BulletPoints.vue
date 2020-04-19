<template>
  <div>
    <div class="row w-row">
      <div class="basic-column w-col w-col-3">
        <div class="tag-wrapper">
          <div class="number-card number-card-content4">
            <h1 class="number-card-number">{{ totalScreened }}</h1>
            <div class="number-card-divider"></div>
            <div class="number-card-progress-wrapper">
              <div class="tagline number-card-currency">
                Screened Passengers
              </div>
              <div class="number-card-progress"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="basic-column w-col w-col-3">
        <div class="tag-wrapper">
          <div class="number-card number-card-content1">
            <h1 class="number-card-number">{{totalPositive}}</h1>
            <div class="number-card-divider"></div>
            <div class="number-card-progress-wrapper">
              <div class="tagline number-card-currency">
                TOTAL POSITIVE CASES
              </div>
              <div class="number-card-progress">{{totalPositiveToday}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="basic-column w-col w-col-3">
        <div class="tag-wrapper">
          <div class="number-card number-card-content2">
            <h1 class="number-card-number">{{totalCured}}</h1>
            <div class="number-card-divider"></div>
            <div class="number-card-progress-wrapper">
              <div class="tagline number-card-currency">CURED/DISCHARGED</div>
              <div class="number-card-progress">{{totalCuredToday}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="basic-column w-col w-col-3">
        <div class="tag-wrapper">
          <div class="number-card number-card-content3">
            <h1 class="number-card-number">{{totalDeath}}</h1>
            <div class="number-card-divider"></div>
            <div class="number-card-progress-wrapper">
              <div class="tagline number-card-currency">DEATH</div>
              <div class="number-card-progress">{{totalDeathToday}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="basic-column w-col w-col-3">
        <div class="tag-wrapper">
          <div class="number-card number-card-content4">
            <h1 class="number-card-number">{{totalTest}}</h1>
            <div class="number-card-divider"></div>
            <div class="number-card-progress-wrapper">
              <div class="tagline number-card-currency">TOTAL TESTED</div>
              <div class="number-card-progress">{{totalTestToday}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../../google-sheet/process.json";
export default {
  name:"BulletPoints",
  data() {
    return {
      totalScreened: data.totalScreened,
      totalPositive : data.totalPositive,
      totalCured: data.totalCured,
      totalDeath: data.totalDeath,
      totalTest : data.totalTest,
      totalPositiveToday: data.totalPositiveToday,
      totalCuredToday : data.totalCuredToday,
      totalDeathToday : data.totalDeathToday,
      totalTestToday : data.totalTestToday
    };
  },
};
</script>
