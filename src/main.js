import './js/amplify.js'

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


library.add(fas)

createApp(App).use(router).component("fa", FontAwesomeIcon).mount('#app')
