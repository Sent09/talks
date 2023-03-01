import React, { useState } from 'react'
import SpeakersSelector from '../../speakers/ui/SpeakersSelector'
import TopicsSelector from '../../topics/ui/TopicsSelector'
import { Hall } from '../domain/hall'
import { useGetTalks } from './hooks/useGetTalks'
import { getHoursDuration } from '../../../core/utils/hours/get-hours-duration'
import { getNextHour } from '../../../core/utils/hours/get-next-hour'
import './styles.scss'

export const Talks: React.FC = () => {
    const [topicSelected, setTopicSelected] = useState<number>(-1)
    const [speakerSelected, setSpeakerSelected] = useState<number>(-1)
    const [tabSelected, setTabSelected] = useState<number>(1)

    const { hours, talks, halls } = useGetTalks({ topicSelected, speakerSelected })

    const tableCells = (hour: string, hall: Hall) => {
        const talkByHourHall = talks.filter(talk => talk.hall.id === hall.id && talk.hour.start === hour)
        return talkByHourHall.length > 0 ? (
            <td
                key={hour + hall.id}
                rowSpan={getHoursDuration(talkByHourHall[0].hour.start, talkByHourHall[0].hour.end)}
            >
                <p>{talkByHourHall[0].speaker.name}</p>
                <h3>{talkByHourHall[0].title}</h3>
                <small>{talkByHourHall[0].topic.title}</small>
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
                    <tr key="last-tr">
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
        <section className="talks">
            <div className="talks-container">
                <h2>Conoce las charlas</h2>
                <hr />
                <div className="selectors">
                    <TopicsSelector setSelectedTopic={(topic: number) => setTopicSelected(topic)} />
                    <SpeakersSelector setSelectedSpeaker={(speaker: number) => setSpeakerSelected(speaker)} />
                </div>
                <div className="tabs-selectors">
                    <button type="button" onClick={() => setTabSelected(1)}>
                        Tabla
                    </button>
                    <button type="button" onClick={() => setTabSelected(2)}>
                        Lista
                    </button>
                </div>
                <div className={`tab tab-table ${tabSelected === 2 && 'none'}`}>
                    {talks.length > 0 ? (
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
                    ) : (
                        <h3>No hay charlas para los filtros seleccionados.</h3>
                    )}
                </div>
                <div className={`tab tab-list ${tabSelected === 1 && 'none'}`}>
                    {talks.length > 0 ? (
                        halls.map(hall => {
                            return (
                                <>
                                    <h3>{hall.name}</h3>
                                    <ul>
                                        {talks
                                            .filter(talk => talk.hall.id === hall.id)
                                            .map(talkInHall => {
                                                return (
                                                    <li key={talkInHall.title}>
                                                        <div className="hour">
                                                            {talkInHall.hour.start} - {talkInHall.hour.end}
                                                        </div>
                                                        <div className="list-content">
                                                            <p>{talkInHall.speaker.name}</p>
                                                            <h4>{talkInHall.title}</h4>
                                                            <small>{talkInHall.topic.title}</small>
                                                        </div>
                                                    </li>
                                                )
                                            })}
                                    </ul>
                                </>
                            )
                        })
                    ) : (
                        <h3 className="no-talks">No hay charlas para los filtros seleccionados.</h3>
                    )}
                </div>
            </div>
        </section>
    )
}
