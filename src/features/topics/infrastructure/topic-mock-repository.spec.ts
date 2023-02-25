import 'reflect-metadata'
import { TopicMockRepository } from './topic-mock-repository'

describe('TopicMockRepository', () => {
    it('should return an object', async () => {
        const topicMockRepository = new TopicMockRepository()
        const response = await topicMockRepository.getTopics()
        expect(typeof response).toBe('object')
    })

    it('should return an object filled', async () => {
        const topicMockRepository = new TopicMockRepository()
        const response = await topicMockRepository.getTopics()
        expect(response.length).toBeGreaterThan(0)
    })
})
