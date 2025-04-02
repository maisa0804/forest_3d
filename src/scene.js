import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Tree } from "./components/Tree.js";
import { Light } from "./components/lights.js";
import { Ground } from "./components/Ground.js";

export class Scene {
  constructor() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(0xaaaaaa, 10, 50); // 霧を追加

    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 5, 15);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    document.body.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.init();
  }

  init() {
    this.light = new Light(this.scene);
    this.ground = new Ground(this.scene);
    this.tree = new Tree(this.scene);

    window.addEventListener("resize", () => this.onWindowResize(), false);
    this.animate();
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
