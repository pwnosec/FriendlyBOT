import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid, Environment, ContactShadows } from '@react-three/drei';
import { Character } from './Character';

export function Viewport() {
  return (
    <div className="w-full h-full bg-gray-900">
      <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <Environment preset="sunset" />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
          <Character />
          <ContactShadows
            opacity={0.5}
            scale={10}
            blur={1}
            far={10}
            resolution={256}
            color="#000000"
          />
          <Grid
            infiniteGrid
            fadeDistance={50}
            fadeStrength={5}
            cellSize={0.5}
            cellThickness={0.5}
            cellColor="#6c757d"
            sectionSize={2}
            sectionThickness={1}
            sectionColor="#adb5bd"
          />
          <OrbitControls
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
            minDistance={2}
            maxDistance={10}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}