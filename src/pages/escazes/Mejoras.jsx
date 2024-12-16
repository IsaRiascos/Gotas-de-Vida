import Header from "../components/Header/Header"; 
import "./Mejoras.css";

const Mejoras = () => {
  const cameraSettings = {
    position: [5, 30, 50],
    fov: 45,
    // otras configuraciones
  };

  return (
    <>
      <Header />
      <div className="containers">
        <div className="container-solucione2">
          <div className="container-solucione">
            <h1>Soluciones</h1>
            <p>
              Es necesario que puedas hacer todo lo posible para que, durante su
              utilización, se evite la contaminación de este vital elemento.
            </p>
            <p>
              <strong style={{ color: "blue" }}>1. Gestión eficiente:</strong>{" "}
              Mejorar infraestructura para evitar fugas, usar riego por goteo
              en agricultura y dispositivos de bajo consumo en hogares y
              ciudades.
            </p>
            <p>
              <strong style={{ color: "blue" }}>
                2. Reutilización y conservación:
              </strong>{" "}
              Tratar aguas residuales para agricultura, recolectar agua de
              lluvia y adoptar prácticas de ahorro en hogares e industrias.
            </p>
            <p>
              <strong style={{ color: "blue" }}>3. Desalinización:</strong>{" "}
              Transformar agua de mar en potable, aunque es costoso y
              energéticamente demandante, usado con éxito en países como Israel
              y España.
            </p>
            <p>
              <strong style={{ color: "blue" }}>
                4. Protección de ecosistemas hídricos:
              </strong>{" "}
              Restaurar humedales y cuencas para filtrar agua y recargar
              acuíferos, apoyado por programas como la Convención de Ramsar.
            </p>
            <p>
              <strong style={{ color: "blue" }}>
                5. Educación y concienciación:
              </strong>{" "}
              Promover el uso sostenible del agua mediante campañas educativas y
              apoyo a políticas de conservación lideradas por organizaciones
              como Water.org.
            </p>
          </div>
        </div>

        {/* Contenedor de las imágenes en formato vertical */}
        <div className="image-container">
          <img src="/imagen/imagen1.jpg"alt="Imagen 1" className="vertical-image" />
          <img src="/imagen/imagen2.jpg" alt="Imagen 2" className="vertical-image" />
          <img src="/imagen/imagen3.jpg" alt="Imagen 3" className="vertical-image" />
        </div>
      </div>
    </>
  );
};

export default Mejoras;
