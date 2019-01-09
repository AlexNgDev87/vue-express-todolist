import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  methods: {},
  created: function() {
    console.log('root instance was created')
  },
})
.$mount('#app');
