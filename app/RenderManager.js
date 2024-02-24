import * as THREE from 'three';

class RenderManager {
    constructor(app) {
        this.app = app;
        this.renderer = new THREE.WebGLRenderer();

        this.renderer.setSize( window.innerWidth, window.innerHeight );
	    this.renderer.setClearColor(0x32a852);
	    document.body.appendChild( this.renderer.domElement );

        this.animate();
    }

    animate() {
		requestAnimationFrame(() => this.animate());

		if (this.app.controls) {
            this.app.controls.update();
        }

		this.renderer.render( this.app.scene, this.app.cameraManager.camera );
	}
}

export { RenderManager }