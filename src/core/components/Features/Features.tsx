import './styles.scss'

export const Features: React.FC = () => {
    return <section className='features'>
        <div className='features-container'>
            <h2>¿Por qué deberías venir?</h2>
            <hr />
            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, laboriosam ipsum a ipsam culpa ut ducimus.</h3>
            <div className='boxes'>
                <div className='box'>
                    <h4>Frontend</h4>
                    <p>Inventore unde, corporis non ex accusantium quos tenetur recusandae est quia facilis.</p>
                </div>
                <div className='box'>
                    <h4>Backend</h4>
                    <p>Inventore unde, corporis non ex accusantium quos tenetur recusandae est quia facilis.</p>
                </div>
                <div className='box'>
                    <h4>DevOps</h4>
                    <p>Inventore unde, corporis non ex accusantium quos tenetur recusandae est quia facilis.</p>
                </div>
            </div>
        </div>
    </section>
}
