<template>
  <div class="root">
    <h1 id="title"><router-link to="/" class="nav-link">Keepsake</router-link></h1>
    <main class="form-signin">
        <form id="signupform">
          <div class="formpadding">
            <img class="mb-4" src="../assets/KeepsakeLogo.png" alt="" width="200" height="200">
            <h1 class="h3 mb-3 fw-normal">Sign up</h1>

            <div class="form-floating">
            <input v-model="firstName" type="name" class="form-control" id="floatingInput" placeholder="John">
            <label for="floatingInput">First name</label>
            </div>
            <div class="form-floating">
            <input v-model="lastName" type="name" class="form-control" id="floatingInput" placeholder="Smith">
            <label for="floatingInput">Last name</label>
            </div>

            <div class="form-floating">
            <input v-model="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
            <input v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
            </div>

            <div class="checkbox mb-3">
            <label class="rememberme">
                <input type="checkbox" value="remember-me"> Remember me
            </label>
            </div>
            <button class="w-100 btn btn-lg" id="submit" type="button" @click="signup()">Sign up</button>
            <p id="copyright2" class="mt-5 mb-3 text-muted"> Keepsake &copy; 2022</p>
          </div>
          
        </form>
    </main>
  </div>
</template>

<script>
import { Auth } from '@aws-amplify/auth';

export default {
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async signup() {
      try {
          const { user } = await Auth.signUp({
              username: this.email,
              password: this.password,
              attributes: {
                name: this.firstName + " " + this.lastName
              },
              autoSignIn: {
                  enabled: true,
              }
          });
          console.log(user);
      } catch (error) {
          console.log('error signing up:', error);
      }
  }
  }
}



</script>

<style scoped>

      .form-floating {
        padding-top: 5px;
        padding-bottom: 5px;
      }

      .rememberme {
        padding-top: 10px;
      }



      #submit {
        background-color: #fbd2d0;
      }

      #signupform {
        background-color: #fff7e0;
        border-radius: 20px;
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
      }

      .formpadding {
        margin-left: 20%;
        margin-right: 20%;
        margin-bottom: 10%;
        margin-top: 5%;
      }

      #copyright2 {
        padding-bottom: 10px;
      }

      .root {
        margin-top: 10%;
        padding-left: 10%;
        padding-right: 10%;
      }

      #title {
        font-size: 100px;
      }
</style>