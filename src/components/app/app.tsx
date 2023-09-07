import { Route, Routes } from "react-router-dom";

import { AppRoute } from "../../constants";
import { Details, NotFound, Search } from "../../pages";
import { Footer } from "../footer/footer";
import { Main } from "../main/main";

export function App(): JSX.Element {
  return (
    <Main>
      <Routes>
        <Route path={AppRoute.Root}
               element={<Search/>}/>
        <Route path={AppRoute.Details}
               element={<Details/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Main>
  );
}
