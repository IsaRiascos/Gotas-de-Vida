import { Canvas } from "@react-three/fiber";
import Header from "../../components/Header/Header";
import "./bienvenida.css";
import { Physics } from "@react-three/rapier";
import Floor from "../models-3d/Floor";
import Cat from "../models-3d/Cat";
import { useNavigate } from "react-router-dom";
import Controls from "./Controls";
import Pine from "../models-3d/Pine";
import TextB from "./TextB";
import Ball from "../models-3d/Ball";
import { Sparkles } from "@react-three/drei";
import Bags from "../models-3d/Bags";
import Video from "./Video";
import PostProcessing from "./PostProcesing";

const bienvenida = () => {
  const navigate = useNavigate();
  const handleNextPage = () => {
    navigate("/contaminacion");
  };
  const cameraSettings = {
    position: [0, 8, 80],
  };
  return (
    <>
      <Header />
      <div className="container-bienvenida3d">
        <Canvas shadows camera={cameraSettings}>
          <Controls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 10, 10]} intensity={2} castShadow />
          <Physics gravity={[0, -9.81, 0]}>
            <Floor
              name="floor"
              rotation-x={-Math.PI * 0.5}
              receiveShadow
              position={[0, -3, 0]}
            />
            <Pine name="pine" position={[32, 25, 290]} castShadowposition />
            <Ball name="ball" position={[-5, 2, 10]} castShadow />

            <Cat position={[20, 0, 0]} />
            <TextB />
            <Bags position={[30, -4, 30]} />
          </Physics>
          <Sparkles
            position={[0, 3, 0]} // Establece la posición de las chispas en la escena
            color="green" // Establece el color de las chispas
            count={100} // Número de chispas
            size={30} // Tamaño de cada chispa
            fade={true} // Desactiva el efecto de desvanecimiento en las chispas
            speed={2} // Velocidad del movimiento de las chispas
            scale={50} // Escala de la dispersión de las chispas en la escena
          />
          <Video name="screen" position={[-70, 23, 0]} scale={25} />
          <PostProcessing/>
        </Canvas>
        <button className="buutton" onClick={handleNextPage}>
          →
        </button>
      </div>
    </>
  );
};

export default bienvenida;
