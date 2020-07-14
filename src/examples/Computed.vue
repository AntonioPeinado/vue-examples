<template>
  <div>
    <h2>Computed</h2>
    <h3>{{fullname}}</h3>
  </div>
</template>

<script>
export default {
  name: "Computed",
  data() {
    return {
        name: 'Foo',
        surname: 'Bar',
    };
  },
  // computed permite definir propiedades que se calculan y recalculan a partir de otros
  // datos (data o props) del componente
  computed: {
    fullname() {return this.name + ' ' + this.surname;}
  }
};
</script>