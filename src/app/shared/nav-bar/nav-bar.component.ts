import { Component, OnInit } from '@angular/core';
import { EventService, ISession } from 'src/app/events/shared';
import { AuthService } from 'src/app/user/shared/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public searchTerm: String = '';
  public foundSessions?: ISession[];

  constructor(
    public auth: AuthService,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
  }

  searchSessions(searchTerm: String) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    })
  }
}
