<template>
  <h1>CountAbs: {{countAbs}}</h1>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Display",
  computed: {
    //   countAbs(){
    //       return this.$store.getters.countAbs
    //   },
    ...mapGetters(["countAbs"])
  }
};
</script>