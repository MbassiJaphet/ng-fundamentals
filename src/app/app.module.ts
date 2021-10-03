import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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
  UpvoteComponent,
  VoterService,
  LocationValidatorDirective,
} from './events';

import { EventsAppComponent } from './events-app.component';
import { AuthService } from './user/shared/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleWellComponent, TOASTR_TOKEN, Toastr, JQ_TOKEN, SimpleModalComponent, ModalTriggerDirective } from './common';

declare let jQuery: any;
declare let toastr: Toastr;

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventDetailsComponent,
    EventThumbnailComponent,
    SessionListComponent,
    UpvoteComponent,
    CreateEventComponent,
    LocationValidatorDirective,
    CreateSessionComponent,
    NavBarComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
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
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    },
    EventRouteActivator,
    EventListResolver,
    VoterService,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
