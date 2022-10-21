import { Object3D, Mesh, PlaneGeometry, ShaderMaterial, DoubleSide } from "three"

export class Sky {
    constructor(options) {
        this.beat = options.beat
        this.container = new Object3D()
        this.setSky()
    }

    setSky() {
        this.sky = new Mesh(
            new PlaneGeometry(50, 25),
            new ShaderMaterial({
                side: DoubleSide,
                uniforms: {
                    uTime: { value: 0 },
                    uBeat: { value: this.beat },
                },
                vertexShader:/*glsl*/`
                    varying vec2 vUv;
                    uniform float uTime;
                    uniform float uBeat;
                    void main(){
                        vUv = uv;
                        vec3 pos = position;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
                    }`,
                fragmentShader: /*glsl*/`
                    uniform float uTime;
                    uniform float uBeat;
                    varying vec2 vUv;
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
                    vec3 sun1 = vec3(179.,42., 195.)/ 255.;
                    vec3 sun2 = vec3(240., 97., 55)/ 255.;
                    void main() {
                        float d = distance(vUv, vec2(.5));
                        float sun = (1.-d) * smoothstep(.11, .1, d);
                        sun =  mix(sun, sun * smoothstep(0.1, 0.11,sin(vUv.y*300.)/2.+0.5), step(vUv.y,0.53));
                        vec3 sunColor = sun*mix(sun1, sun2, (vUv.y* 6.) - 2.4) ;
                        vec3 skyColor = mix(sun1, sun2, vUv.y*4.-1.8)*0.5;
                        skyColor *= 1. - noise(vec3(vUv*10., uTime*0.1))*0.3;

                        vec3 color = skyColor;//mix(skyColor, sunColor*2., sun);
                        // color = vec3(length(color)/3.);
                        gl_FragColor = vec4(color, 1.0);
                    }`
            })
        )
        this.sky.position.z = -10
        this.sky.position.y = 4
        this.container.add(this.sky)
    }

    update(delta) {
        this.sky.material.uniforms.uTime.value += delta
        this.sky.material.uniforms.uBeat.value = this.beat
    }
}