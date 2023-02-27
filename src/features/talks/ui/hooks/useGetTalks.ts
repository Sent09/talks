import { useEffect, useState } from 'react'
import { useResolve } from '../../../../core/di/useResolve'
import { FilterTalksQry } from '../../application/filter-talks-qry'
import { GetTalksQry } from '../../application/get-talks-qry'
import { Talk } from '../../domain/talk'
import { Hall } from '../../domain/hall'

interface UseGetTalksProps {
    topicSelected: number
    speakerSelected: number
}

export const useGetTalks = ({ topicSelected, speakerSelected }: UseGetTalksProps) => {
    const GetTopics = useResolve(GetTalksQry)
    const FilterTalks = useResolve(FilterTalksQry)
    const [talks, setTalks] = useState<Talk[]>([])
    const [hours, setHours] = useState<string[]>([])
    const [halls, setHalls] = useState<Hall[]>([])

    const getAllTalks = () => {
        GetTopics.execute().then(response => {
            setTalks(response)
        })
    }

    const getFilteredTalks = () => {
        FilterTalks.execute(speakerSelected, topicSelected).then(response => {
            setTalks(response)
        })
    }

    const getHours = () => {
        return talks.map(({ hour: { start } }) => start).sort().filter((value, index, array) => {
            return array.indexOf(value) === index;
        })
    }

    const getHalls = () => {
        const returnHalls: Hall[] = []
        talks.forEach(({ hall }) => {
            const checkExist = returnHalls.filter((hallFilter) => hallFilter.id === hall.id)
            if (checkExist.length === 0) returnHalls.push(hall)
        })
        return returnHalls
    }

    useEffect(() => {
        if (speakerSelected > 0 || topicSelected > 0) {
            getFilteredTalks()
        } else {
            getAllTalks()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [topicSelected, speakerSelected])

    useEffect(() => {
        setHours(getHours())
        setHalls(getHalls())
    }, [talks])

    return {
        hours,
        talks,
        halls
    }
}
