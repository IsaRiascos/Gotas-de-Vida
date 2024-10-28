import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, {Suspense} from 'react';
import {CardAcificacion3d} from './cardModels3d/CardAcificacion3d';

const Acidificacion3d = () => {

    const{scene, animations} = useGLTF("/acidificacion3d.glb");

  return (

    <div >
        <Canvas
        camera={{zoom: 2, position: [0, 0, 5]}}
        style={{width: "1250px", height: "500px"}}
        >
          <ambientLight intensity={2}/>
          <OrbitControls/>
            <Suspense>
                <CardAcificacion3d scene={scene} animations={animations}/>
            </Suspense>
        </Canvas>

    </div>
  );
}

export default Acidificacion3d