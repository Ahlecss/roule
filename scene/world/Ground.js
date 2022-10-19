import {
    CylinderGeometry,
    Mesh,
    ShaderMaterial,
    Object3D
} from "three"

export class Ground {
    constructor(options) {
        this.beat = options.beat
        this.container = new Object3D()
        this.radius = 5
        this.height = 20
        this.init()
    }

    init() {
        this.setGround()
    }

    setGround() {
        this.ground = new Mesh(
            new CylinderGeometry(this.radius, this.radius, this.height, 64),
            new ShaderMaterial({
                uniforms: {
                    uTime: { value: 0 },
                    uBeat: { value: 0 },
                },
                vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
                fragmentShader: `
                #define PI 3.1415926535897932384626433832795
                uniform float uTime;
                uniform float uBeat;
                varying vec2 vUv;
                void main() {
                    vec2 uv = vUv;
                    float b = uBeat;
                    float t = uTime;
                    float d = 1. - distance(uv.y, 0.5);
                    float roadLimit =  smoothstep(0.8, 0.801, d);
                    vec3 road = vec3(0.1) * roadLimit;
                    road += smoothstep(0.5, 0.51, vec3(sin(uv.x*PI*2. * 20.))) * smoothstep(0.988, 0.99, d);
                    vec3 grass = vec3(0.1, 0.2, 0.1) * (1. - roadLimit);
                    vec3 color = vec3(0.);
                    color += road + grass;
                    gl_FragColor = vec4(color, 1.0);

                }
            `,
            })
        )
        this.container.add(this.ground)
        this.container.rotateZ(Math.PI / 2)
        this.container.position.y = -this.radius
    }

    update(delta) {
        this.container.rotation.x += delta
        this.ground.material.uniforms.uTime.value += delta
        this.ground.material.uniforms.uBeat.value = this.beat.getBeat()
    }
}