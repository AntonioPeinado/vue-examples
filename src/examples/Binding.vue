<template>
  <div>
    <h2>Binding</h2>
    <!-- attribute binding (v-bind === :) -->
    <button :disabled="true" :foo="1">Disabled</button>
    <!-- event binding (v-on === @) -->
    <button @click="onClick">Click</button>
  </div>
</template>

<script>
export default {
  name: "Binding",
  // define los métodos del componente
  methods: {
    onClick(ev){
      console.log(ev);
    },
  }
};
</script>