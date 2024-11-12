import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations, Environment, ContactShadows, Html, Sparkles } from '@react-three/drei';
import React, { Suspense, useEffect } from 'react';

const AcidificacionModel = () => {
  const { scene, animations } = useGLTF('/acidificacion3d.glb');
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions) {
      actions[Object.keys(actions)[0]].play();
    }
  }, [actions]);

  return <primitive object={scene} dispose={null} />;
};

const Acidificacion3d = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 3, 12], fov: 50 }}
      style={{ background: '#87CEFA' }}
      fog={{ color: '#87CEFA', near: 5, far: 15 }}
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

        {/* Partículas o burbujas */}
        <Sparkles size={3} scale={[10, 10, 10]} position={[0, 0, 0]} speed={0.2} count={50} />

        {/* Texto HTML sobre la escena */}
        <Html position={[0, 4, 0]} transform>
          <div style={{
            color: 'white',
            fontSize: '28px',
            fontWeight: 'bold',
            textAlign: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            padding: '12px 20px',
            borderRadius: '12px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)'
          }}>
            Acidificación de los Océanos: Un Problema Silencioso
          </div>
        </Html>
      </Suspense>

      <OrbitControls enablePan enableZoom enableRotate />
    </Canvas>
  );
};

export default Acidificacion3d;
