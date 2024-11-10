import Header from "../components/Header/Header";
import "./contaminacion.css";
import Scena from "./scena-conta/Scena";

const contaminacion = () => {
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
  <button className="button">
    <a href="/Causas" className="buttonLink">Causas</a>
    <div className="icon icon-1">
      <svg
        viewBox="0 0 26.3 65.33"
        style={{
          shapeRendering: "geometricPrecision",
          textRendering: "geometricPrecision",
          imageRendering: "optimizeQuality",
          fillRule: "evenodd",
          clipRule: "evenodd",
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.98 52.87c0.37,-0.8 0.6,-1.74 0.67,-2.74 ... 3.13,2.46zm-4.09 -16.89l-0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 0.01 0.01z"
          className="fil0"
        />
      </svg>
    </div>
    <div className="icon icon-2">
      <svg
        viewBox="0 0 11.67 37.63"
        style={{
          shapeRendering: "geometricPrecision",
          textRendering: "geometricPrecision",
          imageRendering: "optimizeQuality",
          fillRule: "evenodd",
          clipRule: "evenodd",
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.63 35.26c-0.02,0.13 0.01,0.05 -0.06,0.14 ... -0.74,2.46z"
          className="fil0"
        />
      </svg>
    </div>
  </button>
</div>

              </div>
    </>
  );
};

export default contaminacion;
