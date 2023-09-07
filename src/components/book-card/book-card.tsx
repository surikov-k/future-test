import { Link } from "react-router-dom";
import { AppRoute } from "../../constants";
import { Book } from "../../types";

interface BookCardProps {
  book: Book;
}

export function BookCard({book}: BookCardProps) {
  return (
    <article className="book-card">
      <div className="book-card__cover">
        <Link to={AppRoute.Details.replace(':id', book.id)}>
          <img
            src={book.cover}
            alt={book.title}
            className="book-card__img"
            width="128"/>
        </Link>
      </div>
      <div className="book-card__info">
        <p className="book-card_category">{book.categories && book.categories[0]}</p>
        <Link className="link" to={AppRoute.Details.replace(':id', book.id)}>
          <h3 className="book-card__title">{book.title}</h3>
        </Link>
        <p className="book-card__authors">
          {book.authors.join(', ')}
        </p>
      </div>

    </article>
  );
}
