import { Object3D, TextureLoader, PlaneGeometry, MeshBasicMaterial, Mesh, DoubleSide } from 'three'
let urls = [
  require('../../assets/textures/buildings/bottle-min.png'),
  require('../../assets/textures/buildings/box-min.png'),
  require('../../assets/textures/buildings/building1-min.png'),
  require('../../assets/textures/buildings/building2-min.png'),
  require('../../assets/textures/buildings/building3-min.png'),
  require('../../assets/textures/buildings/building4-min.png'),
  require('../../assets/textures/buildings/building5-min.png'),
  require('../../assets/textures/buildings/building6-min.png'),
  require('../../assets/textures/buildings/building7-min.png'),
  require('../../assets/textures/buildings/building8-min.png'),
  require('../../assets/textures/buildings/building9-min.png'),
  require('../../assets/textures/buildings/fence-min.png'),
  require('../../assets/textures/buildings/palm-min.png'),
  require('../../assets/textures/buildings/palm2-min.png'),
  require('../../assets/textures/buildings/palm3-min.png'),
  require('../../assets/textures/buildings/trash-min.png'),

]

export class Sprites {
  constructor(options) {
    // Options
    this.beat = options.beat
    this.player = options.player
    this.groundRadius = options.radius
    this.size = 5
    this.sprites = []
    this.maps = []

    // Set up
    this.container = new Object3D()
    this.container.name = 'SpriteElement'
    this.init()
  }
  init() {
    this.setSprite()
    let loader = new TextureLoader()
    for (let i = 0; i < urls.length; i++) {
      loader.load(urls[i], (res) => {
        this.maps.push(res)
      });
    }

  }

  setSprite() {
    this.geometry = new PlaneGeometry(this.size, this.size);
    this.material = new MeshBasicMaterial({ transparent: true });
  }

  createSprite(playerIndex) {
    let plane = new Mesh(this.geometry, this.material.clone());
    let index = Math.floor(Math.random() * this.maps.length)
    plane.material.map = this.maps[index]
    let x = (playerIndex - 0.5) * 4
    x = x * 3
    plane.position.set(x, -this.groundRadius, -this.groundRadius - this.size / 2)
    plane.rotateX(-Math.PI / 2)
    this.container.attach(plane)
    this.sprites.push(plane)
    setTimeout(() => {
      this.container.remove(plane)
      plane = null
      this.sprites.splice(this.sprites.indexOf(plane), 1)
    }, 2000)
  }

  update(delta) {
    let a = this.easeInBack(Math.sin(this.beat.getBeatTotal() * 2 * Math.PI) / 2 + 0.5)
    for (let i = 0; i < this.sprites.length; i++) {
      let s = this.sprites[i]
      s.scale.y = 1 + a
    }
  }

  easeInBack(x) {
    const c1 = 1.70158;
    const c3 = c1 + 1;

    return c3 * x * x * x - c1 * x * x;
  }
}
