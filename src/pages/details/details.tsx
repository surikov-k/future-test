import { JSX } from "react";
import { useParams } from "react-router-dom";

export function Details(): JSX.Element {
  const {id} = useParams();
  
  return (
    <section className="section details">
      <h2>Details {id}</h2>
    </section>
  );
}
