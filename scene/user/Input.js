export class Input {
    constructor(options) {
        this.playerIndex = options.playerIndex
        this.beat = options.beat
        this.clock = options.clock
        this.world = options.world
        this.setCombo = options.setCombo
        this.getCombo = options.getCombo
        this.setLastHit = options.setLastHit
        this.getLastHit = options.getLastHit
    }

    registerInput() {
        let valid = this.inputIsValid()
        if (valid) {
            let c = this.getCombo() + 1
            this.setCombo(c)
            this.world.sprites.createSprite(this.playerIndex)
        } else {
            this.setCombo(0)
        }
        return {
            valid: valid,
            combo: this.getCombo()
        }
    }

    inputIsValid() {
        if (this.getLastHit() != undefined) {
            let deltaHit = this.clock.getElapsedTime() - this.getLastHit()
            let userBPM = 60 / deltaHit
            let deltaBPM = Math.abs(userBPM - this.beat.bpm)

            this.setLastHit(this.clock.getElapsedTime())

            if (deltaBPM < 20) {
                return true
            }


            else {
                return false
            }
        }

        this.setLastHit(this.clock.getElapsedTime())
        return false
    }
}