import { Speaker } from '../../speakers/domain/speaker'
import { Topic } from '../../topics/domain/topic'
import { Hall } from './hall'
import { Hour } from '../../../core/utils/hours/hour'

export interface Talk {
    title: string
    speaker: Speaker
    hour: Hour
    topic: Topic
    hall: Hall
}
