import * as THREE from 'three';

class SERenderer {
    constructor(se) {
        this.se = se;
        this.renderer = new THREE.WebGLRenderer();

        this.renderer.setSize( window.innerWidth, window.innerHeight );
	    this.renderer.setClearColor(0x32a852);
	    document.body.appendChild( this.renderer.domElement );

        this.animate();
    }

    animate() {
		requestAnimationFrame(() => this.animate());

		if (this.se.controls) {
            this.se.controls.update();
        }

		this.renderer.render( this.se.scene, this.se.camera );
	}
}

export { SERenderer }