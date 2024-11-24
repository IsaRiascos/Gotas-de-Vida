import { useGLTF } from "@react-three/drei"


const Trash = (props) =>{
    const { nodes, materials } = useGLTF("models3d/trash.glb")
        return (
            <group {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, -1.576]}>
                <group name="root">
                    <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Cubo_0" position={[-0.103, 0, 0.135]}>
                        <mesh
                        name="Object_4"
                        geometry={nodes.Object_4.geometry}
                        material={materials.Material}
                        />
                    </group>
                    <group name="Cubo001_1" position={[-0.102, -0.114, 0.136]} scale={1.005}>
                        <mesh
                        name="Object_6"
                        geometry={nodes.Object_6.geometry}
                        material={materials.Base}
                        />
                    </group>
                    </group>
                </group>
                </group>
            </group>
            </group>
        )
}

export default Trash; 




useGLTF.preload("models3d/trash");
