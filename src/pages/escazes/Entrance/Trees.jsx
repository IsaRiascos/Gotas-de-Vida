
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Trees(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models-3d/tree_ps1psx_style.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.728}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="ground_0">
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.Ground}
                />
              </group>
              <group
                name="tree_1"
                position={[-0.645, -0.087, 0.676]}
                rotation={[0, 0.516, 0]}
                scale={1.479}>
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.Tree}
                />
              </group>
              <group
                name="Skeleton_2"
                position={[-1.087, 3.793, 2.945]}
                rotation={[1.068, -0.236, -0.297]}>
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.Skeleton}
                />
              </group>
              <group
                name="bird001_15"
                position={[1.879, 4.493, 0.758]}
                rotation={[-3.137, -0.039, 3.065]}>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials['Material.002']}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <skinnedMesh
                    name="Object_15"
                    geometry={nodes.Object_15.geometry}
                    material={materials['Material.002']}
                    skeleton={nodes.Object_15.skeleton}
                  />
                  <skinnedMesh
                    name="Object_17"
                    geometry={nodes.Object_17.geometry}
                    material={materials['Material.002']}
                    skeleton={nodes.Object_17.skeleton}
                  />
                  <group name="bird_12" />
                  <group name="Wings001_13" />
                  <group name="Wings002_14" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/tree_ps1psx_style.glb')