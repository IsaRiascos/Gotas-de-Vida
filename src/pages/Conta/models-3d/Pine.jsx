    import { useGLTF } from "@react-three/drei";
    
    
    const Pine = (props) => {
    const { nodes, materials } = useGLTF("models3d/Pino.glb");
    return (
        <group {...props} dispose={null}>
          <group name="Scene">
            <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
              <group name="f6cafd4bdfad496a906e81cb2a158247fbx" rotation={[Math.PI / 2, 0, 0]}>
                <group name="RootNode">
                  <group name="PineTree_001" position={[765, 0, 0]}>
                    <mesh
                      name="PineTree_001_PineTree_001_0"
                      geometry={nodes.PineTree_001_PineTree_001_0.geometry}
                      material={materials.PineTree_001}
                      position={[-800, -30, -300]}
                      scale={0.07}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
          
        </group>
      )
    }

    export default Pine;
    useGLTF.preload("models3d/Pino");
