<!-- Please remove this file from your project -->
<template>
  <div class="HUD" id="HUD">
    <Controller />
    <Titles />
    <Success />
  </div>
</template>

<script>
import Controller from './Controller.vue'
import Titles from './Titles.vue';
import Success from './Success.vue';
export default {
  name: 'HUD',
  components: { Controller, Success, Titles }
}
</script>

<style>
.HUD{
  height: 100vh;
  width: 100vw;
}
</style>
