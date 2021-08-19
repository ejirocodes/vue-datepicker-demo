<template>
  <div id="app">
    <AppDatePicker />
  </div>
</template>

<script>
import AppDatePicker from "./components/AppDatePicker.vue";

export default {
  name: "App",
  components: {
    AppDatePicker,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
