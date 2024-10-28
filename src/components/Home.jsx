import React from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import appFirebase from '../credenciales';
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth(appFirebase);

// Componente de animación 3D con react-three-fiber
const House = () => {
  const houseRef = useRef(null);
  let time = 0;

  useFrame((state, delta) => {
    time += delta * 1;

    const amplitudeY = 5;
    const speedX = 3;
    const frequency = 2;

    houseRef.current.position.x += speedX * delta;
    houseRef.current.position.y = Math.sin(time * frequency) * amplitudeY;

    // Limitar el movimiento de la figura para que no desaparezca fuera de la pantalla
    if (houseRef.current.position.x > 10) {
      houseRef.current.position.x = -10; // Ajuste de posición en X
    }

    houseRef.current.rotation.y += 1 * delta;
  });

  return (
    <group ref={houseRef} name="house" scale={[2, 1, 3]}>
      <mesh
        name="roof"
        position-y={1}
        rotation-y={Math.PI * 0.25}
        scale-y={1.5}
      >
      </mesh>
      <mesh name="structure">
        <capsuleGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial color="#DAD8D8" />
      </mesh>
    </group>
  );
};

// Componente principal con botón de cerrar sesión
const Home = ({ correoUsuario }) => {
  return (
    <div className="canvas-container">
      <Canvas>
        <ambientLight />
        <House />
      </Canvas>

      {/* Botón de cerrar sesión al final */}
      <button
        className="logout-button"
        onClick={() => signOut(auth)}
      >
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Home;
