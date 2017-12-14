export class Book {
  url: string;
  name: string;
  isbn: string;
  authors: string[];
  numberOfPages: number;
  publisher: string;
  country: string;
  mediaType: string;
  released: string;
  characters: string[];
  povCharacters: string[];

  constructor(book) {
    this.url = book.url;
    this.name = book.name;
    this.isbn = book.isbn;
    this.authors = book.authors;
    this.numberOfPages = book.numberOfPages;
    this.publisher = book.publisher;
    this.country = book.country;
    this.mediaType = book.mediaType;
    this.released = book.released;
    this.characters = book.characters;
    this.povCharacters = book.povCharacters;
  }
}
