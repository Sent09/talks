import { useMemo } from 'react'
import { constructor } from 'tsyringe/dist/typings/types'
import { resolve } from './resolve'

export function useResolve<T>(token: constructor<T> | string | symbol) {
    return useMemo(() => resolve(token), [token])
}
