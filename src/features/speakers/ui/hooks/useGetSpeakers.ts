import { useEffect, useState } from 'react'
import { useResolve } from '../../../../core/di/useResolve'
import { GetSpeakerQry } from '../../application/get-speakers-qry'
import { Speaker } from '../../domain/speaker'

export const useGetSpeakers = () => {
    const GetSpeakers = useResolve(GetSpeakerQry)
    const [selectOptions, setSelectOptions] = useState<Speaker[]>([])

    useEffect(() => {
        GetSpeakers.execute().then(speakers => {
            setSelectOptions(speakers)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        selectOptions,
    }
}
