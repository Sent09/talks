import { injectable } from 'tsyringe'
import { BaseUrl } from '../../../core/endpoints/baseurl'
import { EndPointsTopics } from '../../../core/endpoints/endpoints-topics'
import { Topic } from '../domain/topic'
import { TopicRepository } from '../domain/topic-repository'

@injectable()
export class TopicHttpRepository implements TopicRepository {
    getTopics(): Promise<Topic[]> {
        return fetch(`${BaseUrl}${EndPointsTopics.GET_TOPICS}`, {
            method: 'GET',
        }).then(response => response.json())
    }
}
