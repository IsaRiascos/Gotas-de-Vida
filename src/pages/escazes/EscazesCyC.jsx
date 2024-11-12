import React, { useState } from 'react';
import Header from "../components/Header/Header";
import "./EscazesCyC.css";
import { useNavigate } from 'react-router-dom';
import Oasis from "./Oasis";
import LightsOasis from "./LightsOasis";
import ControlsO from "./ControlsOcto";
import { Canvas } from '@react-three/fiber';
import Camel from "./camel"; // Importa el componente Camel
import Staging from './staging/staging';

const EscazesCyC = () => {
  const [playAnimation, setPlayAnimation] = useState(false);  // Estado para controlar la animación
  const navigate = useNavigate();
  const cameraSettings = {
    position: [5, 30, 50],
    fov: 45,
    // otras configuraciones
  };

  const handleNextPage = () => {
    navigate('/next-page'); // Ajusta esta ruta según tu siguiente página
  };

  const handlePreviousPage = () => {
    navigate('/escazes');
  };

  const handleButtonClick = () => {
    setPlayAnimation(true);  // Inicia la animación al hacer clic
  };

  return (
    <>
      <Header />
      <div className="container-escazesCyC">
        <h1>Causas y Consecuencias</h1>
        <p>
          Sabías que la escasez del agua se debe al cambio climático, que provoca sequías e
          inundaciones y reduce las fuentes de agua dulce por el derretimiento de
          glaciares; al crecimiento demográfico, que incrementa la demanda y agota
          las reservas; al manejo ineficiente, ya que infraestructuras obsoletas y
          métodos de riego inadecuados desperdician grandes cantidades de agua; y a
          la contaminación de fuentes hídricas por químicos y desechos industriales,
          lo cual disminuye la disponibilidad de agua potable.
        </p>      
      </div>
      <div className="canvas-container">
        {/* Botón para iniciar la animación */}
        <button onClick={handleButtonClick}>DESPERDICIAR AGUA</button>

        <Canvas shadows camera={cameraSettings} style={{ background: 'linear-gradient(#87CEEB, #1E90FF)' }}>
          <ControlsO />
          <LightsOasis />
          <Oasis />
          <Staging/>

          {/* Pasa el estado playAnimation al componente Camel */}
          <group scale={[0.035, 0.035, 0.035]} position={[4, 0, 25]}>
            <Camel playAnimation={playAnimation} />
          </group>
        </Canvas>

        <div className="navigation-buttons">
          <button className="button1" onClick={handlePreviousPage}>← Página Anterior</button>
          <button className="button" onClick={handleNextPage}>Siguiente Página →</button>
        </div>
      </div>
    </>
  );
};

export default EscazesCyC;
