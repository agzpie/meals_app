import "bootstrap/dist/css/bootstrap.min.css"
import App from './App.vue';
import { store } from './store/index.js';
import { createApp } from 'vue';

const app = createApp(App)

app.use(store)

app.mount("#app");

/*
Vue.config.productionTip = false;

Axios.defaults.baseURL = '';

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')*/