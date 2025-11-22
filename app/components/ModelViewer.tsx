"use client";
import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";
import { Loader2 } from "lucide-react";
import * as THREE from "three";

interface ModelViewerProps {
  modelUrl: string;
  autoRotate?: boolean;
  isInModal?: boolean;
}

function ModelWrapper({ url, isInModal, autoRotate }: { url: string; isInModal: boolean; autoRotate: boolean }) {
  const [modelNode, setModelNode] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const loadModel = async () => {
      const { scene } = await import("@/lib/gltf-loader").then(m => m.loadGLTF(url));
      const box = new THREE.Box3().setFromObject(scene);
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const targetSize = isInModal ? 3.8 : 2.4;
      const scale = maxDim > 0 ? targetSize / maxDim : 1;

      scene.scale.set(scale, scale, scale);
      const center = box.getCenter(new THREE.Vector3());
      scene.position.sub(center.multiplyScalar(scale));

      setModelNode(<primitive object={scene} />);
    };

    loadModel();
  }, [url, isInModal]);

  if (!modelNode) return <Fallback />;

  return modelNode;
}

function Fallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#6c5ce7" wireframe />
    </mesh>
  );
}

export const ModelViewer = ({ modelUrl, autoRotate = false, isInModal = false }: ModelViewerProps) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prev => prev + 1);
  }, [modelUrl]);

  if (!modelUrl) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-black/50">
        <p className="text-gray-400 text-sm">No Model</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full" key={key}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={<Fallback />}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <directionalLight position={[-10, -10, -5]} intensity={0.8} />

          <Center>
            <ModelWrapper url={modelUrl} isInModal={isInModal} autoRotate={autoRotate} />
          </Center>
        </Suspense>

        <OrbitControls
          autoRotate={autoRotate}
          autoRotateSpeed={1.2}
          enableZoom={true}
          enablePan={!isInModal}
          minDistance={isInModal ? 1 : 2}
          maxDistance={isInModal ? 12 : 8}
          target={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
};

export const ModelViewerLoading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black/70">
      <Canvas camera={{ position: [0, 0, 5] }} style={{ width: 80, height: 80 }}>
        <ambientLight intensity={0.5} />
        <mesh rotation={[0, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#6c5ce7" />
        </mesh>
        <OrbitControls autoRotate={true} autoRotateSpeed={5} enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );

};
