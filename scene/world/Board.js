import { Mesh, MeshBasicMaterial, Object3D, BoxGeometry, PlaneGeometry, ShaderMaterial, TextureLoader, Vector2, Vector3 } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
let boardURL = require('../../assets/models/board.glb')
let stickers = require('../../assets/img/stickers.png')
let stickersMask = require('../../assets/img/stickers_mask.png')
import gsap from 'gsap'


export class Board {
  constructor(options) {
    // Options
    this.beat = options.beat
    // Set up
    this.container = new Object3D()
    this.container.name = 'Board'
    this.loader = new GLTFLoader()
    this.vecBadges = new Vector3(0.2, 0.2, 0.2)
    this.loadBoard()
  }
  loadBoard() {
    this.loader.load(boardURL.default, (gltf) => {
      console.log('loaded')
      this.board = gltf.scene
      this.container.add(this.board)
      this.setBoard()
    })
  }
  setBoard() {
    this.board.children.forEach(element => {
      let material = new MeshBasicMaterial({
        color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      })
      element.material = material
    })
    this.setBoardOverlay()
  }
  setBoardOverlay() {
    this.overlayGeometry = new PlaneGeometry( 2, 5 )
    this.maskMaterial = new ShaderMaterial({
      transparent: true,
      uniforms: {
         activated: {type : "v2v", value : this.vecBadges},
         stickerT : {value : this.stickersText},
         stickerM : {value : this.stickersMask},
      },
      vertexShader: `
      varying vec2 vUv;
      void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
  `,
      fragmentShader: `
      varying vec2 vUv;

      uniform vec3 activated;
      uniform sampler2D stickerT;
      uniform sampler2D stickerM;

      void main() {
          vec2 uv = vUv;
          vec4 sticker = texture2D(stickerT, uv).rgba;
          vec3 mask = texture2D(stickerM, uv).rgb;

          float sticker1 = 1. - step(0.02, distance(mask.r, 1.));
          sticker1 *= activated.r;
          float sticker2 = 1. - step(0.02, distance(mask.r, 0.66));
          sticker2 *= activated.g;
          float sticker3 = 1. - step(0.02, distance(mask.r, 0.33));
          sticker3 *= activated.b;
          
          vec3 color = vec3(0.);
          color = (sticker1 + sticker2 + sticker3) * sticker.rgb;
          gl_FragColor = vec4(color, sticker.a);
      }
    `,
    })
    
    new TextureLoader().load(stickers, (tex) => {
      this.maskMaterial.uniforms.stickerT.value = tex
    })
    new TextureLoader().load(stickersMask, (tex) => {
      this.maskMaterial.uniforms.stickerM.value = tex
    })
    this.overlay = new Mesh( this.overlayGeometry, this.maskMaterial )
    this.overlay.name = "Overlay"
    this.overlay.rotation.x = Math.PI / 2
    this.overlay.position.y = 0.68
    this.container.add(this.overlay)
  }
  updateOverlayBadge(badges) {
    badges.map((badge) => {
      switch(badge){
        case "beat":
          this.vecBadges.x = 1
          break;
        case "wouinn":
          this.vecBadges.y = 1
          break;
        case "jump":
          this.vecBadges.z = 1
          break;
      }
    })
  }
  easeInBounce(x) {
    return 1 - this.easeOutBounce(1 - x);
  }
  easeOutBounce(x) {
    const n1 = 7.5625;
    const d1 = 2.75;

    if (x < 1 / d1) {
      return n1 * x * x;
    } else if (x < 2 / d1) {
      return n1 * (x -= 1.5 / d1) * x + 0.75;
    } else if (x < 2.5 / d1) {
      return n1 * (x -= 2.25 / d1) * x + 0.9375;
    } else {
      return n1 * (x -= 2.625 / d1) * x + 0.984375;
    }
  }

  skateJump() {
    this.tl = gsap.timeline({delay: 1})
    console.log(this.beat)
    this.tl.progress(this.tl.progress)

    this.tl.to(this.container.position, {
        y: - Math.PI / 8,
        duration: 0.3
    })
    this.tl.to(this.container.position, {
        y:  Math.PI / 2,
        duration: 0.4
    })
    this.tl.to(this.container.rotation, {
        z: -Math.PI / 2,
        duration: 1,
        onComplete: () => {
            this.speed = 0.2
        }
    }, '-=0.5')
    this.tl.to(this.container.rotation, {
        z: -Math.PI ,
        duration: 10,
    }, '-=1')
}
  update(delta) {
    this.container.scale.y = 1. - this.easeInBack(Math.sin(this.beat.getBeat() * 2 * Math.PI) / 2 + 0.5) * 0.2
  }
  easeInBack(x) {
    const c1 = 1.70158;
    const c3 = c1 + 1;

    return c3 * x * x * x - c1 * x * x;
  }
}
