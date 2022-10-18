import { Mesh, MeshBasicMaterial, Object3D, BoxGeometry } from 'three'

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
      this.setMovement()

    }, 1000)
  }
  createBoard() {
    this.board = this.assets.models.board.scene

    
    this.board.children.forEach(element => {
      let material = new MeshBasicMaterial({
        color: `#${Math.floor(Math.random()*16777215).toString(16)}`,
      })
      element.material = material
    })

    this.board.position.set(0, 1, -5)
    this.board.rotation.set(0, - Math.PI / 2, 0)
    this.container.add(this.board)
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
  setMovement() {
    this.time.on('tick', () => {
      this.board.children[0].rotation.y -= 0.01 * this.time.delta
      this.board.children[3].rotation.y += 0.01 * this.time.delta
      if(this.board.position.y > 3) {
        this.board.position.y -= this.easeInBounce(this.time.delta / 1000)
      } else if (this.board.position.y < -1) {
        this.board.position.y += this.easeInBounce(this.time.delta / 1000)
        console.log(this.easeInBounce(this.time.delta / 1000))

      }
    })
  }
}
