import { useGLTF } from "@react-three/drei"


const Planet = (props) =>{
    const { nodes, materials } = useGLTF("models3d/deforestationn.glb")
    return (
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={15.409}>
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group position={[10, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__pPlane1_lambert3_0.geometry}
                material={materials.lambert3}
                position={[-5, 0, 0]}
                scale={9.99}
                onPointerEnter={() => alert("¡Cuidar el agua nunca es tarde, empieza hoy! 💧")}
              />
            </group>
            <group position={[0, 1.602, 0]}>
              <group position={[-4.693, -0.947, -1.15]} scale={[0.362, 0.647, 0.362]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCylinder1_brownTree_0.geometry}
                  material={materials.brownTree}
                  position={[16.186, 0.155, 4.319]}
                />
              </group>
            </group>
            <group position={[2, 0, -4]} scale={0.017}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.treelarge_bark1_0.geometry}
                material={materials.bark1}
                onPointerEnter={() => alert("🌳 Cada árbol cuenta, salva uno hoy.")}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.treelarge_bark1_0001.geometry}
                material={materials.bark1}
                position={[383.669, 5.697, -15.091]}
                scale={0.492}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.treelarge_bark1_0002.geometry}
                material={materials.bark1}
                position={[-3.734, 4.845, 448.76]}
                scale={0.744}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.treelarge_bark1_0003.geometry}
                material={materials.bark1}
                position={[127.809, 8.505, 209.412]}
                scale={0.498}
              />
            </group>
          </group>
        </group>
        <group position={[-1.695, 0, 4.7]}>
          <group position={[0, 1.602, 0]}>
            <group position={[-7.11, -0.647, -1.782]} scale={[0.507, 0.906, 0.507]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__pasted__pCylinder1_pasted__pasted__brownTree_0001.geometry}
                material={materials.pasted__pasted__brownTree}
                position={[20.113, -0.84, -4.788]}
                scale={0.2}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__pasted__pCylinder1_pasted__pasted__brownTree_0002.geometry}
                material={materials.pasted__pasted__brownTree}
                position={[20, -0.9, -6.5 ]}
                scale={0.156}
              />
            </group>
          </group>
        </group>
      </group>
    )
}

    export default Planet; 
  useGLTF.preload("models3d/deforesta");
