<template>
  <div>
    <h2>Filters</h2>
    <p>{{ 'texto en minusculas??' | toUpperCase }}</p>
    <p>{{ 'hola' | reverse }}</p>
    <p>{{ 'mundo' | substr(2) }} </p>
  </div>
</template>

<script>

function toUpperCase(value = ''){
    return value.toUpperCase();
}

function reverse(value = ''){
  return value.split('').reverse().join('');
}

function substr(value = '', length = 0){
  return value.substring(length);
}

export default {
  name: "Filters",
  filters: {
      toUpperCase,
      reverse,
      substr
  }
};
</script>