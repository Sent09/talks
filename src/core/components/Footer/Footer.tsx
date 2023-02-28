import logo from './assets/logo-footer.png'
import facebook from './assets/facebook.png'
import twitter from './assets/twitter.png'
import linkedin from './assets/linkedin.png'
import instagram from './assets/instagram.png'
import './styles.scss'

export const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer-container">
                <img src={logo} alt="Talks logo" />
                <div className="social">
                    <ul>
                        <li>
                            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                <img src={facebook} alt="Facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                <img src={twitter} alt="Twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                <img src={linkedin} alt="Linkedin" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                <img src={instagram} alt="Instagram" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-links">
                    <ul>
                        <li>
                            <a href="/">Aviso legal</a>
                        </li>
                        <li>
                            <a href="/">Política de privacidad</a>
                        </li>
                        <li>
                            <a href="/">Política de cookies</a>
                        </li>
                    </ul>
                </div>
                <div className="copyright">
                    <p>© 2023 Talks</p>
                </div>
            </div>
        </footer>
    )
}
