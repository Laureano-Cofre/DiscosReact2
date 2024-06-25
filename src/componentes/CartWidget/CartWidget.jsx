import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <li className="cart-widget">
      <button className="boton-carrito">
        <i className="fas fa-shopping-cart"></i>
        <span className="contadorCarrito">0</span>
      </button>
    </li>
  );
}

export default CartWidget;
