import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations, Environment, ContactShadows, Html, Sparkles } from '@react-three/drei';
import React, { Suspense, useEffect, useState, useCallback } from 'react';

// Constantes centralizadas
const CAMERA_POSITION = [50, 3, 12];
const FOG_COLOR = '#2F4F4F';
const TEXT_STYLE = {
  color: 'white',
  fontSize: '100px',
  fontWeight: 'bold',
  textAlign: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  padding: '12px 20px',
  borderRadius: '12px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)'
};

// Modelo principal
const AcidificacionModel = ({ isPlaying }) => {
  const { scene, animations } = useGLTF('/contaminacion.glb');
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && animations.length > 0) {
      const [firstAction] = Object.values(actions);
      if (firstAction) {
        isPlaying ? firstAction.play() : firstAction.stop();
      }
    }
  }, [actions, isPlaying]);

  return <primitive object={scene} dispose={null} />;
};

// Texto HTML para la escena
const ContaminacionText = () => (
  <Html position={[20, 6, 0]} transform>
    <div style={TEXT_STYLE}>
      Pulsa la tecla Espacio o haz clic para detener la contaminación.
    </div>
  </Html>
);

// Partículas de contaminación
const ContaminacionParticles = () => (
  <Sparkles
    size={5}
    scale={[10, 10, 10]}
    position={[0, 0, 0]}
    speed={0.5}
    count={100}
    color="gray"
  />
);

// Componente principal
const Acidificacion3d2 = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  // Función para alternar la animación
  const toggleAnimation = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Space') {
        toggleAnimation();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', toggleAnimation);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', toggleAnimation);
    };
  }, [toggleAnimation]);

  return (
    <Canvas
      shadows
      camera={{ position: CAMERA_POSITION, fov: 50 }}
      style={{ background: FOG_COLOR }}
      fog={{ color: FOG_COLOR, near: 5, far: 15 }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight
        castShadow
        position={[5, 10, 5]}
        intensity={1}
        shadow-mapSize={{ width: 1024, height: 1024 }}
      />
      <Suspense fallback={<Html><div>Cargando modelo, por favor espera...</div></Html>}>
        <Environment preset="city" background />
        <AcidificacionModel isPlaying={isPlaying} />
        <ContactShadows position={[0, -1, 0]} opacity={0.5} scale={10} blur={1.5} far={10} />
        <ContaminacionParticles />
        <ContaminacionText />
      </Suspense>
      <OrbitControls enablePan enableZoom enableRotate />
    </Canvas>
  );
};

export default Acidificacion3d2;
