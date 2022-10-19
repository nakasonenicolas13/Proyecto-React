
import React, { useState, useEffect } from 'react';
import Logo from "../Components/Logo"
import image from "../Assets/logo.png"
import "../Stylesheets-Section/Header.css"
import Categoria from "../Components/Categoria";
import Carrito from "../Components/Carrito";
import Buscador from "../Components/Buscador";



const Header = ({ contador }) => {

  const [width, setWidth] = useState(window.innerWidth)

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
  },[])
  return (
    <div className="contenedor-header">
        <Logo logo={image}/>
        {
          width > 600 ? <Buscador/> : <Categoria/>
        }
        <Carrito contador={contador}/>
    </div>
  )
}

export default Header