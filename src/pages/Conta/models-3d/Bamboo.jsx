
import { useGLTF } from "@react-three/drei";

const Bamboo= (props) =>{
  const { nodes, materials } = useGLTF("models3d/bamboo.glb");
    
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Sketchfab_model"
          position={[-1.17, 0.369, -0.794]}
          rotation={[-1.394, 0.825, 1.758]}>
          <group name="modelfbx" rotation={[-Math.PI, 0, 0]}>
            <group name="RootNode">
              <group name="Model">
                <mesh
                  name="Model_material0_0"
                  geometry={nodes.Model_material0_0.geometry}
                  material={materials.material0}
                  scale={0.692}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )

}

export default Bamboo;
useGLTF.preload("models3d/bamboo");



