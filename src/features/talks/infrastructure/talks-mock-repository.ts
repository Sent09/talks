import { injectable } from 'tsyringe'
import { TalksMock } from '../../../__mocks__/talks-mocks'
import { Talk } from '../domain/talk'
import { TalkRepository } from '../domain/talk-repository'

@injectable()
export class TalkMockRepository implements TalkRepository {
    getTalks(): Promise<Talk[]> {
        return new Promise(resolve => resolve(TalksMock))
    }
    filterTalks(idSpeaker: number, idTopic: number): Promise<Talk[]> {
        return new Promise(resolve => resolve(TalksMock))
    }
}
