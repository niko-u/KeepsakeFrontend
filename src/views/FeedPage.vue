<template>
     <div v-for="post in feedData" :key="post" class="item">
         <div class="postprofile">
            <img :src="post.postedBy.profilePicUrl" class="feedprofilepic">
             <p> {{post.postedBy.firstName}} {{post.postedBy.lastName}}</p>
             <router-link to="/">Family name</router-link>
         </div>
        <div class="postcontent">
             <VueWaveSurfer :src="file" :options="options"></VueWaveSurfer>
             <button @click="WaveSurfer.playPause()">play</button>
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

    .card {
        
    }
</style>