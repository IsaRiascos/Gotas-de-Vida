import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function Oasis(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models-3d/camels_respite (3).glb');
  const { actions } = useAnimations(animations, group);
  const [isHovered, setIsHovered] = useState(false); // Estado para controlar el mouse

  // Control de animación al montar el componente
  useEffect(() => {
    if (isHovered && actions['Animation']) {
      actions['Animation'].reset().play();
    } else if (actions['Animation']) {
      actions['Animation'].stop();
    }
  }, [isHovered, actions]);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      onPointerOver={() => setIsHovered(true)}   // Detecta cuando el mouse está sobre el grupo
      onPointerOut={() => setIsHovered(false)}   // Detecta cuando el mouse sale del grupo
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="environment_0"
                position={[-2.554, -0.176, 2.26]}
                rotation={[0, -0.309, 0]}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.Environment}
                />
              </group>
              <group name="Empty_3" position={[-5.035, 18.749, 14.747]}>
                <group name="Props001_2" rotation={[Math.PI / 2, 0, -0.102]} scale={1.172}>
                  <mesh
                    name="Object_7"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_7.geometry}
                    material={materials.Props}
                  />
                </group>
              </group>
              <group
                name="Armature_15"
                position={[4.033, 4.398, -3.842]}
                rotation={[1.727, 0.122, 0.57]}
                scale={[1, 1, 0.907]}>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_12"
                    geometry={nodes.Object_12.geometry}
                    material={materials.Props}
                    skeleton={nodes.Object_12.skeleton}
                  />
                  <group name="camel_14" />
                </group>
              </group>
              <group
                name="Grass_16"
                position={[-5.449, 0.792, -7.82]}
                rotation={[0.279, 0.3, 0.118]}
                scale={0.802}>
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials.Props}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models-3d/camels_respite (3).glb');
