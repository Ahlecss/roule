import { Object3D } from "three"
import { Ground } from "./Ground.js"
import { Board } from "./Board.js"
import { Sprites } from './Sprites.js'
import { Faces } from "./Faces.js"

export class World {
    constructor(options) {
        this.beat = options.beat
        this.container = new Object3D()
        this.setGround()
        this.setBoard()
        this.setSprite()
        this.setFaces()
    }

    setGround() {
        this.ground = new Ground({
            beat: this.beat
        })
        this.container.add(this.ground.container)
    }

    setBoard() {
        this.board = new Board({
            beat: this.beat
        })
        this.container.add(this.board.container)
    }

    setSprite(player) {
        this.sprites = new Sprites({
            beat: this.beat,
            radius: this.ground.radius
        })
        this.ground.container.add(this.sprites.container)
    }

    setFaces() {
        this.faces = new Faces()
        this.board.container.add(this.faces.container)
    }

    update(delta) {
        this.ground.update(delta)
        this.board.update(delta)
        this.sprites.update(delta)
        this.faces.update(delta)
    }
}