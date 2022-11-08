<template>
  <div class="root">
    <main class="form-signin">
        <form id="signupform">
          <div class="formpadding">
            <img class="mb-4" src="../assets/KeepsakeLogo.png" alt="" width="200" height="200">
            <h1 class="h3 mb-3 fw-normal">Sign up</h1>

            <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="John">
            <label for="floatingInput">First name</label>
            </div>
            <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="Smith">
            <label for="floatingInput">Last name</label>
            </div>

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
            <p id="copyright2" class="mt-5 mb-3 text-muted">&copy; 2022</p>
          </div>
          
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



      #submit {
        background-color: #fbd2d0;
      }

      #signupform {
        background-color: #fff7e0;
        border-radius: 20px;
      }

      .formpadding {
        margin: 10%;
        margin-left: 20%;
        margin-right: 20%;
      }

      #copyright2 {
        padding-bottom: 10px;
      }

      .root {
        margin-top: 40%;
      }
</style>