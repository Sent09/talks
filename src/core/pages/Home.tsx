import React from 'react'
import TopicsSelector from '../../features/topics/ui/TopicsSelector'

export const Home: React.FC = () => {
    return (
        <>
            <h1>Hello World</h1>
            <TopicsSelector setSelectedTopic={() => {}} />
        </>
    )
}
