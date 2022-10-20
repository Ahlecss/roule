<template>
  <div class="interface">
    <Events />
    <!-- <Intro /> -->
    <Pause />
    <Game />
    <HUD />
  </div>
</template>

<script>
import Game from '../components/Game.vue';
import HUD from '../components/HUD.vue';
import Events from '../components/Events.vue';
export default {
  name: "Interface",
  components: { Game, HUD, Events }
}
</script>

<style>
.interface {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}</style>