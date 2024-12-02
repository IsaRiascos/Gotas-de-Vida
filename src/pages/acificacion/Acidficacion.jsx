// Acidificacion.js
import { useState } from "react";
import Header from "../components/Header/Header";
import "./Acidificacion.css";
import Acidificacion3d from "../../components/models3d/Acidificacion3d";
import Acidificacion3d1 from "../../components/models3d/Acidificacion3d1";
import Acidificacion3d2 from "../../components/models3d/Acidificacion3d2";

const Acidificacion = () => {
  const [showMore, setShowMore] = useState(false);
  const [showConsequences, setShowConsequences] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);

  const handleToggleMore = () => {
    setShowMore(!showMore);
    if (showConsequences) setShowConsequences(false); // Reinicia el estado de consecuencias al ocultar
    if (showSolutions) setShowSolutions(false); // Reinicia el estado de soluciones al ocultar

    if (!showMore) {
      alert("Cuida el agua, cada gota cuenta. Al proteger este recurso vital, garantizamos un futuro sostenible para todos. ¡Haz la diferencia hoy!");
    }
  };

  const handleToggleConsequences = () => {
    setShowConsequences(!showConsequences);
    if (showSolutions) setShowSolutions(false); // Oculta las soluciones si las consecuencias se cierran
  };

  const handleToggleSolutions = () => {
    setShowSolutions(!showSolutions);
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

        <button onClick={handleToggleMore} className="view-more-button">
          {showMore ? "Ver menos" : "Ver más"}
        </button>

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

            <button
              onClick={handleToggleConsequences}
              className="view-more-button"
            >
              {showConsequences ? "Ocultar Consecuencias" : "Ver Consecuencias"}
            </button>

            {showConsequences && (
              <div className="container-acidificacion">
                <h1>Consecuencias</h1>
                <p>
                  La acidificación de los océanos es un proceso derivado del aumento de dióxido de carbono (CO₂) en la atmósfera, que se disuelve en el agua del mar, formando ácido carbónico y reduciendo el pH del océano. Este fenómeno tiene graves consecuencias ambientales, económicas y sociales. Algunas de las más importantes son:
                </p>

                <div className="content-row">
                  <div className="text-container">
                    <h2>Impacto en los organismos marinos:</h2>
                    <p>Disminución de la calcificación: Organismos como corales, moluscos, erizos de mar y plancton calcáreo tienen dificultad para formar sus conchas y esqueletos debido a la menor disponibilidad de carbonato, esencial para la formación de carbonato de calcio.</p>
                  </div>
                  <div className="image-container">
                    <img className="Imagen-reducida" src="https://img.freepik.com/vector-premium/concepto-ilustracion-cambio-climatico-sobre-fondo-blanco_701961-3318.jpg" alt="Emisiones de gases de efecto invernadero" />
                  </div>
                </div>

                <div className="content-row">
                  <div className="text-container">
                    <h2>Pérdida de ecosistemas:</h2>
                    <p>Degradación de los arrecifes de coral: Los corales son muy sensibles a los cambios de pH, y su debilitamiento afecta a los ecosistemas que dependen de ellos, impactando a miles de especies que habitan estos entornos.</p>
                  </div>
                  <div className="image-container">
                    <img className="Imagen-reducida" src="https://img.freepik.com/vector-premium/ilustracion-vector-calentamiento-global_685023-3376.jpg" alt="Deforestación" />
                  </div>
                </div>

                <div className="content-row">
                  <div className="text-container">
                    <h2>Repercusiones económicas:</h2>
                    <p>Pesca y acuicultura: La disminución de moluscos y otros organismos comerciales afecta la seguridad alimentaria y los medios de subsistencia de comunidades que dependen de la pesca.</p>
                  </div>
                  <div className="image-container">
                    <img className="Imagen-reducida" src="https://img.freepik.com/vector-premium/calentamiento-global-es-causado-contaminacion-ambiental_870049-74.jpg" alt="Agricultura y uso de fertilizantes" />
                  </div>
                </div>

                <div className="content-row">
                  <div className="text-container">
                    <h2>Aumento de otros problemas ambientales:</h2>
                    <p>Sinergia con el calentamiento global: La acidificación puede amplificar otros problemas como la pérdida de oxígeno en el océano y el aumento de la temperatura del agua, agravando las condiciones de estrés para la vida marina.</p>
                  </div>
                  <div className="image-container">
                    <img className="Imagen-reducida" src="https://img.freepik.com/vector-gratis/personaje-tierra-contaminada_1308-27802.jpg" alt="Cambio climático" />
                  </div>
                </div>

                <div className="content-row">
                  <div className="text-container">
                    <h2>Impacto en el ciclo del carbono:</h2>
                    <p>La acidificación reduce la capacidad de los océanos para actuar como sumideros de carbono, lo que a su vez puede acelerar el cambio climático global.</p>
                  </div>
                  <div className="image-container">
                    <img className="Imagen-reducida" src="https://img.freepik.com/vector-premium/concepto-cambio-climatico-estilo-dibujado-mano_23-2149105245.jpg" alt="Actividades industriales y de transporte" />
                  </div>
                </div>


                <button
                  onClick={handleToggleSolutions}
                  className="view-more-button"
                >
                  {showSolutions ? "Ocultar Soluciones" : "Ver Soluciones"}
                </button>

                {showSolutions && (
                  <div className="container-acidificacion">
                    <h1>Soluciones</h1>
                    <p>
                      La acidificación de los océanos, causada principalmente por el aumento de dióxido de carbono (CO₂) en la atmósfera, representa un desafío ambiental global. Aunque no es posible revertir completamente el daño ya causado, hay varias soluciones y estrategias para mitigar sus efectos:
                    </p>

                    <div className="content-row">
                      <div className="text-container">
                        <h2>Reducir las emisiones de dióxido de carbono (CO₂):</h2>
                        <p>Transitar hacia energías renovables como la solar, eólica e hidroeléctrica.</p>
                        <p>Implementar políticas globales y locales para reducir la quema de combustibles fósiles.</p>
                      </div>
                      <div className="image-container">
                        <img className="Imagen-reducida" src="https://img.freepik.com/vector-gratis/dibujado-mano-dia-mundial-medio-ambiente-salva-planeta-ilustracion_52683-61570.jpg" alt="Emisiones de gases de efecto invernadero" />
                      </div>
                    </div>

                    <div className="content-row">
                      <div className="text-container">
                        <h2>Proteger y restaurar ecosistemas marinos:</h2>
                        <p>Crear y mantener Áreas Marinas Protegidas (AMPs).</p>
                        <p>Restaurar arrecifes de coral, manglares y praderas marinas que absorben CO₂ y amortiguan el impacto de la acidificación.</p>
                      </div>
                      <div className="image-container">
                        <img className="Imagen-reducida" src="https://img.freepik.com/vector-gratis/guarde-ilustracion-concepto-planeta-hombre-mujer_23-2148509643.jpg" alt="Deforestación" />
                      </div>
                    </div>

                    <div className="content-row">
                      <div className="text-container">
                        <h2>Promover la captura y almacenamiento de carbono:</h2>
                        <p>Utilizar tecnologías para capturar CO₂ de la atmósfera y almacenarlo de forma segura.</p>
                        <p>Aplicar métodos naturales como la reforestación y la recuperación de suelos.</p>
                      </div>
                      <div className="image-container">
                        <img className="Imagen-reducida" src="https://img.freepik.com/vector-gratis/ilustracion-plana-celebracion-dia-tierra_23-2150243591.jpg" alt="Agricultura y uso de fertilizantes" />
                      </div>
                    </div>

                    <div className="content-row">
                      <div className="text-container">
                        <h2>Reducir la contaminación costera:</h2>
                        <p>Controlar el uso de fertilizantes y mejorar el tratamiento de aguas residuales para evitar la eutrofización.</p>
                        <p>Prevenir la sobreexplotación de los recursos marinos.</p>
                      </div>
                      <div className="image-container">
                        <img className="Imagen-reducida" src="https://img.freepik.com/vector-gratis/salva-concepto-planeta-personas-abrazando-tierra_23-2148522714.jpg" alt="Cambio climático" />
                      </div>
                    </div>

                    <div className="content-row">
                      <div className="text-container">
                        <h2>Fomentar la investigación y la educación:</h2>
                        <p>Apoyar estudios para desarrollar soluciones innovadoras, como el uso de minerales alcalinos para neutralizar la acidificación local.</p>
                        <p>Educar a las comunidades sobre la importancia de los océanos y promover estilos de vida sostenibles.</p>
                      </div>
                      <div className="image-container">
                        <img className="Imagen-reducida" src="https://img.freepik.com/vector-gratis/salva-concepto-planeta-personas-que-hacen-crecer-tierra_23-2148522569.jpg" alt="Actividades industriales y de transporte" />
                      </div>
                    </div>


                  </div>


                )}
              </div>
            )}
          </div>

        )}

        <div className="canvas-container">
          <Acidificacion3d2 />
        </div>
        <div className="canvas-container">
          <Acidificacion3d1 />
        </div>
      </section>
    </>
  );
};

export default Acidificacion;
