import { Environment } from '@react-three/drei';

const Staging = () => {
  return (
    <>
        <Environment
        ground={{
            height: 320,
            radius: 340,
            scale: 400,
        }}
        files={"/hdris/sky/sky_2k.hdr"}
        background={true}
     />
    </>
  );
};

export default Staging;