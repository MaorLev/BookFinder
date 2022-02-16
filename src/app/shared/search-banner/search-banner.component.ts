import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/pages/book/book.service';

@Component({
  selector: 'app-search-banner',
  templateUrl: './search-banner.component.html',
  styleUrls: ['./search-banner.component.css']
})
export class SearchBannerComponent implements OnInit {

  constructor(private service: BookService) { }

  ngOnInit(): void {
  }
  setData(word:string){
    this.service.setServerData(word);
  }

}
