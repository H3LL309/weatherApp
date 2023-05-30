<template>
  <div class="main">
    <MainContent />
    <MainWeek />
  </div>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
import MainWeek from "@/components/MainWeek.vue";
export default {
  components: {
    MainContent,
    MainWeek,
  },
};
</script>

<style>
</style>