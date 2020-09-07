<template>
  <div class="schedules md-layout">
    <div v-for="child in children" :key="child.name" class="md-layout-item">
      <ChildColumn :child="child" :time="time" />
    </div>
  </div>
</template>

<script>
import ChildColumn from './ChildColumn.vue';

export default {
  name: 'Schedules',
  props: ['children', 'time'],
  components: { ChildColumn },
}
</script>

<style>
.schedules {
  width: 100%;
}
</style>