import React from 'react'
import Nav from '../../components/Nav/Nav'
import style from './About.module.css'
import imgen from '../../asset/img/1689530325952.jpg'

const About = ({setUsers}) => {
  return (
    <div className={style.container}>
      <Nav setUsers={setUsers}/>
      <div className={style.containerCard}>
          <img className={style.image} src={imgen} alt="" />
        <div className={style.containerCardText}>
        <span className={style.text}>¡Hola! Soy Martin, permíteme presentarte un poco sobre mí.</span>
        <p className={style.text}>Soy un chico apasionado por aprender cosas nuevas y estoy constantemente buscando oportunidades para crecer y desarrollarme en el mundo del desarrollo web.</p>
        <p className={style.text}>Hace menos de un año, decidí embarcarme en esta emocionante aventura y desde entonces he adquirido valiosas habilidades. Me he sumergido en el mundo de HTML, CSS y JavaScript, y he ampliado mis conocimientos al aprender React y Redux. Estas herramientas me han permitido crear proyectos interactivos y dinámicos que hacen que la web cobre vida.</p>
        <p className={style.text}>Estoy emocionado por seguir aprendiendo y enfrentar nuevos desafíos para mejorar mis habilidades y aportar valor a cualquier proyecto en el que esté involucrado.</p>
        </div>
      </div>
    </div>
  )
}

export default About