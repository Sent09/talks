import email from './assets/email.png'
import marker from './assets/marker.png'
import phone from './assets/phone.png'
import './styles.scss'

export const EventInfo: React.FC = () => {
    return (
        <section className="event-info">
            <div className="event-info-container">
                <div className="address">
                    <h2>¿Dónde es el evento?</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium soluta eaque odio eligendi
                        sit suscipit ullam et quas aliquam expedita!
                    </p>
                    <h3>Palacio de Confresos de Granada</h3>
                    <ul>
                        <li>
                            <img src={marker} alt="Icono de lugar" />{' '}
                            <a href="http://webdeejemplo.com">P.º del Violón, 18006 Granada</a>
                        </li>
                        <li>
                            <img src={phone} alt="Icono de teléfono" /> <a href="tel:+34958111111">958 11 11 11</a>
                        </li>
                        <li>
                            <img src={email} alt="Icono de email" />{' '}
                            <a href="mailto:correo@correo.com">correo@correo.com</a>
                        </li>
                    </ul>
                </div>
                <div className="map">
                    <iframe
                        title="Mapa"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d562.0528095206511!2d-3.5986817821313877!3d37.165755836996816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fca305aa656b%3A0xde24e4346346018!2sPalacio%20de%20Congresos%20de%20Granada!5e0!3m2!1ses!2ses!4v1677601174216!5m2!1ses!2ses"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}
