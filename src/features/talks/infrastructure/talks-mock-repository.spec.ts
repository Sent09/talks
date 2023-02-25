import 'reflect-metadata'
import { TalkMockRepository } from './talks-mock-repository'

describe('TalkMockRepository', () => {
    it('should return an object when execute getTalks', async () => {
        const talkMockRepository = new TalkMockRepository()
        const response = await talkMockRepository.getTalks()
        expect(typeof response).toBe('object')
    })

    it('should return an object filled when execute getTalks', async () => {
        const talkMockRepository = new TalkMockRepository()
        const response = await talkMockRepository.getTalks()
        expect(response.length).toBeGreaterThan(0)
    })

    it('should return an object when execute filterTalks', async () => {
        const talkMockRepository = new TalkMockRepository()
        const response = await talkMockRepository.filterTalks(1, 1)
        expect(typeof response).toBe('object')
    })

    it('should return an object filled when execute filterTalks', async () => {
        const talkMockRepository = new TalkMockRepository()
        const response = await talkMockRepository.filterTalks(1, 1)
        expect(response.length).toBe(1)
    })
})
