<!-- Please remove this file from your project -->
<template>
    <div>
      <div id="wouin-div">
        <div id="div-l"></div>
        <div id="div-r"></div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'Wouinn',
    mounted() {
      this.$root.$on('player1Joystick',(player,x,color) =>{
        this.updateJoystickColor(player, color)
        this.updateWouinBar(player, x)
      })
      this.$root.$on('player2Joystick',(player,x,color) =>{
        this.updateJoystickColor(player, color)
        this.updateWouinBar(player, x)
      })
    },
    methods: {
      updateJoystickColor(player, color) {
        if(player === 1) {
          document.getElementById("p1-axis-controller").style.fill = color
        }
        else {
          document.getElementById("p2-axis-controller").style.fill = color
        }
      },
      updateWouinBar(player, x){
        if(player === 1 & x >= 0) {
          document.getElementById("div-l").style.width = x * 95 - 10 + "%"
          // document.getElementById("div-r").style.width =   / x * 20  + "%"
        }
        if(player === 2 & x <= 0) {
          document.getElementById("div-r").style.width = -x * 95 - 10 + "%"
          // document.getElementById("div-l").style.width = document.getElementById("div-l").style.width / x * 20  + "%"
        }
      }
    }
  }
  </script>
  
  <style>
  #wouin-div {
    position: absolute;
    z-index: 6;
    right:0;
    width: 287px;
    height: 44px;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: centerx,;
    padding: 10px;
    border-radius: 50px ;
  }
  
  #wouin-div #div-l {
    height: 100%;
    width: 50%;
    background: #EC5E40;
    border-radius: 50px 0 0 50px ;
  }
  
  #wouin-div #div-r {
    height: 100%;
    width: 50%;
    background: #FAC96F;
    border-radius: 0 50px 50px 0;
  }
  </style>
  