import { useVideoTexture } from "@react-three/drei";

const Video = (props) => {
  const texture = useVideoTexture("/videos/videoes.mp4", {
    muted: true,
    loop: true,
    start: true
  });

  return (
    <mesh {...props}>
      <planeGeometry args={[8, 4]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
};

export default Video;
