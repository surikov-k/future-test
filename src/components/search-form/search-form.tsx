import Select from "react-select";
import { categories, sorting } from "../../constants";
import { getSelectedOptions } from "../../utils";
import { Button } from "../button/button";

interface SearchFormProps {

}

export function SearchForm() {
  const categoryOptions = getSelectedOptions(categories);
  const sortingOptions = getSelectedOptions(sorting);

  return (
    <div className="search-form">
      <div className="search-form__row">
        <input
          className="search-form__input"
          type="text"
          placeholder="Enter a query string"
        />
        <Button
          text="Search"
          onClick={() => {
          }}
          disabled={false}
        />
      </div>
      <div className="search-form__row">
        <Select className="search-form__select select"
                classNamePrefix="select"
                options={categoryOptions}
                defaultInputValue={categories.all}
                unstyled/>
        <Select className="search-form__select select"
                classNamePrefix="select"
                options={sortingOptions}
                defaultInputValue={sorting.relevance}
                unstyled/>
      </div>
    </div>
  );
}
