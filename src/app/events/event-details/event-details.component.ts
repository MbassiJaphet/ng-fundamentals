import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/event.service';

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  public event: any;
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.event = this.eventService.getEvent(1);
  }

}
