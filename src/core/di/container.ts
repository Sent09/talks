import { container } from 'tsyringe'
import { SpeakerMockRepository } from '../../features/infrastructure/speaker-mock-repository'
import { SPEAKER_REPOSITORY } from './injection-tokens'

container.registerSingleton(SPEAKER_REPOSITORY, SpeakerMockRepository)
