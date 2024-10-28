import Header from "../components/Header/Header";
import "./contaminacion.css"
import Scena from "./scena-conta/Scena";

const contaminacion = () => {
  return (
    <>
      <Header />
      <div className="container-conta">

        <div id="Texto">
          <h1>Esto debes saber sobre la contaminacion del agua</h1>
          <p>
          Las fuentes de agua dulce del mundo reciben contaminantes procedentes de una 
          amplia gama de sectores, que amenazan la salud humana y de la fauna.
          </p>
          <p>
            La OMS define el agua contaminada como aquella que sufre cambios en su composicion hasta quedar inservible, es agua toxica que no se puede beber 
            ni destinar para actividades como la agricultura, ademas este problema llega a causar mas de 500.00 muertes anuales a nivel global y es potadora
            de enfermedades como colera, fiebre, diarrea entre otras. 
          
          </p>
          <p>
            Los principales contaminantes del agua incluye bacterias,virus,parasitos,fertilizantes,plasticos e incluso sustancias radiactivas, estos elementos 
            no siempren hacen cambiar de color el agua por lo cual resulta invisible y un potencial daño para el ser humano.  
          </p>
          
        </div>
        <div id = "scena">
          <Scena/>
        </div>
      </div>
      

      

        

      
    </>



    
  );
};



export default contaminacion;

