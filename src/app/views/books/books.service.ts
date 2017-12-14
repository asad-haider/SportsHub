import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "./todo.interface";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import {environment} from "environments/environment";

@Injectable()
export class BooksService {
  basePath: string = environment.basePath;

  constructor(private http: HttpClient) {
  }

  public getBooks(): Observable<Book[]> {
    return this.http
      .get(this.basePath + '/books')
      .map(response => {
        return response.map((book) => new Book(book));
      });
  }
}
