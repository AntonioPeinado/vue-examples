<template>
  <div>
    <h2>Props</h2>
    <h3>{{hello}} {{foo}}</h3>
  </div>
</template>

<script>
export default {
  name: "Props",
  // array con el nombre de las propiedades que acepta este componente
  // props: ['hello']
  // Objeto de configuración con las propiedades que acepta el componente,
  // para cada propiedad se puede especificar type, validator, y required o default
  props: {
    hello: {
      type: String,
      required: true
    },
    foo: {
      type: Number,
      default: 12
    }
  }
};
</script>