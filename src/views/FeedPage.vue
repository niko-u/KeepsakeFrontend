
<template>
    <div class="family">
        <button type="button" data-bs-toggle="modal" data-bs-target="#pickFamily">{{currentFamily}}</button>
    </div>
    <div class="feed">
        <div v-for="post in feedData" :key="post" class="item">
            <div class="postprofile">
                <img :src="post.postedBy.profilePicUrl" class="feedprofilepic">
                <div class="postDetails">
                    <p> {{post.postedBy.firstName}} {{post.postedBy.lastName}}</p>
                    <div class="familyLink">
                        <router-link to="/">{{post.familyId[0].familyName}}</router-link>
                    </div>
                </div>
            </div>
            <div class="postcontent">
                <VueWaveSurfer ref="visual" class="soundVisualization" :src="post.audioUrl" :options="options"></VueWaveSurfer>
                <button class="playButton" @click="$refs.visual.playPause()">
                    <fa icon="play" />
                </button>
            </div>
        </div>
    </div>

    <div class="postFooter"> 
        <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="postButton"> Post</button>
    </div>


    <!-- Modals -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Post a Memory!</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <button type="button" @click="audioRecorder.start()" class="btn btn-primary">Record</button>
        </div>
        <div class="modal-body">
            <button type="button" @click="audioRecorder.stop()" class="btn btn-primary">Stop</button>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" @click="loadData()" class="btn btn-primary" data-bs-dismiss="modal">Post</button>
        </div>
        </div>
    </div>
    </div>


    <div class="modal fade" id="pickFamily" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{currentFamily}}</h5>
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
            <button type="button" class="btn btn-primary">Save changes</button>
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
import {audioRecorder} from '../js/audiorecorder.js'

export default {
  components: {
    VueWaveSurfer
  },
  data() {
    return {
        importData: [],
        feedData: [],
        families: [],
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
        file: "src/assets/sample.mp3",
        audioRecorder: audioRecorder,
        currentFamily: "Family Here"
    }
  },
  async mounted() {
    await this.getPostData();
  },
  methods: {
    async getPostData() {

        fetch('https://api.keepsakeproject.com/')
        .then((response) => response.json())
        .then((data) => {
            this.importData = data;
            console.log(data)
            this.populateFeed(data)
        })
    },
    async populateFeed(data) {
        for (let i = 0; i < data.length; i++) {
            data[i].audioUrl = this.file;
            this.feedData.push(data[i])
            console.log(data[i])
        }
    },
    changeFamily(index) {
            this.currentFamily = this.families[index]
            console.log(index)
    },
    loadData()
    {

        for(let i = 0; i< audioRecorder.audioBlobs.length; i++)
        {
            let audioBlob = audioRecorder.audioBlobs[i];
            let audioURL = URL.createObjectURL(audioBlob);
            let data = {audioUrl:audioURL, postedBy: {firstName:"", lastName:"", profilePicUrl:""}, familyId:[{familyName:""}]};
            this.feedData.unshift(data);
        }
        audioRecorder.audioBlobs = [];
        
    }
  }
}


</script>

<style>
    .item {
        margin-top: 1.5%;
        margin-bottom: 1%;
        background-color: #fff7e0;
        width: 100%;
        height: 250px;
        border-radius: 25px;
        border-color: black;
        border-width: 5px;
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
        float: top;
        display: inline-block;
        
    }

    .feedprofilepic {
        width: 100px;
        height: 100px;
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.4);
        border-radius: 50%;
        background-color: #b7c6e2;
    }

    .postprofile {
        float: left;
        padding-top: 2%;
        width: 20%;
        padding-left: 3%;
    }

    .postcontent {
        float: left;
        padding-top: 2%;
        width: 70%;
        padding-right: 5%;
        padding-left: 5%;
        position: relative;
        margin-left: 2%;
    }

    .playButton {
        float: left;
        top: 50%;
        transform: translateY(-50%);
        background-color: #fbd2d0;
        border-radius: 50px;
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.3);
        position: absolute;
        width: 60px;
        height: 60px;

    }

    .playButton:hover {
        background-color: #a49eb1;
        outline: none;
        border: none;
    }

    .soundVisualization {
        float: right;
        width: 80%;
        margin-left: 10%;
        z-index: 0;
    }

    .family {
        margin-top: 10%;
    }

    .family button {
        width: 100%;
        background-color: #b7c6e2;
        border-radius: 10px;
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.3);
    }

    .feed {
        margin-top: 2%;
    }

    #post {
        float: right;
        margin-top: 200px;
    }

    .postDetails {
        margin-top: 5%;
    }

    .postFooter {
        left: 50%;
        transform: translateX(-50%);
        position: fixed;
        width: 10%;
        background-color: #b7c6e2;
        bottom: 10%;
        height: 5%;
        border-radius: 50px;
    }

    #postButton {
        width: 100%;
        height: 100%;
        border-radius: 50px;
        background-color: #b7c6e2;
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.5);
        z-index: 1000;
        position: relative;

    }

    #postButton:hover {

        background-color: #fbd2d0;
        border: none;
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.5);
    }

    .familyLink a {
        text-decoration: none;
        color: #a49eb1;
    }

    .postDetails p {
        font-weight: bold;
    }
</style>