import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

// para iniciar una aplicación de Vue, creamos una nueva instancia
// y en el método render especificamos qué componente pintar.
// esa instacia la pintamos en un elemento del DOM con el método $mount
// que recibe un selector css para referenciar a ese elemento
const vm = new Vue({
  render: h => h(App),
})

vm.$mount('#app');
