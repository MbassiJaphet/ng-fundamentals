import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EventService } from 'src/app/events/shared/event.service';
import { IEvent, ISession } from '../shared';

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  public event!: IEvent;
  public addMode: boolean = false;
  public filterBy: string = 'all';
  public sortBy: string = 'votes';

  constructor(private eventService: EventService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.forEach(
      (params: Params) => {
        console.log('Logging event id: ', )
        this.eventService.getEvent(+params['id']).subscribe(event => this.event = event);
      }
    )
    this.event = this.route.snapshot.data['event'];
    this.addMode = false;
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(session => session.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event).subscribe();
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }

}
