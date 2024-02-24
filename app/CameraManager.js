import * as THREE from 'three';

class CameraManager {
    constructor(app) {
        this.app = app;
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.camera.position.z = 5;
    }
}

export { CameraManager }