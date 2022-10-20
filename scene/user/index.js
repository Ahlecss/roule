import { User } from './User.js'
export class Users {
    constructor(options) {
        this.beat = options.beat
        this.clock = options.clock
        this.world = options.world
        this.combo = 0
        this.lastHit = undefined
        this.setUsers()
    }

    setUsers() {
        this.leftUser = new User({
            playerIndex: 0,
            beat: this.beat,
            clock: this.clock,
            world: this.world,
            setCombo: this.setCombo,
            getCombo: this.getCombo,
            setLastHit: this.setLastHit,
            getLastHit: this.getLastHit,
        })

    }

    setCombo(c) {
        //console.log('setCombo', c)
        this.combo = c
    }

    getCombo() {
        //console.log('getCombo')
        return this.combo
    }
    setLastHit(lastHit) {
        //console.log('setHit', lastHit)
        this.lastHit = lastHit
    }

    getLastHit() {
        //console.log('getHit')
        return this.lastHit
    }

}