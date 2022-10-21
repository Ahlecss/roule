import { Mesh, MeshBasicMaterial, Object3D, BoxGeometry, PlaneGeometry, ShaderMaterial, TextureLoader, Vector2, Vector3 } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
let boardURL = require('../../assets/models/board.glb')
let stickers = require('@/assets/img/PNG_stickers-HD.png')
let stickersMask = require('@/assets/img/MASK_stickers-HD.png')
import gsap, { Power3 } from 'gsap'


export class Board {
  constructor(options) {
    // Options
    this.beat = options.beat
    this.speed = options.speed
    // Set up
    this.container = new Object3D()
    this.container.name = 'Board'
    this.loader = new GLTFLoader()
    this.badge1 = 0.2
    this.badge2 = 0.2
    this.badge3 = 0.2
    this.badge4 = 0.2
    this.loadBoard()
  }
  loadBoard() {
    this.loader.load(boardURL.default, (gltf) => {
      this.board = gltf.scene
      this.container.add(this.board)
      this.setBoard()
    })
  }
  setBoard() {
    this.container.position.z = 4
    this.setBoardOverlay()
  }
  setBoardOverlay() {
    this.overlayGeometry = new PlaneGeometry(1, 5)
    this.maskMaterial = new ShaderMaterial({
      transparent: true,
      uniforms: {
        badge1: { value: this.badge1 },
        badge2: { value: this.badge2 },
        badge3: { value: this.badge3 },
        badge4: { value: this.badge4 },
        stickerT: { value: this.stickersText },
        stickerM: { value: this.stickersMask },
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

      uniform float badge1;
      uniform float badge2;
      uniform float badge3;
      uniform float badge4;
      uniform sampler2D stickerT;
      uniform sampler2D stickerM;

      void main() {
          vec2 uv = vUv;
          vec4 sticker = texture2D(stickerT, uv).rgba;
          vec3 mask = texture2D(stickerM, uv).rgb;

          float sticker1 = 1. - step(0.02, distance(mask.r, 204. / 255.)); 
          sticker1 *= badge1;
          float sticker2 = 1. - step(0.02, distance(mask.r, 153. / 255.)); 
          sticker2 *= badge2;
          float sticker3 = 1. - step(0.02, distance(mask.r, 102. / 255.)); 
          sticker3 *= badge3;
          float sticker4 = 1. - step(0.02, distance(mask.r, 51. / 255.)); 
          sticker4 *= badge4;
          
          vec3 color = vec3(0.);
          color = (sticker1 + sticker2 + sticker3 + sticker4) * sticker.rgb;
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
    this.overlay = new Mesh(this.overlayGeometry, this.maskMaterial)
    this.overlay.name = "Overlay"
    this.overlay.rotation.x = 1.64
    this.overlay.position.y = 0.65
    this.overlay.position.z = -1.2
    this.overlay.scale.set(0.920, 0.850, 0.850)
    this.board.add(this.overlay)
  }
  updateOverlayBadge(badges) {
    badges.map((badge) => {
      switch (badge) {
        case "theBeat":
          this.maskMaterial.uniforms.badge1.value = 1
          break;
        case "theSolo":
          this.maskMaterial.uniforms.badge3.value = 1
          break;
        case "theWouin":
          this.maskMaterial.uniforms.badge2.value = 1
          break;
        case "theDrop":
          this.maskMaterial.uniforms.badge4.value = 1
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

  skateDrop() {
    this.tl = gsap.timeline({ delay: 3 })
    // this.tl.duration(this.tl.duration * this.speed)

    this.tl.to(this.container.position, {
      y: - Math.PI / 8,
      duration: 0.4 * this.speed,
      onComplete: () => {
        $nuxt.$emit('setSpeed', 0.3)
      }
    })
    this.tl.to(this.container.position, {
      y: Math.PI,
      duration: 0.4 * this.speed,
    })
    this.tl.to(this.container.rotation, {
      z: -Math.PI / 2,
      duration: 1 * this.speed,
    }, '-=0.5')
    this.tl.to(this.container.rotation, {
      z: -Math.PI,
      duration: 4 * this.speed,
    }, '-=1')
    this.tl.to(this.container.rotation, {
      z: - 2 * Math.PI,
      duration: 10 * this.speed,
      onComplete: () => {
        $nuxt.$emit('setSpeed', 1)
      }
    }, '-=1')
    this.tl.to(this.container.position, {
      y: Math.PI / 8,
      duration: 2 * this.speed,
    }, `-= ${5 * this.speed}`)
    this.tl.to(this.container.position, {
      y: 0,
      duration: 1 * this.speed,
    })
  }

  endSkateDrop() {
    this.tl.kill()
    gsap.to(this.container.rotation, {
      z: - 2 * Math.PI,
      duration: 2 * this.speed,
      ease: 'linear',
    })
    setTimeout(() => {
      $nuxt.$emit('setSpeed', 1)
    }, 2000)
    gsap.to(this.container.position, {
      y: 0,
      duration: 2 * this.speed,
      ease: 'linear'
    })
  }
  update(delta) {
    if (this.board) {
      this.board.children[1].rotateZ(delta * 15.)
      this.board.children[2].rotateZ(delta * 15.)
      this.board.scale.y = 1. - this.easeInBack(Math.sin(this.beat.getBeat() * 2 * Math.PI) / 2 + 0.5) * 0.15
    }

  }
  easeInBack(x) {
    const c1 = 1.70158;
    const c3 = c1 + 1;

    return c3 * x * x * x - c1 * x * x;
  }
}
