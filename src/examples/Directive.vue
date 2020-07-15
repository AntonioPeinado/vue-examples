<template>
  <div>
    <h2>Directive</h2>
    <input type="text" v-autoFocus />
    <p v-color="color">hello</p>
    <p v-colorShorcut="'green'">world</p>
  </div>
</template>

<script>
/* eslint-disable no-debugger */
import {color, colorShorcut, autoFocus} from './directives';

export default {
  name: "Directive",
  data() {
    return {
      color: "red"
    };
  },
  directives: {
    autoFocus,
    color,
    colorShorcut
  }
};
</script>