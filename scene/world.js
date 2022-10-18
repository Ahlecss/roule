import { Object3D } from "three"
import { Ground } from "./world/ground.js"

export class World {
    constructor(options) {
        this.beat = options.beat
        this.container = new Object3D()
        this.setGround()
    }

    setGround() {
        this.ground = new Ground({
            beat: this.beat
        })
        this.container.add(this.ground.container)
    }

    update(delta) {
        this.ground.update(delta)
    }
}