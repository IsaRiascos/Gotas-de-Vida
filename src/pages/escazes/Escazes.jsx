import Header from "../components/Header/Header";
import { Canvas } from "@react-three/fiber";
import "./Escazes.css";
import Octopus from "./Octo";
import LightsOcto from "./LightsOcto";
import Controls from "./ControlsOcto";
const escazes = () => {
  const cameraSettings = {
    position: [-1, 3, 10],
  };

  return (
    <>
      <Header />
      <div className="container-escazes">
        <h1>INTRODUCCION</h1>
        <p>La escasez de agua es un problema crítico que afecta la salud, la agricultura y el medio ambiente a nivel global. Esta crisis es impulsada por el cambio climático, el crecimiento poblacional, el manejo ineficiente y la contaminación de los recursos hídricos. Sus impactos son vastos: millones de personas carecen de agua potable y saneamiento, los cultivos enfrentan sequías que amenazan la seguridad alimentaria, y los ecosistemas acuáticos están en riesgo de desaparecer. Las soluciones incluyen una gestión más eficiente del agua, tecnologías de desalinización, conservación y educación para un uso responsable. Actuar ahora es vital para asegurar el agua en el futuro.</p>
      </div>
      <div className="canvas-container">
      <Canvas camera={cameraSettings}>
      <Controls />
      <LightsOcto/>
      <Octopus/>      
    </Canvas>
    </div>
      
    </>
  );
};

export default escazes;