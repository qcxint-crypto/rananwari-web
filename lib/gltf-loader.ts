import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const loader = new GLTFLoader();

export function loadGLTF(url: string) {
  return new Promise<{ scene: any }>((resolve, reject) => {
    loader.load(
      url,
      (gltf: any) => {
        resolve({ scene: gltf.scene });
      },
      undefined,
      (error: unknown) => {
        reject(error);
      }
    );
  });
}
