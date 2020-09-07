<template>
  <md-card md-with-hover :class="classname">
    <md-card-header class="class-card-header"><span class="md-title">{{classObject.name}}</span></md-card-header>
    <md-card-content>
      <div class="class-row"><span class="label">Teacher:</span> <span>{{classObject.teacher}}</span></div>
      <div class="class-row"><span class="label">Start Time:</span> <span>{{momentify(classObject.start).format('h:mm A')}}</span></div>
      <div class="class-row"><span class="label">End Time:</span> <span>{{momentify(classObject.end).format('h:mm A')}}</span></div>
    </md-card-content>
  </md-card>
</template>

<script>
import momentMixins from '../mixins/momentMixins';

export default {
  props: ['classObject', 'theme'],
  mixins: [momentMixins],
  computed: {
    classname() {
      return `class-details md-${this.theme}`
    },
    elevation() {
      switch(this.theme) {
        case 'primary':
          return 'md-elevation-24';
        case 'accent':
          return 'md-elevation-16';
        default: 
          return '';
      }
    }
  }
}
</script>

<style>
.class-details {
  width: 300px;
}
.label {
  font-weight: bold;
}
.class-row {
  display: flex;
  justify-content: space-between;
}
.class-card-header {
  text-align: center;
}
</style>

