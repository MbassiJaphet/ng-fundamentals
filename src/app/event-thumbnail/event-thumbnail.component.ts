import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div>
        <div class="well hoverwell thumbnail">
            <h2>{{event?.name}}</h2>
            <div>Date: {{event?.date}}</div>
            <div>Time: {{event?.time}}</div>
            <div>Price: \${{event?.price}}</div>
            <div *ngIf="event.location">
                <span>Location: {{event?.location?.address}}</span>
                <span class="pas-left">{{event?.location?.city}}, {{event.location?.country}}</span>
            </div>
            <div *ngIf="event.onlineUrl">
              <span>Online URL: {{event?.onlineUrl}}</span>
            </div>
        </div>
    </div>
  `,
  styles: [`
    .thumbnail { min-height: 210px; }
    .pas-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: any;

  constructor() { }

  ngOnInit(): void {
  }

}
