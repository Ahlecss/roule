import Axis from "axis-api";
import { User } from './User.js'
export class Users {
    constructor(options) {
        this.beat = options.beat
        this.clock = options.clock
        this.world = options.world
        this.combo = 0
        this.lastHit = undefined
        this.player1isReady = false
        this.player2isReady = false
        this.gamepadEmulator = Axis.createGamepadEmulator(0)
        this.registerKeys()
        this.initPlayers()
        this.manageGameExit()
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

    initPlayers() {
        const player1 = Axis.createPlayer({
            id: 1,
            joysticks: Axis.joystick1,
            buttons: Axis.buttonManager.getButtonsById(1)
        });

        const player2 = Axis.createPlayer({
            id: 2,
            joysticks: Axis.joystick2,
            buttons: Axis.buttonManager.getButtonsById(2)
        });

        player1.addEventListener("joystick:move", this.player1JoystickMoveHandler)
        player1.addEventListener("keydown", this.player1KeydownHandler)
        player1.addEventListener("keyup", this.player1KeyupHandler)

        player2.addEventListener("joystick:move", this.player2JoystickMoveHandler)
        player2.addEventListener("keydown", this.player2KeydownHandler)
        player2.addEventListener("keyup", this.player2KeyupHandler)
    }

    registerKeys() {
        // Map Keyboard Keys to Axis Machine Buttons from group 1
        Axis.registerKeys("q", "a", 1); // keyboard key "q" to button "a" from group 1
        Axis.registerKeys("d", "x", 1); // keyboard key "d" to button "x" from group 1
        Axis.registerKeys("z", "i", 1); // keyboard key "z" to button "i" from group 1
        Axis.registerKeys("s", "s", 1); // keyboard key "s" to button "s" from group 1
        Axis.registerKeys(" ", "w", 1); // keyboard key Space to button "w" from group 1

        // Map Keyboard Keys to Axis Machine Buttons from group 2
        Axis.registerKeys("ArrowLeft", "a", 2); // keyboard key "ArrowLeft" to button "a" from group 2
        Axis.registerKeys("ArrowRight", "x", 2); // keyboard key "ArrowRight" to button "x" from group 2
        Axis.registerKeys("ArrowUp", "i", 2); // keyboard key "ArrowUp" to button "i" from group 2
        Axis.registerKeys("ArrowDown", "s", 2); // keyboard key "ArrowDown" to button "s" from group 2
        Axis.registerKeys("Enter", "w", 2); // keyboard key "Enter" to button "w" from group 2

        // Assign machine joysticks to controller ones
        Axis.joystick1.setGamepadEmulatorJoystick(this.gamepadEmulator, 0)
        Axis.joystick2.setGamepadEmulatorJoystick(this.gamepadEmulator, 1)

        const update = () => {
            this.gamepadEmulator.update()
            requestAnimationFrame(update)
        }
        update();
    }

    manageGameExit() {
        Axis.addEventListener("exit:attempted", this.exitAttemptedHandler)
        Axis.addEventListener("exit:canceled", this.exitCanceledHandler)
        Axis.addEventListener("exit:completed", this.exitCompletedHandler)
    }

    player1KeydownHandler(e) {
        if (e.key = "a" && !this.player1isReady) {
            this.player1isReady = true
            $nuxt.$emit('playerisReady', 1)
        }
    }

    player2KeydownHandler(e) {
        if (e.key = "a" && !this.player2isReady) {
            this.player2isReady = true
            $nuxt.$emit('playerisReady', 2)
        }
    }

    player1KeyupHandler(e) {
        $nuxt.$emit('player1Button', '1', e.key)
    }

    player2KeyupHandler(e) {
        $nuxt.$emit('player2Button', '2', e.key)
    }

    player1JoystickMoveHandler(e) {
        if (e.position.x >= 0)
            $nuxt.$emit('player1Joystick', e.position.x)
    }

    player2JoystickMoveHandler(e) {
        if (e.position.x <= 0)
            $nuxt.$emit('player2Joystick', e.position.x)
    }

}