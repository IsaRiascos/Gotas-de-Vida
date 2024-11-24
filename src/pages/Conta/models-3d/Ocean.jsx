
import { useGLTF,useKeyboardControls } from '@react-three/drei'
import { useState, useRef } from 'react';

const Ocean = (props) => {
    // Desestructuración del objeto retornado por useGLTF, que contiene los nodos y materiales del modelo GLTF
    const { nodes, materials } = useGLTF("models3d/Oceanshi.glb");
    const [clickedObject, setclickedObjects] = useState(null);
  
  
  const group = useRef();
  

  const handleClick = (e, objectName) => {
    e.stopPropagation();
    const position = e.object.position;
    setclickedObjects({ name: objectName, position });
  };
    return (
      <group {...props} dispose={null}>
        <group name="Scene">
          <group name="Botella" position={[-0.03, 0.034, -0.005]} rotation={[-Math.PI, 0, 0]}>
            <group name="root">
              <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                <group name="bottle_0" position={[0.018, 0.001, 0]}>
                  <mesh
                    name="Object_4"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.Plastic_transparent}
                    position={[-1.647, -1.528, 1.99]}
                    scale={-36.389}
                  />
                </group>
                <group name="cap2_2" position={[0.021, 0.197, 0]} scale={[-0.014, -0.001, -0.014]}>
                  <mesh
                    name="Object_8"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_8.geometry}
                    material={materials.plastic_blue}
                  />
                </group>
                <group name="cap_1" position={[0.021, 0.2, 0]} scale={[-0.014, -0.001, -0.014]}>
                  <mesh
                    name="Object_6"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6.geometry}
                    material={materials.plastic_blue}
                    position={[313.108, 1427.206, -96.853]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={[-50.821, -46.831, -50.821]}
                  />
                </group>
                <group name="label_3" position={[0.018, 0.001, 0]} scale={[1.011, 0.999, 1.011]} />
                <group
                  name="water_inside_4"
                  position={[0.018, 0.003, 0]}
                  scale={[0.929, 0.969, 0.929]}
                />
              </group>
            </group>
          </group>
          <group
            name="Bolsa"
            position={[6.206, 7.2, -13.564]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={4.998}>
            <group name="root001">
              <group name="GLTF_SceneRootNode001" rotation={[Math.PI / 2, 0, 0]}>
                <group name="_0">
                  <mesh
                    name="Object_4001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4001.geometry}
                    material={materials.material_0}
                    position={[-3.101, -0.437, 5.634]}
                    
                  />
                  <mesh
                    name="Object_4005"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4005.geometry}
                    material={materials.material_0}
                    position={[1.155, 3.354, 5.891]}
                    scale={1.54}
                    
                  />
                </group>
                
              </group>
            </group>
           
          </group>
          
          <group
            name="Huevos"
            position={[13.046, 5.289, -3.92]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={10.721}>
            <group name="9765bdc9da4f425386073fdd8f3facfffbx" rotation={[Math.PI / 2, 0, 0]}>
              <group name="RootNode">
                <group name="Egg_Carton_GEO">
                  <mesh
                    name="Egg_Carton_GEO_Egg_Carton_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Egg_Carton_GEO_Egg_Carton_0.geometry}
                    material={materials.Egg_Carton}
                    position={[0.319, -0.366, 0.659]}
                    scale={1.662}
                  />
                  <mesh
                    name="Egg_Carton_GEO_Egg_Carton_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Egg_Carton_GEO_Egg_Carton_0001.geometry}
                    material={materials.Egg_Carton}
                    position={[0.248, 1.294, -1.155]}
                    scale={3.896}
                  />
                </group>
              </group>
            </group>
          </group>
          <group name="Gancho" position={[4.419, 6.095, -1.431]} rotation={[-Math.PI / 2, 0, 0]}>
            <group name="clothes_hangerobjcleanermaterialmergergles">
              <mesh
                name="Object_2"
                castShadow
                receiveShadow
                geometry={nodes.Object_2.geometry}
                material={materials.lambert2SG}
                position={[11.091, 21.415, -2.918]}
                scale={1.666}
              />
              <mesh
                name="Object_3"
                castShadow
                receiveShadow
                geometry={nodes.Object_3.geometry}
                material={materials.lambert3SG}
                position={[6.545, -0.025, -3.107]}
              />
            </group>
          </group>
          <group name="ocean" position={[4.705, 0.486, -1.485]}>
            <mesh
              name="ocean_1"
              castShadow
              receiveShadow
              geometry={nodes.ocean_1.geometry}
              material={materials['Urchent_Body/Material']}
              
            />
            <mesh
              name="ocean_2"
              castShadow
              receiveShadow
              geometry={nodes.ocean_2.geometry}
              material={materials['Blue_Feelers/Material']}
            />
            <mesh
              name="ocean_3"
              castShadow
              receiveShadow
              geometry={nodes.ocean_3.geometry}
              material={materials['Red_Feelers/Material']}
              
            />
            <mesh
              name="ocean_4"
              castShadow
              receiveShadow
              geometry={nodes.ocean_4.geometry}
              material={materials['Purple_Feelers/Material']}
            />
            <mesh
              name="ocean_5"
              castShadow
              receiveShadow
              geometry={nodes.ocean_5.geometry}
              material={materials['Middel_Bubbles/Material']}
              
            />
            <mesh
              name="ocean_6"
              castShadow
              receiveShadow
              geometry={nodes.ocean_6.geometry}
              material={materials['Sea_Bottom/Material']}
            />
            <mesh
              name="ocean_7"
              castShadow
              receiveShadow
              geometry={nodes.ocean_7.geometry}
              material={materials['Water/Material']}
              
            />
            <mesh
              name="ocean_8"
              castShadow
              receiveShadow
              geometry={nodes.ocean_8.geometry}
              material={materials['Clownfish2/Material']}
            />
            <mesh
              name="ocean_9"
              castShadow
              receiveShadow
              geometry={nodes.ocean_9.geometry}
              material={materials['Clownfish/Material']}
            />
            <mesh
              name="ocean_10"
              castShadow
              receiveShadow
              geometry={nodes.ocean_10.geometry}
              material={materials['wire_174186203/Material']}
              
            />
            <mesh
              name="ocean_11"
              castShadow
              receiveShadow
              geometry={nodes.ocean_11.geometry}
              material={materials['Coral_Rock1/Material']}
             
            />
            <mesh
              name="ocean_12"
              castShadow
              receiveShadow
              geometry={nodes.ocean_12.geometry}
              material={materials['Coral_Rock2/Material']}
              
            />
          </group>
          <group name="Tarro" position={[19.774, 4.216, -7.112]} rotation={[-Math.PI / 2, 0, 0]}>
            <group name="Plastic_Bucketfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
              <group name="RootNode001">
                <group
                  name="Plastic_Bucket001"
                  position={[0, 21.413, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh
                    name="Plastic_Bucket_Plastic_Bucket_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plastic_Bucket_Plastic_Bucket_0001.geometry}
                    material={materials['Plastic_Bucket.001']}
                    position={[-2933.237, 26.237, 1706.279]}
                    scale={13.691}
                  />
                  <mesh
                    name="Plastic_Bucket_Plastic_Bucket_0002"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plastic_Bucket_Plastic_Bucket_0002.geometry}
                    material={materials['Plastic_Bucket.001']}
                    position={[-835.904, 1850.203, 374.107]}
                    scale={13.691}
                  />
                </group>
              </group>
            </group>
          </group>
          <group name="Barril" rotation={[-Math.PI / 2, 0, 0]} scale={[1, 1.018, 1.198]}>
            <group name="Collada_visual_scene_group" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Cylinder">
                <mesh
                  name="defaultMaterial001"
                  castShadow
                  receiveShadow
                  geometry={nodes.defaultMaterial001.geometry}
                  material={materials.DefaultMaterial}
                  position={[-0.107, 9.617, -25.152]}
                  onClick={() => alert("Sabias que un plastico puede tardar hasta 500 años en degradarse, toma conciencia.")}
                />
              </group>
              <group name="Cylinder001">
                <mesh
                  name="defaultMaterial"
                  castShadow
                  receiveShadow
                  geometry={nodes.defaultMaterial.geometry}
                  material={materials.DefaultMaterial}
                  position={[4.058, 8.476, -2.8]}
                  onClick={() => alert("El cambio empieza por ti")}
                  
                />
              </group>
            </group>
          </group>
          <group
            name="Vasos"
            position={[9.837, 17.24, 4.649]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={6.971}>
            <group name="root002">
              <group name="GLTF_SceneRootNode002" rotation={[Math.PI / 2, 0, 0]}>
                <group name="Plastic_Cup_1">
                  <mesh
                    name="Object_4003"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4003.geometry}
                    material={materials.Plastic_Cup}
                    position={[-1.78, 0.299, -2.683]}
                  />
                  <mesh
                    name="Object_4004"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4004.geometry}
                    material={materials.Plastic_Cup}
                    position={[0.781, 0.371, -0.257]}
                  />
                </group>
              </group>
            </group>
          </group>
          <group name="Vasito" position={[46.391, 3.663, -10.249]} scale={6.614}>
            <group name="GLTF_SceneRootNode003" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Plastic_Cup_1001">
                <mesh
                  name="Object_4002"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4002.geometry}
                  material={materials['Plastic_Cup.001']}
                  position={[-8.08, 2.806, -2.79]}
                  onClick={() => alert("Gota a gota, el agua se agota. ")}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    )
  }

export default Ocean; 

useGLTF.preload("models3d/Oceanshi.glb")
