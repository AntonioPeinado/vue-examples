import VueRouter from 'vue-router'
import Vue from 'vue';
import Foo from './foo.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',

    routes: [
        {path: '/foo/:param', component: Foo},
        {path: '/bar', component: () => import('./bar')}
    ]
});


