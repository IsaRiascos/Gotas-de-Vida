
import { useGLTF } from '@react-three/drei'

const Ocean = (props) => {
    // Desestructuración del objeto retornado por useGLTF, que contiene los nodos y materiales del modelo GLTF
    const { nodes, materials } = useGLTF("models3d/oceancuatro.glb");

    return (
      <group {...props} dispose={null}>
        <group position={[-0.03, 0.034, -0.005]} rotation={[-Math.PI, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0.018, 0.001, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4.geometry}
                material={materials.Plastic_transparent}
                position={[-1.647, -1.528, 1.99]}
                scale={-36.389}
              />
            </group>
            <group position={[0.021, 0.2, 0]} scale={[-0.014, -0.001, -0.014]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_6.geometry}
                material={materials.plastic_blue}
                position={[313.108, 1427.206, -96.853]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-50.821, -46.831, -50.821]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials.plastic_blue}
              position={[0.021, 0.197, 0]}
              scale={[-0.014, -0.001, -0.014]}
            />
          </group>
        </group>
        <group position={[0, 21.413, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plastic_Bucket_Plastic_Bucket_0.geometry}
            material={materials.Plastic_Bucket}
            position={[-6.72, 19.778, -17.373]}
            scale={0.125}
          />
        </group>
        <group position={[6.206, 7.2, -13.564]} rotation={[-Math.PI / 2, 0, 0]} scale={4.998}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4001.geometry}
              material={materials.material_0}
              position={[-3.101, -0.437, 5.634]}
            />
          </group>
        </group>
        <group position={[13.046, 5.289, -3.92]} rotation={[-Math.PI / 2, 0, 0]} scale={10.721}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Egg_Carton_GEO_Egg_Carton_0.geometry}
              material={materials.Egg_Carton}
              position={[0.319, -0.366, 0.659]}
              scale={1.662}
            />
          </group>
        </group>
        <group position={[4.419, 6.095, -1.431]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.lambert2SG}
            position={[11.091, 21.415, -2.918]}
            scale={1.666}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials.lambert3SG}
            position={[6.545, -0.025, -3.107]}
          />
        </group>
        <group position={[4.709, 0.486, -1.559]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ocean_1.geometry}
            material={materials['Urchent_Body/Material']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ocean_2.geometry}
            material={materials['Blue_Feelers/Material']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ocean_3.geometry}
            material={materials['Red_Feelers/Material']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ocean_4.geometry}
            material={materials['Purple_Feelers/Material']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ocean_5.geometry}
            material={materials['Middel_Bubbles/Material']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ocean_6.geometry}
            material={materials['Sea_Bottom/Material']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ocean_7.geometry}
            material={materials['Water/Material']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ocean_8.geometry}
            material={materials['Clownfish2/Material']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ocean_9.geometry}
            material={materials['Clownfish/Material']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ocean_10.geometry}
            material={materials['wire_174186203/Material']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ocean_11.geometry}
            material={materials['Coral_Rock1/Material']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ocean_12.geometry}
            material={materials['Coral_Rock2/Material']}
          />
        </group>
      </group>
    )
  }
  

export default Ocean; 

useGLTF.preload("models3d/oceancuatro.glb")
