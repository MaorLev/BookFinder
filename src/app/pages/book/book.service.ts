import { BookType } from './book-type';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, debounceTime, filter, map, Observable, of, Subject, switchMap, tap } from 'rxjs';
import { query } from '@angular/animations';

interface GoogleBook { volumeInfo: { title: any; description: any; imageLinks: { thumbnail: any; }; }; }
interface Query {
  word?: string,
  terms?: string
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private querySubject: BehaviorSubject<Query> = new BehaviorSubject<Query>({});
  public serverDataSubject$: Observable<string | undefined> = this.querySubject.pipe(filter(query => !!query?.word), map(query => query.word));

  constructor(public http: HttpClient) { }
  // https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines&key=yourAPIKey
  public getBookList(): Observable<BookType[]> {
    return this.querySubject.pipe(
      tap(word => console.log(word)),
      debounceTime(300),
      filter(query => !!query.word),
      switchMap(query => {
        const terms = query.terms ? `+${query.terms}:${query.word}` : '';
        const url = `https://www.googleapis.com/books/v1/volumes?q=${query.word}${terms}&printType=books`;
        return this.http.get<any>(url).pipe(
          catchError(_ => of(null)),
          map(res => {
            return res?.items?.map((res: GoogleBook) => {
              return {
                title: res.volumeInfo?.title,
                description: res.volumeInfo?.description,
                image: res?.volumeInfo.imageLinks?.thumbnail
              }
            }) || []
          })
        )
      })
    )
  }

  setQueryWord(word: string) {
    const currentQuery = this.querySubject.value;
    const newQuery = {
      ...currentQuery,
      word: word
    }
    this.querySubject.next(newQuery);
  }

  setQueryTerms(terms: string) {
    this.querySubject.next({
      ...this.querySubject.value,
      terms: terms
    });
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
