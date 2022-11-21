<script>

//blue #b7c6e2
//pink #fbd2d0
//yellow #fff7e0
//purple #a49eb1

import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar,
  }
}

</script>

<template>
  <Navbar />
  <router-view />
</template>

<style>

html,
body {
  height: 100vh;
  width: 100vw;
  margin: 0;
}


#app {
  height: inherit;
  width: inherit;
  overflow: scroll;
}
</style>
