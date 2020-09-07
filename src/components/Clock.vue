<template>
  <div id="clock">
      {{formattedTime}}
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Clock',
  props: ['timestamp'],
  computed: {
      formattedTime() {
          return moment(this.timestamp).format('h:mm:ss A')
      }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Orbitron&display=swap');

#clock {
  font-family: 'Orbitron';
  font-size: 100px;
  font-weight: bold;
  color: white;
  background-color: black;
  line-height: 100px;
  padding: 20px;
}
</style>
