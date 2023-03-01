import { Helmet } from 'react-helmet'

interface HeadProps {
    title: string
    description: string
}

export const Head: React.FC<HeadProps> = ({ title, description }) => {
    return (
        <Helmet>
            <title>{`${title} - TALKS`}</title>
            <meta name="description" content={`${description}`} />
            <meta name="keywords" content="talks, conferencia, charlas, palacio de congresos"/>
            <meta property="og:locale" content="es_ES" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={`${title} - TALKS`} />
            <meta property="og:description" content={`${description}`} />
            <meta property="og:site_name" content={`${title} - TALKS`} />
            <meta name="twitter:title" content={`${title} - TALKS`} />
            <meta name="twitter:description" content={`${description}`} />
        </Helmet>
    )
}
