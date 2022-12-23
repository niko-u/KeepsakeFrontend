const basicRoutes = [
  {
    path: "/",
    name: "Home",
    component: () => import('../views/HomePage.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('../views/LoginPage.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import('../views/SignupPage.vue'),
    meta: {
      requiresAuth: false
    }
  },
{
    path: "/verify",
    name: "Verify",
    component: () => import('../views/VerifyPage.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/account",
    name: "Account",
    component: () => import('../views/AccountPage.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/feed",
    name: "Feed",
    component: () => import('../views/FeedPage.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/families",
    name: "Families",
    component: () => import('../views/FamilyPage.vue'),
    meta: {
      requiresAuth: true
    }
  },
    {
        path: "/contact",
        name: "Contact",
        component: () => import('../views/ContactPage.vue'),
        meta: {
          requiresAuth: false
        }
    },
]

export default basicRoutes;