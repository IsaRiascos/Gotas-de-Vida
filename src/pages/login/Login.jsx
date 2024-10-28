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
            {/* Texto de bienvenida */}¡ Bienvenido {user.displayName} !{" "}
            {/* Muestra el nombre del usuario */}
          </p>
          <p className="present-text">
            {" "}
            {/* Texto de presentación */}
            Hola {user.displayName}, si deseas cerrar sesión, por favor presiona
            el botón verde
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
        <div className="container">

          <div className="additional-container">
            <h1>Bienvenidos a Gotas de vida </h1>
            <p>
              En cada gota de agua, hay una historia de vida
            </p>
          </div>
          
          <div className="login-container">
            <h1 className="heading">Iniciar sesion</h1>
            <form className="form" action="">
              <input
                placeholder="Correo"
                id="email"
                name="email"
                type="email"
                className="input"
                required
              />
              <input
                placeholder="Contraseña"
                id="password"
                name="password"
                type="password"
                className="input"
                required
              />
              <span className="forgot-password">
                <a href="#">Forgot Password ?</a>
              </span>
              <input value="Iniciar" type="submit" className="login-button" />
            </form>
            <div className="social-account-container">
              <span className="title">Inicia sesion con</span>
              <div className="social-accounts">
                <button className="social-button google" onClick={handleLogin}>
                  <svg
                    viewBox="0 0 488 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg"
                  >
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                  </svg>
                </button>
                <button className="social-button apple">
                  <svg
                    viewBox="0 0 384 512"
                    height="1em"
                    xmlns="https://images.vexels.com/content/223136/preview/facebook-icon-social-media-8dfafe.png"
                    className="svg"
                  >
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
              </button>
              </div>
            </div>
            <span className="agreement">
              <a href="#">Learn user licence agreement</a>
            </span>
            </div>
          
        </div>
        
      )}
      
  
    </div>
  );
} 
