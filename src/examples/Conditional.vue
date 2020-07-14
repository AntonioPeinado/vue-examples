<template>
  <div>
    <h2>Conditional</h2>
    <!-- con la directiva v-if decidimos si un elemento debe pintarse o no -->
    <h3 v-if="show">Muestra</h3>
    <h3 v-else>No muestra</h3>
  </div>
</template>

<script>
export default {
  name: "Conditional",
  data() {
    return {
      show: true
    };
  }
};
</script>