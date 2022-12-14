export class Beat {
    constructor(options) {
        this.clock = options.clock
        this.speed = options.speed

        this.gameManager = options.gameManager
        this.bpmOriginal = 100
        this.bpm = this.bpmOriginal * this.speed
        this.delta = 0
        this.lastTotal = this.getBeatTotal()
    }

    getBeat() {
        return this.getBeatTotal() % 1
    }

    getBeatTotal() {
        let time = this.clock.getElapsedTime()
        let b = (time / 60 * this.bpm)
        return b
    }

    getBeatDelta() {
        return this.delta
    }

    update() {
        this.delta = this.getBeatTotal() - this.lastTotal
        this.lastTotal = this.getBeatTotal()
    }
}