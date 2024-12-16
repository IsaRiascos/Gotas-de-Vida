import { useVideoTexture } from "@react-three/drei";

const Videos = (props) =>{
    const texture  = useVideoTexture("/videos/video_basura.mp4", {
        muted: true, 
        loop: true, 
        start: true
    }); 

    return(
        <mesh{...props}>
        <planeGeometry args={[2,1]}/>
        <meshBasicMaterial map={texture} toneMapped={false}/>
        
        </mesh>
    );
};

export default Videos; 