import { Object3D } from "three"
import { Ground } from "./world/ground.js"
import { Board } from "./world/board.js"

export class World {
    constructor(options) {
        this.beat = options.beat
        this.container = new Object3D()
        this.setGround()
        this.setBoard()
    }

    setGround() {
        this.ground = new Ground({
            beat: this.beat
        })
        this.container.add(this.ground.container)
    }

    setBoard() {
        this.board = new Board()
        this.container.add(this.board.container)
    }

    update(delta) {
        this.ground.update(delta)
    }
}