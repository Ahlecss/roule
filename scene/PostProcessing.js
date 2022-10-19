import { EffectComposer, } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { PixelShader } from 'three/examples/jsm/shaders/PixelShader.js';
import { Vector2 } from 'three';

export class PostProcessing {
    constructor(options) {
        this.renderer = options.renderer
        this.camera = options.camera.camera
        this.scene = options.scene
        this.setComposer()
    }
    setComposer() {
        console.log(this)
        this.composer = new EffectComposer(this.renderer)
        this.renderPass = new RenderPass(this.scene, this.camera)

        this.pixelPass = new ShaderPass(PixelShader);
        this.pixelPass.uniforms['resolution'].value = new Vector2(window.innerWidth, window.innerHeight);
        this.pixelPass.uniforms['resolution'].value.multiplyScalar(window.devicePixelRatio);
        this.pixelPass.uniforms['pixelSize'].value = 8;

        this.composer.addPass(this.renderPass)
        this.composer.addPass(this.pixelPass);
    }
    update() {
        this.composer.render()
    }
}