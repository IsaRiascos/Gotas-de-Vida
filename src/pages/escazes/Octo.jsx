import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Octopus(props) {
  const { nodes, materials } = useGLTF('/models-3d//sadwaterdrop.glb')
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
    </group>
  )
}
export default Octopus;

useGLTF.preload('/models-3d//sadwaterdrop.glb')
