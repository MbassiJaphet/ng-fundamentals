import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error-page/error-page.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';

const routes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent},
  { path: '', redirectTo: 'events', pathMatch: 'full'},
  { path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
