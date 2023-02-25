import { Topic } from './topic';

export interface TopicRepository {
    getSpeakers(): Promise<Topic[]>
}
