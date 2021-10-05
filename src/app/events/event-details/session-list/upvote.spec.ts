import { of } from "rxjs";
import { ISession } from "../../shared";
import { VoterService } from "./upvote.service"

describe('VoterService Test', () => {
    let voterService : VoterService, mockHttp: any;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post'])
        voterService = new VoterService(mockHttp)
    })

    describe('deleteVoter', () => {
        it('should remove voter from llist of voter', () => {
            var session = <ISession> { id: 6,  voters: ['joe', 'john']}
            mockHttp.delete.and.returnValue(of(false));

            voterService.deleteVoter(session.id, session, 'joe');

            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe('john')
        })
    })
})