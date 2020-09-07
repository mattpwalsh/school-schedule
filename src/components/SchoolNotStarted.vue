<template>
  <div class="school-not-started md-display-2">School starts <br/> {{fromNow(firstClass.start,time)}}</div>
</template>

<script>
import momentMixins from '../mixins/momentMixins';

export default {
  props: ['firstClass', 'time'],
  mixins: [momentMixins],  
}
</script>

<style scoped>
.school-not-started {
  height: 159px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>