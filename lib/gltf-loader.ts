import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const loader = new GLTFLoader();
const modelCache = new Map<string, Promise<{ scene: THREE.Object3D }>>();
THREE.Cache.enabled = true;

export function loadGLTF(url: string) {
  if (!modelCache.has(url)) {
    modelCache.set(
      url,
      new Promise<{ scene: THREE.Object3D }>((resolve, reject) => {
        loader.load(
          url,
          (gltf: { scene: THREE.Object3D }) => {
            resolve({ scene: gltf.scene });
          },
          undefined,
          (error: unknown) => {
            reject(error);
          }
        );
      })
    );
  }

  return modelCache.get(url)!;
}
