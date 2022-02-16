import { BookService } from './book.service';
import { Component, OnInit } from '@angular/core';
import { BookType } from './book-type';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  listBooks:BookType [] = []
  myData$!: Observable<string>;
  constructor(private service: BookService) { }

  ngOnInit(): void {
    debugger;
      this.service.getBook().subscribe((d: any) => {
        this.listBooks =  d});
        this.myData$ = this.service.serverDataSubject$;
  }

}
