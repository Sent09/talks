import { inject, injectable } from 'tsyringe'
import { TOKENS } from '../../../core/di/injection-tokens'
import { Talk } from '../domain/talk'
import type { TalkRepository } from '../domain/talk-repository'

@injectable()
export class FilterTalksQry {
    constructor(@inject(TOKENS.TALKS_REPOSITORY) private readonly talkRepository: TalkRepository) {}

    execute(idSpeaker: number, idTopic: number): Promise<Talk[]> {
        return this.talkRepository.filterTalks(idSpeaker, idTopic)
    }
}
