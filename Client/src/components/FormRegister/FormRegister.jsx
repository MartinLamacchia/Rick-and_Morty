import React, { useState } from "react";
import style from './FormRegister.module.css'
import logoShow from '../../asset/img/show.png'
import logoNoShow from '../../asset/img/esconder.png'


function FormRegister() {

  const [type, setType] = useState('password')
  const [show, setShow] = useState(false)

  const handleShow = (event) => {
    event.preventDefault()
    setType('text')
    setShow(true)
  }

  const handleNoShow = (event) => {
    event.preventDefault()
    setType('password')
    setShow(false)
  }

  return (
    <div className={style.loginRegister}>
      <form action="" className={style.formularioRegister}>
        <h2 className={style.titulo}>Registrarse</h2>
        <input className={style.input} type="text" placeholder="Nombre Completo" />
        <input className={style.input} type="email" placeholder="Mail " />
        <input className={style.input} type="text" placeholder="Nombre de usuario" />
        <input className={style.input} type={type} placeholder="Contraseña" />

        {
          show ?
          <button onClick={handleNoShow} className={style.botonShow}><img src={logoNoShow} alt="" className={style.imgShow}/></button>
          :
          <button onClick={handleShow} className={style.botonShow}><img src={logoShow} alt="" className={style.imgShow}/></button>
        }

        <button id='register' className={style.boton}>Registrate</button>
        <span className={style.span}></span>
      </form>
    </div>
  );
}

export default FormRegister;