import React from 'react'
import { useGetSpeakers } from './hooks/useGetSpeakers'

interface SpeakersSelectorProps {
    setSelectedSpeaker: Function
}

const SpeakersSelector: React.FC<SpeakersSelectorProps> = ({ setSelectedSpeaker }) => {
    const { selectOptions } = useGetSpeakers()

    return (
        <div className="selector-container">
            <label htmlFor="speaker-selector">Ponente</label>
            <select
                data-testid="speaker-selector"
                id="speaker-selector"
                onChange={e => setSelectedSpeaker(parseInt(e.target.value))}
            >
                <option value="-1">Selecciona</option>
                {selectOptions.map(options => {
                    return (
                        <option key={options.id} value={options.id}>
                            {options.name}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default React.memo(SpeakersSelector)
