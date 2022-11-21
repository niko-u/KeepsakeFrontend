<template>
<div v-if="loaded">

<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">

<!-- Button trigger modal -->
<div id="header">
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#chooseFamily">
        {{currentFamily.familyName}}
    </button>
    <span id="titlefamily">
        {{currentFamily.familyName}}
    </span>
</div>

<!-- Modal -->
<div class="modal fade" id="chooseFamily" tabindex="-1" aria-labelledby="chooseFamilyLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="chooseFamilyLabel">Choose family to view</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <table class="table">
            <tr v-for="family, i in families" :key="family._id">
                <button @click="changeFamily(i)" data-bs-dismiss="modal" class="familybtns btn btn-primary">{{family.familyName}}</button>
            </tr>
        </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>



<div class="container bootdey">
<div class="row">
<div class="col-md-11 ">
<div class="row">

  <div class="col-md-6 col-lg-4">
    <div class="card hover-shadow">

      <div class="card-body text-center pt-1 pb-20">
        <a href="#">
          <img class="avatar avatar-xxl" :src="currentFamily.adminUser.profilePicUrl">
        </a>
        <h5 class="mt-2 mb-0"><a class="hover-primary" href="#">{{currentFamily.adminUser.firstName}} {{currentFamily.adminUser.lastName}}</a></h5>
        <span>Family Lead</span>
      </div>

      <footer class="card-footer flexbox">
        <div>
          <i class="fa fa-star pr-1"></i>
          <span class="familyNameIcon"> {{currentFamily.familyName}}</span>
        </div>
      </footer>
    </div>
  </div>



  <div v-for="member in currentFamily.members" :key="member._id" class="col-md-6 col-lg-4">
    <div class="card hover-shadow">

      <div class="card-body text-center pt-1 pb-20">
        <a href="#">
          <img class="avatar avatar-xxl" :src="member.profilePicUrl">
        </a>
        <h5 class="mt-2 mb-0"><a class="hover-primary" href="#">{{member.firstName}} {{member.firstName}}</a></h5>
        <span>Family Member</span>
      </div>

      <footer class="card-footer flexbox">
        <div>
          <i class="fa fa-user pr-1"></i>
          <span class="familyNameIcon"> {{currentFamily.familyName}}</span>
        </div>
      </footer>
    </div>
  </div>

  </div>
  </div>
</div>
</div>
</div>  
</template>

<script>

export default {
    data() {
        return {
            families: [],
            currentFamily: null,
            loaded: false
        }
    },
    async mounted() {
        await this.getFamilyData()
    },
    methods: {
        async getFamilyData() {
            fetch('http://keepsake-env.eba-jndimye2.us-east-1.elasticbeanstalk.com/families')
            .then((response) => response.json())
            .then((data) => {
                this.families = data
                this.currentFamily = this.families[0]
                this.loaded = true
            })
        },
        changeFamily(index) {
            this.currentFamily = this.families[index]
            console.log(index)
        }
    }
}

</script>

<style scoped>
    body{
    background:#FCFCFC;    
}
.pr-12 {
    padding-right: 12px !important;
}

.mb-20 {
    margin-bottom: 20px !important;
}

.b-1 {
    border: 1px solid #ebebeb !important;
}

.card {
    border: 0;
    border-radius: 0;
    margin-bottom: 30px;
    -webkit-transition: .5s;
    transition: .5s;
}

.card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
}

.media {
    padding: 16px 12px;
    -webkit-transition: background-color .2s linear;
    transition: background-color .2s linear;
}

.media {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: start;
    align-items: flex-start;
}

.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1.25rem;
}

.media .avatar {
    flex-shrink: 0;
}

.no-radius {
    border-radius: 0 !important;
}

.avatar-xl {
    width: 64px;
    height: 64px;
    line-height: 64px;
    font-size: 1.25rem;
}

.avatar {
    position: relative;
    display: inline-block;
    width: 100px;
    height: 100px;
    line-height: 36px;
    text-align: center;
    border-radius: 100%;
    background-color: #f5f6f7;
    color: #8b95a5;
    text-transform: uppercase;
    margin-top: 20px;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.5);
}

img {
    max-width: 100%;
}

img {
    vertical-align: middle;
    border-style: none;
}

.mb-2 {
    margin-bottom: .5rem!important;
}

.fs-20 {
    font-size: 20px !important;
}

.pr-16 {
    padding-right: 16px !important;
}

.ls-1 {
    letter-spacing: 1px !important;
}

.fw-300 {
    font-weight: 300 !important;
}

.fs-16 {
    font-size: 16px !important;
}

.media-body>* {
    margin-bottom: 0;
}

small, time, .small {
    font-family: Roboto,sans-serif;
    font-weight: 400;
    font-size: 11px;
    color: #8b95a5;
}

.fs-14 {
    font-size: 14px !important;
}

.mb-12 {
    margin-bottom: 12px !important;
}

.text-fade {
    color: rgba(77,82,89,0.7) !important;
}

.card-footer:last-child {
    border-radius: 0 0 calc(.25rem - 1px) calc(.25rem - 1px);
}

.card-footer {
    background-color: #fcfdfe;
    border-top: 1px solid rgba(77,82,89,0.07);
    color: #8b95a5;
    padding: 10px 20px;
}

.flexbox {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
}

.align-items-center {
    -ms-flex-align: center!important;
    align-items: center!important;
}

.card-footer {
    padding: .75rem 1.25rem;
    background-color: rgba(0,0,0,.03);
    border-top: 1px solid rgba(0,0,0,.125);
}


.card-footer {
    background-color: #fcfdfe;
    border-top: 1px solid rgba(77, 82, 89, 0.07);
    color: #8b95a5;
    padding: 10px 20px
}

.card-footer>*:last-child {
    margin-bottom: 0
}

.hover-shadow {
    -webkit-box-shadow: 0 0 35px rgba(0, 0, 0, 0.11);
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.11)
}

.fs-10 {
    font-size: 10px !important;
}
h5 span {
    font-family: Roboto,sans-serif;
    font-weight: 400;
    font-size: 11px;
    color: #8b95a5;
}

h5 span {
    font-family: Roboto,sans-serif;
    font-weight: 400;
    font-size: 11px;
    color: #8b95a5;
}
h5 span {
    font-family: Roboto,sans-serif;
    font-weight: 400;
    font-size: 11px;
    color: #8b95a5;
}
h5 a {
    color: #8b95a5;
}

.familyNameIcon {
    padding-left: 5px;
}

.familybtns {
    width: 100%;
    background-color: #8b95a5;
}

#titlefamily {
    color: black;
    font-size: xx-large;
}

#header {
    margin-top: 10%;
}

.container {
    margin-top: 5%;
}

.card {
    background-color: #fbd2d0;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.5);
}

.card-footer {
    background-color: #fbd2d0;
    outline: 0.5px solid black;
}

#header button {
    float: left;
    background-color: #b7c6e2;
    border: none;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.5);
}

#header button:hover {
    background-color: #fbd2d0;
}

#titlefamily {
    font-size: 50px;
    left: 50%;
    transform: translateX(-50%);
}
</style>