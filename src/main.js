import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from "vue";
import App from "./App.vue";

import Axios from 'axios';
Axios.defaults.baseURL = '';

createApp(App).mount("#app");
