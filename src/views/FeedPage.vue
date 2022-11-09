<template>
    <div class="item">
        <div class="postprofile">
            <img src="../assets/KeepsakeLogo.png" class="feedprofilepic">
            <p>Name here</p>
            <router-link to="/">Family name</router-link>
        </div>
        <div class="postcontent">
            <VueWaveSurfer :src="file" :options="options"></VueWaveSurfer>
            <button data-action="play">play</button>
        </div>
    </div>
</template>

<script>
import VueWaveSurfer from '../components/VueWaveSurfer/VueWaveSurfer.vue'
export default {
  components: {
    VueWaveSurfer
  },
  data() {
    return {
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
  }
}
</script>

<style>
    .item {
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
</style>