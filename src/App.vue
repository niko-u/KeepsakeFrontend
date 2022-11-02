<script>

//import Navbar from './components/Navbar.vue'
import Home from './views/HomePage.vue';
import Login from './views/LoginPage.vue';
import Signup from './views/SignupPage.vue';
import Feed from './views/FeedPage.vue';

export default {
  components: {
    //Navbar
    Login,
    Signup,
    Home,
    Feed
  }
}

</script>

<template>
  <Feed />
  <!-- <Home /> -->
  <!-- <Login /> -->
  <!-- <Signup /> -->
</template>

<style scoped>

</style>
