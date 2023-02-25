import { Speaker } from './speaker'

export interface SpeakerRepository {
    getSpeakers(): Promise<Speaker[]>
}
