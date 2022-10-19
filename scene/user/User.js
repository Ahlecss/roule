import { Input } from './Input.js'
export class User {
    constructor(options) {
        this.beat = options.beat
        this.clock = options.clock
        this.world = options.world
        this.playerIndex = options.playerIndex

        this.setInput()
    }
    setInput() {
        this.input = new Input({
            playerIndex: this.playerIndex,
            beat: this.beat,
            clock: this.clock,
            world: this.world
        })
    }

}