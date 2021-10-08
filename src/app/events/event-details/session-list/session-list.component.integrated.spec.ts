import { DebugElement } from "@angular/core"
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing"
import { AuthService } from "src/app/user/shared/auth.service";
import { SessionListComponent } from "./session-list.component"
import { VoterService } from "./upvote.service";

describe('SessionListComponent', () => {
    let fixture : ComponentFixture<SessionListComponent>,
        component : SessionListComponent,
        element: HTMLElement,
        debugEl: DebugElement;

    beforeEach(waitForAsync(() => {
        let mockAuthService = {}, mockVoterService = {};

        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                SessionListComponent
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
    })
})