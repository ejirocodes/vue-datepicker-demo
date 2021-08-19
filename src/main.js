import Vue from 'vue';
import App from './App.vue';
import VueDatePicker from '@mathieustan/vue-datepicker';
import '@mathieustan/vue-datepicker/dist/vue-datepicker.min.css';
import VCalendar from 'v-calendar';
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

// Use v-calendar & v-date-picker components
Vue.use(VCalendar);
Vue.use(VueDatePicker);
Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
