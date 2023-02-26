import React from 'react'
import SpeakersSelector from '../../features/speakers/ui/SpeakersSelector'
import TopicsSelector from '../../features/topics/ui/TopicsSelector'

export const Home: React.FC = () => {
    return (
        <>
            <SpeakersSelector setSelectedSpeaker={() => {}} />
            <TopicsSelector setSelectedTopic={() => {}} />
        </>
    )
}
