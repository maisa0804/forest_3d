import * as THREE from "three";

export class Tree {
  constructor(scene) {
    this.scene = scene;
    this.numTrees = 100;
    this.trees = this.createTrees();
    this.trunks = this.createTrunks();

    scene.add(this.trees);
    scene.add(this.trunks);
  }

  createTrees() {
    const treeGeometry = new THREE.ConeGeometry(1, 3, 6);
    const treeMaterial = new THREE.MeshStandardMaterial({ color: 0x228b22 });
    const trees = new THREE.InstancedMesh(
      treeGeometry,
      treeMaterial,
      this.numTrees
    );

    for (let i = 0; i < this.numTrees; i++) {
      const x = (Math.random() - 0.5) * 50;
      const z = (Math.random() - 0.5) * 50;
      const y = 1.5;
      const matrix = new THREE.Matrix4().setPosition(x, y, z);
      trees.setMatrixAt(i, matrix);
    }
    return trees;
  }

  createTrunks() {
    const trunkGeometry = new THREE.CylinderGeometry(0.3, 0.3, 1, 6);
    const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
    const trunks = new THREE.InstancedMesh(
      trunkGeometry,
      trunkMaterial,
      this.numTrees
    );

    for (let i = 0; i < this.numTrees; i++) {
      const x = (Math.random() - 0.5) * 50;
      const z = (Math.random() - 0.5) * 50;
      const matrix = new THREE.Matrix4().setPosition(x, 0.5, z);
      trunks.setMatrixAt(i, matrix);
    }
    return trunks;
  }
}
