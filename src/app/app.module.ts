import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { appRoutes } from './routes';
import { NavBarComponent } from './shared';
import { DurationPipe, EventService } from './events/shared';
import { Error404Component } from './errors';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  SessionListComponent,
  CreateEventComponent,
  checkDirtyState,
  EventListResolver,
  EventRouteActivator,
  CreateSessionComponent,
} from './events';

import { EventsAppComponent } from './events-app.component';
import { AuthService } from './user/shared/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleWellComponent, TOASTR_TOKEN, Toastr } from './common';

declare let toastr: Toastr;

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventDetailsComponent,
    EventThumbnailComponent,
    SessionListComponent,
    CreateEventComponent,
    CreateSessionComponent,
    NavBarComponent,
    CollapsibleWellComponent,
    DurationPipe,
    Error404Component
  ],
  providers: [
    EventService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    EventRouteActivator,
    EventListResolver,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
