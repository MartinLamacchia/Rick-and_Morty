import React from "react";
import axios from 'axios'
import style from "./FormLogin.module.css";
import { useState } from "react";
import logoShow from "../../asset/img/show.png";
import logoNoShow from "../../asset/img/esconder.png";
import { useNavigate } from "react-router-dom";
import validarLogin, { validadDB } from "./Form";

function FormLogin({ setUser }) {
  const navigate = useNavigate();

  console.log();

  const [form, setForm] = useState({});

  const [error, setError] = useState({
    email: "",
    contraseña: "",
  });
  const [type, setType] = useState("password");
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    const propiedad = e.target.name;
    const valor = e.target.value;

    setForm({ ...form, [propiedad]: valor });
    setError(validarLogin({ ...form, [propiedad]: valor }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${form.email}&password=${form.contraseña}`).then(({ data }) => {
      const { access } = data;
      if (access) {
        setUser([{ Nombre: form.email, Contraseña: form.contraseña }]);
        navigate("/home");
      } else {
        return window.alert("Usuario o Contraseña invalido");
      }
    });  
  };

  const handleShow = (event) => {
    event.preventDefault();
    setType("text");
    setShow(true);
  };

  const handleNoShow = (event) => {
    event.preventDefault();
    setType("password");
    setShow(false);
  };

  return (
    <div className={style.loginRegister}>
      <form action="" className={style.formularioLogin} onSubmit={handleSubmit}>
        <h2 className={style.titulo}>Iniciar Sesion</h2>
        <input
          className={!error.email ? style.input : style.error}
          type="text"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <span className={style.span}>{error.email}</span>
        <input
          className={!error.contraseña ? style.input : style.error}
          type={type}
          placeholder="Contraseña"
          name="contraseña"
          value={form.contraseña}
          onChange={handleChange}
        />
        <span className={style.span}>{error.contraseña}</span>
        {show ? (
          <button onClick={handleNoShow} className={style.botonShow}>
            <img src={logoNoShow} alt="" className={style.imgShow} />
          </button>
        ) : (
          <button onClick={handleShow} className={style.botonShow}>
            <img src={logoShow} alt="" className={style.imgShow} />
          </button>
        )}
        <button className={style.boton}>Entrar</button>
      </form>
    </div>
  );
}

export default FormLogin;
