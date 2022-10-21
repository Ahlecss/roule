import { PerspectiveCamera } from "three";
import gsap, {Power3} from 'gsap'


export class Camera {
    constructor(options) {
        this.setCamera();
    }
    setCamera() {
        // Create camera instance
        this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
        this.camera.position.y = 0.2;
        this.camera.position.z = -0.2
        this.camera.rotation.x = 0.2

        // this.camera.position.set(0, 0, -50)
        // this.camera.lookAt(0, 0, 0)
    }

    resize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
    }
    cameraDrop() {
        this.tlCam = gsap.timeline({delay: 2})
        this.tlCam.to(this.camera.position, {
            y: 0.6,
            duration: 1,
        })
        this.tlCam.to(this.camera.position, {
            y: 0.2,
            duration: 1,
        })
        this.tlCam.to(this.camera.position, {
            z: 2,
            duration: 1,
            delay: 1.5
        }, '-=1')
    }
    endCameraDrop() {
        gsap.to(this.camera.position, {
            z: -0.2,
            duration: 1,
            delay: 1.5,
            ease: Power3.easeOut
        })
    }

}