<template>
  <div class="root">
    <main class="form-signin">
        <form id="signinform">
          <div class="formpadding">
            <img class="mb-4" src="../assets/KeepsakeLogo.png" alt="" width="200" height="200">
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

            <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
            </div>

            <div class="checkbox mb-3">
            <label class="rememberme">
                <input type="checkbox" value="remember-me"> Remember me
            </label>
            </div>
            <button class="w-100 btn btn-lg" id="submit" type="submit">Sign in</button>
          </div>
            <p id="copyright1" class="mt-5 mb-3 text-muted">&copy; 2022</p>
        </form>
    </main>
  </div>
</template>

<style>

      .form-floating {
        padding-top: 5px;
        padding-bottom: 5px;
      }

      .rememberme {
        padding-top: 10px;
      }

      .form-signin {
        margin-left: 10%;
        margin-top: -50%;
        width: 80%;
      }


      #submit {
        background-color: #fbd2d0;
      }

      #signinform {
        background-color: #fff7e0;
        border-radius: 20px;
      }

      .formpadding {
        margin: 10%;
        margin-left: 20%;
        margin-right: 20%;
      }

      #copyright1 {
        padding-bottom: 10px;
      }

      

</style>