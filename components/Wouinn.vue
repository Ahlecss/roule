<template>
    <div>
      <div id="wouin-div">
        <div id="div-l" ref="left"></div>
        <div id="div-r" ref="right"></div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'Wouinn',
    data() {
      return {
        wouinFactor: 0.5
      }
    },
    mounted() {
      this.left = this.$refs.left
      this.right = this.$refs.right
      this.$root.$on('player1Joystick',(x) =>{
        // this.updateJoystickColor(player, color)
          this.left.style.opacity = 0.8 + 0.2*x
        this.wouinFactor += x * 0.003
        this.updateWouinBar()
      })
      this.$root.$on('player2Joystick',(x) =>{
        // this.updateJoystickColor(player, color)
          this.right.style.opacity =  0.8 +  0.2*-x
        this.wouinFactor += x * 0.003
        this.updateWouinBar()
      })
    },
    methods: {
      // updateJoystickColor(player, color) {
      //   // if(player === 1) {
      //   //   document.getElementById("p1-axis-controller").style.fill = color
      //   // }
      //   // else {
      //   //   document.getElementById("p2-axis-controller").style.fill = color
      //   // }
      // },
      updateWouinBar(){
          this.date = new Date()
          let t = this.date.getTime() * 0.002
          let d = (Math.sin (2 * t) + Math.sin(Math.PI * t))* 0.003
          this.wouinFactor += d
          this.left.style.width = this.wouinFactor * 100 + "%"
          this.right.style.width = (1 - this.wouinFactor) * 100 + "%"
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
    align-items: center;
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
  