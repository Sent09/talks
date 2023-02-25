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
        const talksFiltered = TalksMock.filter(talk => {
            let passFilter = true
            if (idTopic > 0 && talk.topic.id !== idTopic) passFilter = false
            if (passFilter && idSpeaker > 0 && talk.speaker.id !== idSpeaker) passFilter = false
            return passFilter
        })
        return new Promise(resolve => resolve(talksFiltered))
    }
}
