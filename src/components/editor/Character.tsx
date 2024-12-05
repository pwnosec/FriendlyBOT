import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshStandardMaterial } from 'three';
import { useEditorStore } from '../../store/editorStore';

export function Character() {
  const { characterParts, selectedPart, setSelectedPart } = useEditorStore();
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {characterParts.map((part) => {
        const isSelected = selectedPart === part.id;
        const isEye = part.name.toLowerCase().includes('eye');
        const isLight = part.name.toLowerCase().includes('light');
        const isAntenna = part.name.toLowerCase().includes('antenna');
        
        const material = new MeshStandardMaterial({
          color: isSelected ? '#ff9900' : 
                 isEye ? '#4dabf7' :
                 isLight ? '#ffd43b' :
                 isAntenna ? '#ff6b6b' : '#74c0fc',
          metalness: 0.8,
          roughness: 0.2,
          emissive: isSelected ? '#ff6b6b' : 
                    isEye ? '#4dabf7' :
                    isLight ? '#ffd43b' : '#000000',
          emissiveIntensity: isSelected ? 0.5 :
                            isEye ? 0.8 :
                            isLight ? 0.6 : 0,
        });

        return (
          <group
            key={part.id}
            position={[part.position.x, part.position.y, part.position.z]}
            rotation={[part.rotation.x, part.rotation.y, part.rotation.z]}
            scale={[part.scale.x, part.scale.y, part.scale.z]}
          >
            <mesh
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPart(part.id);
              }}
            >
              {part.type === 'head' ? (
                <sphereGeometry args={[0.5, 32, 32]} />
              ) : part.type === 'body' ? (
                <cylinderGeometry args={[0.5, 0.7, 1.5, 32]} />
              ) : part.type === 'arms' ? (
                <capsuleGeometry args={[0.2, 0.8, 8, 16]} />
              ) : part.type === 'legs' ? (
                <cylinderGeometry args={[0.25, 0.35, 1, 16]} />
              ) : (
                <boxGeometry args={[0.4, 0.4, 0.4]} />
              )}
              <primitive object={material} />
            </mesh>
            {isSelected && (
              <mesh scale={[1.05, 1.05, 1.05]}>
                {part.type === 'head' ? (
                  <sphereGeometry args={[0.5, 32, 32]} />
                ) : part.type === 'body' ? (
                  <cylinderGeometry args={[0.5, 0.7, 1.5, 32]} />
                ) : part.type === 'arms' ? (
                  <capsuleGeometry args={[0.2, 0.8, 8, 16]} />
                ) : part.type === 'legs' ? (
                  <cylinderGeometry args={[0.25, 0.35, 1, 16]} />
                ) : (
                  <boxGeometry args={[0.4, 0.4, 0.4]} />
                )}
                <meshBasicMaterial
                  color="#ffd43b"
                  wireframe
                  transparent
                  opacity={0.2}
                />
              </mesh>
            )}
          </group>
        );
      })}
    </group>
  );
}