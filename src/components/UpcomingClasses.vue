<template>
  <div>
    <h2>Upcoming Classes ({{schedule.length}})</h2>
    <div class="class-wrapper" v-for="upcomingClass in schedule" :key="upcomingClass.start">
      <ClassCard :classObject="upcomingClass" theme="upcoming" />
    </div>
  </div>
</template>

<script>
import ClassCard from './ClassCard';

export default {
  props: ['schedule'],
  components: {
    ClassCard,
  }
}
</script>

<style>
.class-wrapper {
  margin-bottom: 5px;
}
</style>