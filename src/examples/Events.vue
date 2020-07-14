<template>
  <div>
    <h2>Events</h2>
    <button @click="onClick">Click</button>
  </div>
</template>

<script>
export default {
  name: "Events",
  // define los métodos del componente
  methods: {
    onClick(){
      // emite un evento del tipo my-event con los argumentos especificados.
      this.$emit('my-event', 123, 345);
    },
  }
};
</script>