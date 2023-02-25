import { Talk } from './talk'

export interface TalkRepository {
    getTalks(): Promise<Talk[]>
    filterTalks(idSpeaker: number, idTopic: number): Promise<Talk[]>
}
