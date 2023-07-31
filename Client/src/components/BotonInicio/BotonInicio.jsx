import React from "react";
import style from "./BotonInicio.module.css"

function BotonInicio({name, setDisplayLogin, setDisplayRegister, id, setVistaRegister, setVistaLogin, displayLogin, vistaLogin, displayRegister, vistaRegister}) {

  const handleLogin = (e) => {
    e.target.id === "login" &&  setDisplayLogin(!displayLogin)
    e.target.id === 'login' && setVistaLogin(!vistaLogin)
    e.target.id === 'register' && setDisplayRegister(!displayRegister)
    e.target.id === 'register' && setVistaRegister(!vistaRegister)
  }

  return(
    <button id={id} onClick={handleLogin} className={style.botonInicio}>{name}</button>
  )
}

export default BotonInicio