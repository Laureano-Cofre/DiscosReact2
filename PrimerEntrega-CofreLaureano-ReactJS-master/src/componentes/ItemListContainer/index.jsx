import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'

const ItemListContainer = (propiedades) => {
    return ( 
        <div className='producto'>
            <h3>{propiedades.titulo}</h3>
            <p>{propiedades.banda}</p>
            <p>Madera: {propiedades.precio}</p>
            <p className="precioProducto">Precio:$ {propiedades.precio}</p>
        </div>

    )
}

export default ItemListContainer