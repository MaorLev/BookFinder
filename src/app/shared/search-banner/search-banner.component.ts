import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/pages/book/book.service';

@Component({
  selector: 'app-search-banner',
  templateUrl: './search-banner.component.html',
  styleUrls: ['./search-banner.component.css']
})
export class SearchBannerComponent implements OnInit {
  _value!: string
  public set value(v: string) {
    this.service.setQueryTerms(v)
    this._value = v
  }
  public get value() {
    return this._value
  }

  constructor(private service: BookService) { }

  ngOnInit(): void {
  }
  setData(word: string) {
    this.service.setQueryWord(word);
  }

}
