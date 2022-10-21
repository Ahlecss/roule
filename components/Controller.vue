<template>
  <div class="controller" id="controller">
    <svg id="p1" width="303" height="127" viewBox="0 0 303 127" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id='p1-axis-background' d="M110.778 0C89.4685 0 70.9969 12.0366 61.8992 29.6251C59.2604 34.7257 53.7782 37.7222 48.0097 37.3521C41.8883 36.9617 35.5828 37.8084 29.4614 40.0596C6.09067 48.6434 -5.83505 74.3899 2.82286 97.5606C11.4808 120.731 37.4443 132.555 60.8201 123.971C68.3632 121.198 74.7147 116.64 79.5679 110.956C83.3113 106.57 89.2997 104.862 94.8484 106.53C99.8907 108.046 105.24 108.857 110.778 108.857C122.049 108.857 132.528 105.49 141.242 99.7104C144.929 97.2666 149.552 96.5213 153.756 97.9206C156.635 98.8789 159.714 99.4011 162.92 99.4011C168.781 99.4011 174.232 97.6671 178.778 94.6909C182.42 92.3079 186.94 91.6691 191.113 92.9468C193.803 93.7732 196.662 94.2143 199.628 94.2143C205.944 94.2143 211.784 92.1964 216.535 88.7841C220.135 86.1933 224.727 85.2553 229.013 86.4316C231.462 87.1008 234.04 87.4608 236.704 87.4608C240.228 87.4608 243.603 86.8321 246.722 85.6863C250.819 84.1804 255.339 84.6418 259.093 86.8524C263.394 89.3824 268.416 90.8376 273.775 90.8376C290.145 90.8376 303.329 77.3154 302.582 60.9234C301.907 46.1083 289.664 34.1427 274.711 33.6712C270.789 33.5495 267.035 34.2035 263.593 35.4964C259.569 37.0073 255.089 36.4496 251.386 34.2694C247.085 31.7394 242.064 30.2843 236.704 30.2843C230.388 30.2843 224.548 32.3022 219.797 35.7144C216.197 38.3053 211.605 39.2433 207.319 38.0721C204.87 37.4028 202.292 37.0428 199.628 37.0428C193.767 37.0428 188.321 38.7768 183.77 41.753C180.175 44.1056 175.695 44.8256 171.583 43.5428C171.537 43.5276 171.491 43.5124 171.445 43.4972C167.093 42.1637 163.626 38.9442 161.979 34.7359C154.017 14.4095 134.098 0 110.778 0Z" fill="white"/>
      <path id='p1-axis-a' d="M162.552 86.8984C171.586 86.8984 178.91 79.575 178.91 70.541C178.91 61.5071 171.586 54.1836 162.552 54.1836C153.518 54.1836 146.195 61.5071 146.195 70.541C146.195 79.575 153.518 86.8984 162.552 86.8984Z" fill="#949494"/>
      <path id='p1-axis-x' d="M199.356 82.8094C208.39 82.8094 215.713 75.2571 215.713 65.9409C215.713 56.6246 208.39 49.0723 199.356 49.0723C190.322 49.0723 182.999 56.6246 182.999 65.9409C182.999 75.2571 190.322 82.8094 199.356 82.8094Z" fill="#949494"/>
      <path id='p1-axis-i' d="M236.671 75.6533C245.988 75.6533 253.54 68.3298 253.54 59.2959C253.54 50.2619 245.988 42.9385 236.671 42.9385C227.355 42.9385 219.803 50.2619 219.803 59.2959C219.803 68.3298 227.355 75.6533 236.671 75.6533Z" fill="#949494"/>
      <path id='p1-axis-s' d="M273.987 78.7207C283.021 78.7207 290.344 71.3972 290.344 62.3633C290.344 53.3293 283.021 46.0059 273.987 46.0059C264.953 46.0059 257.629 53.3293 257.629 62.3633C257.629 71.3972 264.953 78.7207 273.987 78.7207Z" fill="#949494"/>
      <path id='p1-axis-controller' d="M134.949 36.343C134.949 22.4346 123.184 11.2811 109.08 12.3379C97.2481 13.2204 87.7359 22.845 86.9526 34.7116C86.2359 45.6188 92.7685 55.0895 102.194 58.7731L105.516 81.2031C105.916 83.8915 108.214 85.8769 110.923 85.8769C113.631 85.8769 115.935 83.8863 116.329 81.2031L119.651 58.7731C128.601 55.2742 134.949 46.5525 134.949 36.343Z" fill="#949494"/>
      <path id='p1-axis-bumper' d="M44.9831 113.48C61.9218 113.48 75.6533 99.5195 75.6533 82.2985C75.6533 65.0775 61.9218 51.1172 44.9831 51.1172C28.0445 51.1172 14.313 65.0775 14.313 82.2985C14.313 99.5195 28.0445 113.48 44.9831 113.48Z" fill="#949494"/>
    </svg>

    <svg id="p2" width="322" height="131" viewBox="0 0 322 131" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id='p2-axis-background' d="M289.684 44.291C273.782 39.8295 257.462 44.6215 246.501 55.4371C243.985 57.9207 239.817 57.2448 238.155 54.1302C233.52 45.4326 224.452 39.4039 214.043 39.0734C209.805 38.9382 205.773 39.7394 202.127 41.2716C198.853 42.6536 195.107 42.203 192.124 40.2702C187.691 37.396 182.403 35.7286 176.724 35.7286C170.031 35.7286 163.879 38.0469 159.034 41.9226C156.157 44.2259 152.285 44.7817 148.765 43.6851C146.099 42.8539 143.262 42.4032 140.319 42.4032C134.098 42.4032 128.343 44.4062 123.674 47.8011C120.791 49.8941 117.045 50.3047 113.681 49.123C113.616 49.103 113.555 49.0779 113.49 49.0579C109.975 47.8511 107.279 44.987 106.42 41.3768C100.661 17.0315 78.3056 -0.924541 51.9185 0.0368521C22.5787 1.1084 -0.288487 25.0631 0.0027511 54.3405C0.299011 83.7882 24.3312 107.573 53.937 107.573C63.5228 107.573 72.5261 105.074 80.3292 100.703C83.5429 98.9001 87.4696 98.7649 90.7033 100.532C94.7355 102.736 99.3601 103.993 104.281 103.993C110.503 103.993 116.257 101.99 120.927 98.5947C123.754 96.5417 127.44 96.021 130.729 97.2027C133.721 98.2792 136.955 98.8701 140.319 98.8701C147.013 98.8701 153.164 96.5517 158.009 92.6761C160.816 90.4329 164.537 89.7018 167.957 90.8134C170.713 91.7097 173.661 92.1954 176.719 92.1954C180.58 92.1954 184.256 91.4243 187.61 90.0273C190.965 88.6302 194.7 89.0258 197.713 90.9786C202.147 93.8528 207.44 95.5252 213.124 95.5252C218.035 95.5252 222.654 94.2784 226.681 92.0802C229.744 90.4078 233.576 92.2104 234.274 95.6204C237.487 111.313 249.172 124.703 265.697 129.339C289.247 135.944 313.711 122.259 320.335 98.7749C326.958 75.2909 313.234 50.8956 289.684 44.291Z" fill="white"/>
      <path id='p2-axis-a' d="M104.5 92C113.613 92 121 84.6127 121 75.5C121 66.3873 113.613 59 104.5 59C95.3873 59 88 66.3873 88 75.5C88 84.6127 95.3873 92 104.5 92Z" fill="#949494"/>
      <path id='p2-axis-x' d="M140.5 87C149.613 87 157 79.6127 157 70.5C157 61.3873 149.613 54 140.5 54C131.387 54 124 61.3873 124 70.5C124 79.6127 131.387 87 140.5 87Z" fill="#949494"/>
      <path id='p2-axis-i' d="M177 80C185.837 80 193 72.8366 193 64C193 55.1634 185.837 48 177 48C168.163 48 161 55.1634 161 64C161 72.8366 168.163 80 177 80Z" fill="#949494"/>
      <path id='p2-axis-s' d="M213.5 83C222.613 83 230 75.8366 230 67C230 58.1634 222.613 51 213.5 51C204.387 51 197 58.1634 197 67C197 75.8366 204.387 83 213.5 83Z" fill="#949494"/>
      <path id='p2-axis-controller' d="M77 41.5484C77 27.9439 65.4922 17.0341 51.6959 18.0679C40.1231 18.931 30.8187 28.3453 30.0525 39.9526C29.3514 50.6215 35.7413 59.8853 44.9605 63.4884L48.2106 85.4283C48.6012 88.0579 50.8496 90 53.4987 90C56.1478 90 58.4013 88.0529 58.7869 85.4283L62.0369 63.4884C70.7904 60.0659 77 51.5348 77 41.5484Z" fill="#949494"/>
      <path id='p2-axis-bumper' d="M278 117C294.569 117 308 103.345 308 86.5C308 69.6553 294.569 56 278 56C261.431 56 248 69.6553 248 86.5C248 103.345 261.431 117 278 117Z" fill="#949494"/>
    </svg>
    <div class="metronome" id="metronome">
      <span class="left-zone"></span>
      <span class="right-zone"></span>
    </div>
    <div class="combo" id="combo">

    </div>
  </div>

