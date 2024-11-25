import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { useRef, useCallback } from "react";

const Ball = (props) => {
  const ballRef = useRef(null);
  const { nodes, materials } = useGLTF("models3d/ball.glb");
  
  useFrame(() => {
    
  });
  const handleBall = useCallback(() => {
    console.log("clicked balon");
    ballRef.current.applyTorqueImpulse({ x: 2, y: 10, z: 5 }, true);
  }, []);

  return (
    <RigidBody ref={ballRef} type="dynamic" friction={0.2} restitution={0.9} >
      <group {...props} dispose={null}>
        <group name="Scene">
          <group
            name="Sketchfab_model"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={3.603}
          >
            <group
              name="Ballobjcleanermaterialmergergles"
              
            >
              <mesh
              {...props}
              onClick={handleBall}
                name="Object_2"
                castShadow
                receiveShadow
                geometry={nodes.Object_2.geometry}
                material={materials.Black_s}
              />
              <mesh
              {...props}
              onClick={handleBall}
                name="Object_3"
                castShadow
                receiveShadow
                geometry={nodes.Object_3.geometry}
                material={materials.White_s}
              />
              <CuboidCollider args={[1, 0.5, 1]} position={props.position} />
            </group>
          </group>
        </group>
      </group>
    </RigidBody>
  );
};

export default Ball;
useGLTF.preload("models3d/ball");
