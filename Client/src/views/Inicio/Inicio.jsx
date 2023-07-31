import React from "react";
import Imagen from "../../components/Imagen/Imange";
import BotonInicio from "../../components/BotonInicio/BotonInicio";
import styles from "./Inicio.module.css";
import { useState } from "react";
import CajaTrasera from "../../components/CajaTrasera/CajaTrasera";
import FormLogin from "../../components/FormLogin/FormLogin";
import FormRegister from "../../components/FormRegister/FormRegister";

function Inicio({setUsers}) {

  const [displayLogin, setDisplayLogin] = useState(false)
  const [displayRegister, setDisplayRegister] = useState(false)
  const [vistaLogin, setVistaLogin] = useState(false)
  const [vistaRegister, setVistaRegister] = useState(false)

  return (
    <div className={styles.container}>
        <Imagen />
      <div className={styles.botones}>
        <BotonInicio 
            setDisplayLogin={setDisplayLogin} 
            setVistaLogin={setVistaLogin} 
            displayLogin={displayLogin}        
            vistaLogin={vistaLogin} 
            name="Login" 
            id='login'/>
        <BotonInicio 
            setDisplayRegister={setDisplayRegister} 
            setVistaRegister={setVistaRegister} 
            displayRegister={displayRegister} 
            vistaRegister={vistaRegister} 
            name="Registrate" 
            id='register'/>
      </div>
      {
        displayLogin || displayRegister ?
        <main  className={styles.main}>
        <div className={styles.containerForm}>
          <div className={styles.cajaTrasera}>
            <CajaTrasera 
                setVistaLogin={setVistaLogin} 
                setVistaRegister={setVistaRegister}
            />
          </div>
          {
            vistaLogin ?
            <FormLogin setUser={setUsers}/>
            :
            null
          }
          {
            vistaRegister ?
            <FormRegister/>
            :
            null
          }
        </div>
      </main>
      : null
      }
      <div className={styles.marca}>
          <p>&copy;<a className={styles.gitHub} href="https://github.com/MartinLamacchia?tab=repositories" 
                      target="_blank">Pagina creada por Martin Lamacchia</a></p>
      </div>
    </div>
  );
}

export default Inicio;