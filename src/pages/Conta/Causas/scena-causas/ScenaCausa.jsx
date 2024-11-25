import { Canvas } from "@react-three/fiber";
import { KeyboardControls, OrbitControls, useGLTF,Sky,Stars } from "@react-three/drei";
import Controls from "../Controls";
import Earth from "../../models-3d/Earth";
import "./ScenaCausas.css";
import { useMemo } from "react";
import TextC from "./TextC";
import Planet from "../../models-3d/Planet";
import Bags from "../../models-3d/Bags";

const ScenaCausas = () => {
    const map = useMemo(
        () =>[
            {name:"forward",keys: ["ArrowUp", "KeyW"],},
            { name: "backward", keys: ["ArrowDown", "KeyS"] },
        ],[]
    )
    return (
        <>
        <KeyboardControls map={map}>
            <div className="containerCausas-3d">
                <Canvas
                    camera={{
                        position: [0, 4, 10], // Posición inicial de la cámara
                        fov: 80, // Campo de visión
                    }}
                >
                    <OrbitControls autoRotate={false} />

                    {/* Luz ambiental con mayor intensidad para iluminar el modelo completamente */}    
                    <ambientLight intensity={0.6} />

                    {/* Varias luces direccionales desde diferentes ángulos */}
                    <directionalLight position={[5, 10, 10]} intensity={1.5} />
                    <directionalLight position={[-5, -10, -10]} intensity={1.5} />
                    <directionalLight position={[0, 10, -10]} intensity={1} />

                    {/* SpotLight como luz de relleno para reducir sombras */}
                    <spotLight
                        position={[0, 20, 10]}
                        angle={0.3}
                        penumbra={0.5}
                        intensity={0.8}
                        color="#ffffff"
                    />

                    {/* Cielo y sol con ajustes personalizados */}
                    <Sky
                    sunPosition={[0, 0.1, 2]}     // Bajé más el sol (de 0.5 a 0.1)
                    inclination={0.001}           // Reduje más el ángulo (de 0.002 a 0.001)
                    azimuth={150}                 // Mantuve la misma orientación
                    mieCoefficient={0.0005}       // Reduje más la dispersión (de 0.001 a 0.0005)
                    mieDirectionalG={0.2}         // Reduje para más contraste (de 0.3 a 0.2)
                    rayleigh={0.2}                // Reduje más los tonos azules (de 0.3 a 0.2)
                    turbidity={8}                 // Aumenté la densidad atmosférica (de 5 a 8)
                    exposure={0.15}               // Reduje más la exposición (de 0.2 a 0.15)
                    distance={30}                 // Aumenté la distancia (de 25 a 30)
                />

                

                <Stars
                radius={80} // Radio del campo estelar, determina qué tan lejos se extienden las estrellas.
                depth={20} // Profundidad del campo estelar, afecta la distancia de las estrellas desde la cámara.
                count={5000} // Número de estrellas en el campo, influye en la densidad de estrellas en la escena.
                factor={4} // Factor que escala el tamaño de las estrellas, haciéndolas más grandes o pequeñas.
                saturation={0} // Nivel de saturación de las estrellas, controla la intensidad del color.
                fade={1} // Habilita el efecto de desvanecimiento, haciendo que las estrellas aparezcan y desaparezcan gradualmente.
                speed={4} // Velocidad de la animación del campo estelar, afecta el movimiento de las estrellas.
                />
                

                    <Earth position= {[0.1,0.2,0.1]}/>
                    <Planet position= {[-0.5,3.6,0]}/>
                    <Controls />
                    <TextC/>
                    
                </Canvas>
            </div>
        </KeyboardControls>
        </>
      
    );
};

export default ScenaCausas;

