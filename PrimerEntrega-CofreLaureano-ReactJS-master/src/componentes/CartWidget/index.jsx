import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'

const CartWidget = () => {
    return (
      <div className="cart-widget">
        <button className="boton-carrito"><i class="fas fa-shopping-cart"></i><span className="contadorCarrito">0</span></button>
      </div>
    );
  }

  export default CartWidget;