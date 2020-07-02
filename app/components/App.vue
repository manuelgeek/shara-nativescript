<template>
  <Navigator :defaultRoute="isLoggedIn ? '/home' : '/login'" />
</template>

<script >
  export default {
    computed: {
      isLoggedIn() {
        return this.$store.getters.isLoggedIn
      }
    }
  }
</script>

<style scoped>

</style>
