<template>
  <div class="main__week">
    <Day v-for="(day, i) in weather.daily" :key="i" :day="day" />
  </div>
</template>

<script>
import Day from "@/components/Day.vue";
import { mapState } from "vuex";
export default {
  components: {
    Day,
  },
  computed: {
    ...mapState(["weather"]),
  },
};
</script>

<style>
</style>