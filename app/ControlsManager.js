import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

class ControlsManager {
    constructor(app) {
        this.app = app;
        this.controls = new OrbitControls(this.app.cameraManager.camera, this.app.renderManager.renderer.domElement);
    }
}

export { ControlsManager }