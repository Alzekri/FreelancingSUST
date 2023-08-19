<template>
  <router-view />
</template>
<script>
export default {
  created() {
    this.$store.dispatch("auth/tryLogin");
  },
};
</script>
<style>
</style>
