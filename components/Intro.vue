<template>
    <div class="intro" ref="intro">
        <Controller class="controller-small"/>
        <div id="intro-logo" v-if="!firstInput">
            <img src="../assets/img/logo-intro.svg"/>
           <h3>Press any key to start</h3>
        </div>
        <div class="intro-players" v-else>
            <div class="player-div player1">
                <h3>Ready ?</h3>
                <div class="player-i">
                    <img src="../assets/img/Wheel1.png" v-if="player1isReady" class="fadeIn"/>
                </div>
                <h2 v-if="!player1isReady">Press 
                    <span><svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 27.9169L25 12.7326C25 12.7326 23.1253 1.17254e-06 14.063 3.80287e-07C5.00066 -4.11967e-07 0.00107863 5.06143 0.00107815 10.5186L10.1564 10.9928C10.1564 10.9928 12.4995 11.3089 12.4995 12.8907C12.4995 14.4724 10.7023 13.9579 10.7023 13.9579L2.81259 13.9579C2.81259 13.9579 -4.20404e-08 14.4724 -5.81255e-07 20.6403C-1.12047e-06 26.8082 3.20347 27.5212 5.85886 27.5212C8.51424 27.5212 11.6402 24.9899 11.6402 22.7759C11.6402 20.5619 13.2812 20.0866 13.671 21.5103C13.8132 22.0281 14.7403 25.6026 16.6397 26.6513C19.9606 28.4848 24.9989 27.9169 24.9989 27.9169L25 27.9169Z" fill="#ABEB36"/>
                    </svg></span>
                </h2>
                    <h3 v-else>All good !</h3>
            </div>
            <div class="player-div player2">
                <h3>Ready ?</h3>
                <div class="player-i" >
                    <img src="../assets/img/Wheel2.png" v-if="player2isReady" class="fadeIn"/>
                </div>
                <h2 v-if="!player2isReady">Press 
                    <span><svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 27.9169L25 12.7326C25 12.7326 23.1253 1.17254e-06 14.063 3.80287e-07C5.00066 -4.11967e-07 0.00107863 5.06143 0.00107815 10.5186L10.1564 10.9928C10.1564 10.9928 12.4995 11.3089 12.4995 12.8907C12.4995 14.4724 10.7023 13.9579 10.7023 13.9579L2.81259 13.9579C2.81259 13.9579 -4.20404e-08 14.4724 -5.81255e-07 20.6403C-1.12047e-06 26.8082 3.20347 27.5212 5.85886 27.5212C8.51424 27.5212 11.6402 24.9899 11.6402 22.7759C11.6402 20.5619 13.2812 20.0866 13.671 21.5103C13.8132 22.0281 14.7403 25.6026 16.6397 26.6513C19.9606 28.4848 24.9989 27.9169 24.9989 27.9169L25 27.9169Z" fill="#FF326F"/>
                    </svg></span>
                </h2>
                <h3 v-else>All good !</h3>
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
            this.intro.classList.add("swipeLeft")
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
    background: url("../assets/img/grid.svg") top center no-repeat, linear-gradient(180deg, #000000 34.79%, #4A0065 100%);
    background-size: 110%;
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


#intro-logo h3 {
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%);
}

#intro-logo  {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
}

#intro-logo img {
    object-fit: cover;
    height: 100%;
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

.swipeLeft {
    animation: swipeLeft 1s cubic-bezier(.36,.07,.19,.97) both;
    animation-delay: 1s;
}

.fadeOut {
    animation: fadeOut 1s cubic-bezier(.36,.07,.19,.97) both;
    animation-delay: 0.5s;
}

.fadeIn {
    animation: fadeIn .3s cubic-bezier(.36,.07,.19,.97) both;
}

@keyframes swipeLeft {
    0% {
        margin-left : 0;
        opacity: 1;
    }
    
    100% {
        margin-left : 200%;
        opacity: 0;
    }
}

@keyframes fadeIn {
    0% {
      opacity : 0;
    }
    
    100% {
      opacity: 1;
    }
}

@keyframes fadeOut {
    0% {
      opacity : 1;
    }
    
    100% {
      opacity: 0;
    }
  }
</style>
  