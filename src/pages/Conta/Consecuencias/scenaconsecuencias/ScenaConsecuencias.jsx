import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Water from "../../models-3d/Water";
import "./ScenaConsecuencias.css"



const ScenaConsecuencias = () =>{
    return(
        <>
        
        <div className="container-3dC">

            <Canvas
            camera={{
                position: [0, 5, 20], // Posición inicial de la cámara
                fov: 45, // Campo de visión
            }}>
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

            

                <Water position={[3,0,0]}/>
        
            </Canvas>
        </div>
        
        </>
    )

    
}


export default ScenaConsecuencias;