import Header from "../components/Header/Header";
import "./Acidificacion.css";
import Acidificacion3d from "../../components/models3d/Acidificacion3d"

const Acidificacion = () => {
  return (
    <>
      <Header />
      <div className="container-acidificacion">
        <h1>INTRODUCCION</h1>
        <p>La acidificación de los océanos es el proceso por el cual el agua de mar se vuelve más ácida debido a la absorción de dióxido de carbono (CO₂) de la atmósfera. Este fenómeno es una de las consecuencias directas del aumento de las emisiones de gases de efecto invernadero. Alrededor del 30% del CO₂ liberado a la atmósfera por actividades humanas, como la quema de combustibles fósiles y la deforestación, termina disuelto en los océanos.</p>

      </div>

      <div className="canvas-container">
      <Acidificacion3d/> 
      </div>
    </>
  );
};

export default Acidificacion;