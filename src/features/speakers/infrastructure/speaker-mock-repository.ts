import { injectable } from 'tsyringe';
import { Speaker } from '../domain/speaker';
import { SpeakerRepository } from '../domain/speaker-repository';

@injectable()
export class SpeakerMockRepository implements SpeakerRepository {
    getSpeakers(): Promise<Speaker[]> {
        const speakersTest: Speaker[] = [{name:'Juan', id: 1}, {name: 'Pedro', id: 2}]
        return new Promise(resolve => resolve(speakersTest))
    }
}
