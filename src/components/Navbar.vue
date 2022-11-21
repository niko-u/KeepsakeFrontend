<template>
  <nav class="navbar navbar-expand-md navbar-custom fixed-top" id="navbar" >
    <div class="container-fluid">
      <img src="../assets/KeepsakeLogo.png" id="logo">
      <a class="navbar-brand" href="#" id="brand"><router-link to="/" class="nav-link">Keepsake</router-link></a>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/signup" class="nav-link">Sign up</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/feed" class="nav-link">Feed</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/families" class="nav-link">Families</router-link>
          </li>
          
        </ul>
        <form class="d-flex">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <router-link to="/account" class="nav-link">Account</router-link>
            </li>
          </ul>
        </form>
      </div>
    </div>
  </nav>
</template>

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