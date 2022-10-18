export class Beat {
    constructor(options) {
        this.clock = options.clock
        this.bpm = 97
    }

    getBeat() {
        let time = this.clock.getElapsedTime()
        let b = (time / 60 * this.bpm) % 1
        return b
    }

    update() { }
}