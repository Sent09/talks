import { useState } from 'react'
import logo from './assets/logo-talks.png'
import './styles.scss'

export const Header: React.FC = () => {
    const [showNav, setShowNav] = useState<boolean>(false)

    return (
        <header>
            <div className="header-container">
                <a href="/" className="logo">
                    <img src={logo} alt="Logo de talks" />
                </a>
                <nav className={showNav ? 'show' : ''}>
                    <ul>
                        <li>
                            <a href="/">Inicio</a>
                        </li>
                        <li>
                            <a href="/">Nosotros</a>
                        </li>
                        <li>
                            <a href="/">Blog</a>
                        </li>
                        <li>
                            <a href="/">Contacto</a>
                        </li>
                        <li>
                            <a className="buy-ticket" href="/">
                                Comprar entradas
                            </a>
                        </li>
                    </ul>
                </nav>
                <button type="button" onClick={() => setShowNav(!showNav)}>
                    <span className="top"></span>
                    <span className="mid"></span>
                    <span className="bottom"></span>
                </button>
            </div>
        </header>
    )
}
