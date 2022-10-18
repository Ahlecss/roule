import gsap from 'gsap'
export class GameManager {
    constructor(options) {
        this.world = options.world
        this.clock = options.clock

        this.speed = 1;

        this.init();
    }

    init() {
        this.theJump();
    }

    theJump() {
        this.skateJumping()

        // faire un flip de camera

        // afficher les tutos

        // attendre les inputs

        // reward si gain

        // mouvement skate si raté

        // Recommencer 5 secondes après
    }

    skateJumping() {
        this.tl = gsap.timeline({delay: 1})

        this.tl.to(this.world.board.container.position, {
            y: - Math.PI / 8,
            duration: 0.3
        })
        this.tl.to(this.world.board.container.position, {
            y:  Math.PI / 2,
            duration: 0.4
        })
        this.tl.to(this.world.board.container.rotation, {
            z: -Math.PI / 2,
            duration: 1,
            onComplete: () => {
                this.speed = 0.2
            }
        }, '-=0.5')
        this.tl.to(this.world.board.container.rotation, {
            z: -Math.PI ,
            duration: 10,
        }, '-=1')
    }


}