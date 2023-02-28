import React from 'react'
import { Talks } from '../../features/talks/ui/Talks'
import { FeaturedImage } from '../components/FeaturedImage/FeaturedImage'
import { Features } from '../components/Features/Features'

export const Home: React.FC = () => {
    return (
        <>
            <FeaturedImage />
            <Features />
            <Talks />
        </>
    )
}
