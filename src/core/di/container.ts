import { container } from 'tsyringe'
import { SpeakerMockRepository } from '../../features/speakers/infrastructure/speaker-mock-repository'
import { TopicMockRepository } from '../../features/topics/infrastructure/topic-mock-repository'
import { TOKENS } from './injection-tokens'

container.register(TOKENS.SPEAKER_REPOSITORY, {
    useClass: SpeakerMockRepository
})

container.register(TOKENS.TOPIC_REPOSITORY, {
    useClass: TopicMockRepository
})
