import { PerspectiveCamera } from "three";
import gsap from 'gsap'


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
    cameraJump() {
        gsap.to(this.camera.position, {
            z: 5,
            duration: 2
        })
    }

}