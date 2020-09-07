import moment from 'moment';

export default {
  methods: {
    momentify(time) {
      return moment(`${moment().format('YYYY-MM-DD')} ${time}`)
    },
    fromNow(time) {
      return moment(`${moment().format('YYYY-MM-DD')} ${time}`).fromNow();
    }
  },
}