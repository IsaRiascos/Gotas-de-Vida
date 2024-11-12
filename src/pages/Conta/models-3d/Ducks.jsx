import { useGLTF } from "@react-three/drei";

const Ducks = (props) => {
    const {nodes, materials } = useGLTF ("/models3d/plastic_water_bottle")

return(
<group {...props} dispose={null}>
    <group name="Scene">

    
                onClick={() => alert("PUTO EL QUE ME DE CLICK")}
                onPointerEnter={() => alert("ME ETSITO")}
                onPointerLeave={() => alert("OHHHHHH ME VENGOO")}

         
                

           

    </group>
    </group>
)
}

export default Ducks;
useGLTF.preload("/models3d/plastic_water_bottle")