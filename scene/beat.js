export class Beat {
    constructor(options) {
        this.clock = options.clock
        console.log(options)
        this.gameManager = options.gameManager
        this.bpm = 111 * this.gameManager.speed
    }

    getBeat() {
        let time = this.clock.getElapsedTime()
        let b = (time / 60 * this.bpm) % 1
        return b
    }

    update() { }
}