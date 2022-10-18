import { Input } from './Input.js'
export class User {
    constructor(options) {
        this.beat = options.beat
        this.clock = options.clock
        this.userIndex = options.userIndex

        this.setInput()
    }
    setInput() {
        this.input = new Input({
            beat: this.beat,
            clock: this.clock
        })
    }

}