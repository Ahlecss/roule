import { ShaderMaterial, Sprite, Object3D } from "three"
import { TextureLoader } from "three"
let faceURL = require('../../assets/textures/face.png')

export class Faces {
    constructor() {
        this.container = new Object3D()
        this.loader = new TextureLoader()
        this.setFace()
        this.loader.load(faceURL, (texture) => {
            this.material.uniforms.uTexture.value = texture
        })
    }
    setFace() {
        this.material = new ShaderMaterial({
            transparent: true,
            uniforms: {
                uTexture: { value: null }
            },
            vertexShader: /*glsl*/`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: /*glsl*/`
                varying vec2 vUv;
                uniform sampler2D uTexture;

                void main() {
                    vec2 uv = vUv;
                    vec4 color = texture2D(uTexture, uv).rgba;
                    gl_FragColor = vec4(color);
                }
                `
        })
        this.faceLeft = new Sprite(this.material)
        this.faceRight = new Sprite(this.material)

        this.faceLeft.position.set(-2.8, 1, 2.5)
        this.faceRight.position.set(3, 1, 2.5)

        this.container.add(this.faceLeft, this.faceRight)
        this.container.scale.set(0.25, .25, 1)
    }

    update() {

    }
}