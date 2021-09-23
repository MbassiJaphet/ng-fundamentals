import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../../common/toastr.service';
import { EventService } from '../../shared/event.service';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  public events: any[] = [];

  constructor(private eventService: EventService,
              private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  public handleThubnailClick(event: any) {
    this.toastrService.success(event.name);
  }
}
