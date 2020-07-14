<template>
  <div>
    <h2>Template</h2>
    <!-- Con {{}} podemos interpolar variables como texto-->
    <h3>{{foo}}</h3>
  </div>
</template>

<script>
export default {
  name: 'Template',
  // definir un metodo o funcion data() que devuelva los datos internos del componente
  // para cada propiedad definida en el objeto, vue va a crear setters y getters en el componente
  // de modo que se actualice la plantilla cada vez que cambien.
  data() {
    return {
      foo: 1
    };
  }
};
</script>