import { DebugElement } from "@angular/core"
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing"
import { By } from "@angular/platform-browser";
import { CollapsibleWellComponent } from "src/app/common";
import { AuthService } from "src/app/user/shared/auth.service";
import { DurationPipe } from "../../shared";
import { SessionListComponent } from "./session-list.component"
import { UpvoteComponent } from "./upvote.component";
import { VoterService } from "./upvote.service";

describe('SessionListComponent', () => {
    let fixture : ComponentFixture<SessionListComponent>,
        component : SessionListComponent,
        element: HTMLElement,
        debugEl: DebugElement;

    beforeEach(waitForAsync(() => {
        let mockAuthService = {
            isAuthenticated: () => true,
            currentUser: {
                id: 1,
                userName: 'johnpapa',
                firstName: 'john',
                lastName: 'papa'
            }
        };
        let mockVoterService = {
            userHasVoted: () => true,
        };

        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                SessionListComponent,
                CollapsibleWellComponent,
                UpvoteComponent,
                DurationPipe
            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoterService, useValue: mockVoterService }
            ],
            schemas: []
        })
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
        debugEl = fixture.debugElement;
    });

    describe('initial display', () => {

        it('should have the correct session title', () => {
            component.sessions = [
                {
                    id: 1,
                    name: 'Session 1',
                    presenter: 'joe',
                    duration: 1,
                    level: 'beginner',
                    abstract: 'No abstract',
                    voters: ['john', 'bob']
                },
            ]
            component.eventId = 3;
            component.sortBy = 'name';
            component.filterBy = 'all';

            component.ngOnChanges({});
            fixture.detectChanges();

            // expect(element.querySelector('[well-title]')?.textContent).toContain('Session 1');
            expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');
        });
    })
})