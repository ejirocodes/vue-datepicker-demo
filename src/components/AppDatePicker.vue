<template>
  <div class="datepicker">
    <h1>DatePicker in Vue.js</h1>
    <!-- <VueDatePicker v-model="date" /> -->
    <!-- <v-date-picker v-model="date">
      <template #default="{ inputValue, inputEvents }">
        <input
          class="px-3 py-1 border rounded"
          :value="inputValue"
          v-on="inputEvents"
        />
      </template>
    </v-date-picker> -->
    <!-- <form class="bg-white shadow-md rounded px-8 pt-6 pb-8" @submit.prevent>
      <label class="block text-gray-600 text-sm font-bold mb-2" for="date"
        >Select Date</label
      >
      <div class="flex w-full">
        <v-date-picker v-model="date" class="flex-grow" color="red" is-dark>
          <template v-slot="{ inputValue, inputEvents }">
            <input
              id="date"
              class="
                bg-white
                text-gray-700
                w-full
                py-2
                px-3
                appearance-none
                border
                rounded-l
                focus:outline-none
              "
              :class="{ 'border-red-600': errorMessage }"
              :value="inputValue"
              v-on="inputEvents"
            />
          </template>
        </v-date-picker>
        <button
          type="button"
          class="
            text-white
            font-bold
            py-2
            px-4
            rounded-r
            user-select-none
            focus:outline-none
          "
          :class="date ? 'bg-red-500' : 'bg-red-300'"
          :disabled="!date"
          @click="date = null"
        >
          Clear
        </button>
      </div>
      <p class="text-red-600 text-xs italic mt-1" v-if="errorMessage">
        {{ errorMessage }}
      </p>
      <p class="text-blue-500 text-xs font-bold mt-1" v-else>
        We got it. Thanks!
      </p>
    </form> -->
    <VueCtkDateTimePicker v-model="date" dark locale="ru" />

    {{ date }}
    <HotelDatePicker
      @check-in-changed="method1($event)"
      @check-out-changed="method2($event)"
    />

    <!-- <date-picker v-model="time1" valueType="format"></date-picker>
    {{ time1 }} -->

    <!-- <datepicker v-model="date" :inline="false" :language="es"></datepicker>
    {{ date }} -->
  </div>
</template>

<script>
// import Datepicker from "vuejs-datepicker";
// import { en, es } from "vuejs-datepicker/dist/locale";
// import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import HotelDatePicker from "vue-hotel-datepicker";
import "vue-hotel-datepicker/dist/vueHotelDatepicker.css";

export default {
  name: "AppDatePicker",
  components: {
    HotelDatePicker,

    // DatePicker,
    // Datepicker,
  },
  data() {
    return {
      time1: null,
      date: "",
      // en,
      // es,
    };
  },
  computed: {
    errorMessage() {
      if (!this.date) return "Date is required.";
      return "";
    },
  },
  methods: {
    method1(e) {
      console.log("method1", e);
    },

    method2(e) {
      console.log("method2", e);
    },
  },
};
</script>

<style scoped>
.datepicker {
  display: flex;
  align-items: center;
  flex-direction: column;
}
::v-deep .header-picker {
  background-color: #082032 !important;
}
::v-deep .time-picker-column-item.active .time-picker-column-item-effect,
::v-deep
  .datepicker-container
  .datepicker-days
  .datepicker-day.selected
  .datepicker-day-effect {
  background-color: #ff4c29 !important;
}
</style>
