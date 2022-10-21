<template>
  <div class="wouin" v-if="show">
    <div id="wouin-div">
      <div id="div-l" ref="left"></div>
      <img id="cursor-mid" ref="cursorMid" src="../assets/img/Cursor-m.svg" />
      <div id="div-r" ref="right"></div>
      <img id="cursor-mov" ref="cursorMov" src="../assets/img/Cursor-mov.svg" />
    </div>
  </div>
</template>
  
<script>

export default {
  name: 'Wouinn',
  data() {
    return {
      show: false,
      wouinFactor: 0.5,
      timeoutRef: false,
      isWinning: false
    }
  },
  mounted() {
    this.woinDiv = this.$refs.woinDiv
    this.left = this.$refs.left
    this.right = this.$refs.right
    this.cursorMid = this.$refs.cursorMid
    this.cursorMov = this.$refs.cursorMov

    $nuxt.$on('startTheWouin', () => {
      this.initWouin()
    })
  },
  methods: {
    initWouin() {
      this.show = true

      $nuxt.$on('player1Joystick', (x) => {
        this.left.style.opacity = 0.8 + 0.2 * x
        this.wouinFactor += x * 0.003
        this.updateWouinBar()
      })

      $nuxt.$on('player2Joystick', (x) => {
        this.right.style.opacity = 0.8 + 0.2 * -x
        this.wouinFactor += x * 0.003
        this.updateWouinBar()
      })
    },
    updateWouinBar() {
      this.date = new Date()
      let t = this.date.getTime() * 0.002
      let d = (Math.sin(2 * t) + Math.sin(Math.PI * t)) * 0.003
      this.wouinFactor += d
      this.left.style.width = this.wouinFactor * 100 + "%"
      this.right.style.width = (1 - this.wouinFactor) * 100 + "%"
      this.updateCursor()
    },
    updateCursor() {
      if (this.wouinFactor * 100 <= 0) {
        this.cursorMov.style.left = 0 + "%";
        this.cursorMov.style.transform = "translate-y(0)";
      } else if (this.wouinFactor * 100 >= 100) {
        this.cursorMov.style.left = 100 + "%";
        this.cursorMov.style.transform = "translate-y(100)";
      } else {
        this.cursorMov.style.left = this.wouinFactor * 100 + "%";
        this.cursorMov.style.transform = "translate-y(" + this.wouinFactor * - 100 + "%" + ")";
      }
      this.checkMiddle()
    },
    checkMiddle() {
      if (this.timeoutRef) {
        if (this.wouinFactor * 100 <= 40 || this.wouinFactor * 100 >= 60) {
          this.isWinning = false
          clearTimeout(this.timeoutRef);
          this.timeoutRef = false
        } else {
          this.isWinning = true
        }
      } else {
        this.timeoutRef = setTimeout(() => {
          if(this.isWinning) {
            $nuxt.$emit('win', "theWouin")
            this.show = false
            clearTimeout(this.timeoutRef);
            this.destroy()
          } else {
            clearTimeout(this.timeoutRef);
            this.timeoutRef = false
          }
        }, 1000);
      }
    },
    destroy() {
      setTimeout(() => {this.woinDiv.remove()}, 2000);
    }
  }
}
</script>
  
<style>
.wouin {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

#wouin-div {
  position: relative;
  width: 400px;
  height: 25px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-radius: 50px;
}

#wouin-div #div-l {
  height: 100%;
  width: 50%;
  background: #ABEB36;
  border-radius: 50px 0 0 50px;
  padding: 0 5px;
}

#wouin-div #div-r {
  height: 100%;
  width: 50%;
  background: #FF326F;
  border-radius: 0 50px 50px 0;
  padding: 0 5px;
}

#wouin-div #cursor-mid,
#cursor-mov {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 3;
}

#wouin-div #cursor-mov {
  z-index: 4;
}
</style>
  