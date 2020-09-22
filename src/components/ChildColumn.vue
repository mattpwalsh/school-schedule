<template>
  <div class="child-column">
    <h1 class="md-display-4">{{child.name}}</h1>
    <SchoolsOut v-if="currentClass.type === 'schooloverfortheday'" />
    <SchoolNotStarted v-else-if="currentClass.type === 'schoolnotstarted'" :firstClass="child.schedule[0]" :time="time" />
    <Break v-else-if="currentClass.type === 'break'" />
    <div v-else-if="currentClass.type === undefined">
      <CurrentClass v-if="currentClass" :currentClass="currentClass" />
    </div>
    <div v-if="currentClassIndex !== 9999">
      <NextClass v-if="nextClass" :nextClass="nextClass" :time="time"/>
      <UpcomingClasses v-if="upcomingClasses.length" :schedule="upcomingClasses" />
    </div>
  </div>
</template>

<script>
import Break from './Break';
import CurrentClass from './CurrentClass';
import SchoolNotStarted from './SchoolNotStarted';
import NextClass from './NextClass';
import UpcomingClasses from './UpcomingClasses';
import SchoolsOut from './SchoolsOut';
import momentMixins from '../mixins/momentMixins';

export default {
  mixins: [momentMixins],
  name: 'ChildColumn',
  props: ['child', 'time'],
  components: {
      Break,
      CurrentClass,
      NextClass,
      UpcomingClasses,
      SchoolNotStarted,
      SchoolsOut
  },
  computed: {
    currentClassIndex() {
      if (this.moment(this.time) < this.momentify(this.child.schedule[0].start)) {
        return -9999
      }
      if (this.moment(this.time) > this.momentify(this.child.schedule[this.child.schedule.length - 1].end)) {
        return 9999;
      }
      return this.child.schedule.findIndex((scheduleClass) => {
        return this.moment(this.time) > this.momentify(scheduleClass.start) && this.time < this.momentify(scheduleClass.end)
      })
    },
    currentClass() {
      if  (this.currentClassIndex === 9999 ) {
        return {
          type: 'schooloverfortheday'
        }
      } 
      if (this.currentClassIndex === -9999) {
        return {
          type: 'schoolnotstarted'
        }
      }
      if (this.currentClassIndex === -1) {
        return {
          type: 'break',
        }
      }
      return this.child.schedule[this.currentClassIndex];
    },
    nextClass() {
      if  (this.currentClassIndex === 9999 ) {
        return {
          type: 'schooloverfortheday'
        }
      } 
      if (this.currentClassIndex === -9999) {
        return this.child.schedule[0];
      }
      if (this.currentClassIndex === -1) {
        return this.child.schedule.find((scheduleClass, index) => {
          return this.moment(this.time) > this.momentify(this.child.schedule?.[index - 1]?.end) && this.moment(this.time) < this.momentify(scheduleClass.start)
        })
      }
      return this.child.schedule[this.currentClassIndex + 1];
    },
    upcomingClasses() {
      return this.child.schedule.slice(this.currentClassIndex + 2);
    }

  }
}
</script>

<style>
.child-column {
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
}
h1.md-display-4 {
  margin: 30px 0;
}

</style>