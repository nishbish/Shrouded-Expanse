import * as THREE from 'three';
import { CameraManager } from './CameraManager';
import { ControlsManager } from './ControlsManager';

import { RenderManager } from './RenderManager';

class App {
	constructor() {
		this.scene = new THREE.Scene();
		this.planes = [];

		//set up app modules
		this.cameraManager = null;
		this.renderManager = null;
		this.controlsManager = null;

		//instantiate modules
		this.cameraManager = new CameraManager(this);
		this.renderManager = new RenderManager(this);
		this.controlsManager = new ControlsManager(this);

		//test cube
		const geometry = new THREE.PlaneGeometry();
		const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

		//lights
		const dirLight1 = new THREE.DirectionalLight( 0xffffff, 3 );
		dirLight1.position.set( 1, 1, 1 );
		this.scene.add( dirLight1 );

		const ambientLight = new THREE.AmbientLight( 0x555555 );
		this.scene.add( ambientLight );

		//meshes
		for ( let i = 0; i < 500; i ++ ) {
			const mesh = new THREE.Mesh( geometry, material );
			mesh.position.x = ( Math.random() - 0.5 ) * 1000;
			mesh.position.y = ( Math.random() - 0.5 ) * 1000;
			mesh.position.z = ( Math.random() - 0.5 ) * 1000;
			mesh.scale.set(20, 20, 20);
			this.scene.add( mesh );

			this.planes.push(mesh);
		}
	}
}

window.app = new App();