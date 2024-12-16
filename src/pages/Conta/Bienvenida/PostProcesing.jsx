import {  EffectComposer, SSAO, Vignette } from "@react-three/postprocessing";

const PostProcessing = () =>{
    return(
        <EffectComposer>
               <Vignette offset={0.3}
                darkness={0.2} // oscuridad del viñete
                eskil={false} // técnica de viñete de Eskil
                >
                 </Vignette>

            <SSAO></SSAO>
        </EffectComposer>
    )
}

export default PostProcessing; 