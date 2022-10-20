<template>
  <div class="interface">
    <!-- <Events /> -->
    <!-- <Intro /> -->
    <!-- <Pause /> -->
    <Game />
    <HUD />
    <Wouinn />
  </div>
</template>

<script>
import Game from '../components/Game.vue';
import HUD from '../components/HUD.vue';
import Wouinn from '../components/Wouinn.vue';
export default {
  name: "Interface",
  components: { Game, HUD, Wouinn }
}
</script>

<style>
.interface {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}</style>