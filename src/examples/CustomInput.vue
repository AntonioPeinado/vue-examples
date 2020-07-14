<template>
  <div>
    <h2>CustomInput</h2>
    <input type="text" :value="value" @input="onInput">
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
      value: {
          type: String,
          default: ''
      }
  },
  methods: {
      onInput(ev){
          this.$emit('input', ev.target.value.toUpperCase())
      }
  }
};
</script>