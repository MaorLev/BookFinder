import { BookService } from './book.service';
import { Component, OnInit } from '@angular/core';
import { BookType } from './book-type';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  bookList$: Observable<BookType[]> = this.service.getBookList();
  word$: Observable<string | undefined> = this.service.serverDataSubject$;

  constructor(private service: BookService) { }
}
