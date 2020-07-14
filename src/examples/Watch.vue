<template>
  <div>
    <h2>Watch</h2>
    <h3>{{foo}}</h3>
    <h3>{{bar}}</h3>
  </div>
</template>

<script>
export default {
  name: "Watch",
  data() {
    return {
        foo: 1,
        bar: 2,
    };
  },
  watch: {
    foo(newValue) {this.bar = newValue + 1}
  }
};
</script>