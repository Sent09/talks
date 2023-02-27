import React, { useState } from 'react'
import SpeakersSelector from '../../speakers/ui/SpeakersSelector'
import TopicsSelector from '../../topics/ui/TopicsSelector'
import { Hall } from '../domain/hall'
import { useGetTalks } from './hooks/useGetTalks'
import { getHoursDuration } from './utils/get-hours-duration'
import { getNextHour } from './utils/get-next-hour'

export const Talks: React.FC = () => {
    const [topicSelected, setTopicSelected] = useState<number>(-1)
    const [speakerSelected, setSpeakerSelected] = useState<number>(-1)

    const { hours, talks, halls } = useGetTalks({ topicSelected, speakerSelected })

    const tableCells = (hour: string, hall: Hall) => {
        const talkByHourHall = talks.filter(talk => talk.hall.id === hall.id && talk.hour.start === hour)
        return talkByHourHall.length > 0 ? (
            <td
                key={hour + hall.id}
                rowSpan={getHoursDuration(talkByHourHall[0].hour.start, talkByHourHall[0].hour.end)}
            >
                {talkByHourHall[0].title}
                {talkByHourHall[0].speaker.name}
                {talkByHourHall[0].topic.title}
            </td>
        ) : (
            <></>
        )
    }

    const setLastHourIfNeeded = () => {
        if (talks.length === 1) {
            const lastEndHour = getNextHour(hours[hours.length - 1])
            const talkEndHour = talks[talks.length - 1].hour.end
            if (getHoursDuration(lastEndHour, talkEndHour) === 1) {
                return (
                    <tr key='last-tr'>
                        <td>
                            {lastEndHour} - {getNextHour(lastEndHour)}
                        </td>
                    </tr>
                )
            }
        }
        return <></>
    }

    return (
        <div className="talks-container">
            <TopicsSelector setSelectedTopic={(topic: number) => setTopicSelected(topic)} />
            <SpeakersSelector setSelectedSpeaker={(speaker: number) => setSpeakerSelected(speaker)} />
            {talks.length > 0 && (
                <table>
                    <thead>
                        <tr key={`tr-head`}>
                            <th></th>
                            {halls.map(hall => {
                                return <th key={hall.id}>{hall.name}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {hours.map((hour, index) => {
                            return (
                                <tr key={`tr-${hour}-${index}`}>
                                    <td key={`td-${hour}-${index}`}>
                                        {hour} - {getNextHour(hour)}
                                    </td>
                                    {halls.map(hall => {
                                        return tableCells(hour, hall)
                                    })}
                                </tr>
                            )
                        })}
                        {setLastHourIfNeeded()}
                    </tbody>
                </table>
            )}

            {talks.length > 0 &&
                halls.map(hall => {
                    return (
                        <>
                            <h2>{hall.name}</h2>
                            <ul>
                                {talks
                                    .filter(talk => talk.hall.id === hall.id)
                                    .map(talkInHall => {
                                        return (
                                            <li key={talkInHall.title}>
                                                {talkInHall.hour.start} - {talkInHall.hour.end}: {talkInHall.title} -{' '}
                                                {talkInHall.speaker.name} {talkInHall.topic.title}
                                            </li>
                                        )
                                    })}
                            </ul>
                        </>
                    )
                })}
        </div>
    )
}
