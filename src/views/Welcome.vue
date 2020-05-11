<template>
  <div class="flex flex-col items-center justify-center sm:h-100 md:h-screen">
    <div class="flex content-end m-auto mb-o">
      <img src="../assets/images/david-diaz.png" alt="">
      <div class="flex flex-col m-auto ml-5">
        <p class="text-lg leading-none">
          Hey, I'm
        </p>
        <h1 class="font-display text-6xl leading-none">
          David Diaz
        </h1>
        <div class="flex mt-2">
          <a
            href="https://github.com/ddiaz914"
            target="_blank"
          >
            <img
              class="w-5 h-5"
              src="../assets/images/github.svg"
              alt="Github"
            >
          </a>
          <a
            href="https://www.linkedin.com/in/ddiaz914/"
            target="_blank"
          >
            <img
              class="w-5 h-5 ml-1"
              src="../assets/images/linkedin.png"
              alt="Linkein"
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Welcome',
}
</script>
