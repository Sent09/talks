import { injectable } from 'tsyringe'
import { BaseUrl } from '../../../core/endpoints/baseurl'
import { EndPointsTalks } from '../../../core/endpoints/endpoints-talks'
import { Talk } from '../domain/talk'
import { TalkRepository } from '../domain/talk-repository'

@injectable()
export class TalkHttpRepository implements TalkRepository {
    getTalks(): Promise<Talk[]> {
        return fetch(`${BaseUrl}${EndPointsTalks.GET_TALKS}`, {
            method: 'GET',
        }).then(response => response.json())
    }

    filterTalks(idSpeaker: number, idTopic: number): Promise<Talk[]> {
        return fetch(`${BaseUrl}${EndPointsTalks.FILTER_TALKS}`, {
            method: 'GET',
            body: JSON.stringify({ idSpeaker, idTopic }),
        }).then(response => response.json())
    }
}
