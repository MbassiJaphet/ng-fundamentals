import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EventService } from './shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { Error404Component } from './error-page/error-page.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventDetailsComponent,
    EventThumbnailComponent,
    NavBarComponent,
    Error404Component
  ],
  providers: [EventService, ToastrService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
