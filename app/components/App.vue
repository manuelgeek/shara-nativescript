<template>
  <Navigator :defaultRoute="isLoggedIn ? '/home' : '/login'" />
</template>

<script >
  export default {
    computed: {
      isLoggedIn() {
        return this.$store.getters.isLoggedIn
      }
    },
    created() {
      axios.interceptors.response.use(null, (error) => {
        if (error.response) {
          if (error.response.status === 401) {
            this.$navigator.navigate('/login', { clearHistory: true })
          }
          if (error.response.status === 500 || error.response.status === 502) {
            // error page
          }
          if (error.response.status === 404) {
            // 404 page
          }
          // console.log(error.response)
        } else if (error.request) {
          // console.log(error.request);
          // ? No Internet
        } else {
          // ! no internet
        }
        // console.log(error);
        return Promise.reject(error);
      });
    }
  }
</script>

<style scoped>

</style>
