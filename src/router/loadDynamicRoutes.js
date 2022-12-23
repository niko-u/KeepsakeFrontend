import dynamicRoutes from "./dynamicRoutes";
import basicRoutes from "./basicRoutes";
import userStore from "../store/userStore";

function autoloadDynamicRoutes(router) {

    let routes = dynamicRoutes;

    routes.forEach((route) => {
        if (route.meta.requiresAuth == true) {
            router.addRoute('AuthorizedLayout', route);
        } else {
            router.addRoute('UnauthorizedLayout', route);
        }
    })
}

export default autoloadDynamicRoutes;