<template>
    <div class="intro" ref="intro">
        <h1><img src="../assets/img/logo.png" alt="Logo-CyberSkate4000"/></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non pretium, in donec pharetra. Nullam pellentesque nunc, id lectus ac in ultrices. Lorem dolor tortor porttitor amet ultrices. Lectus ac porttitor varius leo.</p>
        <h2>Press A to start the game</h2>
        <div v-if="started">
            <h3 v-if="!playersReady">Waiting for player {{players[0]}}</h3>
            <h3 v-else>All good !</h3>
        </div>
    </div>
</template>
  
<script>

  export default {
    name: 'Intro',
    data() {
        return {
            started : false,
            playersReady : false,
            players: []
        }
    },
    mounted() {
        this.$root.$on('playerisReady',(player) =>{
            this.started = true
            this.playerisReady(player)
        })
    },
    methods : {
        playerisReady(player) {
            this.players.push(player)
            if(this.players.length == 2) {
                this.playersReady = true
                this.closeinit()
            }
        },
        closeinit() {
            this.$refs.intro.style.opacity = 0
        }
    }
  }
</script>

<style>
.intro {
    position: absolute;
    top: 0;
    left: 0;
    z-index:2;
    background:#212148;
    height:100vh;
    width:100vw;
    color: white;
    text-align: center;
}
</style>
  