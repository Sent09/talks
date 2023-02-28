import React from 'react'
import { Talks } from '../../features/talks/ui/Talks'
import { EventInfo } from '../components/EventInfo/EventInfo'
import { FeaturedImage } from '../components/FeaturedImage/FeaturedImage'
import { Features } from '../components/Features/Features'
import { Speakers } from '../components/Speakers/Speakers'

export const Home: React.FC = () => {
    return (
        <>
            <FeaturedImage />
            <Features />
            <Speakers />
            <Talks />
            <EventInfo />
        </>
    )
}
