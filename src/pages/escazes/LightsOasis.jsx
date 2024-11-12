import React from 'react';

const LightsOasis = () => {
  return (
    <>
      {/* Luz ambiental suave para iluminar todo el entorno */}
      <ambientLight intensity={0.6} />
      
      {/* Luz direccional principal para crear sombras y dar dirección a la luz */}
      <directionalLight 
        castShadow 
        position={[1, 1, 1]} 
        intensity={1.5}  // Mayor intensidad para iluminar más áreas
        shadow-mapSize-width={128}
        shadow-mapSize-height={128}
        shadow-camera-far={50}
        shadow-camera-left={-20}  // Expande el rango de la cámara de sombra
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />

      {/* Luz direccional secundaria para iluminar áreas opuestas */}
      <directionalLight 
        castShadow 
        position={[-10, -10, -10]} 
        intensity={0.8} 
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
      
      {/* Luz puntual cerca del agua o áreas específicas */}
      <pointLight 
        position={[0, 5, 0]} 
        intensity={1} 
        distance={30} 
        decay={2} 
        color={"#ffffff"} 
      />
    </>
  );
};

export default LightsOasis;
