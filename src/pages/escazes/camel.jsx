import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three'; // Importa THREE


export default function Camel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models-3d/camel-test.glb');
  const { actions } = useAnimations(animations, group);

  const [hasStarted, setHasStarted] = useState(false); // Estado para controlar si la animación ya empezó

  useEffect(() => {
    // Solo iniciar la animación si no se ha iniciado antes
    if (props.playAnimation && !hasStarted && actions['die_C4D Animation Take']) {
      const action = actions['die_C4D Animation Take'];
      action.reset();  // Reinicia la animación
      action.play();   // Inicia la animación

      // Añadir un listener para cuando la animación termine
      action.setLoop(THREE.LoopOnce);  // Asegura que no se repita
      action.clampWhenFinished = true; // Detiene la animación al terminar
      setHasStarted(true);  // Marca que la animación ya ha comenzado
    }
  }, [props.playAnimation, actions, hasStarted]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="7af5f93ac8f64d868face592865b4f0ffbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="AN_NPC_MNT_Camel_A01" rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="Skin" />
                </group>
                <group name="Camel_A01" rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="C_ctrl">
                    <group
                      name="Bip01"
                      position={[-61.907, 0, 125.383]}
                      rotation={[-Math.PI, 1.388, -Math.PI]}>
                      <group name="Object_9">
                        <primitive object={nodes._rootJoint} />
                        <skinnedMesh
                          name="Object_60"
                          geometry={nodes.Object_60.geometry}
                          material={materials.CH_NPC_MOB_Camel_A01_MI_YNG1}
                          skeleton={nodes.Object_60.skeleton}
                        />
                        <group
                          name="Saddle"
                          position={[-58.003, -1.839, 57.968]}
                          rotation={[-0.013, -1.568, -0.025]}
                        />
                        <group name="Object_59" rotation={[-Math.PI / 2, 0, 0]} />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="AN_NPC_MNT_Camel_A01_0" rotation={[-Math.PI / 2, 0, 0]} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models-3d/camel-test.glb');
