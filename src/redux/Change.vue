<template>
  <div>
    <input type="number" v-model.number="value" />
    <button @click="change(value)">Change</button>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "Decrement",
  data(){
      return {value: 0}
  },
  methods: {
    ...mapActions(["change"])
  }
};
</script>