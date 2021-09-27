import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { appRoutes } from './routes';
import { NavBarComponent } from './shared';
import { EventService } from './events/shared';
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
import { CollapsibleWellComponent, ToastrService } from './common';

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
    Error404Component
  ],
  providers: [
    EventService,
    ToastrService,
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
