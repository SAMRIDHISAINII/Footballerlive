import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router';
import './icons';
// import  routes  from './routes';

// for babel-polyfillnpm run dev

// noinspection ES6UnusedImports
import babelpolyfill from 'babel-polyfill';

// for bootstrap
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.min.css';

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  // router,
  render: h => h(App)
})
