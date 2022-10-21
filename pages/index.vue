<template>
  <div class="interface">
    <Game />
    <Intro />
    <HUD />
    <Wouinn />
  </div>
</template>

<script>
import Game from '../components/Game.vue';
import HUD from '../components/HUD.vue';
import Intro from '../components/Intro.vue';
import Wouinn from '../components/Wouinn.vue';
export default {
  name: "Interface",
  components: { Game, HUD, Intro, Wouinn }
}
</script>

<style>
.interface {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}
body{
  font-family: 'KCPixelHand';
}
</style>