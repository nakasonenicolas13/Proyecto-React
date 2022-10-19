import { useState } from "react";
import Header from "./Section/Header";
import Carrusel from "./Section/Carrusel";
import ListaProductos from "./Section/ListaProductos";
import { productos } from "./Section/ListaProductos";
import Swal from "sweetalert2";
import "./App.css";

function App() {
  let productosCarritoId = [];
  let productoAAgregar;

  const [contador, setContador] = useState(0);
  const [carrito, setCarrito] = useState(productosCarritoId);

  const agregarAlCarrito = (id) => {
    productoAAgregar = carrito.find((item) => id === item);
    // eslint-disable-next-line no-lone-blocks
    {
      if (productoAAgregar) {
        Swal.fire("El producto ya se encuentra en el carrito");
      } else {
        let nombreProducto = productos[id - 1].name;
        Swal.fire({
          title: "Desea agregar al carrito?",
          text: nombreProducto,
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si",
          cancelButtonText: "Cancelar",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              "Agregado!",
              `Se agrego ${nombreProducto} al carrito`,
              setCarrito((carrito) => [...carrito, id]),
              setContador(contador + 1)
            );
          }
        });
      }
    }
  };

  return (
    <>
      <Header contador={contador} />
      <Carrusel />
      <ListaProductos agregarAlCarrito={agregarAlCarrito} />
    </>
  );
}

export default App;
