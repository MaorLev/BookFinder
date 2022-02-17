import { BookService } from './book.service';
import { Component, OnInit } from '@angular/core';
import { BookType} from './book-type';
import { Observable } from 'rxjs';
import { BookViewModel } from 'src/app/model/book-view-model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  bookList$: Observable<BookViewModel> = this.service.getBookModel();

  constructor(private service: BookService) { }
}
