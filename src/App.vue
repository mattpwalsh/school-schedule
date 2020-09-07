<template>
  <div id="app">
    <Clock :timestamp="time" />
    <Schedules :children="children" :time="time" />
  </div>
</template>

<script>
import Clock from './components/Clock.vue'
import Schedules from './components/Schedules';

export default {
  name: 'App',
  data: function () {
    return { 
      time: '',
      children: [
        {
          name: 'Aiden',
          schedule: [
            {
              start: '8:25',
              end: '9:15',
              name: 'Algebra',
              teacher: 'Mr. Juliano',
            },
            {
              start: '9:20',
              end: '9:55',
              name: 'Gym',
              teacher: 'Mr. Wilson',
            },
            {
              start: '10:00',
              end: '10:35',
              name: 'Algebra',
              teacher: 'Mr. Juliano',
            },
            {
              start: '10:40',
              end: '11:15',
              name: 'English',
              teacher: 'Mrs. Rennenberg',
            },
            {
              start: '11:30',
              end: '12:05',
              name: 'English',
              teacher: 'Mrs. Rennenberg',
            },
            {
              start: '12:20',
              end: '12:55',
              name: 'Lunch',
              teacher: '',
            },
            {
              start: '13:00',
              end: '13:35',
              name: 'Social Studies',
              teacher: 'Mr. Hart',
            },
            {
              start: '13:40',
              end: '14:15',
              name: 'Social Studies',
              teacher: 'Mr. Hart',
            },
            {
              start: '14:20',
              end: '14:55',
              name: 'Band',
              teacher: 'Mr. Wilmot',
            },
          ],
        },
        {
          name: 'Connor',
          schedule: [
            {
              start: '9:00',
              end: '9:20',
              name: 'Morning Meeting',
              teacher: 'Mrs. Zelenak',
            },
            {
              start: '9:20',
              end: '10:40',
              name: 'Reading',
              teacher: 'Mrs. Zelenak',
            },
            {
              start: '10:50',
              end: '11:30',
              name: 'Special',
              teacher: '',
            },
            {
              start: '11:30',
              end: '12:00',
              name: 'WIN',
              teacher: '',
            },
            {
              start: '12:00',
              end: '12:50',
              name: 'Lunch',
              teacher: '',
            },
            {
              start: '12:50',
              end: '13:30',
              name: 'Writing',
              teacher: 'Mrs. Zelenak',
            },
            {
              start: '13:30',
              end: '14:10',
              name: 'Writing',
              teacher: 'Mrs. Slaboda',
            },
            {
              start: '14:10',
              end: '15:30',
              name: 'Math',
              teacher: 'Mrs. Slaboda',
            },
          ],
        },
        {
          name: 'Nora',
          schedule: [
            {
              start: '9:00',
              end: '10:15',
              name: 'Morning Meeting',
              teacher: 'Ms. DeLibero',
            },
            {
              start: '10:20',
              end: '10:40',
              name: 'Special',
              teacher: 'Ms. DeLibero',
            },
            {
              start: '10:40',
              end: '12:00',
              name: 'Break/Activity',
              teacher: 'Ms. DeLibero',
            },
            {
              start: '12:00',
              end: '13:15',
              name: 'Meet Activity',
              teacher: 'Ms. DeLibero',
            },
          ],
        }
      ]
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
