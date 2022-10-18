<template>
    <div>
        <h1>Player 1 joystick position {{player1Position.x}} // {{player1Position.y}}</h1>
        <h1>Player 2 joystick position {{player2Position.x}} // {{player2Position.y}}</h1>
    </div>
</template>
  
<script>
import Axis from "axis-api";

export default {
    data() {
        return {
            player1Position: { x: 0, y: 0 },
            player2Position: { x: 0, y: 0 },
            gamepadEmulator: Axis.createGamepadEmulator(0)
        }
    },
    mounted() {
        this.initPlayers()
        this.registerKeys() // for local listeners on computer keyboard and controller
        this.manageGameExit()
    },
    methods: {
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
            player2.addEventListener("keyup", this.player2KeyupHandler)
        },
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
        },
        manageGameExit() {
            Axis.addEventListener("exit:attempted", this.exitAttemptedHandler)
            Axis.addEventListener("exit:canceled", this.exitCanceledHandler)
            Axis.addEventListener("exit:completed", this.exitCompletedHandler)
        },
        exitAttemptedHandler() {
            pause()
        },
        exitCanceledHandler() {
            unpause()
        },
        exitCompletedHandler() {
            console.log("👋 Bye bye");
        },
        player1KeydownHandler(e) {
            this.buttonChangeColor(e, "red")
        },
        player2KeydownHandler(e) {
            this.buttonChangeColor(e, "red")
        },
        player1KeyupHandler(e) {
        },
        player2KeyupHandler(e) {
        },
        player1JoystickMoveHandler(e) {
            this.player1Position = { x: e.position.x, y: e.position.y }
        },
        player2JoystickMoveHandler(e) {
            this.player2Position = { x: e.position.x, y: e.position.y }
        },
        buttonChangeColor(button, color) {
            // console.log(button.key+button.id+" changed color to "+color)
            // button.setLedColor(color);     
        }
    },
}
</script>