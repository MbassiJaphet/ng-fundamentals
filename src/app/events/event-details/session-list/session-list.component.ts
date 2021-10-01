import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { AuthService } from 'src/app/user/shared/auth.service';
import { ISession } from '../../shared/index'
import { VoterService } from './upvote.service';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges{
  @Input() sessions!:ISession[];
  @Input() filterBy!:string;
  @Input() sortBy!: string;
  public visibleSessions: ISession[] = [];

  constructor(
    public auth: AuthService,
    private voterService: VoterService,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(sortByVotesAsc) : this.visibleSessions.sort(sortByVotesDesc);
    };
  }

  filterSessions(filter: string) {
    if(filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    }   else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      })
    }
  }

  toggleVote(session: ISession) {
    if(this.userHasVoted(session)) {
      console.log('Unvote: ', this.auth.currentUser?.userName)
      this.voterService.deleteVoter(session, this.auth.currentUser!.userName);
      console.log(session.voters)
    } else {
      console.log('Vote: ', this.auth.currentUser?.userName)
      this.voterService.addVoter(session, this.auth.currentUser!.userName);
      console.log(session.voters)
    }
    if(this.sortBy === 'votes') {
      this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  userHasVoted(session: ISession): boolean{
    return this.voterService.userHasVoted(session, this.auth.currentUser!.userName);
  }

}


function sortByVotesAsc(s1: ISession, s2: ISession) {
  if(s1.name > s2.name) { return 1; }
  else if(s1.name === s2.name) { return 0; }
  else return -1;
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
