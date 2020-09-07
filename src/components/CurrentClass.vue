<template>
  <div class="current-class md-layout-item">
    <h2 class="md-title">Current Class</h2>
    <ClassCard :classObject="currentClass" theme="primary" />
  </div>
</template>

<script>
import ClassCard from './ClassCard';

export default {
  props: ['currentClass'],
  components: {
    ClassCard,
  }
}
</script>

<style scoped>
</style>