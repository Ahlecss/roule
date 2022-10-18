export class Beat {
    constructor(options) {
        this.clock = options.clock
        this.speed = options.speed
        console.log(options)
        this.gameManager = options.gameManager
        this.bpm = 111 * this.speed
    }

    getBeat() {
        let time = this.clock.getElapsedTime()
        let b = (time / 60 * this.bpm) % 1
        return b
    }

    update() { }
}