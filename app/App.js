import * as THREE from 'three';
import { CameraManager } from './CameraManager';
import { ControlsManager } from './ControlsManager';

import { RenderManager } from './RenderManager';

class App {
	constructor() {
		this.scene = new THREE.Scene();

		//set up app modules
		this.cameraManager = null;
		this.renderManager = null;
		this.controlsManager = null;

		//instantiate modules
		this.cameraManager = new CameraManager(this);
		this.renderManager = new RenderManager(this);
		this.controlsManager = new ControlsManager(this);

		//test cube
		const geometry = new THREE.BoxGeometry( 1, 1, 1 );
		const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		const cube = new THREE.Mesh( geometry, material );
		this.scene.add( cube );
	}
}

new App();