import React, { useRef, useState } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { useMemo } from 'react';

export function Octopus(props) {
  const { nodes, materials } = useGLTF('/models-3d/sadwaterdrop.glb');
  const rigidBodyRef = useRef(); // Referencia para controlar la gota y la cara
  const [falling, setFalling] = useState(false); // Estado para activar la caída

  // Texturas de la pared
  const PATH = useMemo(() => "materials/wallE/red_brick_", []);
  const wallTexture = useTexture({
    map: PATH + "diff_1k.jpg",
    displacementMap: PATH + "disp_1k.png",
    normalMap: PATH + "nor_gl_1k.jpg",
    roughnessMap: PATH + "rough_1k.jpg",
    ambientOcclusionMap: PATH + "ao_1k.jpg",
  });

  const handleClick = () => {
    setFalling(true); // Activar la caída
    if (rigidBodyRef.current) {
      rigidBodyRef.current.applyImpulse({ x: 0, y: -5, z: 0 }, true); // Aplicar impulso hacia abajo
    }
  };

  return (
    <group {...props} dispose={null} onClick={handleClick}>
      {/* Gota y cara agrupadas en el mismo RigidBody */}
      <RigidBody
        ref={rigidBodyRef}
        colliders="trimesh" // Usar un colisionador más preciso
        type={falling ? 'dynamic' : 'fixed'} // Cambiar a dinámico al caer
      >
        {/* Gota */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Esfera.geometry}
          material={materials['Material.001']}
          position={[0.073, 0, 0]} // Posición inicial elevada
        />
        {/* Cara de la gota */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['—Pngtree—tearful_eyes_7148495'].geometry}
          material={materials['—Pngtree—tearful eyes_7148495']}
          position={[-1.362, 0, 0]} // Posición relativa a la gota
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={2.303}
        />
      </RigidBody>

      {/* Pared */}
      <RigidBody colliders="cuboid" type="fixed">
        <mesh position={[15, 0, 0]} rotation-x={Math.PI / 1}>
          <boxGeometry args={[0.1, 20, 30]} />
          <meshStandardMaterial
            map={wallTexture.map}
            normalMap={wallTexture.normalMap}
            aoMap={wallTexture.ambientOcclusionMap}
            roughnessMap={wallTexture.roughnessMap}
          />
        </mesh>
      </RigidBody>
    </group>
  );
}

useGLTF.preload('/models-3d/sadwaterdrop.glb');

export default Octopus;
