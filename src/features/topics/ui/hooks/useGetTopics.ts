import { useEffect, useState } from 'react'
import { useResolve } from '../../../../core/di/useResolve'
import { GetTopicsQry } from '../../application/get-topics-qry'
import { Topic } from '../../domain/topic'

export const useGetTopics = () => {
    const GetTopics = useResolve(GetTopicsQry)
    const [selectOptions, setSelectOptions] = useState<Topic[]>([])

    useEffect(() => {
        GetTopics.execute().then(topics => {
            setSelectOptions(topics)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        selectOptions
    }
}
