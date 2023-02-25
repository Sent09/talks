import { injectable } from 'tsyringe';
import { Topic } from '../domain/topic';
import { TopicRepository } from '../domain/topic-repository';

@injectable()
export class TopicMockRepository implements TopicRepository {
    getTopics(): Promise<Topic[]> {
        const topicMock: Topic[] = [{title:'General', id: 1}, {title: 'Backend', id: 2}]
        return new Promise(resolve => resolve(topicMock))
    }
}
