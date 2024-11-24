import { Canvas } from "@react-three/fiber"
import Trash from "../../models-3d/Trash"
import { OrbitControls, Sparkles } from "@react-three/drei"
import "./ScenaSolucion.css"
import Bamboo from "../../models-3d/Bamboo"
import Panel from "../../models-3d/Panel"

const ScenaSolucion = () => {
    return(
        <>
        
        <div className="container-3dS">

            <Canvas
            camera={{
                position: [0, 5, 20], // Posición inicial de la cámara
                fov: 30, // Campo de visión
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

                <Sparkles
                position={[0, 0, 0]} // Establece la posición de las chispas en la escena
                color="green" // Establece el color de las chispas
                count={35} // Número de chispas
                size={10} // Tamaño de cada chispa
                fade={true} // Desactiva el efecto de desvanecimiento en las chispas
                speed={0.5} // Velocidad del movimiento de las chispas
                scale={10} // Escala de la dispersión de las chispas en la escena
                />
                <Trash position={[-1,3,0]}/>
                <Bamboo position = {[3,2,0]}/>
                <Panel position={[4,-2,0]} autoRotate={true}/>


            </Canvas>
        </div>
        
        </>
    )
}

export default ScenaSolucion; 