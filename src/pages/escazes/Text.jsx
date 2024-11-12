import { Html } from "@react-three/drei";

const  Saludo =() =>{
    return (
        <Html
        center
        distanceFactor={15}
        transform
        position={[19,5,1]}
        rotation={[0, -Math.PI / 2, 0]} 
        
        >
            <h1>NO DESPERDICIEMOS EL AGUA</h1>
        </Html>
    )

}
export default Saludo;