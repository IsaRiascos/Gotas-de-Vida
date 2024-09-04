import React from 'react'
import appFirebase from '../credenciales'
import { getAuth, signOut } from 'firebase/auth'
const auth = getAuth(appFirebase)

const Home = ({correoUsuario}) => {

    return (
        <div>
            <h2 className='text-center'>Bienvenido Usuario: {correoUsuario} <button className='btn btn-primary' onClick={()=>signOut(auth)}>Cerrar Sesion</button></h2>
        </div>
    )

}

export default Home