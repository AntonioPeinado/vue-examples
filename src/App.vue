<template>
  <div>
    <h1>Hello</h1>
    <Template />
    <Binding />
    <Conditional />
    <List />
    <Props :hello="'hola'" />
    <Events @my-event="onMyEvent" />
    <Computed />
    <Watch />
    <Slots>
      <!--
        v-slot permite especificar en que slot se ha de pintar el contenido
        de la template
       -->
      <template v-slot:header>
        <p>Header</p>
      </template>
      <!-- v-slot puede abreviarse con # -->
      <template #footer>
        <p>Footer</p>
      </template>
      <!-- Si no utilziamos la directiva v-slot se pintará en el slot por defecto(sin nombre) -->
      <p>Main</p>
    </Slots>
    <Model />
    <!-- :input="value" @input="value = $event" -->
    <CustomInput v-model="value"/>
    <p>{{value}}</p>
    <!-- <Lifecycle :foo="12"/> -->
    <Directive />
  </div>
</template>

<script>
import Template from "./examples/Template.vue";
import Binding from "./examples/Binding.vue";
import Conditional from "./examples/Conditional.vue";
import List from "./examples/List.vue";
import Props from "./examples/Props.vue";
import Events from "./examples/Events.vue";
import Computed from "./examples/Computed.vue";
import Watch from "./examples/Watch.vue";
import Slots from "./examples/Slots.vue";
import Model from './examples/Model.vue';
import CustomInput from './examples/CustomInput.vue';
// import Lifecycle from './examples/Lifecycle.vue';
import Directive from './examples/Directive.vue';

export default {
  // nombre del componente
  name: "App",
  // componentes que utiliza este
  components: {
    Template,
    Binding,
    Conditional,
    List,
    Props,
    Events,
    Computed,
    Watch,
    Slots,
    Model,
    CustomInput,
    // Lifecycle,
    Directive	
  },
  methods: {
    onMyEvent(a, b) {
      console.log(a, b);
    }
  },
  data(){
    return {
      value: ''
    }
  }
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
