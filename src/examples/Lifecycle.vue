<template>
  <div>
    <h2>Lifecycle</h2>
    <p>{{foo}}</p>
  </div>
</template>

<script>
/* eslint-disable no-debugger */

export default {
  name: "Lifecycle",
  props: ["foo"],
  beforeCreate() {
    // ctor
    debugger;
  },
  created() {
    // se llama una vez y ya tenemos acceso a las propiedades de la instancia
    debugger;
  },
  beforeMount() {
    // antes de pintarse
    debugger;
  },
  mounted() {
    // una vez pintado, ya tenemos acceso a $el
    debugger;
  },
  beforeUpdate() {
    // antes de actualizarse
    debugger;
  },
  updated() {
    // una vez actualizado el dom
    debugger;
  },
  beforeDestroy() {
    // antes de eleminiar la instancia del componente
    debugger;
  },
  destroyed() {
    // una vez eliminada la instancia del componente
    debugger;
  }
};
</script>