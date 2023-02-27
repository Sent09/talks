import React from 'react'
import { useGetTopics } from './hooks/useGetTopics'

interface TopicsSelectorProps {
    setSelectedTopic: Function
}

const TopicsSelector: React.FC<TopicsSelectorProps> = ({ setSelectedTopic }) => {
    const { selectOptions } = useGetTopics()

    return (
        <div className="selector-container">
            <label htmlFor="topic-selector">Temática</label>
            <select
                data-testid="topic-selector"
                id="topic-selector"
                onChange={e => setSelectedTopic(parseInt(e.target.value))}
            >
                <option value="-1">Selecciona</option>
                {selectOptions.map(options => {
                    return (
                        <option key={options.id} value={options.id}>
                            {options.title}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default React.memo(TopicsSelector)
