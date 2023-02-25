import { Speaker } from '../../speakers/domain/speaker'
import { Topic } from '../../topics/domain/topic'
import { Hour } from './hour'

export interface Talk {
    title: string
    speaker: Speaker
    hour: Hour
    topic: Topic
    hall: any
}
