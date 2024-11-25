import { useGLTF } from "@react-three/drei";
import { useState } from "react";
import { Html } from "@react-three/drei";

const Bags = (props) => {
  const { nodes, materials } = useGLTF("models3d/bagss.glb");
  const [clickedObject, setclickedObjects] = useState(null);

  const handleClick = (e, objectName) => {
    e.stopPropagation();
    const position = e.object.position;
    setclickedObjects({ name: objectName, position });
  };
  return (
    <group {...props} dispose={null}>
      <group name="b2778c990f0d4859ae805b1178c14d2dfbx" scale={0.09}>
        <mesh
          name="bag1_garbagebags_0"
          geometry={nodes.bag1_garbagebags_0.geometry}
          material={materials["garbagebags.001"]}
          position={[4.554, 8.922, 42.482]}
          onClick={(e) => handleClick(e, "bag2_garbagebags_0")}
        />
        <mesh
          name="bag2_garbagebags_0"
          geometry={nodes.bag2_garbagebags_0.geometry}
          material={materials["garbagebags.001"]}
          position={[-12.994, 13.762, -44.728]}
          rotation={[Math.PI, -1.128, Math.PI]}
          
          onPointerEnter={() => alert("¡Cuidar el agua nunca es tarde, empieza hoy! 💧")}
        />
        {clickedObject && clickedObject.position && (
          <Html
            position={[
              clickedObject.position.x + 75,
              clickedObject.position.y - 110,
              clickedObject.position.z,
            ]}
            center
          >
            <div
              style={{
                background: "rgba(255, 255, 255, 0.8)",
                padding: "5px",
                borderRadius: "150px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                width: "400px",
                textAlign: "center",
                fontSize:"12px"
              }}
            >
              <p>
                Interactúa con los elementos 3D:

                Usa el mouse para hacer clic o pasar sobre ellos y ver acciones.
                Mueve los objetos con las teclas W, A, S, D.
              </p>
            </div>
          </Html>
        )}
      </group>
    </group>
  );
};

export default Bags;
useGLTF.preload("models3d/bagss");
