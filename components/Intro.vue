<template>
    <div class="intro" ref="intro">
        <div class="player-div player1">
            <h3 v-if="!player1isReady">Ready ?</h3>
            <h3 v-else>All good !</h3>
            <div class="player-i"></div>
            <h2 v-if="!player1isReady">Press X</h2>
        </div>
        <div class="player-div player2">
            <h3 v-if="!player2isReady">Ready ?</h3>
            <h3 v-else>All good !</h3>
            <div class="player-i"></div>
            <h2 v-if="!player2isReady">Press X</h2>
        </div>
    </div>
</template>
  
<script>

  export default {
    name: 'Intro',
    data() {
        return {
            started : false,
            player1isReady: false,
            player2isReady: false,
            players: []
        }
    },
    mounted() {
        $nuxt.$on('playerisReady',(player) =>{
            this.started = true
            this.playerisReady(player)
        })
    },
    methods : {
        playerisReady(player) {
            this.players.push(player)
            switch(player) {
                case 1: 
                this.player1isReady = true
                break;
                case 2:
                this.player2isReady = true
                break;
            }
            if(this.players.length == 2) {
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
    background: linear-gradient(180deg, #000000 34.79%, #4A0065 100%);
    height:100vh;
    width:100vw;
    color: white;
    text-align: center;
    font-family: 'KC Pixel Hand';
    font-size: 25px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.player-div {
    display: flex;
    flex-direction: column;
}

.player-i {
    height: 296px;
    width: 270px;
    border: 2px solid;
}

.player1 {
    color: #EC5E40;
    border-color: #EC5E40;
}

.player2 {
    color: #FAC96F;
    border-color: #FAC96F;
}
</style>
  