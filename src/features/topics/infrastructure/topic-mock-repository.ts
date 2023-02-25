import { injectable } from 'tsyringe';
import { TopicsMock } from '../../../__mocks__/topics-mock';
import { Topic } from '../domain/topic';
import { TopicRepository } from '../domain/topic-repository';

@injectable()
export class TopicMockRepository implements TopicRepository {
    getTopics(): Promise<Topic[]> {
        return new Promise(resolve => resolve(TopicsMock))
    }
}
