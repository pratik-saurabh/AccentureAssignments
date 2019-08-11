import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AppRoutingModule } from './/app-routing.module';
import { DifferenceComponent } from './difference/difference.component';
import { FindKeysComponent } from './find-keys/find-keys.component';
import { ReverseStringComponent } from './reverse-string/reverse-string.component';
import { DuplicateStringComponent } from './duplicate-string/duplicate-string.component';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    DifferenceComponent,
    FindKeysComponent,
    ReverseStringComponent,
    DuplicateStringComponent
  ],
  imports: [
    BrowserModule,FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
