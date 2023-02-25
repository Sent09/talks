import { injectable } from 'tsyringe';
import { Speaker } from '../domain/speaker';
import { SpeakerRepository } from '../domain/speaker-repository';

@injectable()
export class SpeakerMockRepository implements SpeakerRepository {
    getSpeakers(): Promise<Speaker[]> {
        const speakersTest: Speaker[] = [{name:'Juan'}, {name: 'Pedro'}]
        return new Promise(resolve => resolve(speakersTest))
    }
}
