<template>
  <div>
      <Display />
      <DisplayAbs />
      <Increment />
      <Decrement/>
      <Change />
  </div>
</template>
<script>
import Change from "./Change";
import Decrement from "./Decrement";
import Increment from "./Increment";
import Display from "./Display";
import DisplayAbs from "./DisplayAbs";

export default {
  name: "Counter",
  components: {
    Change,
    Decrement,
    Increment,
    Display,
    DisplayAbs
  }
};
</script>