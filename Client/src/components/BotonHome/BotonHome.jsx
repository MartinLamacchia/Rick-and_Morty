import React from "react";
import style from "./BotonHome.module.css";
import logout from "../../asset/img/cerrar-sesion.png";
import { Link, useNavigate } from "react-router-dom";

function BotonHome({ name, setUsers, id }) {
  
  const navigate = useNavigate()
  
  const handleBoton = (event) => {
    event.target.id === "logout" && setUsers([]);
    navigate('/')
  };

  return (
    <>
      {name !== "" ? (
        id &&
        <Link to={`/${id}`}>
        <button id={id} className={style.boton}>
          {name}
        </button> 
        </Link>
      ) : (
        <button onClick={handleBoton} id={id} className={style.botonLogout}>
          <img src={logout} id={id}/>
        </button>
      )}
    </>
  );
}

export default BotonHome;