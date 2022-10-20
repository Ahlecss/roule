export class GameManager {
    constructor(options) {
        this.world = options.world
        this.beat = options.beat
        this.camera = options.camera
        this.setSpeed = options.setSpeed
        this.badges = []
        // this.games = ['theBeat',  'theWouin']
        this.games = ['theWouin']

        requestAnimationFrame(() => {
            this.init();
        }, 1000)
    }

    init() {
        this.chooseRandomGame()
    }

    chooseRandomGame() {
        var randomGame = this.games[Math.floor(this.games.length * Math.random())];
        this[randomGame]()
    }

    removeGame(game) {
        this.games.splice(this.games.indexOf(game), 1)
    }

    addBadge(badge) {
        this.badges.push(badge)
        this.world.board.updateOverlayBadge(this.badges)
    }

    wonGame(game) {
        this.addBadge(game)
        this.removeGame(game)
        setTimeout(() => {
            this.chooseRandomGame()
        }, 5000)
    }

    theDrop() {
        $nuxt.$emit('changeCurrentTitle', 'The Drop')

        // Start game
        $nuxt.$emit('startTheDrop')

        console.log('the drop')
        this.world.board.skateDrop()
        this.camera.cameraDrop()
        // this.skateJumping()

        // faire un flip de camera

        // afficher les tutos

        // attendre les inputs

        // reward si gain

        // mouvement skate si raté
        // Recommencer 5 secondes après

    }

    theWouin() {
        console.log('la')
        $nuxt.$emit('changeCurrentTitle', 'The Wouiiiinnn')

        $nuxt.$emit('startTheWouin')
        
        $nuxt.$on('win', (game) => {
            if (game !== 'theWouin') return
            this.wonGame(game)
        })
    }

    theBeat() {
        // Change Title
        $nuxt.$emit('changeCurrentTitle', 'The Beat')

        // Start game
        $nuxt.$emit('startTheBeat')

        // When game is winned, add badge, remove from existing games, and play another game
        $nuxt.$on('win', (game) => {
            if (game !== 'theBeat') return
            this.wonGame(game)
        })

        // Lancer la musique



        // démarrer un rythme en même temps

        // Si trop lent, trop rapide, ou trop déphasé, recommencer

        // Créer les patterns visuel pour rester sur ce rythme
    }



}