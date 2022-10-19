import { Object3D, TextureLoader, SpriteMaterial, Sprite } from 'three'
let mat = require('../../assets/textures/sprite.jpeg')

export class SpriteElement {
  constructor(options) {
    // Options
    this.beat = options.beat
    this.player = options.player
    // Set up
    this.container = new Object3D()
    this.container.name = 'SpriteElement'
    this.init()
  }
  init() {
    this.setSprite(this.player)
  }
  setSprite(player) {
    const map = new TextureLoader().load( mat, (res) => {
      console.log(res)
      const material = new SpriteMaterial( { map: map } );
      const sprite = new Sprite( material );
      sprite.scale.set(5, 5, 5)
      if(player === 'player1') {
        sprite.position.set(5, Math.random(), -5) 
      } else if(player === 'player2'){
        sprite.position.set(0, Math.random(), -5) 
      }
      this.container.attach(sprite)
      console.log(sprite)
    } );
    
  }
  update(delta) {
    // this.board.children[0].rotation.y -= 0.01 * delta
    // this.board.children[3].rotation.y += 0.01 * delta

    // this.container.scale.y = 1. + Math.sin(this.beat.getBeat() * 2 * Math.PI) * 0.2
  }

}
