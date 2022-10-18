import { PerspectiveCamera } from "three";

export class Camera {
    constructor(options) {
        this.setCamera();
    }
    setCamera() {
        // Create camera instance
        this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
        this.camera.position.z = 3;
    }

    resize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
    }

}