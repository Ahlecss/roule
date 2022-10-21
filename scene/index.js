import {
  Clock,
  Scene,
  sRGBEncoding,
  WebGLRenderer,
} from 'three'

import { Camera } from './Camera.js'
import { World } from './world/index.js'
import { Beat } from './Beat.js'
import { Users } from './user/index.js'
import { GameManager } from './GameManager.js'
import { PostProcessing } from './PostProcessing.js'
import { AudioHandler } from './AudioHandler.js'

export class Game {
  constructor() {
  }

  init(options) {
    this.canvas = options.canvas
    this.speed = 1
    this.setRenderer()
    this.setClock()
    this.setBeat()
    this.setWorld()
    this.setCamera()
    this.setAudio()
    this.setGameManager()
    this.setEvents()
    this.setUsers()
    this.setPostProcessing()
    this.setSpeed()
    this.update()
  }

  setRenderer() {
    this.scene = new Scene()

    this.renderer = new WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    })
    this.renderer.clearColor(0x000000)

    this.renderer.outputEncoding = sRGBEncoding
    this.renderer.setPixelRatio(window.devicePixelRatio)

    this.renderer.setSize(
      window.innerWidth,
      window.innerHeight
    )

  }
  setCamera() {
    this.camera = new Camera()
    this.world.board.container.attach(this.camera.camera)
  }

  setClock() {
    this.clock = new Clock({
      autoStart: true
    })
  }

  setWorld() {
    this.world = new World({
      beat: this.beat,
      speed: this.speed
    })
    this.scene.add(this.world.container)
  }

  setBeat() {
    this.beat = new Beat({
      clock: this.clock,
      speed: this.speed
    })
  }

  setGameManager() {
    this.gameManager = new GameManager({
      world: this.world,
      beat: this.beat,
      camera: this.camera,
      audioHandler: this.audioHandler,
      setSpeed: (s) => this.setSpeed(s)
    })
  }

  setSpeed(s) {
    $nuxt.$on('setSpeed', s => {
      this.speed = s
    })
  }
  
  updateSpeed(s) {
    this.audioHandler.setSpeed(
      this.lerp(this.audioHandler.speed, this.speed, 0.1)
    )
    this.beat.bpm = this.beat.bpmOriginal * this.lerp(this.audioHandler.speed, this.speed, 0.1)
  }

  setEvents() {
    window.addEventListener('resize', () => {
      this.renderer.setSize(
        window.innerWidth,
        window.innerHeight
      )
      this.camera.resize()
    })
  }

  setUsers() {
    this.user = new Users({
      beat: this.beat,
      clock: this.clock,
      world: this.world,
    })
  }

  setPostProcessing() {
    this.postProcessing = new PostProcessing({
      renderer: this.renderer,
      camera: this.camera,
      scene: this.scene,
      beat: this.beat,
    })
  }

  setAudio() {
    this.audioHandler = new AudioHandler()
    this.camera.camera.add(this.audioHandler.container)
    addEventListener('pointerdown', () => {
      this.audioHandler.setAudio()
    })
    addEventListener('keydown', () => {
      this.audioHandler.setAudio()
    })
  }

  update() {
    requestAnimationFrame(this.update.bind(this))
    let delta = this.beat.getBeatDelta() * this.speed
    this.world.update(delta)
    this.beat.update()
    this.updateSpeed()
    this.audioHandler.update()
    this.postProcessing.update(delta)
  }

  lerp(a, b, n) {
    return (1 - n) * a + n * b
  }
}