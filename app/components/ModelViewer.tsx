"use client";

import { Suspense, useEffect, useRef, useState, type ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center } from "@react-three/drei";
import * as THREE from "three";
import { loadGLTF } from "../../lib/gltf-loader";

interface ModelViewerProps {
  modelUrl: string;
  autoRotate?: boolean;
  isInModal?: boolean;
}

function Model({
  url,
  isInModal,
}: {
  url: string;
  isInModal: boolean;
}) {
  const [modelNode, setModelNode] = useState<ReactNode | null>(null);

  useEffect(() => {
    let isMounted = true;

    const mountModel = async () => {
      const gltf = await loadGLTF(url);
      const scene = gltf.scene.clone(true);

      const box = new THREE.Box3().setFromObject(scene);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const targetSize = isInModal ? 4.15 : 3.3;
      const scale = maxDim > 0 ? targetSize / maxDim : 1;

      scene.scale.setScalar(scale);
      scene.position.set(-center.x * scale, -center.y * scale, -center.z * scale);

      if (!isInModal) {
        scene.rotation.x = -0.3;
        scene.rotation.y = 0.75;
      } else {
        scene.rotation.x = -0.12;
        scene.rotation.y = 0.4;
      }

      scene.traverse((child) => {
        if ("isMesh" in child && child.isMesh) {
          child.castShadow = false;
          child.receiveShadow = false;
        }
      });

      if (isMounted) {
        setModelNode(<primitive object={scene} />);
      }
    };

    setModelNode(null);
    void mountModel();

    return () => {
      isMounted = false;
    };
  }, [url, isInModal]);

  if (!modelNode) {
    return <Fallback />;
  }

  return <>{modelNode}</>;
}

function Fallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#00ffff" wireframe />
    </mesh>
  );
}

export const ModelViewer = ({
  modelUrl,
  autoRotate = false,
  isInModal = false,
}: ModelViewerProps) => {
  const [key, setKey] = useState(0);
  const controlsRef = useRef<any>(null);

  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [modelUrl]);

  if (!modelUrl) return null;

  return (
    <div className="w-full h-full" key={key}>
      <Canvas
        camera={{ position: [0, 0.1, isInModal ? 6.1 : 5.4], fov: isInModal ? 42 : 36 }}
        gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={<Fallback />}>
          <ambientLight intensity={1.05} />
          <directionalLight position={[8, 10, 6]} intensity={1.75} />
          <directionalLight position={[-7, 4, 9]} intensity={1.15} />
          <pointLight position={[0, -6, 8]} intensity={0.7} />

          <Center>
            <Model url={modelUrl} isInModal={isInModal} />
          </Center>
        </Suspense>

        <OrbitControls
          ref={controlsRef}
          autoRotate={autoRotate}
          autoRotateSpeed={isInModal ? 0.85 : 1.45}
          enableZoom={true}
          enablePan={false}
          minDistance={isInModal ? 3.5 : 3}
          maxDistance={isInModal ? 12 : 8}
          target={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
};

export const ModelViewerLoading = () => (
  <div className="w-full h-full flex items-center justify-center bg-black/10">
    <div className="w-10 h-10 border-4 border-retro-green border-t-transparent rounded-full animate-spin"></div>
  </div>
);
