import React from "react";
import style from "./Imagen.module.css"
import logo from "../../asset/img/Rick-and-Morty.png"

function Imagen(){
  return(
      <img src={logo} className={style.titulo} alt="Titulo RYM" />      
  )
}

export default Imagen