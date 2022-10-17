<template>
  <div>
    <div
      class="baby-container absolute left-1/2 top-1/2 z-[1] pointer-events-all"
      style="width: 100%; height: 100%; transform: translate3d(-50%, -50%, 0)"
    >
      <canvas
        id="_canvas1"
        ref="canvas1"
        class="absolute"
        style="width: 100vw; height: 100vh"
      ></canvas>
    </div>

    <div class="loader"></div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isLoading: false,
    }
  },
  mounted() {
    console.log(this.$scene)
    this.$scene.setCanvas(this.$refs.canvas1)
    this.update()
  },

  methods: {
    update() {
      window.requestAnimationFrame(this.update)
    },

  },
}
</script>

<style>
.loader {
  border: 5px solid #f3f3f3;
  border-top: 5px solid #000000;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
