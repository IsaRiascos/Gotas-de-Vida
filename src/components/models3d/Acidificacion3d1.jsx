import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Html, Sparkles } from '@react-three/drei';
import React, { Suspense, useRef } from 'react';
import { Physics, useBox, usePlane } from '@react-three/cannon';

// Configuración global
const COLORS = {
  background: '#2F4F4F',
  ground: '#444',
  model: 'orange',
};
const SPARKLE_CONFIG = {
  size: 5,
  scale: [10, 10, 10],
  speed: 0.5,
  count: 100,
  color: 'gray',
};
const PHYSICS_CONFIG = {
  gravity: [0, -9.8, 0],
  restitution: 0.7, // Rebote
  friction: 0.3, // Fricción
};

// Modelo que cae (con reinicio al hacer clic)
const FallingModel = ({ geometryType = 'sphere', color = COLORS.model }) => {
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [0, 5, 0],
    restitution: PHYSICS_CONFIG.restitution,
    friction: PHYSICS_CONFIG.friction,
  }));

  const handleClick = () => {
    // Reinicia la posición y velocidad del modelo
    api.position.set(0, 5, 0);
    api.velocity.set(0, 0, 0);
  };

  return (
    <mesh ref={ref} castShadow onClick={handleClick}>
      {geometryType === 'sphere' ? (
        <sphereGeometry args={[0.5, 32, 32]} />
      ) : (
        <boxGeometry args={[1, 1, 1]} />
      )}
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

// Suelo
const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -1, 0],
  }));

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color={COLORS.ground} />
    </mesh>
  );
};

// Escena principal
const Acidificacion3d1 = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [5, 5, 10], fov: 50 }}
      style={{ background: COLORS.background }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight
        castShadow
        position={[5, 10, 5]}
        intensity={1}
        shadow-mapSize={{ width: 1024, height: 1024 }}
      />

      <Suspense fallback={<Html>Cargando modelo...</Html>}>
        <Environment preset="city" background />
        <Sparkles {...SPARKLE_CONFIG} />
      </Suspense>

      <Physics gravity={PHYSICS_CONFIG.gravity} defaultContactMaterial={{ restitution: PHYSICS_CONFIG.restitution }}>
        <Ground />
        <FallingModel geometryType="sphere" />
      </Physics>

      <OrbitControls enablePan enableZoom enableRotate />
    </Canvas>
  );
};

export default Acidificacion3d1;
