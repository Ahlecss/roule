export class GameManager {
    constructor(options) {
        this.world = options.world
        this.beat = options.beat
        this.camera = options.camera
        this.setSpeed = options.setSpeed

        this.init();
    }

    init() {
        // this.theJump();
    }

    theJump() {
        this.setSpeed(0.2)
        this.world.board.skateJump()
        this.camera.cameraJump()
        // this.skateJumping()

        // faire un flip de camera

        // afficher les tutos

        // attendre les inputs

        // reward si gain

        // mouvement skate si raté
        // Recommencer 5 secondes après
        
    }



}