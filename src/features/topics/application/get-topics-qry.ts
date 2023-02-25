import { inject, injectable } from 'tsyringe'
import { TOKENS } from '../../../core/di/injection-tokens'
import { Topic } from '../domain/topic'
import type { TopicRepository } from '../domain/topic-repository'

@injectable()
export class GetTopicsQry {
    constructor(@inject(TOKENS.TOPIC_REPOSITORY) private readonly topicRepository: TopicRepository) {}

    execute(): Promise<Topic[]> {
        return this.topicRepository.getTopics()
    }
}
