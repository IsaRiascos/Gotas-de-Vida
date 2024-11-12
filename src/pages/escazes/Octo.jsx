import React from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { useMemo } from 'react';
export function Octopus(props) {
  const { nodes, materials } = useGLTF('/models-3d/sadwaterdrop.glb');

  const PATH = useMemo(() => "materials/wallE/red_brick_", []);

  const floorTexture = useTexture({
    map: PATH + "diff_1k.jpg",
    displacementMap: PATH + "disp_1k.png",
    normalMap: PATH + "nor_gl_1k.jpg",
    roughnessMap: PATH + "rough_1k.jpg",
    ambientOcclusionMap: PATH + "ao_1k.jpg"
  });

  console.log(floorTexture);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Esfera.geometry}
        material={materials['Material.001']}
        position={[0.073, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['—Pngtree—tearful_eyes_7148495'].geometry}
        material={materials['—Pngtree—tearful eyes_7148495']}
        position={[-1.362, 0, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={2.303}
      />
      <mesh position={[20, 0, 0]} rotation-x={Math.PI / 1}>
        <boxGeometry args={[0.1, 20, 30]}/>
        <meshStandardMaterial
        map={floorTexture.map}
        normalMap={floorTexture.normalMap}
        aoMap={floorTexture.aoMap}
        roughnessMap={floorTexture.roughnessMap}
        />

      </mesh>
    </group>
  );
}

useGLTF.preload('/models-3d/sadwaterdrop.glb');

export default Octopus;
