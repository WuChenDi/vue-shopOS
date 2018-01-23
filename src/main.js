// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
// import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(VueLazyLoad,{
  loading: "/static/loading-svg/loading-bars.svg"
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  /*mounted() {
    this.checkLogin();
    this.getCartCount();
  },
  methods: {
    checkLogin() {
      axios.get("users/checkLogin").then(res => {
        var res = res.data;
        if (res.status == "0") {
          this.$store.commit("updateUserInfo", res.result);
        } else {
          if (this.$route.path != "/goods") {
            this.$router.push("/goods");
          }
        }
      });
    },
    getCartCount() {
      axios.get("users/getCartCount").then(res => {
        var res = res.data;
        if (res.status == "0") {
          this.$store.commit("updateCartCount", res.result);
        }
      });
    }
  },*/
  components: {App},
  template: '<App/>'
})

/*
new Vue({
  router,
  render:function (h) {
    return h(App);
  }
}).$mount("#app");
*/
