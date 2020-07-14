<template>
  <div>
    <h2>List</h2>
    <ul>
        <!-- Con la directiva v-for repetimos un elemento html tantas veces
            como elementos tenga la lista. Cada elemento debe tener una propiedad
            key única "item in items" / "(item, i) in items"
         -->
        <li v-for="(number,i) in numbers" :key="i">
            {{number}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      numbers: [1,2,3]
    };
  }
};
</script>