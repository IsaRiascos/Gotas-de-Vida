import React from 'react';
import Header from '../../components/Header/Header';
import { Canvas } from "@react-three/fiber";
import { useNavigate } from 'react-router-dom';
import "./Entrance.css";
import Controlstt from './Controlstt';
import Lightstt from './Lightstt';
import Trees from './Trees';
import { Html } from '@react-three/drei';
import Video from './video';
const Entrance = () => {
  const navigate = useNavigate();
  
  const cameraSettings = {
    position: [0, 0, 10],
  };

  const handleNextPage = () => {
    navigate('/escazes');
  };

  const handlePreviousPage = () => {
    navigate(-1);
  };

  return (
    <>
      <Header />
      <div className="trees-container">
        <Canvas shadows camera={cameraSettings} style={{ background: 'linear-gradient(#87CEEB, #1E90FF)' }}>
          <Controlstt />
          <Lightstt />
          {/* Envolver Trees en un div con clase */}
          <Trees position={[0, -4, 0]} />
          
          <ShadowPlane />
          <Html
          center 
          distanceFactor={15}
          transform
          position={[0, 4, 0]}>
            <h1>BIENVENIDO A LA SECCIÓN DE ESCASEZ. CUIDA EL AGUA. </h1>
          </Html>
          <Video name ="screem" position={[0, -3, -18]} scale={8}/>

        </Canvas>
        </div>

        <div className="button-container">
          <button className="button" onClick={handlePreviousPage}>← Pagina Anterior</button>
          <button className="button" onClick={handleNextPage}>Siguiente Pagina →</button>
        </div>
      
    </>
  );
};

const ShadowPlane = () => {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry args={[5, 5]} />
      <shadowMaterial opacity={0.3} />
    </mesh>
  );
};

export default Entrance;

