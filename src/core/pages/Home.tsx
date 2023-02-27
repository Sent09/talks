import React from 'react'
import { Talks } from '../../features/talks/ui/Talks'
import { FeaturedImage } from '../components/FeaturedImage/FeaturedImage'

export const Home: React.FC = () => {
    return (
        <>
            <FeaturedImage />
            <Talks />
        </>
    )
}
