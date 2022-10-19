
import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios'
import "../Stylesheets-Section/Carrusel.css"




const Carrusel = () => {

  const [carrusel, setCarrusel] = useState({productos:[]})

  const cargarProducto = async () => {
    const res = await axios.get('http://localhost:5000/productos')
    setCarrusel({
      productos: res.data
    })
  }

  useEffect(()=>{
    cargarProducto()
  },[])


  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="contenedor-carrusel" >
            {carrusel.productos.map((producto, index) =>   
              <Carousel.Item key={index} >        
                <img
                  className="d-block carrusel-imagen"
                  src={producto.image}
                  alt={producto.name} 
                />
              </Carousel.Item>
            )}
        </Carousel>
  )
}

export default Carrusel