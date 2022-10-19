<template>
    <div class="pause" ref="pause">
        <p>ROULE is a game created by 5 students from Gobelins blablablablablablalbalba.Design : Léo Clot & Lisa Levavasseur.Dev : Clara Lautré, Leith Ben Abdessalem & Alexis Séjourné</p>
        <h2>Press A to get back to the game</h2>
        <h2>Press home to exit</h2>
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
  