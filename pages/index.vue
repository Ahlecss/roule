<template>
  <div class="interface">
    <Game />
    <Events />
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
