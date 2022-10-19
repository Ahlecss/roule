import { Object3D, TextureLoader, PlaneGeometry, MeshBasicMaterial, Mesh, DoubleSide } from 'three'
let mat = require('../../assets/textures/sprite.jpeg')

export class Sprites {
  constructor(options) {
    // Options
    this.beat = options.beat
    this.player = options.player
    this.groundRadius = options.radius
    this.size = 5
    this.sprites = []

    // Set up
    this.container = new Object3D()
    this.container.name = 'SpriteElement'
    this.init()
  }
  init() {
    this.map = new TextureLoader().load(mat, (res) => {
      this.setSprite()
      // this.initEvents()
    });

  }

  setSprite() {
    this.geometry = new PlaneGeometry(this.size, this.size);
    this.material = new MeshBasicMaterial({ color: 0xffff00, map: this.map });
  }

  createSprite(playerIndex) {
    let plane = new Mesh(this.geometry, this.material);
    let x = (playerIndex - 0.5) * 2
    x = x * (5 * Math.random() + 5)
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
