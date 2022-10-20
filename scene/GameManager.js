export class GameManager {
    constructor(options) {
        this.world = options.world
        this.beat = options.beat
        this.camera = options.camera
        this.setSpeed = options.setSpeed
        this.badges = []
        this.games = ['theBeat', 'theJump']

        requestAnimationFrame(() => {
            this.init();
        })
    }

    init() {
        this.chooseRandomGame()
    }

    chooseRandomGame() {
        var randomGame = this.games[Math.floor(this.games.length * Math.random())];
        this[randomGame]()
    }

    addBadge(badge) {
        this.badges.push(badge)
        this.world.board.updateOverlayBadge(this.badges)
    }

    theJump() {
        $nuxt.$emit('changeCurrentTitle', 'The Jump')

        console.log('the jump')
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

        // remove le jeu du GameManager
        // si le jeu est réussi > addBadges
        this.addBadge("jump")
    }

    theBeat() {
        console.log('the beat')
        $nuxt.$emit('changeCurrentTitle', 'The Beat')

        $nuxt.$emit('startTheBeat')

        // Lancer la musique

        

        // démarrer un rythme en même temps

        // Si trop lent, trop rapide, ou trop déphasé, recommencer

        // Créer les patterns visuel pour rester sur ce rythme
    }



}