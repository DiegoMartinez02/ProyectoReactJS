import { cartWidget } from "../cartWidget/cartWidget"

export const NavBar = () => {
    return (
        <header className="navbar_header">
            <div className="navbar_div">
                <h1>DM Mayorista</h1>
                <nav className="navbar_nav">
                    <a className="navbar_a" href="">Tienda</a>
                    <a className="navbar_a" href="">Hogar</a>
                    <a className="navbar_a" href="">Cocina</a>
                    <a className="navbar_a" href="">Baño</a>
                    <a className="navbar_a" href="">Autos y Motos</a>
                    <a className="navbar_a" href="">Contacto</a>
                    {cartWidget}
                </nav>
            </div>
        </header>
    )
}