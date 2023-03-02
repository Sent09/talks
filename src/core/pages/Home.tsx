import React from 'react'
import { Talks } from '../../features/talks/ui/Talks'
import { EventInfo } from '../components/EventInfo/EventInfo'
import { FeaturedImage } from '../components/FeaturedImage/FeaturedImage'
import { Features } from '../components/Features/Features'
import { Speakers } from '../components/Speakers/Speakers'
import { Head } from '../components/Head/Head'

export const Home: React.FC = () => {
    return (
        <>
            <Head title="Inicio" description="Primer evento TALKS en Granada" />
            <FeaturedImage />
            <Features />
            <Speakers />
            <Talks />
            <EventInfo />
        </>
    )
}
