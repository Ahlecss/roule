<template>
  <div class="interface">
    <Events />
    <Intro />
    <Pause />
    <Game />
    <HUD />
  </div>
</template>

<script>
import Game from '../components/Game.vue';
import HUD from '../components/HUD.vue';
export default {
  name: "Interface",
  components: { Game, HUD }
}
</script>
