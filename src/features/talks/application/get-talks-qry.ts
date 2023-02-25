import { inject, injectable } from 'tsyringe'
import { TOKENS } from '../../../core/di/injection-tokens'
import { Talk } from '../domain/talk'
import type { TalkRepository } from '../domain/talk-repository'

@injectable()
export class GetTalksQry {
    constructor(@inject(TOKENS.TALKS_REPOSITORY) private readonly talkRepository: TalkRepository) {}

    execute(): Promise<Talk[]> {
        return this.talkRepository.getTalks()
    }
}
