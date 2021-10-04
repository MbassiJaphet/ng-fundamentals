import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { EventService, IEvent } from './shared'

@Component({
  templateUrl: './create-event.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left: 10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color:#999; }
    .error :ms-input-placeholder { color: #999; }
  `],
})
export class CreateEventComponent {
  public newEventForm: any;
  public newEvent!: IEvent;
  isDirty:boolean = true
  constructor(
    private router: Router,
    private eventService: EventService
    ) {

  }

  saveEvent(formValues: any) {
    this.eventService.saveEvent(formValues).subscribe(() => {
      this.isDirty = false;
      this.router.navigate(['/events'])
    });
  }

  cancel() {
    this.router.navigate(['/events'])
  }
}

export function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel ?');
    else return true;
}