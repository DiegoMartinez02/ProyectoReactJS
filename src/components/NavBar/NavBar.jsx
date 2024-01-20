import CartWidget from "../cartWidget/CartWidget"
import { Link } from "react-router-dom"

export const navBarLinks = [
    {
        label: 'Tienda',
        href: '/tienda'
    },
    {
        label: 'Cocina',
        href: '/productos/cocina'
    },
    {
        label: 'Baño',
        href: '/productos/bano'
    },
    {
        label: 'Autos, bicicletas y motos',
        href: '/productos/autos-bicicletas-y-motos'
    },
    {
        label: 'Contacto',
        href: '/contacto'
    },
]

export const NavBar = () => {
    return (
        <header className="navbar_header">
            <div className="navbar_div">
                <h1><a className="boton-inicio" href="/">DM Mayorista</a></h1>
                <nav className="navbar_nav">
                    {
                        navBarLinks.map((link) => (
                            <Link className="navbar_a" to={link.href}>{link.label}</Link>
                        ))
                    }
                </nav>             
                <CartWidget/>
            </div>
        </header>
    )
}