import { OrbitControls } from "@react-three/drei";

const ControlsO = () => {
  return (
    <OrbitControls
      makeDefault
      enablePan={false}               // Deshabilita el paneo lateral
      minPolarAngle={Math.PI / 2}     // Restringe el ángulo de rotación vertical
      maxPolarAngle={Math.PI / 2}     // Restringe el ángulo de rotación vertical
      enableZoom={true}               // Habilita el zoom
    />
  );
};

export default ControlsO;
