<template>
  <div id="app">
    <Clock :timestamp="time" />
    <Schedules :children="children" :time="time" />
  </div>
</template>

<script>
import Clock from './components/Clock.vue'
import Schedules from './components/Schedules';
import scheduleConfig from './schedules.js';

export default {
  name: 'App',
  data: function () {
    return { 
      time: '',
      children: scheduleConfig
    };
  },
  components: {
    Clock,
    Schedules,
  },
  mounted(){
    this.time = new Date();
    // Update the count down every 1 second
    this.interval = setInterval(() => {
        this.time = new Date();
    }, 1000);
  },
  destroyed() {
    this.clearInterval(this.interval);
  }
}
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body {
  margin: 0;
}
</style>
