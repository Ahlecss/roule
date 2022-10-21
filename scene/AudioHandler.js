import { AudioListener, AudioLoader, Audio, Object3D, TorusKnotGeometry } from "three"

import beat from '../assets/audio/beat.mp3'
import solo from '../assets/audio/solo.mp3'
import wouin from '../assets/audio/wouin.mp3'


export class AudioHandler {
    constructor() {
        this.set = false
        this.loaded = [false, false, false]
        this.container = new Object3D()
        this.volumes = [
            0, 0, 0
        ]
        this.speed = 1
    }
    setAudio() {
        if (this.set) return
        this.set = true

        this.listener = new AudioListener()

        this.beat = new Audio(this.listener)
        this.solo = new Audio(this.listener)
        this.wouin = new Audio(this.listener)

        this.container.add(this.listener, this.beat, this.solo, this.wouin)
        this.loader = new AudioLoader()
        this.loader.load(beat, (buffer) => {
            this.beat.setBuffer(buffer)
            this.beat.setLoop(true)
            this.beat.setVolume(0)
            this.loaded[0] = true
            this.tryPlay()
        })
        this.loader.load(solo, (buffer) => {
            this.solo.setBuffer(buffer)
            this.solo.setLoop(true)
            this.solo.setVolume(0)
            this.loaded[1] = true
            this.tryPlay()
        })
        this.loader.load(beat, (buffer) => {
            this.wouin.setBuffer(buffer)
            this.wouin.setLoop(true)
            this.wouin.setVolume(0)
            this.loaded[2] = true
            this.tryPlay()
        })

    }

    setSpeed(s) {
        if (!this.playing) return
        this.speed = s
        this.beat.setPlaybackRate(s)
        this.solo.setPlaybackRate(s)
        this.wouin.setPlaybackRate(s)
        this.beat.detune = (1 / s) * 1200 - 1200
        this.solo.detune = (1 / s) * 1200 - 1200
        this.wouin.detune = (1 / s) * 1200 - 1200
    }

    enableBeat() {
        this.volumes = [
            1, 0, 0
        ]
    }

    enableSolo() {
        this.volumes = [
            0, 1, 0
        ]
    }

    enableWouin() {
        this.volumes = [
            0, 0, 1
        ]
    }

    tryPlay() {
        if (this.loaded[0] && this.loaded[1] && this.loaded[2]) {
            this.beat.play()
            this.solo.play()
            this.wouin.play()
            this.playing = true
        }
    }
    update() {
        if (!this.playing) return
        this.beat.setVolume(this.lerp(this.beat.getVolume(), this.volumes[0], 0.1))
        this.solo.setVolume(this.lerp(this.solo.getVolume(), this.volumes[1], 0.1))
        this.wouin.setVolume(this.lerp(this.wouin.getVolume(), this.volumes[2], 0.1))
    }
    lerp(a, b, n) {
        return (1 - n) * a + n * b
    }
}