<template>
  <div class="flex items-center justify-center mt-5 md:mt-0 md:h-screen">
    <div
      class="david"
      :class="{'fadeIn': videoReady}"
      v-show="videoReady"
    >
      <video
        ref="waving"
        autoplay
        playsinline
        v-show="!wavingComplete"
        class="z-10"
        width="192"
        height="498"
      >
        <source
          src="../assets/videos/waving.mp4"
          type="video/mp4"
        >
        Your browser does not support the video tag.
      </video>
      <video
        ref="blinking"
        autoplay
        playsinline
        v-show="wavingComplete"
        class="z-10"
        width="192"
        height="498"
      >
        <source
          src="../assets/videos/blink.mp4"
          type="video/mp4"
        >
        Your browser does not support the video tag.
      </video> 
    </div>
    <div class="flex flex-col">
      <h1 class="font-display text-4xl sm:text-6xl leading-none">
        David Diaz
      </h1>
      <p class="text-base sm:text-lg">
        Software Developer
      </p>
      <div class="flex mt-2">
        <a
          class="w-5 h-5"
          href="https://github.com/ddiaz914"
          target="_blank"
        >
          <img
            src="../assets/images/github.svg"
            alt="Github"
          >
        </a>
        <a
          class="w-5 h-5 ml-1"
          href="https://www.linkedin.com/in/ddiaz914/"
          target="_blank"
        >
          <img
            src="../assets/images/linkedin.svg"
            alt="Linkein"
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      videoReady: false,
      wavingComplete: false
    }
  },
  mounted() {
    const wavingVideo = this.$refs.waving
    wavingVideo.addEventListener('loadeddata', () => {
      if (wavingVideo.readyState === 4) {
        this.videoReady = true
        wavingVideo.pause()
      } 
    })
  },
  watch: {
    videoReady() {
      window.setTimeout(() => {
        this.playWaving()
      }, 2000)
    }
  },
  methods: {
    playWaving() {
      const wavingVideo = this.$refs.waving
      wavingVideo.play()
      window.setTimeout(() => {
        wavingVideo.pause()
      }, 500)
      window.setTimeout(() => {
        wavingVideo.play()
      }, 4000)
      wavingVideo.addEventListener('ended', () => {
        this.wavingComplete = true
        this.startBlinkInterval()
      })
    },
    startBlinkInterval() {
      const blinkingVideo = this.$refs.blinking
      blinkingVideo.play()
      window.setInterval(() => {
        blinkingVideo.play()
      }, 5000)
    }
  }
}
</script>
<style>
.david {
  background-image: url('../assets/images/david-diaz.png');
  background-repeat: no-repeat;
  background-position: top left;
  background-size: 192px 498px;
  width: 192px;
  height: 498px;
}
</style>
