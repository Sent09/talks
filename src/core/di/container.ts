import { container } from 'tsyringe'
import { SpeakerMockRepository } from '../../features/speakers/infrastructure/speaker-mock-repository'
import { SPEAKER_REPOSITORY } from './injection-tokens'

container.registerSingleton(SPEAKER_REPOSITORY, SpeakerMockRepository)
