import { createWebHistory, createRouter } from "vue-router";
import authStore from "../store/authStore.js";
import basicRoutes from "./basicRoutes.js";
import dynamicRoutes from "./dynamicRoutes.js";
import setupGuard from "./guard.js";
import autoloadDynamicRoutes from "./loadDynamicRoutes.js";
//import jwt from 'jsonwebtoken'

const router = createRouter({
  history: createWebHistory(),
  routes: [...basicRoutes],
});

export async function setupRouter(app) {

  autoloadDynamicRoutes(router)

  setupGuard(router);
  
  app.use(router);
}


export default router;








