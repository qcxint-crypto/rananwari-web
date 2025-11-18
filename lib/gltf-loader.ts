import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const loader = new GLTFLoader();

export const loadGLTF = (url: string): Promise<{ scene: THREE.Group }> => {
  return new Promise((resolve, reject) => {
    loader.load(
      url,
      (gltf) => resolve({ scene: gltf.scene.clone() }),
      undefined,
      reject
    );
  });
};