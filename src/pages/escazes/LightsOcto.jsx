const LightsOcto = () => {
    return (
      <>
        <ambientLight />
        <directionalLight position={[10, 10, 0]} />
      </>
    );
  };
  
  export default LightsOcto;