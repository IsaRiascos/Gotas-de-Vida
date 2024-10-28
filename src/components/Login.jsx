import React, { useState } from 'react'
import Imagen from '../assets/logo2.png'
import ImageProfile from '../assets/Perfil.jpg'


import appFirebase from '../credenciales'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(appFirebase)

const Login = () => {

    const[registrando, setRegistrando] = useState(false)

    const functAutenticacion = async(e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;

        if (registrando){
            try {
                await createUserWithEmailAndPassword(auth, correo, contraseña)
            } catch (error) {
                alert("La contraseña debe de tener 8 caracteres o mas")
            }
        }
        else{
            try {
                await signInWithEmailAndPassword(auth, correo, contraseña)
            } catch (error) {
                alert("El Correo o contraseña son incorrectos")
            }
            
        }

    }

    return (
        <div>
            <div className="container">

                <div className="row">
                    <div className="col-md-4">
                        <div className="padre">
                            <div className='card card-body shadow-lg'>
                                <img src={ImageProfile} alt="" className='estilo-profile'/>
                                <form onSubmit={functAutenticacion}>
                                <input type="text" placeholder='Ingresa el Correo' className='cajatexto'  id='email'/>
                                <input type="password" placeholder='Ingresa la Contraseña' className='cajatexto' id='password'/>
                                <button className='btnform'>{registrando ? "Registrate" : "Inicia Sesion"}</button>
                                </form>
                                <h4 className='texto'>{registrando ? "Si ya tienes cuenta" : "No tienes cuenta"}<button className='btnswicthi' onClick={()=>setRegistrando(!registrando)}>{registrando ? "Inicia sesion" : "Registarte"}</button></h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <img src={Imagen} alt="" className='tamaño-imagen'/>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Login