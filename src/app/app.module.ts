import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { FormComponentComponent } from './form-component/form-component.component';
import { CalendarModule } from 'primeng/calendar'
import { InputTextModule } from 'primeng/inputtext';
import { PickListModule } from 'primeng/picklist';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { SelectItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';
import { EventComponent } from './event/event.component';





@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    EventComponent
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputTextModule,
    PickListModule,
    ButtonModule,
    CalendarModule,
    InputNumberModule,
    DropdownModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



