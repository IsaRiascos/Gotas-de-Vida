import { useFrame } from "@react-three/fiber";
import { useRef } from "react";


const House = () => {
  const houseRef = useRef(null);
  let time = 0; // Variable para controlar el tiempo

  useFrame((state, delta) => {
    time += delta * 1; // Incrementa el tiempo para animar el movimiento

    // Movimiento sinusoidal
    const amplitudeY = 5; // Amplitud del movimiento en Y (altura de la curva)
    const speedX = 3; // Velocidad del movimiento horizontal (desplazamiento en X)
    const frequency = 2; // Frecuencia de la onda sinusoidal

    // Movimiento en el eje X y Y
    houseRef.current.position.x += speedX * delta; // Movimiento horizontal
    houseRef.current.position.y = Math.sin(time * frequency) * amplitudeY; // Movimiento vertical sinusoidal

    // Limitar la posición en el eje X para que no desaparezca de la pantalla
    if (houseRef.current.position.x > 25) {
      houseRef.current.position.x = -25; // Vuelve al otro lado de la pantalla
    }

    // Rotación del objeto
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

export default House;

