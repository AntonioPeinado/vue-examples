import Vue from 'vue'
// import {store} from './redux/store';
// import App from './examples/App.vue'
// import Login from './login/Login.vue';
// import Redux from './redux/Redux.vue';
// import Counter from './redux/Counter';
// import {store} from './login-vuex/store';
// import Login from './login-vuex/Login';
import {router} from './router/router.js';
import Router from './router/Router.vue'


Vue.config.productionTip = false

// para iniciar una aplicación de Vue, creamos una nueva instancia
// y en el método render especificamos qué componente pintar.
// esa instacia la pintamos en un elemento del DOM con el método $mount
// que recibe un selector css para referenciar a ese elemento
const vm = new Vue({
  // store,
  router,
  render: h => h(Router),
})


vm.$mount('#app');
