<template>
    <wavesurfer :src="file" :options="options"></wavesurfer>
</template>

<script>
import WaveSurferVue from "wavesurfer.js-vue";

export default {
  components: {
    WaveSurferVue
  },
  data() {
    return {
      options: {},
      file: "./assets/sample.mp3",
    };
  },
};
</script>

<style>

</style>