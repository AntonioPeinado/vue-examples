import Vuex, {createLogger} from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    plugins: [createLogger()],
    state: {
        count: 0
    },
    getters: {
        countAbs(state){
            return Math.abs(state.count);
        }
    },
    mutations: {
        increment(state){
            state.count++;
        },
        decrement(state){
            state.count--;
        },
        change(state, value){
            state.count += value;
        }
    },
    actions: {
        increment(context){
            context.commit('increment');
        },
        decrement(context){
            context.commit('decrement');
        },
        change(context, value){
            context.commit('change', value);
        }
    }
})

export { store };