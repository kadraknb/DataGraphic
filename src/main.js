import Vue from 'vue';
import App from './App';
import jQuery from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'popper.js/dist/popper.js';

window.$ = jQuery;
window.jQuery = jQuery;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
