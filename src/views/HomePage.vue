<template>
    <main>
        <h1 id="title">Keepsake</h1>
        <div class="container py-4">

            <div class="p-5 mb-4 rounded-3" id="mainrect">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">Stories and Memories</h1>
                <p class="fs-4">Create and share generational stories and memories with the ones you love the most. Easily create or upload memories to share with your entire family.</p>
                <button class="btn btn-outline-secondary btn-lg" type="button">Get started</button>
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
                <button class="btn btn-outline-secondary" type="button">Sign in</button>
                </div>
            </div>
            </div>

            <footer class="pt-3 mt-4 text-muted border-top">
            &copy; Keepsake 2022
            </footer>
        </div>
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

      #mainrect {
        background-color: #b7c6e2;
      }

      #secondrect {
        background-color: #fbd2d0;
      }

      #thirdrect {
        background-color: #fff7e0;
      }

      #title {
        font-size:200px
      }

</style>