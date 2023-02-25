import { Topic } from './topic';

export interface TopicRepository {
    getTopics(): Promise<Topic[]>
}
