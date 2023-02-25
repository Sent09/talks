import 'reflect-metadata'
import { SpeakerMockRepository } from './speaker-mock-repository'

describe('SpeakerMockRepository', () => {
    it('should return an object', async () => {
        const speakerMockRepository = new SpeakerMockRepository()
        const response = await speakerMockRepository.getSpeakers()
        expect(typeof response).toBe('object')
    })

    it('should return an object filled', async () => {
        const speakerMockRepository = new SpeakerMockRepository()
        const response = await speakerMockRepository.getSpeakers()
        expect(response.length).toBeGreaterThan(0)
    })
})
