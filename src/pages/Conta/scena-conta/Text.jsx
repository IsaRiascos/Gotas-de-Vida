import { Html } from "@react-three/drei";


const Text = () => {
    return (
        <>
        <Html
        center
        distanceFactor={50}
        transform
        position={[10,-25,0]}
        style={{
            color: "white",
            fontSize: "25pt"
        }}>
            
            
            <h3>
            Cada gota contaminada
            es 
            una vida en riesgo.
            </h3>
    
        </Html>
       
        </>

    
    )

    

};

export default Text; 