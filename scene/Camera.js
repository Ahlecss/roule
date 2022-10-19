import { PerspectiveCamera } from "three";
import gsap from 'gsap'


export class Camera {
    constructor(options) {
        this.setCamera();
    }
    setCamera() {
        // Create camera instance
        this.camera = new PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 100);
        this.camera.position.y = 0.1;
    }

    resize() {
        console.log('resize camera');
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
    }
    cameraJump() {
        gsap.to(this.camera.position, {
            z: 2,
            duration: 2
        })
    }

}