import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { BookComponent } from './book/book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [

    BookComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports:[
    BookComponent,
    PageNotFoundComponent]
})
export class PagesModule { }
