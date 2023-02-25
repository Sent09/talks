import 'reflect-metadata'
import { verify, instance, mock } from 'ts-mockito'
import { TalkRepository } from '../domain/talk-repository'
import { FilterTalksQry } from './filter-talks-qry'

describe('FilterTalks', () => {
    it('should call talkRepository.getTalks once', () => {
        const { filterTalksQry, talkRepository } = setup()
        filterTalksQry.execute(1, 1)
        verify(talkRepository.filterTalks(1, 1)).once()
    })
})

const setup = () => {
    const talkRepository = mock<TalkRepository>()
    return { filterTalksQry: new FilterTalksQry(instance(talkRepository)), talkRepository }
}
