import { create } from "zustand";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebase.config";

const useQuizStore = create((set) => ({
  quiz: {
    questions: [
      {
        id: 1,
        text: "¿Cuál es una de las principales causas de la escasez de agua?",
        options: [
          { id: "1", text: "La mejora en las infraestructuras hídricas.", isCorrect: false },
          { id: "2", text: "El crecimiento demográfico que incrementa la demanda y agota las reservas.", isCorrect: true },
          { id: "3", text: "La abundancia de agua dulce en los glaciares.", isCorrect: false },
        ],
        points: 10,
      },
      {
        id: 2,
        text: "¿Qué solución propone transformar el agua de mar en potable?",
        options: [
          { id: "1", text: "Riego por goteo en la agricultura.", isCorrect: false },
          { id: "2", text: "Reutilización de aguas residuales.", isCorrect: false },
          { id: "3", text: "Desalinización.", isCorrect: true },
        ],
        points: 10,
      },
      {
        id: 3,
        text: "¿Qué organización internacional lidera programas para la protección de humedales y cuencas hídricas?",
        options: [
          { id: "1", text: "Convención de Ramsar.", isCorrect: true },
          { id: "2", text: "Water.org.", isCorrect: false },
          { id: "3", text: "Organización Mundial de la Salud (OMS).", isCorrect: false },
        ],
        points: 10,
      },
      {
        id: 4,
        text: "¿Qué estrategia puede reducir el desperdicio de agua en la agricultura?",
        options: [
          { id: "1", text: "Usar riego por goteo.", isCorrect: true },
          { id: "2", text: "Incrementar el uso de fertilizantes químicos.", isCorrect: false },
          { id: "3", text: "Abandonar el cultivo en zonas secas.", isCorrect: false },
        ],
        points: 10,
      },
      // Acidificación de los océanos
      {
        id: 5,
        text: "¿Qué provoca la acidificación de los océanos?",
        options: [
          { id: "1", text: "El aumento de oxígeno en los ecosistemas marinos.", isCorrect: false },
          { id: "2", text: "La absorción de dióxido de carbono (CO₂) de la atmósfera por el agua de mar.", isCorrect: true },
          { id: "3", text: "La disminución de emisiones de gases de efecto invernadero.", isCorrect: false },
        ],
        points: 10,
      },
      {
        id: 6,
        text: "¿Cuál es una de las consecuencias principales de la acidificación de los océanos en los organismos marinos?",
        options: [
          { id: "1", text: "Incremento en la formación de arrecifes de coral.", isCorrect: false },
          { id: "2", text: "Dificultad para formar conchas y esqueletos debido a la menor disponibilidad de carbonato.", isCorrect: true },
          { id: "3", text: "Aumento en la biodiversidad marina.", isCorrect: false },
        ],
        points: 10,
      },
      {
        id: 7,
        text: "¿Qué solución ayuda a mitigar la acidificación de los océanos?",
        options: [
          { id: "1", text: "Incrementar la quema de combustibles fósiles.", isCorrect: false },
          { id: "2", text: "Crear y mantener Áreas Marinas Protegidas (AMPs).", isCorrect: true },
          { id: "3", text: "Reducir el uso de energías renovables.", isCorrect: false },
        ],
        points: 10,
      },
      {
        id: 8,
        text: "¿Cómo contribuyen las actividades agrícolas a la acidificación de los océanos?",
        options: [
          { id: "1", text: "Promoviendo la captura de carbono mediante fertilizantes.", isCorrect: false },
          { id: "2", text: "Liberando nutrientes al mar que favorecen la proliferación de algas, las cuales al descomponerse emiten CO₂.", isCorrect: true },
          { id: "3", text: "Reduciendo la concentración de dióxido de carbono en el agua de mar.", isCorrect: false },
        ],
        points: 10,
      },
      // Generales
      {
        id: 9,
        text: "¿Qué define la OMS como agua contaminada?",
        options: [
          { id: "1", text: "Agua que ha sido tratada y purificada.", isCorrect: false },
          { id: "2", text: "Agua que sufre cambios en su composición hasta quedar inservible.", isCorrect: true },
          { id: "3", text: "Agua que tiene un color diferente al habitual.", isCorrect: false },
        ],
        points: 10,
      },
      {
        id: 10,
        text: "¿Cuál es una de las principales causas de la contaminación del agua?",
        options: [
          { id: "1", text: "El uso de paneles solares en las ciudades.", isCorrect: false },
          { id: "2", text: "El aumento del oxígeno en el agua por actividades agrícolas.", isCorrect: false },
          { id: "3", text: "El calentamiento global que reduce el oxígeno en el agua.", isCorrect: true },
        ],
        points: 10,
      },
      {
        id: 11,
        text: "¿Qué porcentaje de las aguas residuales llega al mar y a los ríos sin depurar, según la ONU?",
        options: [
          { id: "1", text: "Más del 50 %.", isCorrect: false },
          { id: "2", text: "Más del 80 %.", isCorrect: true },
          { id: "3", text: "Más del 95 %.", isCorrect: false },
        ],
        points: 10,
      },
      {
        id: 12,
        text: "¿Qué acción puede ayudar a reducir la contaminación del agua?",
        options: [
          { id: "1", text: "Usar productos de limpieza biodegradables.", isCorrect: true },
          { id: "2", text: "Usar fertilizantes químicos en exceso.", isCorrect: false },
          { id: "3", text: "Construir más represas.", isCorrect: false },
        ],
        points: 10,
      }
      
    ],
    currentQuestionIndex: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    score: 0,
    percentageQuizCompleted: 0,
  },

  // Manejar respuesta de una pregunta
  answerQuestion: (isCorrect, uid) =>
    set((state) => {
      const { questions, currentQuestionIndex, correctAnswers, incorrectAnswers, score } =
        state.quiz;

      const currentQuestion = questions[currentQuestionIndex];
      const updatedScore = isCorrect ? score + currentQuestion.points : score;
      const updatedCorrectAnswers = isCorrect ? correctAnswers + 1 : correctAnswers;
      const updatedIncorrectAnswers = isCorrect ? incorrectAnswers : incorrectAnswers + 1;
      const nextIndex =
        currentQuestionIndex < questions.length - 1
          ? currentQuestionIndex + 1
          : currentQuestionIndex; // No exceder el índice
      const percentageQuizCompleted = Math.min( //Aumento del porcentaje 
        state.quiz.percentageQuizCompleted + 8.34, 
        100
      );
      
        
      const newQuizState = {
        ...state.quiz,
        currentQuestionIndex: nextIndex,
        correctAnswers: updatedCorrectAnswers,
        incorrectAnswers: updatedIncorrectAnswers,
        score: updatedScore,
        percentageQuizCompleted,
      };

      // Guardar en Firestore
      if (uid) {
        const userDocRef = doc(db, "users", uid);
        setDoc(userDocRef, { quiz: newQuizState }, { merge: true }).catch((error) => {
          console.error("Error al guardar progreso en Firestore:", error);
        });
      }

      return { quiz: newQuizState };
    }),

  // Cargar progreso del quiz desde Firestore
  loadQuizProgress: async (uid) => {
    const userDocRef = doc(db, "users", uid);
    
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      const quizData = userDocSnap.data().quiz;
      set((state) => ({
        quiz: {
          ...state.quiz,
          ...quizData,
        },
      }));
    }
  },

  // Reiniciar el quiz y actualizar en Firestore
  resetQuiz: async (uid) => {
    const initialQuizState = {
      currentQuestionIndex: 0,
      correctAnswers: 0,
      incorrectAnswers: 0,
      score: 0,
      percentageQuizCompleted: 0,
    };

    try {
      if (uid) {
        const userDocRef = doc(db, "users", uid);
        await setDoc(userDocRef, { quiz: initialQuizState }, { merge: true });
      }

      set((state) => ({
        quiz: {
          ...state.quiz,
          ...initialQuizState,
        },
      }));

      console.log("Quiz reiniciado con éxito.");
    } catch (error) {
      console.error("Error al reiniciar el quiz:", error);
    }
  },
}));

export default useQuizStore;
