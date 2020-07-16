<template>
  <div>
    <h1>Count: {{count}}</h1>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <input type="number" v-model.number="value" />
    <button @click="change(value)">Change</button>
  </div>
</template>
<script>
import { mapState, mapActions  } from 'vuex'

export default {
  name: "Redux",
  data(){
      return {
          value: 0
      }
  },
  computed: {
    // count() {
    //   return this.$store.state.count;
    // }
    ...mapState(['count'])
  },
  methods: {
      ...mapActions(['increment', 'decrement', 'change']),
    //   increment(){
    //       this.$store.dispatch('increment');
    //   },
    //   decrement(){
    //       this.$store.dispatch('decrement');
    //   },
    //   change(){
    //       this.$store.dispatch('change', this.value);
    //   }
    // callChange(){
    //     this.change(this.value);
    // }
  }
};
</script>