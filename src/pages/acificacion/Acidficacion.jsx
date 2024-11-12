// Acidificacion.js
import { useState } from "react";
import Header from "../components/Header/Header";
import "./Acidificacion.css";
import Acidificacion3d from "../../components/models3d/Acidificacion3d";

const Acidificacion = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggleMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <Header />
      <section className="acidificacion-section">
        <div className="container-acidificacion">
          <h1>¿Qué es la Acidificación de los Océanos?</h1>
          <p>
            La acidificación de los océanos es el proceso por el cual el agua de mar se vuelve más ácida debido a la absorción de dióxido de carbono (CO₂) de la atmósfera. Este fenómeno es una de las consecuencias directas del aumento de las emisiones de gases de efecto invernadero. Alrededor del 30% del CO₂ liberado a la atmósfera por actividades humanas, como la quema de combustibles fósiles y la deforestación, termina disuelto en los océanos.
          </p>
        </div>

        <div className="canvas-container">
          <Acidificacion3d />
        </div>

        {/* Botón para mostrar más información, ahora después del modelo 3D */}
        <button onClick={handleToggleMore} className="view-more-button">
          {showMore ? "Ver menos" : "Ver más"}
        </button>

        {/* Información adicional que aparece al hacer clic en "Ver más" */}
        {showMore && (
          <div className="container-acidificacion">
            <h1>Causas</h1>
            <p>
              Las principales causas de la acidificación de los océanos están relacionadas con las actividades humanas, especialmente aquellas que aumentan la concentración de dióxido de carbono (CO₂) en la atmósfera. A continuación se detallan las principales causas:
            </p>

            {/* Causa 1: Emisiones de gases de efecto invernadero */}
            <div className="content-row">
              <div className="text-container">
                <h2>Emisiones de gases de efecto invernadero:</h2>
                <p>La quema de combustibles fósiles para la generación de energía, el transporte y la industria libera CO₂ a la atmósfera. Este gas es absorbido por los océanos, lo que disminuye el pH del agua y la hace más ácida.</p>
              </div>
              <div className="image-container">
                <img className="Imagen-reducida" src="https://i.pinimg.com/564x/ba/9d/13/ba9d1356dfdd38249fc8cd84788580a1.jpg" alt="Emisiones de gases de efecto invernadero" />
              </div>
            </div>

            {/* Causa 2: Deforestación */}
            <div className="content-row">
              <div className="text-container">
                <h2>Deforestación:</h2>
                <p>La deforestación contribuye indirectamente a la acidificación de los océanos, ya que reduce la capacidad de los ecosistemas terrestres para absorber CO₂, aumentando su concentración en la atmósfera y, por ende, en los océanos.</p>
              </div>
              <div className="image-container">
                <img className="Imagen-reducida" src="https://img.freepik.com/vector-gratis/ilustracion-concepto-deforestacion_114360-8726.jpg" alt="Deforestación" />
              </div>
            </div>

            {/* Causa 3: Agricultura y uso de fertilizantes */}
            <div className="content-row">
              <div className="text-container">
                <h2>Agricultura y uso de fertilizantes:</h2>
                <p>El uso de fertilizantes nitrogenados en la agricultura también juega un papel importante. El exceso de nutrientes que llega al mar puede alterar los ecosistemas marinos, favoreciendo la proliferación de algas que, al morir y descomponerse, liberan CO₂.</p>
              </div>
              <div className="image-container">
                <img className="Imagen-reducida" src="https://img.freepik.com/vector-gratis/ilustracion-concepto-cambio-climatico_114360-8728.jpg" alt="Agricultura y uso de fertilizantes" />
              </div>
            </div>

            {/* Causa 4: Cambio climático */}
            <div className="content-row">
              <div className="text-container">
                <h2>Cambio climático:</h2>
                <p>El cambio climático no solo está asociado al aumento de las temperaturas globales, sino también a un incremento en la capacidad de los océanos para absorber CO₂, acelerando la acidificación. Además, el cambio climático altera los patrones de circulación oceánica.</p>
              </div>
              <div className="image-container">
                <img className="Imagen-reducida" src="https://img.freepik.com/vector-premium/ilustracion-vector-calentamiento-global_685023-2787.jpg" alt="Cambio climático" />
              </div>
            </div>

            {/* Causa 5: Actividades industriales y de transporte */}
            <div className="content-row">
              <div className="text-container">
                <h2>Actividades industriales y de transporte:</h2>
                <p>Las industrias como la de energía, cemento, acero y el transporte marítimo siguen siendo fuentes importantes de CO₂, contribuyendo a la acidificación de los océanos.</p>
              </div>
              <div className="image-container">
                <img className="Imagen-reducida" src="https://img.freepik.com/vector-gratis/ilustracion-contaminaciones-tierra_1308-39766.jpg" alt="Actividades industriales y de transporte" />
              </div>
            </div>

            {/* Causa 6: Contaminación de los océanos */}
            <div className="content-row">
              <div className="text-container">
                <h2>Contaminación de los océanos:</h2>
                <p>Las actividades humanas que generan contaminantes, como plásticos y productos químicos, pueden alterar la química del agua y empeorar los efectos de la acidificación.</p>
              </div>
              <div className="image-container">
                <img className="Imagen-reducida" src="https://img.freepik.com/vector-gratis/ilustracion-biodiversidad-dibujada-mano_52683-85003.jpg" alt="Contaminación de los océanos" />
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Acidificacion;
