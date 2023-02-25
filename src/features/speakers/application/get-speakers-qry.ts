import { inject, injectable } from 'tsyringe'
import { Speaker } from '../domain/speaker'
import { SpeakerRepository } from '../domain/speaker-repository'

@injectable()
export class GetSpeakerQry {
    constructor(@inject('SPEAKER_REPOSITORY') private readonly speakerRepository: SpeakerRepository) {}

    execute(): Promise<Speaker[]> {
        return this.speakerRepository.getSpeakers()
    }
}
