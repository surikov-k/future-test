import json from '../../mocks/mocks.json'
import { BookListApiResponse } from "../../types";
import { BooksList, Button, SearchForm } from "../../components";
import { adaptBook } from "../../utils";

const response: BookListApiResponse = json;

export function Search(): JSX.Element {
  return (
    <section className="section books-list">
      <h2 className="section__title">Search for books</h2>
      <SearchForm/>
      <p className="books-list__total">Found {response.totalItems} books</p>
      <BooksList books={response.items.map(adaptBook)}/>
      <Button text="Load more" onClick={() => {
      }}/>
    </section>
  );
}
