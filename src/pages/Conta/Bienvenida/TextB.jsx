import { Html,Text3D,Center} from "@react-three/drei";


const TextB = () => {
    return (
        <>

<Center top left position={[40, 35, 20]}>
                <Text3D
                    position={[0, 10, 0]}
                    
                    font="/Fonts/blue-ocean.json"
                    bevelEnabled
                    bevelSize={0.02}
                    bevelThickness={0.1}
                    height={0.5}
                    lineHeight={0.75}
                    letterSpacing={0.05}
                    size={3}
                    >
                    {`Bienvenidos a la seccion de contaminacion`}  
                    <meshNormalMaterial />
                </Text3D>
            </Center>

            

            <Html
        center
        distanceFactor={30}
        transform
        position={[35,8,25]}
        style={{
            color: "black",
            fontSize: "30px"
        }}>
        
            <h3>
                Haz Click ↓
            </h3>
           
            
        </Html>
         
        </>        

    
    )

    

};

export default TextB; 