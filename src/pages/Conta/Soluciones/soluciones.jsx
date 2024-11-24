import Header from "../../components/Header/Header";
import "./soluciones.css";
import ScenaSolucion from "./scenasolucion/ScenaSolucion";
const soluciones = () => {
    return (
        <>
        <Header />
        <div className="containers">
        <div className="container-solucione2">
        <div className="container-solucione">
            <h1>Soluciones</h1>
            <p1>
            Es necesario que puedas hacer todo lo posible para que, durante su
            utilización, se evite la contaminación de este vital elemento.
            </p1>
            <p3>
            <strong style={{ color: "blue" }}>
                {" "}
                1. Uso de energias renovables:{" "}
            </strong>
            Por ejemplo, con el uso de este tipo de energías, la contaminación que
            se genera es mucho menor, siendo el uso de paneles solares una gran
            alternativa a tener en cuenta.
            </p3>
            <p3>
            <strong style={{ color: "blue" }}>
                {" "}   
                2. Utilizar productos de limpieza biodegradables:{" "}
            </strong>
            Estos son menos contaminantes que otras alternativas, ya que vuelven
            de forma orgánica al entorno.
            </p3>
            <p3>
            <strong style={{ color: "blue" }}> 3. Reciclar envases: </strong>
            Especialmente si son de algún material como aluminio, vidrio o
            plástico, esto debido a que en su fabricación se utilizan diferentes
            diversos recursos.
            </p3>
            <p3>
            <strong style={{ color: "blue" }}>
                {" "}
                4. Aprovechar el agua de forma responsable:{" "}
            </strong>
            Acciones como cerrar el grifo, ducharse rápido y dar mantenimiento a
            las tuberías del hogar, pueden hacer la diferencia y evitar que haya
            agua contaminada innecesariamente.
            </p3>
            <p3>
            <strong style={{ color: "blue" }}>
                {" "}
                5. Agricultura e industrias mas sostenibles:{" "}
            </strong>
            Ambas son actividades necesarias para el ser humano, por lo que es
            importante implementar acciones para aumentar la eficiencia en el
            consumo del agua y para no verter en ella productos que la contaminen.
            </p3>
        </div>
        </div>
        
        <div id = "scene">
        <ScenaSolucion/>

        </div>
        </div>
    
        </>
    );
};

export default soluciones;
