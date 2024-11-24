
import Header from "../../components/Header/Header";
import ScenaCausa from "./scena-causas/ScenaCausa"
import { useNavigate } from "react-router-dom";
import "./causas.css"


const Causas = () => {
  const navigate = useNavigate();
  const handleNextPage = () => {
    navigate('/consecuencias');
  };
  return (
    <>
      <Header />
      <div className="container2-causas">

        <div className="container-texto">

          <div className="container-causas">
          <h1>
            Causas de la contaminacion
          </h1>
          <p2>
          Las causas de la contaminacion del agua pueden ser muchas siendo estas ocasionadas por diferentes factores, siendo presentadas
          algunas de estas causas 
          </p2>
            
            <p2   >
            <strong style={{color:"blue"}}> 1. Calentamiento global: </strong>El aumento de la temperatura terrestre, a causa de las emisiones de CO2, calienta el agua y esto hace que disminuya su nivel de oxígeno.
            </p2>
                <p2>
                  <img className="Imagen-reducida" src="https://i.pinimg.com/564x/ba/9d/13/ba9d1356dfdd38249fc8cd84788580a1.jpg"/>
                </p2>
            
            <p2>
            <strong style={{color:"blue"}}> 2. Deforestacion: </strong>La tala de los bosques puede agotar las fuentes hídricas y genera residuos orgánicos que sirven de caldo de cultivo para bacterias contaminantes.          </p2>
            <p2>
                  <img className="Imagen-reducida" src="https://fcds.org.co/wp-content/uploads/2020/12/deforestacion-amazonia-reporte-fcds.jpg"/>
                </p2> 
              <p2>
              <strong style={{color:"blue"}}> 3. Actividades industriales,agricolas y ganaderas: </strong>Los vertidos de productos químicos procedentes de estos sectores son unas de las causas principales de la eutrofización(Se produce cuando mas de agua recibe un aporte muy elevedo de nutrientes inorganicos, principalmente como nitrogeno y fosforo) del agua.          </p2>
              <p2>
                  <img className="Imagen-reducida" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEin3OdCXRlv8cV0Uz_JDP71_qBxkRlupE4U_dQ1O-u1KxO9xdv_tXq7OZRhh83CcS1G2DQ2tT9o2QLPIsC5JtjzIb-kGwY8PDa5o2_jrdGNabp6NoconaoNTouMSh6mYvixTRdFV6Wtm22j/s400/intro+industrias.png"/>
                </p2>
              <p2>
              <strong style={{color:"blue"}}> 4. Basura y vertidos de agua fecales: </strong>La ONU asegura que más del 80 % de las aguas residuales del mundo que llegan al mar y a los ríos están sin depurar.       </p2>
              <p2>
                  <img className="Imagen-reducida" src="https://i.pinimg.com/564x/ee/48/6f/ee486f449da26f33389c8ef5e335b340.jpg" /></p2>
            
                  <p2>
            
                  <strong style={{color:"blue"}}> 5.Derrames de combustible: </strong>El transporte y el almacenamiento del petróleo y sus derivados dan lugar a filtraciones que pueden llegar a las fuentes de agua.    </p2>
              <p2>
                  <img className="Imagen-reducida" src="https://forbescentroamerica.com/_next/image?url=https%3A%2F%2Fcdn.forbescentroamerica.com%2F2020%2F08%2FIsla-Mauricio-buque-cisterna-768x432-1.jpg%3Fv%3D768432&w=1080&q=75" /></p2>
            </div>


      </div>
        <div id = "scenaa">
          <ScenaCausa />
          <button className="buutton" onClick={handleNextPage}>Siguiente Pagina → 
          </button>
        </div>

      </div>

      

        
    </>
    
  );
};



export default Causas;

