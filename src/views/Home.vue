<template>
  <div class="flex items-center justify-center mt-5 md:mt-0 md:h-screen">
    <div class="relative">
      <div class="stationary"></div>
      <div
        v-if="waveAnimationComplete"
        class="blink">
      </div>
      <div
        v-if="!waveAnimationComplete"
        class="wave">
      </div>
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
      waveAnimationComplete: false
    }
  },
  mounted() {
    window.setTimeout(() => {
      this.waveAnimationComplete = true
    }, 5000)
  }
}
</script>
