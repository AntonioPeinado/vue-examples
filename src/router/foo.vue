<template>
  <div>
    <h2>Foo {{param}}</h2>
  </div>
</template>
<script>
export default {
  name: "Foo",
  computed: {
    param() {
      return this.$route.params.param;
    }
  }
  //    beforeRouteEnter (to, from, next) {
  // axios.get('http://localhost:3000/users').then((response) => {
  //     next( vm => {
  //         vm.users = response.users;
  //     })
  // })
  //   },
};
</script>