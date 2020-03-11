import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {NgxPaginationModule} from 'ngx-pagination'

import { AppComponent } from './app.component';
import { PaginationAdvancedComponent } from './pagination-advanced/pagination-advanced.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginationAdvancedComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
