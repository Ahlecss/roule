import {
    CylinderGeometry,
    Mesh,
    ShaderMaterial,
    Object3D,
    TextureLoader,
    DoubleSide,
} from "three"

let roadURL = require('../../assets/textures/road.png')

export class Ground {
    constructor(options) {
        this.beat = options.beat
        this.container = new Object3D()
        this.radius = 5
        this.height = 20
        this.loader = new TextureLoader()
        this.loader.load(roadURL, (texture) => {
            this.ground.material.uniforms.uTexture.value = texture
        })
        this.init()
    }

    init() {
        this.setGround()
    }

    setGround() {
        this.ground = new Mesh(
            new CylinderGeometry(this.radius, this.radius, this.height, 64, 64),
            new ShaderMaterial({
                transparent: true,
                side: DoubleSide,
                uniforms: {
                    uTime: { value: 0 },
                    uBeat: { value: 0 },
                    uTexture: { value: null }
                },
                vertexShader: /*glsl*/`
                varying vec2 vUv;
                uniform float uTime;
                uniform float uBeat;
                float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
                vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
                vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}

                float noise(vec3 p){
                    #define PI 3.1415926535897932384626433832795
                    vec3 a = floor(p);
                    vec3 d = p - a;
                    d = d * d * (3.0 - 2.0 * d);

                    vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
                    vec4 k1 = perm(b.xyxy);
                    vec4 k2 = perm(k1.xyxy + b.zzww);

                    vec4 c = k2 + a.zzzz;
                    vec4 k3 = perm(c);
                    vec4 k4 = perm(c + 1.0);

                    vec4 o1 = fract(k3 * (1.0 / 41.0));
                    vec4 o2 = fract(k4 * (1.0 / 41.0));

                    vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
                    vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

                    return o4.y * d.y + o4.x * (1.0 - d.y);
                }
                void main() {
                    vUv = uv;
                    vec3 pos = position;
                    float n = noise(vec3(pos*0.5));
                    float b = sin(uBeat * PI * 2.);
                    pos.xz /= 1. - smoothstep(0.6, 0.8, abs(pos.y/10.))*0.8*n*(0.8+b*0.1);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                }
            `,
                fragmentShader: /*glsl*/`
                #define PI 3.1415926535897932384626433832795
                uniform float uTime;
                uniform float uBeat;
                uniform sampler2D uTexture;
                varying vec2 vUv;
                vec3 roadColor = vec3(255.)/255.;
                vec3 grassColor1 = vec3(171., 235., 54.)/255.;
                vec3 grassColor2 = vec3(255., 50., 111.)/255.;

                void main() {
                    vec2 uv = vUv;
                    float b = uBeat;
                    b = sin(uBeat * PI * 2.);
                    float t = uTime;
                    float d = 1. - distance(uv.y, 0.5);
                    float roadLimit =  smoothstep(0.7, 0.701, d);
                    float h = (0.3+b*0.01) / abs(sin(uv.x*20.*PI*2.));
                    float v = (0.3+b*0.01) / abs(sin(uv.y*20.*PI*2.));
                    vec3 gCol =  mix(grassColor1,grassColor2, step(0.5,1.-vUv.y));
                    vec3 grass =gCol * (1. - roadLimit) * (h+v);
                    h = min(h, 1.)*0.3;
                    v = min(v, 1.)*0.3;
                    vec3 road = roadColor * roadLimit * (v+h);
                    vec3 color = vec3(0.);
                    color += grass;
                    color += texture2D(uTexture, mod(uv*2.,vec2(1.))).rgb * roadLimit;
                    gl_FragColor = vec4(color, mix(grass.b,1.0,roadLimit));
                    // gl_FragColor = vec4(gCol, 1.);

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