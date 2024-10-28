import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { AnimationMixer, LoopRepeat } from 'three';

export const CardAcificacion3d = ({scene, animations}) => {
    const acidificacionAnimation = animations[0];
    const mixerRef = useRef();

    if(!mixerRef.current){
        mixerRef.current = new AnimationMixer(scene);
    }

    const mixer = mixerRef.current;
    const action = mixer.clipAction(acidificacionAnimation);
    action.setLoop(LoopRepeat, Infinity);
    action.play();
    useFrame((state, delta) => {
        mixer.update(delta)
    })

    console.log(action);

  return <primitive object={scene} animations={animations}/>
}

export default CardAcificacion3d