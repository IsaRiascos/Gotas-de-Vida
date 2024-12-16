// Importamos los estilos asociados al componente desde un archivo CSS
import "./Login.css";

// Importamos los hooks de React que se utilizan para manejar funciones y efectos secundarios
import { useCallback, useEffect } from "react";

// Importamos el hook personalizado que maneja el estado de autenticación
import useAuthStore from "../../stores/use-auth-store";

// Importamos el DAO de usuarios que permite interactuar con la base de datos de usuarios
import UserDAO from "../../daos/UserDAO";

// Importamos el hook para la navegación entre rutas en React
import { useNavigate } from "react-router-dom";

// Importamos el componente de encabezado
import Header from "../components/Header/Header";

// Importamos React para la definición de componentes funcionales
import React from "react";


// Definimos el componente funcional Login, que será exportado para ser usado en otras partes de la aplicación
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

export default function Login() {
  // Usamos el hook useAuthStore para obtener el estado del usuario y las funciones relacionadas con la autenticación
  const { user, loginGoogleWithPopUp, observeAuthState, logout } =
    useAuthStore();

  // Usamos useNavigate para obtener una función que permite navegar a diferentes rutas
  const navigate = useNavigate();

  // Obtenemos el estado del quiz, si existe, desde el store de autenticación
  const { quiz } = useAuthStore();
  console.log(quiz); // Registramos el estado del quiz en la consola para propósitos de depuración

  // Definimos la función handleLogin que maneja el inicio de sesión con Google mediante un popup
  const handleLogin = useCallback(() => {
    loginGoogleWithPopUp(); // Llamamos la función que abre el popup de inicio de sesión con Google
  }, [loginGoogleWithPopUp]); // Utilizamos useCallback para optimizar el rendimiento, evitando recrear la función innecesariamente

  // Definimos la función handleLogout que maneja el cierre de sesión del usuario
  const handleLogout = useCallback(() => {
    logout(); // Llamamos la función que cierra la sesión del usuario
  }, [logout]); // Utilizamos useCallback para optimizar el rendimiento

  // Hook de efecto que se ejecuta cada vez que el componente se monta o cambia el estado de user
  useEffect(() => {
    observeAuthState(); // Observamos el estado de autenticación y actualizamos si hay algún cambio en el usuario
    console.log(user); // Registramos el estado actual del usuario en la consola para propósitos de depuración
  }, [observeAuthState, user]); // Dependencias: ejecutamos el efecto cuando observeAuthState o user cambian

  // Hook de efecto que se ejecuta cuando el usuario está autenticado
  useEffect(() => {
    if (user) {
      // Si hay un usuario autenticado
      const newUser = {
        email: user.email, // Guardamos el correo del usuario
        name: user.displayName, // Guardamos el nombre del usuario
        photo: user.photoURL, // Guardamos la URL de la foto de perfil del usuario
      };
      UserDAO.createUser(newUser); // Creamos un nuevo usuario en la base de datos con estos datos
      navigate("/login"); // Navegamos a la página de login
    }
  }, [user, navigate]); // Dependencias: el efecto se ejecutará cuando user o navigate cambien

  return (
    
    
    <div className="container-login">
      {" "}
      {/* Contenedor principal con clase CSS */}
      {user ? ( // Si hay un usuario autenticado
        <>
          <Header /> {/* Mostramos el componente de encabezado */}
          <p className="welcome-text">
            {" "}
            {/* Texto de bienvenida */} {user.displayName} {" "}
            {/* Muestra el nombre del usuario */}
          
          </p>

          <p className="Foto">
          <img src={ "https://i.pinimg.com/736x/ea/5f/c9/ea5fc9680cec81756dcd5f12d63dc3f5.jpg"  }  />
            

          </p>
          <p className="present-text">
            {" "}
            {/* Texto de presentación */}
            ✔️ Hola {user.displayName}, al final del menú encontrarás un quiz interactivo para aprender y poner a prueba tus conocimientos. 
            También podrás ganar recompensas y ver tus puntajes. ¡Buena suerte!" 
            <br/>
            <br/><strong> 🎯 Si deseas cerrar sesion, presiona el boton azul.. </strong>
            
            
          </p>

          
          
          <button className="button-logout" onClick={handleLogout}>
            {" "}
            {/* Botón para cerrar sesión */}
            <div className="sign">
              {" "}
              {/* Contenedor del ícono del botón */}
              <svg viewBox="0 0 512 512">
                {" "}
                {/* Ícono SVG para el botón */}
                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
              </svg>
            </div>
            <div className="text">Cerrar sesión</div> {/* Texto del botón */}
          </button>
          
        </>
      ) : (
        
        // Si no hay un usuario autenticado
        
          <div className="ejemplo">
          <div className="containerjeje">
            <p2>
              Bienvenidos a Gotas de Vida
            </p2>
           
            

                <button className="buttonn" onClick={handleLogin}>
        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262">
          <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" />
          <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" />
          <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" />
          <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" />
        </svg>
        Continue con Google
      </button> 
          </div>
        
        </div>
      )}

      

      
      
  
    </div>
  );
} 
