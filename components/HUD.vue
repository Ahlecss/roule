<!-- Please remove this file from your project -->
<template>
  <div class="HUD" id="HUD">
    <Controller />
    <Titles />
  </div>
</template>

<script>
import Controller from './Controller.vue'
export default {
  name: 'HUD',
  components: { Controller },
  mounted() {

  },
  methods: {
    
  }
}
</script>

<style>
.HUD{
  height: 100vh;
    width: 100vw;
}
</style>
