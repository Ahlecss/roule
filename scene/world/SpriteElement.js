import { Object3D, TextureLoader, PlaneGeometry, MeshBasicMaterial, Mesh, DoubleSide } from 'three'
let mat = require('../../assets/textures/sprite.jpeg')

export class SpriteElement {
  constructor(options) {
    // Options
    this.beat = options.beat
    this.player = options.player
    this.groundRadius = options.radius
    // Set up
    this.container = new Object3D()
    this.container.name = 'SpriteElement'
    this.init()
  }
  init() {
    this.map = new TextureLoader().load( mat, (res) => {
      this.setSprite()
      this.initEvents()
  } );

  }
  initEvents() {
    document.addEventListener('keydown', (e) => {
        // console.log(e)
        if (e.code === 'KeyD') {
            this.showSprite('player1')
        }
        else if (e.code === 'KeyF') {
            this.showSprite('player2')
        }
    })
}
  setSprite() {
    this.geometry = new PlaneGeometry( 5, 5 );
    this.material = new MeshBasicMaterial( {color: 0xffff00, side: DoubleSide} );
  }

  showSprite(player) {
    const plane = new Mesh( this.geometry, this.material );
    plane.rotateX(-Math.PI / 2)
      if(player === 'player1') {
       plane.position.set(5, 0, this.groundRadius / 2) 
      } else if(player === 'player2'){
       plane.position.set(0, 0, this.groundRadius / 2) 
      }
      this.container.attach(plane)
      console.log(plane)
  }
  update(delta) {
    // this.board.children[0].rotation.y -= 0.01 * delta
    // this.board.children[3].rotation.y += 0.01 * delta

    // this.container.scale.y = 1. + Math.sin(this.beat.getBeat() * 2 * Math.PI) * 0.2
  }

}
