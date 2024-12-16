    import { Html } from "@react-three/drei";

    const TextC = () => {
    return (
        <>
        <Html
            center
            distanceFactor={30}
            transform
            position={[-0.4, 6.5, 0]}
            style={{
            color: "#FFFFFF",
            fontSize: "1.8px",
            }}
        >
            <h3>El mal manejo de residuos</h3>
            <h3>aumenta la basura en entornos naturales.</h3>
            <h3>y pone en peligro la vida silvestre.</h3>
        </Html>
        </>
    );
    };

    export default TextC;
