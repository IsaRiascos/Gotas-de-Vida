import Header from "../components/Header/Header";
import "./contaminacion.css";
import Scena from "./scena-conta/Scena";
import { useNavigate } from "react-router-dom";

const contaminacion = () => {
  const navigate = useNavigate();
  const handleNextPage = () => {
    navigate('/causas');
  };

  
  
  return (
    <>
      <Header />
      <div className="container-conta">
        <div className="container-test">
          <div id="Texto">
            <h1>Contaminacion del agua: un peligro oculto</h1>
            <p>
              Sabias que las <strong> fuentes de agua dulce</strong> del mundo
              reciben contaminantes procedentes de una amplia gama de sectores,
              que amenazan la salud humana y de la fauna.
            </p>
            <p>
              <strong>La OMS(Organizacion Mundial de la Salud)</strong> define
              el agua contaminada como aquella que sufre cambios en su
              composicion hasta quedar inservible, es agua toxica que no se
              puede beber ni destinar para actividades como la agricultura,
              ademas este problema llega a causar mas de{" "}
              <strong>500.00 muertes anuales a nivel global</strong> y es
              potadora de enfermedades como colera, fiebre, diarrea entre otras.
            </p>
            <p>
              Los principales contaminantes del agua incluye{" "}
              <strong>
                bacterias,virus, parasitos, fertilizantes, plasticos e incluso
                sustancias radiactivas
              </strong>
              , estos elementos no siempren hacen cambiar de color el agua por
              lo cual resulta invisible y un potencial daño para el ser humano.
            </p>
          </div>
          <div id="scena">
            <Scena />
          </div>
        </div>
        <div className="buttonContainer">
        

          <button className="buttoon" onClick={handleNextPage}>Siguiente Pagina → 
          </button>
      
    
  
</div>

              </div>
    </>
  );
};

export default contaminacion;
