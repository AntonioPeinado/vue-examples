<template>
    <button @click="decrement">Decrement</button>
</template>
<script>
import { mapActions  } from 'vuex';

export default {
  name: "Decrement",
  methods: {
      ...mapActions(['decrement'])
  }
};
</script>