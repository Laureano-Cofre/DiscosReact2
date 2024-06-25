import './index.css';
import CartWidget from '../CartWidget';
import '@fortawesome/fontawesome-free/css/all.min.css'

const NavBar = () => {
  return (
    <header>
        <a href="./index.html"><img class="logo animate__animated animate__fadeInDown" src="./assets/img/logo.png" alt="Logo de la página"></img> </a>
        <button id="abrir" class="abrir-menu"><i class="bi bi-list"></i></button>    
{/*         <!-- NavBar --> */}
        <nav id="navBar" class="navBar animate__animated animate__fadeInDown">
            <button class="cerrar-menu" id="cerrar"><i class="bi bi-x"></i></button>
            <ul class="navLinks">
                <li><a href="./index.html">Discos</a></li>
                <li><a href="#">Historia</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="carrito.html"><i class="bi bi-cart"></i></a>
                    <div class="iconoCarrito">
{/*                         <!-- Aquí se mostrará el contador --> */}
                        <span id="carrito-counter">0</span>
                    </div>
                </li>
            </ul>
        </nav>
    </header>
  );
}

/* (2) 
function ItemListContainer() {
 // Incluye aquí el rendering de algún texto o título provisional que luego reemplazaremos por nuestro catálogo
} */



export default NavBar