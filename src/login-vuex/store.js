import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const loginModule = {
    namespaced: true,
    state: {
        email: '',
        password: '',
        formError: null
    },
    getters: {
        emailValid(state){
            return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(state.email);
        },
        passwordValid(state){
            return state.password.length >= 6;
        },
        formValid(state, getters){
            return getters.emailValid && getters.passwordValid;
        }
    },
    mutations: {
        setEmail(state, value) {
            state.email = value;
        },
        setPassword(state, value) {
            state.password = value;
        },
        
        setFormError(state, value){
            state.formError = value;
        }
    },
    actions: {
        setEmail(context, value) {
            context.commit('setEmail', value);
        },
        setPassword(context, value) {
            context.commit('setPassword', value);
        },
        async createUser({commit, dispatch}, {http, model}){
            try {
                const response = await dispatch('post', {
                    http,
                    model,
                    url: 'http://localhost:3000/users'
                }, {root: true});
                commit('addUser', response.data, {root: true});
            } catch (err) {
                commit('setFormError', err);
            }
        },
    }
};

export const store = new Vuex.Store({
    modules: {
        login: loginModule
    },
    state: {
        users: [],
    },
    actions: {
        post(context, {http, url, model}){
            return http.post(url, model);
        }
    },
    mutations: {
        addUser(state, value){
            state.users.push(value);
        },
    }
});
