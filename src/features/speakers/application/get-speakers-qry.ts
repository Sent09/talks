import { inject, injectable } from 'tsyringe'
import { TOKENS } from '../../../core/di/injection-tokens'
import { Speaker } from '../domain/speaker'
import type { SpeakerRepository } from '../domain/speaker-repository'

@injectable()
export class GetSpeakerQry {
    constructor(@inject(TOKENS.SPEAKER_REPOSITORY) private readonly speakerRepository: SpeakerRepository) {}

    execute(): Promise<Speaker[]> {
        return this.speakerRepository.getSpeakers()
    }
}
