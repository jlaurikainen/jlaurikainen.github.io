import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import VueCarousel from 'vue-carousel'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  let language = to.params.lang;

  if(!language) {
    language = 'fi';
  }

  i18n.locale = language;
  next();
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueCarousel);