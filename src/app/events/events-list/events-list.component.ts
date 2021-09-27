import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '../../common';
import { IEvent } from '../shared';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  public events: IEvent[] = [];

  constructor(private toastrService: ToastrService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  }

  public handleThubnailClick(event: any) {
    this.toastrService.success(event.name);
  }
}
