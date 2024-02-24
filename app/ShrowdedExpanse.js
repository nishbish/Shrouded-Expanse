import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { SERenderer } from './SERenderer';

class ShrousedExpanse {
	constructor() {
		//scene set up
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
		this.controls = null;
		this.renderer = new SERenderer(this);

		
		this.controls = new OrbitControls(this.camera, this.renderer.renderer.domElement);

		const geometry = new THREE.BoxGeometry( 1, 1, 1 );
		const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		const cube = new THREE.Mesh( geometry, material );
		this.scene.add( cube );

		this.camera.position.z = 5;
	}
}

new ShrousedExpanse();