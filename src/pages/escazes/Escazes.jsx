import React from 'react';
import Header from "../components/Header/Header";
import { Canvas } from "@react-three/fiber";
import "./Escazes.css";
import Octopus from "./Octo";
import LightsOcto from "./LightsOcto";
import Controls from "./ControlsOcto";
import { useNavigate } from 'react-router-dom';
import Saludo from './Text';
import { Physics } from "@react-three/rapier";

const Escazes = () => {
  const navigate = useNavigate();

  const cameraSettings = {
    position: [-99, -2, 10],
  };

  const handleNextPage = () => navigate('/escazes-cyc');
  const handlePreviousPage = () => navigate(-1);

  return (
    <>
      <Header />
      <div className="container-escazes">
        <h1>INTRODUCCIÓN</h1>
        <p>
          La escasez de agua es un problema crítico que afecta la salud, la agricultura y el medio ambiente a nivel global. Esta crisis es impulsada por el cambio climático, el crecimiento poblacional, el manejo ineficiente y la contaminación de los recursos hídricos. Sus impactos son vastos: millones de personas carecen de agua potable y saneamiento, los cultivos enfrentan sequías que amenazan la seguridad alimentaria, y los ecosistemas acuáticos están en riesgo de desaparecer. Las soluciones incluyen una gestión más eficiente del agua, tecnologías de desalinización, conservación y educación para un uso responsable. Actuar ahora es vital para asegurar el agua en el futuro.
        </p>
      </div>
      <div className="canvas-container">
        <Canvas
          shadows
          camera={cameraSettings}
          style={{ background: 'linear-gradient(#87CEEB, #1E90FF)' }}
        >
          <Controls />
          <LightsOcto />
          <Physics debug={false}>
            <Octopus  position={[0, 6, 0]} scale={18}/>
            <ShadowPlane />
          </Physics>
          <Saludo scale={8} />
        </Canvas>
        <div className="button-container">
          <button className="button" onClick={handlePreviousPage}>
            ← Página Anterior
          </button>
          <button className="button" onClick={handleNextPage}>
            Siguiente Página →
          </button>
        </div>
      </div>
    </>
  );
};

const ShadowPlane = () => {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry args={[10, 10]} /> {/* Ajuste del tamaño del plano */}
      <shadowMaterial opacity={0.3} />
    </mesh>
  );
};

export default Escazes;
