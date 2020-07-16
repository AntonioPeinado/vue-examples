<template>
    <button @click="increment">Increment</button>
</template>
<script>
import { mapActions  } from 'vuex';

export default {
  name: "Increment",
  methods: {
      ...mapActions(['increment'])
  }
};
</script>