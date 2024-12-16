import { Html } from "@react-three/drei";

const  Saludo =() =>{
    return (
        <Html
        center
        distanceFactor={15}
        transform
        position={[39,5,1]}
        rotation={[0, -Math.PI / 2, 0]} 
        scale={8}
        
        >
            <h1>DAR CLICK ALA GOTA    NO DESPERDICIEMOS EL AGUA QUE SE VA Y NO VUELVE</h1>
        </Html>
    )

}
export default Saludo;