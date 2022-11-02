<template>
    <main class="form-signin">
        <form>
            <img class="mb-4" src="../assets/tcu.webp" alt="" width="72" height="57">
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
            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <p class="mt-5 mb-3 text-muted">&copy; 2022</p>
        </form>
    </main>
</template>

<style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      .form-floating {
        padding-top: 5px;
        padding-bottom: 5px;
      }

      .rememberme {
        padding-top: 10px;
      }
</style>