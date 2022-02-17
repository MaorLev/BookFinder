import { BookType } from "../pages/book/book-type";

export interface BookViewModel{
  list:BookType[]
  word:string | undefined;
}
