import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { RigidBody } from "@react-three/rapier";


const cat = (props) =>{
    const catRef = useRef()
    
    const { nodes, materials, animations } = useGLTF("models3d/cat.glb");
    const { actions } = useAnimations(animations, catRef)

    console.log(actions);

    useEffect(() =>{
        actions["Take 001"].play();
        return() => actions["Take 001"].stop();
    }, [actions]) ;

    return (
        <RigidBody>
            <group ref={catRef} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                <group name="root">
                    <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="RootNode_(gltf_orientation_matrix)_0" rotation={[-Math.PI / 2, 0, 0]}>
                        <group name="RootNode_(model_correction_matrix)_1">
                        <group name="catfbx_2" rotation={[Math.PI / 2, 0, 0]}>
                            <group name="_3">
                            <group name="RootNode_4">
                                <group name="_5">
                                <group name="GLTF_created_0">
                                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                                    <skinnedMesh
                                    name="Object_12"
                                    geometry={nodes.Object_12.geometry}
                                    material={materials.Material_81}
                                    skeleton={nodes.Object_12.skeleton}
                                    />
                                    <skinnedMesh
                                    name="Object_14"
                                    geometry={nodes.Object_14.geometry}
                                    material={materials.Material_105}
                                    skeleton={nodes.Object_14.skeleton}
                                    />
                                    <skinnedMesh
                                    name="Object_16"
                                    geometry={nodes.Object_16.geometry}
                                    material={materials.Material_93}
                                    skeleton={nodes.Object_16.skeleton}
                                    />
                                    <group name="_8" />
                                    <group name="_9" />
                                    <group name="_10" />
                                </group>
                                </group>
                            </group>
                            </group>
                        </group>
                        </group>
                    </group>
                    </group>
                </group>
                </group>
            </group>
            </group>
            </RigidBody>
        )
    }

export default cat; 
useGLTF.preload("models3d/cat");
