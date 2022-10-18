import { Game } from '../scene/index.js'

export default ({ app }, inject) => {

  inject('game', new Game())
}