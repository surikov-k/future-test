import { Button } from "../button/button";

interface SearchFormProps {

}

export function SearchForm() {
  return (
    <div className="search-form">
      <input
        className="search-form__input"
        type="text"
        placeholder="Enter a query string"
      />
      <Button
        text="Search"
        onClick={() => {}}
        disabled={false}
      />
    </div>
  );
}
