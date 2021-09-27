import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from '../shared';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div [routerLink] ="['/events', event.id]">
        <div class="well hoverwell thumbnail">
            <h2>{{event?.name | uppercase}}</h2>
            <div>Date: {{event?.date | date:'shortDate'}}</div>
            <div [ngStyle]= "getStartTimeStyle()" [ngSwitch]="event?.time">
              Time: {{event?.time}}
              <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
              <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
              <span *ngSwitchDefault="">(Normal Start)</span>
            </div>
            <div>Price: {{event?.price | currency:'USD'}}</div>
            <div *ngIf="event.location">
                <span>Location: {{event?.location?.address}}</span>
                <span class="pad-left">{{event?.location?.city}}, {{event.location?.country}}</span>
            </div>
            <div *ngIf="event.onlineUrl">
              <span>Online URL: {{event?.onlineUrl}}</span>
            </div>
        </div>
    </div>
  `,
  styles: [`
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})
export class EventThumbnailComponent implements OnInit {

  @Input() event! : IEvent;

  constructor() { }

  getStartTimeStyle(): any {
    if (this.event && this.event.time === '8:00 am')
    return {color: '#003000', 'font-weight': 'bold'}
    return {};
  }

  ngOnInit(): void {
  }

}