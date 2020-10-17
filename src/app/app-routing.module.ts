import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponentComponent } from './form-component/form-component.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: FormComponentComponent },
  { path: 'event', pathMatch: 'full',  component: EventComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
