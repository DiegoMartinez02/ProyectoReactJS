import CartWidget from "../cartWidget/CartWidget"
import { Link } from "react-router-dom"

const links = [
    {
        label: 'Tienda',
        href: '/'
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
                <h1>DM Mayorista</h1>
                <nav className="navbar_nav">
                    {
                        links.map((link) => (
                            <Link className="navbar_a" to={link.href}>{link.label}</Link>
                        ))
                    }
                </nav>             
                <CartWidget/>
            </div>
        </header>
    )
}