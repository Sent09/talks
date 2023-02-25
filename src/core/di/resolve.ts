import { container } from 'tsyringe'
import { constructor } from 'tsyringe/dist/typings/types'

export function resolve<T>(token: constructor<T> | string | symbol) {
    return container.resolve(token)
}
