
import React, { useState, useEffect } from 'react';

import Producto from "../Components/Producto";
import axios from 'axios'
import "../Stylesheets-Section/ListaProductos.css"




//Agregar funcionalidad "comprarAhora"
const ListaProductos = ({ agregarAlCarrito }) => {

    const comprarAhora = (id) => console.log(id)


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
    
  return (
    <div className="contenedor-lista-productos">
        {carrusel.productos.map((producto) => <Producto key={producto.id} data={producto} comprarAhora={comprarAhora} agregarAlCarrito={agregarAlCarrito}/> )}
    </div>
  )
}

export default ListaProductos