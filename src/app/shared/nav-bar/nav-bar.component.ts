import { Component, OnInit } from '@angular/core';
import { EventService, IEvent, ISession } from 'src/app/events/shared';
import { AuthService } from 'src/app/user/shared/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public events?: IEvent[] = [];
  public searchTerm: String = '';
  public foundSessions?: ISession[];

  constructor(
    public auth: AuthService,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(
      (events) => {
        this.events = events;
      }
    )
  }

  searchSessions(searchTerm: String) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    })
  }
}
