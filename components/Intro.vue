<template>
    <div class="intro" ref="intro">
        <Controller class="controller-small"/>
        <div v-if="!firstInput">
           <h3>Press any key to start</h3>
        </div>
        <div class="intro-players" v-else>
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
    </div>
</template>
  
<script>
import Controller from './Controller.vue'
  export default {
    name: 'Intro',
    components: { Controller },
    data() {
        return {
            started : false,
            firstInput: false,
            player1isReady: false,
            player2isReady: false,
            players: []
        }
    },
    mounted() {
        this.intro = this.$refs.intro
        $nuxt.$on('playerisReady',(player) =>{
            this.firstInput = true
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
            this.intro.style.opacity = 0
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
    font-family: 'KCPixelHand';
}

.intro-players {
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
    color: #ABEB36;
    border-color: #ABEB36;
}

.player2 {
    color: #FF326F;
    border-color: #FF326F;
}

.controller-small #p1, .controller-small #p2  {
    width: 250px;
}

.controller-small #p1  {
    left: 20%;
}

.controller-small #p2  {
    right: 17%;
}

.controller-small #p1  {
    left: 20%;
}

.controller-small #p1 #p1-axis-a {
    fill: #ABEB36;
}
.controller-small #p2 #p2-axis-a  {
    fill: #FF326F;
}
</style>
  