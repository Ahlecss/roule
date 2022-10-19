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
export default {
  name: "Interface",
  components: { Game }
}
</script>
