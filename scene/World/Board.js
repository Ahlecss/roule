import { Mesh, MeshStandardMaterial, Object3D, BoxGeometry } from 'three'

export default class Board {
  constructor(options) {
    // Options
    this.time = options.time
    this.assets = options.assets

    // Set up
    this.container = new Object3D()
    this.container.name = 'Board'

    setTimeout(() => {
      console.log(this.assets.models)
      this.createBoard()

    }, 1000)
    // this.setMovement()
  }
  createBoard() {
    this.board = this.assets.models.board.scene

    let material = new MeshStandardMaterial({
      ambient: 0x050505,
      color: 0x0033ff,
      shininess: 30,
      metalness: 1,
      roughness: 1,
    })

    this.board.material = material

    this.board.position.set(0, 1, -5)
    this.board.rotation.set(0, - Math.PI / 2, 0)
    this.container.add(this.board)
  }
  setMovement() {
    this.time.on('tick', () => {
      this.board.rotation.y += 0.001 * this.time.delta
    })
  }
}
