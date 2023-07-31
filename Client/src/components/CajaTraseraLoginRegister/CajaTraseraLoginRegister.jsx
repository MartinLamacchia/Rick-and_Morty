import React from "react";
import style from "./CajaTrseraLoginRegister.module.css";
import logoInicio from "../../asset/img/Login.png";
import logoRegister from "../../asset/img/Register.png";

function CajaTraseraLoginRegister({
  titulo,
  parrafo,
  boton,
  handleLoginRegister,
  id,
}) {
  return (
    <div className={style.container}>
      <div>
        <img src={logoInicio} className={style.imgInicio} />
        <img src={logoRegister} className={style.imgRegister} />
      </div>
      <h3 className={style.titulo}>{titulo}</h3>
      <p className={style.parrafo}>{parrafo}</p>
      <button id={id} className={style.boton} onClick={handleLoginRegister}>
        {boton}
      </button>
    </div>
  );
}

export default CajaTraseraLoginRegister;