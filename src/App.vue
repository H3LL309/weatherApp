<template>
  <div class="container" v-if="weather">
    <Navbar />
    <Main />
  </div>
  <div class="loading" v-else>
    <img src="@/assets/img/logo.svg" alt="">
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Main from "@/components/Main.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "WeatherApp",
  components: { Navbar, Main },
  methods: {
    ...mapActions(["getWeather"]),
  },
  computed: {
    ...mapState(["weather"]),
  },
  created() {
    this.getWeather("Ташкент");
  },
};
</script>

<style>
</style>