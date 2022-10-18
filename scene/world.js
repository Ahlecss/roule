import { Object3D } from "three"
import { Ground } from "./World/ground.js"
import { Board } from "./World/board.js"

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
        this.board = new Board({
            beat: this.beat
        })
        this.container.add(this.board.container)
    }

    update(delta) {
        this.ground.update(delta)
        this.board.update(delta)
    }
}