import { Speaker } from '../../speakers/domain/speaker'
import { Topic } from '../../topics/domain/topic'
import { Talk } from './talk'

export interface TalkRepository {
    getTalks(): Promise<Talk[]>
    filterTalks(speaker: Speaker, topic: Topic): Promise<Talk[]>
}
