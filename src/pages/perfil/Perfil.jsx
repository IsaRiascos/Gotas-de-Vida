import Header from "../components/Header/Header";

// Importamos los hooks de React que se utilizan para manejar funciones y efectos secundarios
import { useCallback, useEffect } from "react";

// Importamos el hook personalizado que maneja el estado de autenticación
import useAuthStore from "../../stores/use-auth-store";

// Importamos el DAO de usuarios que permite interactuar con la base de datos de usuarios
import UserDAO from "../../daos/UserDAO";

// Importamos el hook para la navegación entre rutas en React
import { useNavigate } from "react-router-dom";


// Importamos React para la definición de componentes funcionales
import React from "react";

export default function profile() {
  // Usamos el hook useAuthStore para obtener el estado del usuario y las funciones relacionadas con la autenticación
  const { user, loginGoogleWithPopUp, observeAuthState } =
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
      navigate("/Perfil"); // Navegamos a la página de login
    }
  }, [user, navigate]); // Dependencias: el efecto se ejecutará cuando user o navigate cambien

  return (
    <>
    <div className="container-profile">
    <Header /> {/* Mostramos el componente de encabezado */}
          <p className="welcome-text">
            {" "}
            {/* Texto de bienvenida */}¡  {user.displayName} !{" "}
            {/* Muestra el nombre del usuario */}
          </p>

    </div>
    
    
    
    </>
  )
}
