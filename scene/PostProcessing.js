import { EffectComposer, } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { PixelShader } from 'three/examples/jsm/shaders/PixelShader.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { HalftonePass } from 'three/examples/jsm/postprocessing/HalftonePass.js';
import { Vector2 } from 'three';

export class PostProcessing {
    constructor(options) {
        this.renderer = options.renderer
        this.camera = options.camera.camera
        this.scene = options.scene
        this.beat = options.beat
        this.r = 0
        this.setComposer()
    }
    setComposer() {
        this.composer = new EffectComposer(this.renderer)
        this.renderPass = new RenderPass(this.scene, this.camera)

        this.unrealBloomPass = new UnrealBloomPass(new Vector2(window.innerWidth, window.innerHeight), 0.5, 0.5, 0.5)


        this.halftonePass = new HalftonePass(new Vector2(window.innerWidth, window.innerHeight));
        this.halftonePass.uniforms.radius.value = 10
        this.halftonePass.uniforms.rotateR.value = 0
        this.halftonePass.uniforms.rotateG.value = 0.33 * Math.PI * 2
        this.halftonePass.uniforms.rotateB.value = 0.66 * Math.PI * 2


        this.composer.addPass(this.renderPass)
        this.composer.addPass(this.unrealBloomPass);
        this.composer.addPass(this.halftonePass);
    }
    update(delta) {
        this.unrealBloomPass.strength = (Math.sin(this.beat.getBeat() * Math.PI * 2) / 2. + 0.5) * 0.3
        this.halftonePass.uniforms.blending.value = 0.15 + this.easeInBack((Math.sin(this.beat.getBeat() * Math.PI * 2) / 2. + 0.5) * 0.15)
        this.halftonePass.uniforms.radius.value = 13 + 2 * this.beat.getBeat()
        this.r += delta * 0.01
        this.halftonePass.uniforms.rotateR.value = this.r
        this.halftonePass.uniforms.rotateG.value = this.r + 0.33 * Math.PI * 2
        this.halftonePass.uniforms.rotateB.value = this.r + 0.66 * Math.PI * 2
        this.composer.render()
    }


    easeInBack(x) {
        const c1 = 1.70158;
        const c3 = c1 + 1;

        return c3 * x * x * x - c1 * x * x;
    }
}