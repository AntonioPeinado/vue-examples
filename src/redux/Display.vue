<template>
    <h1>Count: {{count}}</h1>
</template>
<script>
import { mapState  } from 'vuex';

export default {
  name: "Display",
  computed: {
    ...mapState(['count'])
  }
};
</script>