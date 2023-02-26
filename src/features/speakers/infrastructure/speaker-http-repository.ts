import { injectable } from 'tsyringe'
import { BaseUrl } from '../../../core/endpoints/baseurl'
import { EndPointsSpeakers } from '../../../core/endpoints/endpoints-speakers'
import { Speaker } from '../domain/speaker'
import { SpeakerRepository } from '../domain/speaker-repository'

@injectable()
export class SpeakerHttpRepository implements SpeakerRepository {
    getSpeakers(): Promise<Speaker[]> {
        return fetch(`${BaseUrl}${EndPointsSpeakers.GET_SPEAKERS}`, {
            method: 'GET',
        }).then(response => response.json())
    }
}
