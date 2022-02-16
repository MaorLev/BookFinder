import { BookType } from './book-type';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(public http: HttpClient) { }
  private serverDataSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public serverDataSubject$: Observable<string> = this.serverDataSubject.asObservable();
  // https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines&key=yourAPIKey
  public getBook(): Observable<any> {
    return this.http.get<any>('https://www.googleapis.com/books/v1/volumes?q=time&printType=books').pipe(
      map(item => {
       return item.items.map((res: { volumeInfo: { title: any; description: any; imageLinks: { thumbnail: any; }; }; }) => {
          return {
            title: res.volumeInfo?.title,
            description: res.volumeInfo?.description,
            image: res?.volumeInfo.imageLinks?.thumbnail
        }
        }

        )

    })
    )
  }

  setServerData(word:string){
    this.serverDataSubject.next(word);
  }


   // public getBook(){
  //   this.data = this.http.get<any>('https://www.googleapis.com/books/v1/volumes?q=time&printType=books').pipe(
  //     map(item => {
  //       return item.items.map((res: { volumeInfo: { title: any; description: any; imageLinks: { thumbnail: any; }; }; }) => {
  //         return {
  //           title: res.volumeInfo?.title,
  //           description: res.volumeInfo?.description,
  //           image: res?.volumeInfo.imageLinks?.thumbnail
  //         }
  //       }
  //       )

  //     })
  //   ).subscribe((res)=>
  //   {
  //     this.serverDataSubject.next(res);
  //   }

  //   );



  // }
}
