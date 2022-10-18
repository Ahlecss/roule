export class Input {
    constructor(options) {
        this.beat = options.beat
        this.clock = options.clock
        this.lastHit = undefined
        this.combo = 0
        this.setEvents()
    }

    setEvents() {
        window.addEventListener('keydown', (e) => {
            let valid = this.inputIsValid()
            if (valid) {
                this.combo++
            } else {
                this.combo = 0
            }
            console.log('combo: ' + this.combo)
        })
    }

    inputIsValid() {
        if (this.lastHit) {
            let deltaHit = this.clock.getElapsedTime() - this.lastHit
            let userBPM = 60 / deltaHit
            let deltaBPM = Math.abs(userBPM - this.beat.bpm)
            // console.log(deltaBPM)
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