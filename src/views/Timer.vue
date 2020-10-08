<template>
  <section v-if="Object.keys(timer).length">
    <h1>My Timer</h1>
    <div class="timer">
      <span id="minutes">{{ timer.minLeft }}</span
      >:
      <span id="seconds" :class="timerCls">{{ timer.secLeft }}</span>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      targetTime: Date.now() + 1000 * 80,
      timer: {},
      timerInterval: undefined,
      timerCls: undefined,
    };
  },
  created() {
    this.timerInterval = setInterval(() => {
      this.setTimer();
    }, 1000);
  },
  destroyed() {
    clearInterval(this.timerInterval);
  },
  methods: {
    setTimer() {
      let timerClass;
      const timeLeftInSec = Math.round((this.targetTime - Date.now()) / 1000);
      var minutesLeft = Math.floor(timeLeftInSec / 60);
      var secLeft = timeLeftInSec % 60;

      const minLeft = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;

      if (secLeft < 10) {
        secLeft = "0" + secLeft;
        if (!minutesLeft) timerClass = "end-of-time";
      }

      if (minLeft === "00" && secLeft === "00") {
        clearInterval(this.timerInterval);
        timerClass = "";
        this.playSound();
      }

      this.timer = { minLeft, secLeft };
      this.timerCls = timerClass;
    },
    playSound(){
        const soundToPlay = new Audio(require("@/assets/sounds/done.mp3"));
        soundToPlay.play();
    }
  },
};
</script>