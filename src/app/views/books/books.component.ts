import {Component, OnInit} from "@angular/core";
import {BooksService} from "./books.service";

@Component({
  selector: 'app-books',
  templateUrl: 'books.component.html',
  styleUrls: ['books.component.scss'],
  providers: [BooksService]
})
export class BooksComponent implements OnInit {

  public books;

  constructor(private bookService: BooksService) {
  }

  public ngOnInit() {
    this.bookService
      .getBooks()
      .subscribe(
        (books) => {
          this.books = books;
        }
      );
  }
}
