<template>
  <nav class="navbar navbar-expand-md navbar-custom fixed-top" id="navbar" >
    <div class="container-fluid">
      <img src="../assets/KeepsakeLogo.png" id="logo">
      <a class="navbar-brand" href="#" id="brand"><router-link to="/" class="nav-link">Keepsake</router-link></a>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul v-if="authenticated" class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link to="/feed" class="nav-link">Feed</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/families" class="nav-link">Families</router-link>
          </li>
          <form class="d-flex">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <router-link to="/account" class="nav-link">Account</router-link>
            </li>
            <li class="nav-item">
              <router-link @click="signout" to="/" class="nav-link">Sign Out</router-link>
            </li>
          </ul>
        </form>
        </ul>
        <ul v-else class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/signup" class="nav-link">Sign up</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import authStore from "../store/authStore";
import userUtils from "../utils/userUtils";

  export default {
    computed: {
      authenticated() {
        return authStore.state.isLoggedIn;
      }
    },
    methods: {
      async signout() {
        userUtils.signOut()
        this.$router.push('/')
        this.$router.go()
      }
    }
  }
</script>

<style>

.navbar {
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.3);
}

.nav-item {
  color: aliceblue;
}

#logo {
  width: 3%;
  margin-left: 0.5%;
  margin-right: 0.5%;
}

.navbar-custom {
  background-color: #a49eb1;
  color:aliceblue
}

.nav-item {
  color: black;
  font-size: 20px;
}

.navbar-brand {
  font-size: 50px;
}

#brand {
  font-size: 30px;
}

</style>