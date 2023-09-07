import { JSX } from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../constants";

export function NotFound(): JSX.Element {
  return (
    <section className="not-found">
      <h2>Sorry, an error has occurred.</h2>
      <p>Not found</p>
      <Link className="link not-found__link" to={AppRoute.Root}>Home</Link>
    </section>
  );
}
