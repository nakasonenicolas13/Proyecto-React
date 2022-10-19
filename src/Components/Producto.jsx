import "../Stylesheets-Components/Producto.css"
import { IconButton, Button } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const Producto = ({ data, comprarAhora, agregarAlCarrito }) => {

    const { image, name, price, id } = data

  return (
    <div className="contenedor-producto">
        <img src={image} alt={name} className="producto-imagen"/>
        <h3 className="producto-nombre">{ name }</h3>
        <h4 className="producto-precio">$ { price }</h4>
        <div className="contenedor-botones">
          <Button variant="outlined" style={{fontSize:"10px", height:"40px", margin:"0", padding:"5px", fontWeight:"bold"}} onClick={() => comprarAhora(id)}>Comprar Ahora</Button>
          <IconButton color="primary" aria-label="add to shopping cart" onClick={() => agregarAlCarrito(id)}>
            <AddShoppingCartIcon />
          </IconButton>
        </div>
    </div>
  )
}

export default Producto