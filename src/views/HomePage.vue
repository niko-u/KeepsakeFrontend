<template>
    <main>
        <h1 id="title">Keepsake</h1>
        <div class="container py-4">

            <div class="p-5 mb-4 rounded-3" id="mainrect">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">Stories and Memories</h1>
                <p class="fs-4">Create and share generational stories and memories with the ones you love the most. Easily create or upload memories to share with your entire family.</p>
                <button class="btn btn-outline-secondary btn-lg" type="button">
                  <router-link to="/signup" class="nav-link">Get started</router-link>
                </button>
            </div>
            </div>

            <div class="row align-items-md-stretch">
            <div class="col-md-6">
                <div class="h-100 p-5 border rounded-3" id="secondrect">
                <h2>About us</h2>
                <p>Learn more about us and our mission to close the generational gap</p>
                <button class="btn btn-outline-secondary" type="button">Learn more</button>
                </div>
            </div>
            <div class="col-md-6">
                <div class="h-100 p-5 border rounded-3" id="thirdrect">
                <h2>Invite Family Members</h2>
                <p>Easily create a family and invite members with a simple email invite</p>
                <button class="btn btn-outline-secondary" type="button">
                  <router-link to="/login" class="nav-link">Sign in</router-link>
                </button>
                </div>
            </div>
            </div>

            <footer class="pt-3 mt-4 text-muted border-top">
            &copy; Keepsake 2022
            <br>
            <span><router-link to="/contact" id="contactus">Contact us</router-link></span>
            </footer>
        </div>
    </main>
</template>

<style scoped>


      #mainrect {
        background-color: #b7c6e2;
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
      }

      #secondrect {
        background-color: #fbd2d0;
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);

      }

      #thirdrect {
        background-color: #fff7e0;
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);

      }

      #title {
        font-size:200px
      }

      #contactus {
        color: #b7c6e2;
      }

      main {
        margin-top: 5%;
      }

</style>