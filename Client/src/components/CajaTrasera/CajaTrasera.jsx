import React from "react";
import CajaTraseraLoginRegister from "../CajaTraseraLoginRegister/CajaTraseraLoginRegister";


function CajaTrasera({setVistaLogin, setVistaRegister}){

  const handleLoginRegister = (e) => {
    e.target.id === 'login' && setVistaLogin(true)
    e.target.id === 'login' && setVistaRegister(false)
    e.target.id === 'register' && setVistaLogin(false)
    e.target.id === 'register' && setVistaRegister(true)
  }

  return(
    <>
      <CajaTraseraLoginRegister handleLoginRegister={handleLoginRegister} titulo='¿Ya tienes una cuenta?' parrafo='Inicia sesion para entrar en la pagina' boton='Iniciar Sesion' id='login'/>
      <CajaTraseraLoginRegister handleLoginRegister={handleLoginRegister} titulo='¿Aun no tienes una cuenta?' parrafo='Registrate para que puedas iniciar secion' boton='Registrarse' id='register'/>
    </>
  )
}

export default CajaTrasera