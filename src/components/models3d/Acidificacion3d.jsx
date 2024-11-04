import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations, Environment, ContactShadows, Html } from '@react-three/drei';
import React, { Suspense, useEffect } from 'react';

const AcidificacionModel = () => {
  const { scene, animations } = useGLTF('/acidificacion3d.glb'); // Asegúrate de que la ruta sea correcta
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions) {
      actions[Object.keys(actions)[0]].play(); // Reproduce la primera animación
    }
  }, [actions]);

  return <primitive object={scene} dispose={null} />;
};

const Acidificacion3d = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [2, 2, 5], fov: 50 }}
      style={{ background: '#87CEFA' }} // Simula el fondo del mar
    >
      <ambientLight intensity={0.3} />
      <directionalLight
        castShadow
        position={[5, 10, 5]}
        intensity={1}
        shadow-mapSize={{ width: 1024, height: 1024 }}
      />
      
      <Suspense fallback={<Html><div style={{ color: '#333', textAlign: 'center', marginTop: '20px' }}>Cargando modelo...</div></Html>}>
        <Environment preset="sunset" background />
        <AcidificacionModel />
        <ContactShadows position={[0, -1, 0]} opacity={0.5} scale={10} blur={1.5} far={10} />
      </Suspense>

      <OrbitControls enablePan enableZoom enableRotate />
    </Canvas>
  );
};

export default Acidificacion3d;
