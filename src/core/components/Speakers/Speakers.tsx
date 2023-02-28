import './styles.scss'
import picture1 from './assets/picture1.jpg'
import picture2 from './assets/picture2.jpg'
import picture3 from './assets/picture3.jpg'
import picture4 from './assets/picture4.jpg'
import picture5 from './assets/picture5.jpg'
import picture6 from './assets/picture6.jpg'

export const Speakers: React.FC = () => {
    return (
        <section className="speakers">
            <div className="speakers-container">
                <h2>Nuestros ponentes</h2>
                <hr />
                <h3>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, laboriosam ipsum a ipsam culpa ut
                    ducimus.
                </h3>
                <div className="people">
                    <div className="person">
                        <img src={picture1} alt="David Fernández" />
                        <h4>David Fernández</h4>
                        <p>FullStack</p>
                    </div>
                    <div className="person">
                        <img src={picture6} alt="Lucía Castro" />
                        <h4>Lucía Castro</h4>
                        <p>DevOps</p>
                    </div>
                    <div className="person">
                        <img src={picture2} alt="Miguel Ángel" />
                        <h4>Miguel Ángel Pérez</h4>
                        <p>Backend</p>
                    </div>
                    <div className="person">
                        <img src={picture3} alt="Lucas Élices" />
                        <h4>Lucas Élices</h4>
                        <p>DevOps</p>
                    </div>
                    <div className="person">
                        <img src={picture4} alt="Iñaki Heras" />
                        <h4>Iñaki Heras</h4>
                        <p>Frontend</p>
                    </div>
                    <div className="person">
                        <img src={picture5} alt="Mario Fernández" />
                        <h4>Mario Fernández</h4>
                        <p>Frontend</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
