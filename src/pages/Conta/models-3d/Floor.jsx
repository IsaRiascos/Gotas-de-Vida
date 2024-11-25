import { RigidBody } from "@react-three/rapier";

const Floor = (props) => {
    return (
    <RigidBody friction={1}>
        <mesh {...props}>
        <circleGeometry args={[52, 60]} />
        <meshStandardMaterial color={"green"} />
            </mesh>
    </RigidBody>
    );
};

export default Floor;