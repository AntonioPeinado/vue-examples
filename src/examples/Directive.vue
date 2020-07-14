<template>
  <div>
    <h2>Directive</h2>
    <input type="text" v-autoFocus>
  </div>
</template>

<script>
/* eslint-disable no-debugger */
const autoFocus = {
    inserted(el){
        el.focus()
    },
}

// const color = {
//     bind(el, binding){
//         debugger;
//     },
// }

export default {
  name: "Directive",
  directives: {autoFocus}
};
</script>