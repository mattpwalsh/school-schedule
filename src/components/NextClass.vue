<template>
  <div class="next-class">
    <h2 class="md-title">Next Class: {{fromNow(nextClass.start, time)}}</h2>
    <ClassCard :classObject="nextClass" theme="accent" />
  </div>
</template>

<script>
import ClassCard from './ClassCard';
import momentMixins from '../mixins/momentMixins';

export default {
  props: ['nextClass', 'time'],
  components: {
    ClassCard,
  },
  mixins: [momentMixins]
}
</script>