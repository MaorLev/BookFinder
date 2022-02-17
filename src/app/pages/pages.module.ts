import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [

    BookComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    BookComponent]
})
export class PagesModule { }
