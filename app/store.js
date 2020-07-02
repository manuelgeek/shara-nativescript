import Vue from 'nativescript-vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "",
    token: ""
  },
  getters: {
    isLoggedIn: state => !!state.token
  },
  mutations: {

  },
  actions: {

  }
});
