import Header from "../components/Header/Header";
import "./guia.css";
import { useNavigate } from "react-router-dom";

const Guia = () => {
    const navigate = useNavigate();
    const handleNextPage = () => {
      navigate("/quizz");
    };
  return (
    <>
      <Header />
      <div className="guia">
        <h1>Evaluacion interactiva</h1>

        <p1>
        🌎 En esta evaluación, se abarcarán tres de los principales problemas
            ambientales que afectan a nuestro planeta:
        </p1>
        <br></br>
        <p1>
            <strong style={{ color: "#1E90FF" }}> 1. Contaminacion del agua </strong>{" "}
        </p1>
        <br></br>
        <p1>
            <strong style={{ color: "#1E90FF" }}>  2. Escazes de agua </strong>
        </p1>
        <br></br>
        <p1>
            <strong style={{ color: " #1E90FF" }}> 3. Acidificacion de los oceanos </strong>{" "}
        </p1>
        <br></br>
        <p1>
            🛑 Cada uno de estos fenómenos tiene impactos significativos tanto en los
            ecosistemas como en la salud humana, y es importante comprender sus
            causas, consecuencias y posibles soluciones.
        </p1>
        <br></br>
        <p1>
          <strong>
          🌿 Tu participacion hace la diferencia “Recuerda que cada gota cuenta,
            cada accion importa 💧
          </strong>
        </p1>

        <button className="Buuttoon" onClick={handleNextPage}>
            Iniciar →
          </button>
      </div>
    </>
  );
};

export default Guia;
