import './js/amplify.js'
import userStore from './store/userStore'
import authStore from './store/authStore'

import router, { setupRouter } from './router';

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//import router from './router'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


library.add(fas)


async function bootstrap() {
    const app = createApp(App).component("fa", FontAwesomeIcon);

    setupRouter(app)
    app.use(userStore)
    app.use(authStore)

    await router.isReady();
    app.mount('#app')
}

bootstrap()