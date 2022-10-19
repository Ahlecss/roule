<template>
    <div class="pause" ref="pause">
        <h2>Press any key to resume</h2>
    </div>
</template>
  
<script>

  export default {
    name: 'Pause',
    mounted() {
      this.$root.$on('initPause',() =>{
        this.initPause()
      })
      this.$root.$on('closePause',() =>{
        this.closePause()
      })
    },
    methods: {
      initPause() {
        this.$refs.pause.style.opacity = 1
      },
      closePause() {
        this.$refs.pause.style.opacity = 0
      },
      exitCompletedHandler() {
     // check what to do with game examples
      },
    }
  }
</script>

<style>
.pause {
    position: absolute;
    top: 0;
    left: 0;
    z-index:3;
    color:#212148;
    height:100vh;
    width:100vw;
    background: white;
    text-align: center;
    opacity:0;
}
</style>
  