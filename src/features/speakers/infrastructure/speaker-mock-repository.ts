import { injectable } from 'tsyringe';
import { SpeakersMock } from '../../../__mocks__/speakers-mock';
import { Speaker } from '../domain/speaker';
import { SpeakerRepository } from '../domain/speaker-repository';

@injectable()
export class SpeakerMockRepository implements SpeakerRepository {
    getSpeakers(): Promise<Speaker[]> {
        return new Promise(resolve => resolve(SpeakersMock))
    }
}
