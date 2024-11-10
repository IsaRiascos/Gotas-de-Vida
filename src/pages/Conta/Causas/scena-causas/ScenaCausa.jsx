import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Earth from "../../models-3d/Earth";
import "./ScenaCausas.css";

const ScenaCausas = () => {
    return (
        <>
            <div className="containerCausas-3d">
                <Canvas
                    camera={{
                        position: [0, 0, 10], // Posición inicial de la cámara
                        fov: 20, // Campo de visión
                    }}
                >
                    <OrbitControls autoRotate={true} />

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

                    <Earth />
                </Canvas>
            </div>
        </>
    );
};

export default ScenaCausas;

