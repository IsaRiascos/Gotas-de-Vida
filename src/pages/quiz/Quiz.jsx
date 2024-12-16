import { useEffect, useState } from "react";
import useQuizStore from "../../stores/use-auth-quiz";
import "./Quiz.css";
import Header from "../components/Header/Header";
import React from "react";
import { getAuth } from "firebase/auth";

const QuizComponent = () => {
  //Funciones use-auth-quiz
  const { quiz, answerQuestion, resetQuiz, loadQuizProgress } = useQuizStore();
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const uid = currentUser?.uid;

 
  const [draggedOption, setDraggedOption] = useState(null); //Estado para manejar las opcion de arrastre
  const [quizCompleted, setQuizCompleted] = useState(false); //Comprueba si el quiz ha sido completado
  const [feedback, setFeedback] = useState("");//Mostrar la retroalimentacion de una pregunta
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(200); // Temporizador del quiz
  const [useHint, setUseHint] = useState(false); // Estado para controlar si se ha usado la pista
  const [highlightedOption, setHighlightedOption] = useState(null); // Estado para resaltar la opción correcta

  //Cargar el progreso del quiz 
  useEffect(() => { 
    if (uid) {
      loadQuizProgress(uid);
    }
  }, [uid, loadQuizProgress]);

  // Temporizador
  useEffect(() => {
    if (quizCompleted) return; // Si el quiz está completo, no actualizamos el temporizador

    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timerInterval);
          setQuizCompleted(true); // Finaliza el quiz cuando el tiempo se acaba
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000); 

    return () => clearInterval(timerInterval); // Limpiar intervalos
  }, [quizCompleted]);

  //Para dar formato de minutos y segundos al tiempo
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };
  //Obtner la pregunta actual del quiz 
  const currentQuestion = quiz.questions[quiz.currentQuestionIndex];

  // Función para manejar el uso de la pista
  const handleUseHint = () => {
    if (useHint) {
      //mensaje 
      alert("Ya has usado la pista para esta pregunta.");
      return; // Si ya se usó la pista, no hacemos nada
    }

    setUseHint(true); // Marcar que se ha usado la pista

    // Encontramos la opción correcta
    const correctOption = currentQuestion.options.find(
      (option) => option.isCorrect
    );
    setHighlightedOption(correctOption); // Resaltamos la opción correcta

    // Eliminar el resaltado después de 2 segundos
    setTimeout(() => {
      setHighlightedOption(null);
    }, 1000);
  };

  //Manejar el arrastre de las opciones 
  const handleDragStart = (option) => {
    setDraggedOption(option);
  };

  //Permitir el arrastre 
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = () => {
    if (draggedOption) {
      handleAnswer(draggedOption.isCorrect);//Evaluar la respuesta 
      setDraggedOption(null);
    }
  };

  const handleAnswer = (isCorrect) => {
    answerQuestion(isCorrect, uid);

    // Establecer el mensaje de retroalimentación
    if (isCorrect) {
      setFeedback("✅ ¡Muy bien! Has acertado la respuesta.");
    } else {
      setFeedback("❌ ¡Incorrecto! Pero no te preocupes, ¡puedes intentarlo de nuevo!");
    }

    // Mostrar retroalimentación
    setFeedbackVisible(true);

    // Ocultar después de 2 segundos
    setTimeout(() => {
      setFeedbackVisible(false);
    }, 2000);

    if (quiz.currentQuestionIndex >= quiz.questions.length - 1) {
      setQuizCompleted(false); // Finaliza el quiz automáticamente si se completaron todas las preguntas
    }
  };

  // Reiniciar el quiz 
  const handleResetQuiz = async () => {
    if (uid) {
      await resetQuiz(uid);
      alert("¡El quiz ha sido reiniciado!");
      setQuizCompleted(false);
      setTimeLeft(600); // Restablecer el temporizador a 10 minutos
      setUseHint(false); // Resetear el estado de la pista
    }
  };

  return (
    <>
      <Header />
     <div className="ejemploo">

  
      {/* Ventana emergente para retroalimentación */}
      {feedbackVisible && (
        <div
          className={`feedback-popup ${
            feedback === "✅ ¡Muy bien! Has acertado la respuesta." ? "correct" : "incorrect"
          }`}
        >
          <p>{feedback}</p>
        </div>
      )}

      <div className="quiz-container">
        {/* Mostrar temporizador solo si el quiz no está completo */}
        {!quizCompleted && (
          <div className="timer-container top-right">
            <h2>Tiempo Restante: {formatTime(timeLeft)}</h2>
          </div>
        )}

        <h1 className="quiz-title">Quiz Interactivo</h1>

        {quizCompleted ? (
          //Informacion del quiz 
          <div className="completion-message">
            <h2>¡Felicidades! Has completado el quiz</h2>
            <p>Respuestas correctas: {quiz.correctAnswers}</p>
            <p>Respuestas incorrectas: {quiz.incorrectAnswers}</p>
            <h3>Puntaje: {quiz.score}</h3>
            <button className="reset-button" onClick={handleResetQuiz}> 
              Reiniciar Quiz
            </button>
          </div>
        ) : (
          <div className="question-container">
             {/* Mostrar pregunta actual */}
            <h2 className="question-text">{currentQuestion.text}</h2>
             {/* Posibilidad de arrastrar */}
            <div className="options-container">
              {currentQuestion.options.map((option) => (
                <div
                  key={option.id}
                  className={`option-draggable ${
                    //Resaltar la respuesta correcta
                    highlightedOption?.id === option.id ? "highlighted" : ""
                  }`}
                  draggable
                  onDragStart={() => handleDragStart(option)} //Iniciar arrastre
                >
                  {option.text}
                </div>
              ))}
            </div>
             {/* Zona donde se sueltan las respuestas  */}
            <div
              className="drop-zone"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              Arrastra la respuesta aquí
            </div>
          </div>
        )}

        {/* Mostrar el botón de usar pista solo si el quiz no está completo */}
        {!quizCompleted && (
          <div className="footer">
            <button
              className="finish-button"
              onClick={() => setQuizCompleted(true)}
            >
              Finalizar Quiz
            </button>
            {/* Boton de la pista*/}
            <button
              className="hint-button"
              onClick={handleUseHint}
              //disabled={useHint} Deshabilitar el botón si ya se usó la pista
            >
              Usar Pista
            </button>
             {/* Progreso */}
            <div className="stats">
              <h3>Progreso: {quiz.percentageQuizCompleted}%</h3>
            </div>
          </div>
        )}
      </div>
      </div>
    </>
  );
};

export default QuizComponent;
