<template>
  <div>
    <h1>Create Event {{ user.name }}</h1>
    <p>There are {{ catLength }} categories</p>
    <p>Data Obj:{{dataObj}}</p>
    <ul>
      <li v-for="cat in categories" :key="cat">
        {{ cat }}
      </li>
    </ul>
    <p>
      {{ getEventById(3) }}
    </p>
    <p>
      
    </p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["user", "categories","dataObj"]),
    ...mapGetters(["getEventById", "catLength","testSheet"]),
  },
};
</script>
