import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const loader = new GLTFLoader();

export function loadGLTF(url: string) {
  return new Promise<{ scene: THREE.Group }>((resolve, reject) => {
    loader.load(
      url,
      (gltf) => resolve({ scene: gltf.scene }),
      undefined,
      (error) => reject(error)
    );
  });
}
