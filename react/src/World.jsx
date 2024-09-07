import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import House from "./House";

const World = () => {
  const cameraSettings = {
    position: [0, 5, 10], 
    fov: 60,  
  };

  return (
    <>
      <Canvas camera={cameraSettings}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[0, 10, 10]} intensity={5} />
        <OrbitControls enablePan={false} />
        <House />
        
      </Canvas>
    </>
  );
};

export default World;

