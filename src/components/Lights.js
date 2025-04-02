import * as THREE from "three";

export class Light {
  constructor(scene) {
    this.light = new THREE.DirectionalLight(0xffffff, 1);
    this.light.position.set(10, 20, 10);
    this.light.castShadow = true;
    scene.add(this.light);

    // 環境光
    this.ambientLight = new THREE.AmbientLight(0x404040, 1.3);
    scene.add(this.ambientLight);
  }
}
