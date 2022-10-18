import { User } from './User.js'
export class Users {
    constructor(options) {
        this.beat = options.beat
        this.clock = options.clock
        this.setUsers()
    }

    setUsers() {
        this.leftUser = new User({
            userIndex: 0,
            beat: this.beat,
            clock: this.clock
        })

        // this.rightUser = new User({
        //     userIndex: 1,
        //     beat: this.beat,
        //     clock: this.clock
        // })
    }

}