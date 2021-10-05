import { AuthService } from "src/app/user/shared/auth.service";
import { ISession } from "../../shared";
import { SessionListComponent } from "./session-list.component"
import { VoterService } from "./upvote.service";

describe('SessionListComponent', () => {
    let component: SessionListComponent;
    let mockAuthService: jasmine.SpyObj<AuthService>, mockVoterService: jasmine.SpyObj<VoterService>;

    beforeEach(() => {
        component = new SessionListComponent(mockAuthService, mockVoterService);
    });

    describe('ngOnChanges', () => {
        it('should filter sessions correctly', () => {
            component.sessions = <ISession[]>[
                { name: 'Session 1', level: 'beginner' },
                { name: 'Session 2', level: 'beginner' },
                { name: 'Session 3', level: 'intermediate' },
                { name: 'Session 4', level: 'intermediate' },
                { name: 'Session 5', level: 'intermediate' },
            ];

            component.filterBy = 'intermediate';
            component.sortBy = 'name'; 
            component.eventId = 3;

            component.ngOnChanges({});

            expect(component.visibleSessions.length).toBe(3);
        })
    })
})