</template>
  
  <script>
  import gsap from 'gsap'
  export default {
    name: 'Controller',
    props: ['trueMetronome'],
    deta () {
      return {
        currentGame: ''
      }
    },
    mounted() {
      if(this.trueMetronome) {
        this.setupMetronome()
      } else {
        return 
      }
      $nuxt.$on('player1Button',(player, key) => {
        this.selectElement(player, key)
      })
      $nuxt.$on('player2Button',(player, key) => {
        this.selectElement(player, key)
      })
      $nuxt.$on('startTheBeat', () => {
        this.currentGame = 'theBeat'
        // this.theBeatCreateInterval()
      })
      $nuxt.$on('startTheDrop', () => {
        this.currentGame = 'theDrop'
        // this.theDropCreateInterval()
      })
    },
    methods: {
      selectElement(player, key) {
        console.log(this.currentGame)
          if (this.currentGame === 'theWouin' && typeof key === 'number') {
            this.checkValidity(player, `p${player}-axis-controller`)
            return;
          } else if(this.currentGame === 'theDrop' && key === 'w') {
            // this.addDot(player, `p${player}-axis-bumper`)
            this.checkValidity(player, `p${player}-axis-bumper`)
            return;
          } else if((key === 'a' || key === 'x' || key === 'i' || key === 's')) {
            // this.addDot(player, `p${player}-axis-${key}`)
            this.checkValidity(player, `p${player}-axis-${key}`)
            return;
          }
        },
  
      checkValidity(player, id) {
        const input = this.$game.user.leftUser.input.registerInput()
        console.log(input.valid)
        if(input.valid) {
          this.addFull(player,id)
        } else {
          this.shake(player)
          this.addDot(player,id)
        }
        this.checkCombo(input.combo)
        this.displayCombo(input.combo)
        // Shitty validation, refacto sa mère
        
        /*if(this.currentGame === 'theBeat') 
        else if(this.currentGame === 'theDrop') {
          console.log(this.dropCombo)
          this.dropCombo = 1;
          if(this.dropCombo === 1 ) {
            $nuxt.$emit('win', 'theDrop')
            this.bounce()
            //this.theDropDeleteInterval()
          }
        }*/
        },
      checkCombo(combo) {
        if(combo === 5) {
          $nuxt.$emit('win', 'theBeat')
          this.bounce()
          // this.theBeatDeleteInterval()
        } else return
      },
      displayCombo(combo){
        const comboNum = document.createElement('p')
        comboNum.innerHTML = combo
        comboNum.classList.add('combo-number')

        const comboBox = document.getElementById('combo')

        comboBox.appendChild(comboNum)

        gsap.fromTo(comboNum, {
          opacity: 0.3,
          scale: 0.5
        }, {
          opacity: 1,
          scale: 1,
          duration: 1,
          onComplete: () => {
            console.log('disapear')
            comboNum.remove()
          }
        },
        )
      },


      setupMetronome() {
        this.timing = 60 / this.$game.user.leftUser.input.beat.bpm

        const click = document.createElement('span')
        click.classList.add('click')

        const metronome = document.getElementById('metronome')

        metronome.appendChild(click)

        console.log(this.timing * 1000)
        gsap.to(click, {
          background: '#FF326F',
          x: '430px',
          yoyo: true,
          repeat: -1,
          ease: 'linear',
          duration: this.timing
        })
      },


     /* theBeatCreateInterval() {
        this.beatInterval = setInterval(this.createWaveTheBeat, this.timing  * 1000)
      },
      theDropCreateInterval() {
        this.dropInterval = setTimeout(this.createWaveTheDrop, this.timing  * 1000)
      },
      theBeatDeleteInterval() {
        clearInterval(this.beatInterval)
      },
      theDropDeleteInterval() {
        clearInterval(this.dropInterval)
      }, */
      addDot(player, id) {
        const button = document.getElementById(id)
        console.log(player, id)
        const rect = button.getBoundingClientRect()
        const posX = rect.left + (rect.width / 4)
        const posY = rect.top + (rect.height / 4)
  
        const dot = document.createElement('span')
        dot.style.left =`${posX}px`;
        dot.style.top = `${posY}px`;
        if(player === '1') {
          dot.classList.add('player1-dot')
          dot.id ='player1-dot'
          document.getElementById('controller').appendChild(dot)
        }
        else {
          dot.classList.add('player2-dot')
          dot.id ='player2-dot'
          document.getElementById('controller').appendChild(dot)
        }
        /*setTimeout(() => {
          dot.remove()
        }, 300)*/
      },
      
      addFull(player, id) {
        const button = document.getElementById(id)
        button.classList.add('active')
        setTimeout(() => {
          button.classList.remove('active')
        }, 300)
      },
      shake(player) {
        const controller = document.getElementById(`p${player}`)
        controller.classList.add('shake')
        setTimeout(() => {
          controller.classList.remove('shake')
        }, 900)
      },
      bounce() {
        const p1 = document.getElementById('p1')
        const p2 = document.getElementById('p2')
        p1.classList.add('bouncing')
        p2.classList.add('bouncing')
        setTimeout(() => {
          p1.classList.remove('bouncing')
          p2.classList.remove('bouncing')
        }, 2100)
      },
      /*
      createWaveTheBeat() {
        console.log(this.timing)
        this.p1AxisA = document.getElementById('p1-axis-a')
        this.p1Rect = this.p1AxisA.getBoundingClientRect()
        this.p2AxisA = document.getElementById('p2-axis-a')
        this.p2Rect = this.p2AxisA.getBoundingClientRect()
        const wave = document.createElement('span')
  
        this.leftPlayer = !this.leftPlayer
  
        if(this.leftPlayer) {
          var posX = this.p1Rect.left + (this.p1Rect.width / 4)
          var posY = this.p1Rect.top + (this.p1Rect.height / 4)
          wave.classList.add('p1-wave')
        } else {
          var posX = this.p2Rect.left + (this.p2Rect.width / 4)
          var posY = this.p2Rect.top + (this.p2Rect.height / 4)
          wave.classList.add('p2-wave')
        }
        wave.classList.add('wave')
    
        wave.style.setProperty('--posX',`${posX}px`);
        wave.style.setProperty('--posY', `${posY}px`);
        wave.style.setProperty('--timing', `${this.timing}s`);
        //if(player === '1') {
        document.getElementById('controller').appendChild(wave)
        //}
  
        setTimeout(() => {
          wave.remove()
        }, this.timing * 3000)
        
      },
      createWaveTheDrop() {
        this.timing = 60 / this.$game.user.leftUser.input.beat.bpm
        // console.log(60 / this.$game.user.leftUser.input.beat.bpm)

        // console.log('fjdsjfjksdh')
        this.p1bumper = document.getElementById('p1-axis-bumper')
        this.p2bumper = document.getElementById('p2-axis-bumper')
        this.p1BumpRect = this.p1bumper.getBoundingClientRect()
        this.p2BumpRect = this.p2bumper.getBoundingClientRect()

        const wave1 = document.createElement('span')
        const wave2 = document.createElement('span')
        const bump1posX = this.p1BumpRect.left + (this.p1BumpRect.width / 3.5)
        const bump1posY = this.p1BumpRect.top + (this.p1BumpRect.height / 3.5)
        const bump2posX = this.p2BumpRect.left + (this.p2BumpRect.width / 3.5)
        const bump2posY = this.p2BumpRect.top + (this.p2BumpRect.height / 3.5)
        wave1.classList.add('wave')
        wave2.classList.add('wave')
        wave2.classList.add('p2-wave')


        wave1.style.setProperty('--posX',`${bump1posX}px`);
        wave1.style.setProperty('--posY', `${bump1posY}px`);
        wave1.style.setProperty('--timing', `${this.timing}s`);

        wave2.style.setProperty('--posX',`${bump2posX}px`);
        wave2.style.setProperty('--posY', `${bump2posY}px`);
        wave2.style.setProperty('--timing', `${this.timing}s`);
        //if(player === '1') {
        document.getElementById('controller').appendChild(wave1)
        setTimeout(() => {
          document.getElementById('controller').appendChild(wave2)
        }, this.timing * 500)

        setTimeout(() => {
          this.createWaveTheDrop()
        }, this.timing * 1000)
        setTimeout(() => {
          wave1.remove()
          wave2.remove()
        }, this.timing * 3000)
      }*/
    }
  }
  </script>
  
  <style>
  .controller {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
  #p1, #p2 {
    width: 400px;
    height: auto;
    position: absolute;
  }
  
  #p1 {
    left: 5%;
    top: 90%;
    transform: translate3d(-5%, -90%, 0);
  }
  #p2 {
    right: 5%;
    top: 90%;
    transform: translate3d(-5%, -90%, 0);
  }
  
  path, svg{
    position: relative;
  }
  .player1-dot, .player2-dot {
    content: '';
    display: flex;
    position: absolute;
    border-radius: 25px;
    background: #ABEB36;
    width: 20px;
    height: 20px;
  }
  .player2-dot {
    background: #FF326F;
  }
  
  #p1 .active {
    fill: #ABEB36;
  }
  #p2 .active {
    fill: #FF326F;
  }
  .shake {
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
    backface-visibility: hidden;
  }

  .metronome {
    position: relative;
    top: 90%;
    left: 50%;
    transform: translate3d(-50%, -90%, 0);
    width: 500px;
    border-radius: 40px;
    border: 5px solid lightgray;
    height: 60px;
  }

  .left-zone, .right-zone {
    position: absolute;
    left: 0%;
    width: 100px;
    border-radius: 40px;
    border: 5px dashed #ABEB36  ;
    height: 50px;
  }
  .right-zone {
    left: auto;
    right: 0%;
    border: 5px dashed #FF326F ;
  }
  .click {
    display: block;
    position: relative;
    width: 60px;
    height: 60px;
    background:#ABEB36;
    border-radius: 100%;
    transform-origin: center;
    opacity: 1;
    z-index: 1000;
  }
  
  .wave{
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    border: 10px solid #ABEB36;
    border-radius: 100%;
    left: calc(var(--posX) - 44px);
    top: calc(var(--posY) - 44px);
    transform-origin: center;
    opacity: 0;
    /* transform: translate3d(var(--posX), var(--posY), 0);*/
    animation: wave var(--timing) var(--timing) linear forwards;
  }
  .p2-wave {
    border: 10px solid #FF326F;
  }
  .bouncing{
    animation: bouncing 1s 2 cubic-bezier(.36,.07,.19,.97) both;
  }
  
  @keyframes shake {
    10%, 90% {
      transform: translate3d(calc(-5% + -1px),  -90%, 0);
    }
    
    20%, 80% {
      transform: translate3d(calc(-5% + 2px),  -90%, 0);
    }
  
    30%, 50%, 70% {
      transform: translate3d(calc(-5% + -4px),  -90%, 0);
    }
  
    40%, 60% {
      transform: translate3d(calc(-5% + 4px),  -90%, 0);
    }
  }

  @keyframes bouncing {
    0% { 
      transform: translate3d(-5%, -90%, 0) scale(1);
    }
    20% {
      transform: translate3d(-5%, -90%, 0) scale(1.2);
    }
    40%{ 
      transform: translate3d(-5%, -90%, 0) scale(1);
    }
    60%{
      transform: translate3d(-5%, -90%, 0) scale(1.2);
    }
    80%{ 
      transform: translate3d(-5%, -90%, 0) scale(1);
    }
  }
  
  @keyframes wave {
    0% {
      transform: scale(1);
      opacity: 0;
    }
    49% {
      opacity: 0;
    }
    50% {
      transform: scale(1);
      opacity: 1;
    }
    99% { 
      transform: scale(0.40);
      opacity: 1;
    }
    100% { 
      opacity: 0;
    }
  }

  @keyframes wave-bumper {
    0% {
      transform: scale(1.2);
      opacity: 0;
    }
    49% {
      opacity: 0;
    }
    50% {
      transform: scale(1.2);
      opacity: 1;
    }
    99% { 
      transform: scale(0.60);
      opacity: 1;
    }
    100% { 
      opacity: 0;
    }
  }
  
  </style>
  