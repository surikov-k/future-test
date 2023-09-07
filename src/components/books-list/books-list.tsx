import { JSX } from "react";
import { Book } from "../../types";
import { BookCard } from "../book-card/book-card";

interface BookListProps {
  books: Book[]
}

export function BooksList({books}: BookListProps): JSX.Element {
  return (

    <ul className="books-list__list">
      {books.map((book) => (
        <li key={book.id} className="book-list__item">
          <BookCard book={book}/>
        </li>
      ))}
    </ul>

  );
}
