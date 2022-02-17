import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, debounceTime, distinctUntilChanged, distinctUntilKeyChanged, filter, map, Observable, of, Subject, switchMap, tap } from 'rxjs';
import { Query } from 'src/app/model/query';
import { GoogleBook } from 'src/app/model/google-book';
import { BookViewModel } from 'src/app/model/book-view-model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private querySubject: BehaviorSubject<Query> = new BehaviorSubject<Query>({});

  constructor(public http: HttpClient) { }

  public getBookModel(): Observable<BookViewModel> {
    return this.querySubject.pipe(
      debounceTime(300),
      filter(query => !!query.word),
      distinctUntilChanged((prev, curr) => !(prev.terms !== curr.terms || prev.word !== curr.word)),
      switchMap(query => {
        const terms = query.terms ? `+${query.terms}:${query.word}` : '';
        const url = `https://www.googleapis.com/books/v1/volumes?q=${query.word}${terms}&printType=books`;
        return this.http.get<any>(url).pipe(
          catchError(_ => of(null)),
          map(res => {
            return {
              word: query.word,
              list: res?.items?.map((res: GoogleBook) => {
                return {
                  title: res.volumeInfo?.title,
                  description: res.volumeInfo?.description,
                  image: res?.volumeInfo.imageLinks?.thumbnail
                }
              }) || []
            }
          }),
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
}
