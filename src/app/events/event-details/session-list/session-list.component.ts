import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { ISession } from '../../shared/index'

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges{
  @Input() sessions!:ISession[];
  @Input() filterBy!:String;
  @Input() sortBy!: String;
  public visibleSessions: ISession[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if(this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(sortByVotesAsc) : this.visibleSessions.sort(sortByVotesDesc);
    };
  }

  filterSessions(filter: String) {
    if(filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    }   else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      })
    }
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
