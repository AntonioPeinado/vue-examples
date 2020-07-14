<template>
  <div>
    <h2>Model</h2>
    <!-- :value="foo" @input="foo = $event.target.value" -->
    <input type="text" v-model="foo">
    <p>Foo: {{foo}}</p>
    <!-- :checked="bar" @change="bar = $event.target.checked" -->
    <input type="checkbox" v-model="bar">
    <p>Bar: {{bar}}</p>
  </div>
</template>

<script>
export default {
  name: "Model",
  data(){
      return {
          foo: '',
          bar: false
      }
  }
};
</script>