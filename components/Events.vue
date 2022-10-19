<template>
    <div>
    </div>
</template>
  
<script>
import Axis from "axis-api";

export default {
    data() {
        return {
            player1isReady : false,
            player2isReady : false,
            player1Position : { x: 0, y: 0 },
            player2Position : { x: 0, y: 0 },
            gamepadEmulator : Axis.createGamepadEmulator(0)
        }
    },
    mounted() {
        this.registerKeys()
        this.initPlayers()
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
            player2.addEventListener("keydown", this.player2KeydownHandler)
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

            document.addEventListener("keydown", (event) => {
                 if (event.key == "Control") {
                    this.exitAttemptedHandler()
                } else if (event.key == "²") {
                    this.exitCanceledHandler()
                }
            });
        },
        exitAttemptedHandler() {
            this.$root.$emit('initPause')
        },
        exitCanceledHandler() {
            this.$root.$emit('closePause')
        },
        player1KeydownHandler(e) {
            if(e.key = "a" && !this.player1isReady) {   
                this.player1isReady = true
                this.$root.$emit('playerisReady', "right")
            }
            console.log("Player 1 keydown button "+e.key)
        },
        player2KeydownHandler(e) {
            if(e.key = "a" && !this.player2isReady) {   
                this.player2isReady = true
                this.$root.$emit('playerisReady', "left")
            }
            console.log("Player 2 keydown button "+e.key)
        },
        player1KeyupHandler(e) {
            console.log("Player 1 keyup button "+e.key)
        },
        player2KeyupHandler(e) {
            console.log("Player 2 keyup button "+e.key)
        },
        player1JoystickMoveHandler(e) {
            this.player1Position.x = e.position.x
            this.player1Position.y = e.position.y 
        },
        player2JoystickMoveHandler(e) {
            this.player2Position.x = e.position.x
            this.player2Position.y = e.position.y 
        }
    },
}
</script>
