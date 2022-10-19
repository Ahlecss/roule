import { User } from './User.js'
export class Users {
    constructor(options) {
        this.beat = options.beat
        this.clock = options.clock
        this.world = options.world
        this.setUsers()
    }

    setUsers() {
        this.leftUser = new User({
            playerIndex: 0,
            beat: this.beat,
            clock: this.clock,
            world: this.world
        })

        // this.rightUser = new User({
        //     playerIndex: 1,
        //     beat: this.beat,
        //     clock: this.clock,
        //     world: this.world
        // })
    }

}