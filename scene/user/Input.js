export class Input {
    constructor(options) {
        this.playerIndex = options.playerIndex
        this.beat = options.beat
        this.clock = options.clock
        this.world = options.world
        this.lastHit = undefined
        this.combo = 0
        // this.setEvents()
    }

    registerInput() {
            let valid = this.inputIsValid()
            if (valid) {
                this.combo++
                this.world.sprites.createSprite(this.playerIndex)
            } else {
                this.combo = 0
            }
            return {
                valid: valid, 
                combo: this.combo
            }
    }

    inputIsValid() {
        if (this.lastHit) {
            let deltaHit = this.clock.getElapsedTime() - this.lastHit
            let userBPM = 60 / deltaHit
            let deltaBPM = Math.abs(userBPM - this.beat.bpm)

            this.lastHit = this.clock.getElapsedTime()

            if (deltaBPM < 20) {
                return true
            }

            else {
                return false
            }
        }

        this.lastHit = this.clock.getElapsedTime()
        return true
    }
}