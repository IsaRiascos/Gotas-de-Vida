import { useGLTF } from "@react-three/drei"

const Panel = (props) =>{
    const { nodes, materials } = useGLTF("models3d/panel.glb");

        return (
            <group {...props} dispose={null}>
            <group name="Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.007}>
                <group name="c80b2d55c54c4da98372220e34487957fbx" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="RootNode">
                    <group
                        name="Panel_1"
                        position={[-644.233, 0, 0]}
                        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
                        <group name="Cylinder" position={[0, 0, 49.937]}>
                        <mesh
                            name="Cylinder_Environment1_0"
                            geometry={nodes.Cylinder_Environment1_0.geometry}
                            material={materials['Environment.1']}
                        />
                        </group>
                        <group name="Plane_003" position={[0, 0, 52.126]}>
                        <mesh
                            name="Plane_003_Environment2_0"
                            geometry={nodes.Plane_003_Environment2_0.geometry}
                            material={materials['Environment.2']}
                        />
                        </group>
                    </group>
                    <group name="Plane" position={[0, -100.287, 0]}>
                        <mesh
                        name="Plane_Environment_0"
                        geometry={nodes.Plane_Environment_0.geometry}
                        material={materials.Environment}
                        position={[-549.368, -12.195, 33.451]}
                        scale={0.093}
                        />
                    </group>
                    </group>
                </group>
                </group>
            </group>
            </group>
        )


    } 

    export default Panel; 
    useGLTF.preload("models3d/panel");
