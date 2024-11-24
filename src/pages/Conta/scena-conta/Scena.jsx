import { Canvas } from "@react-three/fiber"; // Importa el componente Canvas que sirve como contenedor para renderizar el contenido 3D
import {  OrbitControls, useGLTF, Cloud, Sky} from "@react-three/drei"; // Importa OrbitControls para permitir el control del modelo con el ratón y useGLTF para cargar modelos GLTF
import Ocean from "../models-3d/Ocean";
import "./scena.css" // Importa los estilos para el componente de Scena.css
import Text from "./Text";


// Definición del componente funcional RecyCling
const Scena = () => {
  return (
    <>
      {/* Renderiza el componente Header en la parte superior */}

      
      {/* Contenedor para el modelo 3D con clase 'container-3d' */}
      <div className="container-3d">
        {/* Canvas que actúa como el área para renderizar el contenido 3D */}
        <Canvas
          camera={{
            position: [0, 200, 600 ], // Posición inicial de la cámara para que el modelo se vea completo
            fov: 10, // Campo de visión (Field of View) de la cámara, 70 grados
          }}>
          
          {/* Controles para poder rotar el modelo 3D automáticamente */}
          <OrbitControls
            autoRotate={false} // El modelo rotará automáticamente
          />
          
          {/* Luz ambiental que ilumina el modelo de manera uniforme */}
          <ambientLight intensity= {0.3} />

          {/* Luz direccional que ilumina desde una posición específica con una intensidad alta */}
          <directionalLight 
          position={[5, 5, 5]} 
          intensity={5} 
          
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.0001}
          />

          {/* Cielo y sol con ajustes personalizados */}
          <Sky
            sunPosition={[0, 0,-1]} // Coloca el sol debajo del horizonte
            inclination={0.2} // Ajusta la inclinación para simular el atardecer
            azimuth={180} // Ajusta el ángulo de azimut para cambiar la dirección de la luz
            mieCoefficient={0.005} // Ajusta la dispersión atmosférica
            elevation={85} // Ajusta la elevación del sol
            mieDirectionalG={0.07} // Ajusta el brillo del sol
            rayleigh={3} // Ajusta la dispersión de Rayleigh
            turbidity={15} // Ajusta la claridad del cielo
            exposure={0.8} // Ajusta la exposición del cielo
            distance={200}
          />
          
          {/* Renderiza el modelo TrashCan, que contiene el modelo 3D */}
          <Ocean position={[0,-9,0]}/>
          <Text/>

          {/* Nubes en la escena */}
          <Cloud position={[-40, 40, -30]} opacity={0.8} speed={0.2} width={30} depth={1.5} segments={20}/>
          <Cloud position={[40, 20, 0]} opacity={0.8} speed={0.2} width={15} depth={1.5} segments={20} />
          <Cloud position={[-35, 20, 40]} opacity={0.8} speed={0.2} width={30} depth={1.5} segments={20} />
          <Cloud position={[20, 50,40]} opacity={0.8} speed={0.2} width={12} depth={1.5} segments={20} />
        </Canvas>
      </div>
      
    </>
    
    

  );
};

export default Scena; // Exporta el componente  para ser usado en otras partes de la aplicación