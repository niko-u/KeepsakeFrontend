<template>
  <div class="root">
    <h1 id="title"><router-link to="/" class="nav-link">Keepsake</router-link></h1>
    <main class="form-signin">
        <form id="signinform">
          <div class="formpadding">
            <img class="mb-4" src="../assets/KeepsakeLogo.png" alt="" width="200" height="200">
            <h1 class="h3 mb-3 fw-normal">Enter the code sent to {{ this.email }}</h1>

            <span class="code">
                <input v-model="one" type="text">
                <input v-model="two" type="text">
                <input v-model="three" type="text">
                <input v-model="four" type="text">
                <input v-model="five" type="text">
                <input v-model="six" type="text">
            </span>


            <button @click="confirmSignUp" class="w-100 btn btn-lg" id="submit" type="button">Verify</button>
            <button @click="resendConfirmationCode" class="w-100 btn btn-lg" id="submit" type="button">Resend</button>

          </div>
            <p id="copyright1" class="mt-5 mb-3 text-muted"> Keepsake &copy; 2022</p>
        </form>
    </main>
  </div>
</template>

<script>
import userUtils from '../utils/userUtils'

export default {
    data() {
        return {
            email: this.$userStore.state.email,
            one: '',
            two: '',
            three: '',
            four: '',
            five: '',
            six: '',
        }
    },
    methods: {
        async confirmSignUp() {
            let code = [this.one, this.two, this.three, this.four, this.five, this.six].join('')
            await userUtils.confirmSignUp(code);
        },
        async resendConfirmationCode() {
          let resent = await userUtils.resendConfirmationCode(this.email)
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

      #signinform {
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

      #copyright1 {
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

      .code input {
        background-color: white;
        width: 10%;
        height: 20%;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 5%;
        margin-top: 5%;
        color: black;
      }

      </style>