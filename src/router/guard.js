import userStore from "../store/userStore";
import { Auth } from '@aws-amplify/auth';

// This function sets up a route guard that will be applied to every route
// that requires authentication. The route guard checks if the user is
// authenticated before allowing access to the route.
function setupGuard(router) {
  router.beforeEach(async (to, from, next) => {
    // Check if the route requires authentication
    if (to.meta.requiresAuth) {
      try {
        // Get the current user session using the Amplify Auth.currentSession() method
        const session = await Auth.currentSession();
        // Check if the session is still valid
        if (session.isValid) {
          // Allow access to the route
          next();
        } else {
          // Save the requested route to the user store
          userStore.state.requestedPage = to;
          // Redirect to the login page
          next('/login');
        }
      } catch (error) {
        // Save the requested route to the user store
        userStore.state.requestedPage = to;
        // Redirect to the login page
        next('/login');
      }
    } else {
      // Allow access to the route
      next();
    }
  });
}

export default setupGuard;
