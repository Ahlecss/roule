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

export class Game {
  constructor() {
  }

  init(options) {
    console.log('init game')
    this.canvas = options.canvas
    this.setRenderer()
    this.setCamera()
    this.setGameManager()
    this.setClock()
    this.setBeat()
    this.setWorld()
    this.setEvents()
    this.setUser()
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
    this.scene.add(this.camera.camera)
  }

  setClock() {

    this.clock = new Clock({
      autoStart: true
    })
  }

  setWorld() {
    this.world = new World({
      beat: this.beat
    })
    this.scene.add(this.world.container)
  }

  setBeat() {
    this.beat = new Beat({
      clock: this.clock,
      gameManager: this.gameManager
    })
  }

  setGameManager() {
    this.gameManager = new GameManager()
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

  setUser() {
    this.user = new Users({
      beat: this.beat,
      clock: this.clock
    })
  }

  update() {
    requestAnimationFrame(this.update.bind(this))
    let delta = this.clock.getDelta() * this.gameManager.speed
    this.world.update(delta)
    this.beat.update()
    this.renderer.render(this.scene, this.camera.camera)
  }
}