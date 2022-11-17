<template>
    <button id="post" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Post a Memory</button>
    <div class="feed">
        <div v-for="post in feedData" :key="post" class="item">
            <div class="postprofile">
                <img :src="post.postedBy.profilePicUrl" class="feedprofilepic">
                <p> {{post.postedBy.firstName}} {{post.postedBy.lastName}}</p>
                <router-link to="/">{{post.familyId[0].familyName}}</router-link>
            </div>
            <div class="postcontent">
                <VueWaveSurfer :src="file" :options="options"></VueWaveSurfer>
                <button @click="WaveSurfer.playPause()">play</button>
            </div>
        </div>
    </div>


    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Post a Memory!</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <button type="button" class="btn btn-primary">Record</button>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Post</button>
        </div>
        </div>
    </div>
    </div>

</template>

<script>


    // <div class="item">
    //     <div class="postprofile">
    //         <img src="../assets/KeepsakeLogo.png" class="feedprofilepic">
    //         <p>Name here</p>
    //         <router-link to="/">Family name</router-link>
    //     </div>
    //     <div class="postcontent">
    //         <VueWaveSurfer :src="file" :options="options"></VueWaveSurfer>
    //         <button @click="WaveSurfer.playPause()">play</button>
    //     </div>
    // </div>


import VueWaveSurfer from '../components/VueWaveSurfer/VueWaveSurfer.vue'

export default {
  components: {
    VueWaveSurfer
  },
  data() {
    return {
        importData: [],
        feedData: [],
        options: {
            waveColor: '#a49eb1',
            progressColor: '#fbd2d0',
            cursorColor: '#fbd2d0',
            barWidth: 5,
            barRadius: 3,
            cursorWidth: 3,
            height: 200,
            barGap: 3
        },
        file: "src/assets/sample.mp3"
    }
  },
  async mounted() {
    await this.getPostData();
  },
  methods: {
    async getPostData() {

        fetch('http://keepsake-env.eba-jndimye2.us-east-1.elasticbeanstalk.com/posts')
        .then((response) => response.json())
        .then((data) => {
            this.importData = data;
            this.populateFeed(data)
        })
    },
    async populateFeed(data) {
        for (let i = 0; i < data.length; i++) {
            this.feedData.push(data[i])
            console.log(data[i])
        }
    }
  }
}
</script>

<style>
    .item {
        margin-top: 1.5%;
        margin-bottom: 1%;
        background-color: #fff7e0;
        width: 80%;
        height: 250px;
        border-radius: 25px;
        border-color: black;
        border-width: 5px;
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);

        
    }

    .feedprofilepic {
        width: 100px;
        height: 100px;
        outline-style: solid;
        outline-color: black;
        outline-width: 1px;
        border-radius: 50%;
        background-color: #b7c6e2;
    }

    .postprofile {
        float: left;
        padding-left: 5%;
        padding-top: 2%;
    }

    .postcontent {
        float: left;
        padding-left: 20%;
        padding-top: 2%;
    }

    .feed {
        margin-top: 10%;
    }

    #post {
        float: right;
        margin-top: 200px;
    }
</style>