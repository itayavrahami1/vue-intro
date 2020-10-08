<template>
  <section class="show-time" :class="getCls" @click="toggleDark">
    <h1>It's the time of the season</h1>
    <div
      v-if="season"
      data-type="image"
      class="season-img"
      :class="season"
    ></div>
    <div className="clock">{{ time }}</div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isDark: false,
      season: undefined,
      time: undefined,
      clockInterval: undefined,
    };
  },
  created() {
    this.clockInterval = setInterval(() => {
      this.setClock();
    }, 1000);
  },
  destroyed() {
    clearInterval(this.clockInterval);
  },
  computed: {
    getCls() {
      return this.isDark ? "dark" : "";
    },
  },
  methods: {
    toggleDark() {
      this.isDark = !this.isDark;
    },
    setClock() {
      const time = new Date();
      this.getSeason(time);
      const timeToDisp = new Intl.DateTimeFormat("en", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }).format(time);

      this.time = timeToDisp;
    },
    getSeason(time) {
      const currMonth = time.getMonth() + 1; // monthes are from 0-11
      var currSeason;
      if (currMonth === 12 || (currMonth > 0 && currMonth < 3))
        currSeason = "winter";
      else if (currMonth >= 3 && currMonth < 6) currSeason = "spring";
      else if (currMonth >= 6 && currMonth < 9) currSeason = "summer";
      else if (currMonth >= 9 && currMonth < 12) currSeason = "fall";
      this.season = currSeason;
    },
  },
};
</script>
