import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js";

/* Scene */
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xfdf1f8);

/* Camera */
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 6;

/* Renderer */
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

/* Lighting */
const ambient = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambient);

const keyLight = new THREE.DirectionalLight(0xffc8dd, 1);
keyLight.position.set(4, 6, 6);
scene.add(keyLight);

const fillLight = new THREE.PointLight(0xcdb4db, 0.8);
fillLight.position.set(-4, -2, 4);
scene.add(fillLight);

/* Materials */
const mattePink = new THREE.MeshStandardMaterial({
  color: 0xffafcc,
  roughness: 0.6
});

const softPurple = new THREE.MeshStandardMaterial({
  color: 0xcdb4db,
  roughness: 0.4
});

const offWhite = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  roughness: 0.8
});

/* Geometry */
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1.2, 1.2, 1.2),
  mattePink
);
cube.position.x = -2.2;
scene.add(cube);

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.9, 32, 32),
  softPurple
);
scene.add(sphere);

const torus = new THREE.Mesh(
  new THREE.TorusGeometry(0.9, 0.25, 16, 100),
  offWhite
);
torus.position.x = 2.2;
scene.add(torus);

/* Motion */
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.004;
  cube.rotation.y += 0.006;

  sphere.rotation.y += 0.003;

  torus.rotation.x += 0.005;
  torus.rotation.z += 0.004;

  renderer.render(scene, camera);
}

animate();

/* Resize */
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
