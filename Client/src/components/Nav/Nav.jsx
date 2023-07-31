import React from 'react'
import style from './Nav.module.css'
import logo from '../../asset/img/Rick-and-Morty.png'
import SearchBar from '../SearchBar/SearchBar'
import BotonHome from '../BotonHome/BotonHome'

function Nav({setUsers, searchCharacter}) {

  return (
    <div className={style.container}>
      <img src={logo} alt="Logo Rick and Morty" />
      <div className={style.containerMenu}>
        <SearchBar onSearch={searchCharacter}/>
        <BotonHome id='about' name='About' />
        <BotonHome id='home' name='Home' />
        <BotonHome id='favorite' name='Favorite'/>
        <BotonHome id='logout' setUsers={setUsers} name={''} />
      </div>
    </div>
  )
}

export default Nav